const express = require("express");
const router = express.Router();
const service=require("../Controller/ServiceController")
const VerifyToken = require("./VerifyToken/VerifyToken");
const upload=require("../cloundinary/upload")

router.post("/add-service", VerifyToken,upload.fields([{name:'image',maxCount:1}]),service.addService);

router.post("/update-service", VerifyToken,upload.fields([{name:'image',maxCount:1}]),service.updateService);

router.post("/delete-service", VerifyToken,service.deleteService);


router.get("/get-service",service.getService)


module.exports = router;
