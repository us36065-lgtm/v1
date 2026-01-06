import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// ĐỔI domain mới của bạn ở đây:
const NEW_BASE = "https://kasimeledak.xgo88bola.cyou";

app.use((req, res) => {
  // giữ nguyên path + query
  const target = NEW_BASE + req.originalUrl;
  res.redirect(301, target);
});

app.listen(PORT, () => console.log("301 redirector running on", PORT));
