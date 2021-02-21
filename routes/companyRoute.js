const router = require("express").Router();

const { catchErrors } = require("../handlers/errorHandler");
const companyController = require("../controllers/companyCtrl");

//net to check authorization

router.post("/getCompanyByEmail", catchErrors(companyController.getCompanyByEmail));
router.get("/getAllCompanies", catchErrors(companyController.getAllCompanies));
router.post("/saveCompany", catchErrors(companyController.saveCompany));
router.put("/updateCompany", catchErrors(companyController.updateCompany));
router.delete("/deleteCompany", catchErrors(companyController.deleteCompany));

module.exports = router;