const mongoose = require("mongoose");
const CompanyModel = mongoose.model("CompanyModel");

exports.getAllCompanies = async (req, res) => {
    const companies = await CompanyModel.find({});
    res.json(companies);
}

exports.getCompanyByEmail = async (req, res) => {
    const { companyEmail } = req.body;
    const company = await CompanyModel.findOne({
        companyEmail
    });
    if (!company) throw "Does not exits.";
    res.json(company);
}

exports.saveCompany = async (req, res) => {
    console.log("came to save the company");
    const { companyEmail } = req.body;

    const companyExists = await CompanyModel.findOne({
        companyEmail
    });

    if (companyExists) throw "same email already exits.";
    const companyDetails = new CompanyModel(req.body);
    await companyDetails.save();
    res.json({
        message: "companyDetails added successfully!",
        data: companyDetails
    });
};

exports.updateCompany = async (req, res) => {
    const query = { companyEmail: req.body.companyEmail}
    const companyDetails = await CompanyModel.findOneAndUpdate(
        query, { $set: req.body},);

    res.json({
        message: "companyDetails updated successfully!",
        data : companyDetails
    });
};

exports.deleteCompany = async (req, res) => {
    const { companyEmail } = req.body;

    const companyDetails = await CompanyModel.deleteOne({
        companyEmail
    });
    if (!companyDetails) throw "company details not deleted";

    res.json({
        message: "companyDetails  deleted successfully!",
    });
};