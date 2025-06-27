db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  deparment: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    deparment: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    deparment: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

//db.users.find({filter/conditions},{projection})
db.users.find({},{name:1})
//only name field will come for all docs
db.users.find({},{_id:0, name:1})
//also 0 and 1 can be written as false and true respectively

// db.users.drop() to delete the collection
