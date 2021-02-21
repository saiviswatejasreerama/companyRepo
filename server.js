require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

//Models
require("./models/companyModel");

//Database connections
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('error', (err) => {
    console.log("mongoose error");
});
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
});

// express app
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use("/company", require("./routes/companyRoute"));

//setup error handlers
const errorHandlers = require("./handlers/errorHandler");
app.use(errorHandlers.catchErrors);
app.use(errorHandlers.mongoseErrors);
app.use(errorHandlers.notFound);
if (process.env.ENV === "DEVELOPMENT") {
    app.use(errorHandlers.developmentErrors);
} else {
    app.use(errorHandlers.productionErrors);
}

app.listen(8867, () => {
    console.log('port' + 8867);
})