import express from "express";
const PORT = process.argv[2] || 8080;
const app = express();
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
