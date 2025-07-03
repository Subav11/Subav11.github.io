import express from "express";

const app = express();

app.listen(8080, () => {
  console.log("Server started");
});

//middleware - first it goes here from client side, then go to server

const logger = (req, res, next) => {
  req.msg = "Hello";
  next();
};
//to give middleware to all the endpoints,
// app.use(logger);

app.get("/", (req, res) => {
  res.send(req.msg + " World");
});
app.get("/products", logger, (req, res) => {
  res.send(req.msg + " Products");
});
