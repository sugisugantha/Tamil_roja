const express = require("express");
const router = express.Router();
const business = require("../Controller/BusinessController");
const VerifyToken = require("./VerifyToken/VerifyToken");
const upload = require("../cloundinary/upload");

router.post(
  "/add-business",
  VerifyToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  business.addBusiness
);

router.post(
  "/update-business",
  VerifyToken,
  upload.fields([{ name: "image", maxCount: 1 }]),
  business.updateBusiness
);

router.post("/delete-business", VerifyToken, business.deleteBusiness);

router.get("/get-business", business.getBusiness);

module.exports = router;
