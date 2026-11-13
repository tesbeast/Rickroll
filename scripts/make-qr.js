const QRCode = require("qrcode");

const url = process.env.TRACKER_URL;

if (!url) {
  throw new Error("Missing TRACKER_URL");
}

QRCode.toFile("rickroll-qr.png", url, {
  width: 1200,
  margin: 3,
  errorCorrectionLevel: "H"
}, (error) => {
  if (error) throw error;
  console.log("QR code created!");
});
