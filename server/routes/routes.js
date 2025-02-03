const router = require("express").Router();
const controller = require("../controller/controller");

router.post("/generate-qr", controller.generateQRCode);

module.exports = router;
