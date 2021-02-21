const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {   
        companyName:{
            type: String,
            required:true
        },
        companyEmail: {
            type: String
        },
        website:{
            type:String
        },
        foundedDate:{
            type:Date
        },
        category:{
            type:String
        },
        country:{
            type:String
        },
        Description:{
            type:String
        },
        contactPhone:{
            type:String
        },
        contactEmail:{
            type:String
        },
        contactCountry:{
            type:String
        },
        contactCity:{
            type:String
        },
        contactZip:{
            type:String
        },
        contactAddress:{
            type:String
        },
        latitude:{
            type:String
        },
        longitude:{
            type:String
        },
        facebookLink:{
            type:String
        },
        googleLink:{
            type:String
        },
        twitterLink:{
            type:String
        },
        linkedinLink:{
            type:String
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("CompanyModel", companySchema);