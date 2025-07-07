import express from "express";
const Router = express.Router();
Router.get("/show", (req, res) => {
  res.send("Show Products API");
});

Router.delete("/:id", (req, res) => {
  res.send("Delete Product API");
});

export default Router;
