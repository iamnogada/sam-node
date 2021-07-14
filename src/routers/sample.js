const express = require("express");
const router = express.Router();
const sampleController = require("controllers/sample.controller");

router.get("/", sampleController.getList);
router.get("/:id", sampleController.getData);
router.put("/:id", sampleController.updateData);
router.post("/", sampleController.createData);
router.delete("/:id", sampleController.deleteData);

module.exports = router;
