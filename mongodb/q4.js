db.employees.insertMany([
  {
    name: "Amy",
    email: "amy@gmail.com",
    deparment: "HR",
    salary: 2000,
    location: ["NY", "TX"],
    date: Date(),
  },
  {
    name: "Rafael",
    email: "rafael@gmail.com",
    deparment: "Admin",
    salary: 1500,
    location: ["OH", "TX"],
    date: Date(),
  },
]);

db.employees.find({deparment: {$in:["Admin","HR"]}}) //show the docs which have admin or HR
db.employees.find({deparment: {$nin:["Admin","HR"]}}) //show the docs which don't have Admin or HR