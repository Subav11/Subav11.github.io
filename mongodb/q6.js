db.employees
  .find(
    { $or: [{ salary: { $gt: 3000 } }, { department: "IT" }] },
    { _id: 0, name: 1 }
  )
  .limit(2)
  .skip(1);

db.employees.countDocuments();

//aggregate
db.employees.aggregate([
  { $match: { salary: { $gt: 1000 } } }, //1st pipeline
  { $project: { name: 1, salary: 1, location: 1 } }, //2nd pipeline
  { $sort: { name: 1 } }, //3rd pipeline and so on.
  { $limit: 1 },
]);

db.employees.updateMany({}, { $addToSet: { location: "FL" } });

//unwind - would display elements of location array separately
db.employees.aggregate([
  { $project: { _id: 0, name: 1, location: 1 } },
  { $unwind: "$location" },
]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] },
    },
  },
]);

//would display total salary of the respective departments
db.employees.aggregate([
  {
    $group: {
      _id: "$department",
      total: { $sum: "$salary" },
    },
  },
]);

db.employees.aggregate([
  {
    $group: {
      _id: null,
      total: { $sum: "$salary" },
    },
  },
]);

db.orders.insertMany([
  { empId: ObjectId("685a8a728806dd72c2748a5f"), orderValue: 1200 },
  { empId: ObjectId("685bb97414444a77ef748a5f"), orderValue: 1800 },
  { empId: ObjectId("685bb97414444a77ef748a60"), orderValue: 2700 },
  { empId: ObjectId("685bca7014444a77ef748a63"), orderValue: 3600 },
  { empId: ObjectId("685bca7014444a77ef748a64"), orderValue: 4800 },
]);

//to join one collection to another
db.employees.aggregate([
  { $match: { salary: { $gt: 1000 } } },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "order",
    },
  },
  { $unwind: "$order" }, //elements would get out from array and object would be visible
  { $project: { name: 1, salary: 1, "order.orderValue": 1 } }, //to retrieve object's property
]);

db.empCountry.insertMany([
  { empId: ObjectId("685a8a728806dd72c2748a5f"), country: "India" },
  { empId: ObjectId("685bb97414444a77ef748a5f"), country: "Russia" },
  { empId: ObjectId("685bb97414444a77ef748a60"), country: "Australia" },
  { empId: ObjectId("685bca7014444a77ef748a63"), country: "USA" },
  { empId: ObjectId("685bca7014444a77ef748a64"), country: "Nepal" },
]);

db.employees.aggregate([
  {
    $lookup: {
      from: "empCountry",
      localField: "_id",
      foreignField: "empId",
      as: "empCountry",
    },
  },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empId",
      as: "orders",
    },
  },
  { $unwind: "$empCountry" },
  { $unwind: "$orders" },
  {
    $project: {
      _id: 0,
      name: 1,
      "empCountry.country": 1,
      "orders.orderValue": 1,
    },
  },
]);

//to create index in email field for faster execution using index
db.employees.createIndex({ email: 1 });

//to get Indexes
db.employees.getIndexes();

//to drop index
db.employees.dropIndex("email_1");

//will tell about its execution time everything
db.employees.find({ email: "john@gmail.com" }).explain("executionStats");

db.scores.insertMany([
  { name: "Krish", country: "India", score: 20 },
  { name: "Krish", country: "India", score: 21 },
  { name: "Krish", country: "India", score: 22 },
  { name: "John", country: "UK", score: 21 },
  { name: "John", country: "UK", score: 26 },
  { name: "John", country: "UK", score: 25 },
]);

db.scores.aggregate([
  {
    $group: {
      _id: { name: "$name", country: "$country" },
      total: { $sum: "$score" },
    },
  },
]);

//similar like ternary operator hard code not updating just displaying
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {$cond:[{$gt:["$salary",3000]},"Grade A","Grade B"]}
    }}
])

//if else hard code not updating just displaying
//$out - query output gets save in new collection so that data could be consitent until we change it after a month
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {$cond:{
        if:{$gt:["$salary",3000]},
        then:"Grade A",
        else:"Grade B"}}
    }},
    {$out:"GradeWiseSalary"}
])

//view(virtual copy) : to create a virtal representation of the query output(data gets updated here dynamically if data changes unlike in out), to modify the view, we have to first drop it and then add the field and rerun the same view query
db.createView("viewname","collectionname",[query])

db.createView("salaryview","employees",[
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {$cond:{
        if:{$gt:["$salary",3000]},
        then:"Grade A",
        else:"Grade B"}}
    }}
])

//modification
db.salaryview.drop();

db.createView("salaryview","employees",[
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      department:1,
      grade: {$cond:{
        if:{$gt:["$salary",3000]},
        then:"Grade A",
        else:"Grade B"}}
    }}
])



