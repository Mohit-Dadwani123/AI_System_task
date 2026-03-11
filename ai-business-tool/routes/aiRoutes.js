const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");

router.post("/generate-category", aiController.generateCategory);

router.post("/generate-proposal", aiController.generateProposal);

module.exports = router;