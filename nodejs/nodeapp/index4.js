import express from "express";

const app = express();

app.listen(8080, () => {
  console.log("Server started");
});

//middleware - first it goes here from client side, then go to server
//for validation, it can be used

// const logger = (req, res, next) => {
//   req.msg = "Hello";
//   next();
// };

//to give middleware to all the endpoints,
// app.use(logger);

// app.get("/", (req, res) => {
//   res.send(req.msg + " World");
// });
// app.get("/products", logger, (req, res) => {
//   res.send(req.msg + " Products");
// });

const valid = (req, res, next) => {
  if (req.params.name === "john") {
    next();
  } else {
    res.send("Access Denied");
  }
};

app.get("/:name", valid, (req, res) => {
  res.send("Hello World");
});
