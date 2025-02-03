const service = require("../service/service");

exports.generateQRCode = async (req, res) => {
	try {
		const { data } = req.body;
		const qrCodeText = await service.formatData(data);
		const qrCodeBuffer = await service.generateQRCode(qrCodeText);

		res.setHeader("Content-Disposition", "attachment;filename:qrcode.png");
		res.type("image/png").send(qrCodeBuffer);
	} catch (error) {
		console.error("Error generating QR code:", error);
		res.status(500).send({ error: "Internal Server Error" });
	}
};
