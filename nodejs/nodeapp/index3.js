//npm i express
//to get rid of creating server using http, we use express
import express from "express";

const app = express();

app.listen(8080, () => {
  console.log("Server started");
});

//creating apis - application program interfaces

// app.get("/", (req, res) => {
//   res.send("Good Morning");
// });
// app.get("/user", (req, res) => {
//   res.send("Hello User");
// });
// //you can give anything instead of * or can keep it blank, it will work
// app.get("/ab*cd", (req, res) => {
//   res.send("Hello World");
// });

const products = [
  { id: 1, name: "Product 1", price: 45 },
  { id: 2, name: "Product 2", price: 70 },
  { id: 3, name: "Product 3", price: 55 },
];

app.get("/products/:id", (req, res) => {
  const pid = req.params.id;
  const product = products.find((element) => {
    return pid == element.id;
  });
  res.send(product);
});

//with : , it behaves like variable, we can write anything and it will print Hello
// like localhost:8080/john
// app.get("/:name",(req, res) => {
//     res.send("Hello");
// })

//Different methods to accept user input
// app.get("/:name",(req, res) => {
//     res.send(req.params.name);
// })

// app.get("/student/:name",(req, res) => {
//     res.send(req.params.name);
// })

// app.get("/student/:name/age/:age",(req, res) => {
//     res.send(req.params.name + req.params.age);
// })

//in postman authorisation, select type bearer token and add anything
//to display as header in token field
// app.get("/",(req, res) => {
//     res.send(req.headers.authorization);
// })

//query string
//localhost:8080/?name=john&age=21
// app.get("/",(req, res) => {
//     res.send(req.query.name + req.query.age);
// })
