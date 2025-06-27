db.employees.insertOne({
    name: "John Smith",
    email: "john@gmail.com",
    deparment: "IT",
    salary: 1456,
    location: ["FL", "OH"],
    date: Date()
});

//commands
db.employees.find()
//show collections

