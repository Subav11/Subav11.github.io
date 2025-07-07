import express from "express";
const app = express();
//this gives access to the folders that can be used in webserver
app.use("/images", express.static("images"));
//It is used for documentation purposes so that the frontend developer can have an idea of how backend is working 
// app.use(express.static("public"));

app.listen(8081, () => {
  console.log("Server started");
});
app.get("/products", (req, res) => {
  res.send("Product List");
});
