
export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    return res.status(405).send("Method not allowed");
  }

  const destination =
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.NOTIFY_EMAIL;
  const sender = process.env.FROM_EMAIL;

  if (apiKey && recipient && sender && req.method === "GET") {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: sender,
          to: [recipient],
          subject: "Someone got Rickrolled!",
          text: "Someone opened your Rickroll QR code!"
        })
      });
    } catch (error) {
      console.error("Email failed:", error);
    }
  }

  return res.redirect(302, destination);
}
