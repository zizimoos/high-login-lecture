import app from "../src/app.js";

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`✅ SERVER LISTEN PORT : ${PORT} `);
});
