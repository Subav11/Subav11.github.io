db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{salary:3000}}
)
//update only the first one document its salary as 3000 which has email mike@gmail.com 

db.employees.updateMany(
    {},
    {$set:{points:1}}
)

//increment by 1
db.employees.updateMany(
    {deparment:"IT"},
    {$inc:{points:1}} 
)

db.employees.updateMany(
    {deparment:"IT"},
    {$inc:{points:-1}} 
)

//update or create a new document thats what upsert true is doing
db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set:{name:"Krish",deparment:"HR",salary:2700}},
    {upsert:true}
)

db.employees.deleteOne({email: "krish@gmail.com"})

db.employees.deleteMany(
    {deparment:"Admin"}
)

db.employees.find().sort({name:1}) //sort on the basis of name in ascending order
db.employees.find().sort({name:-1}) //sort on the basis of name in descending order

//Highest salary
db.employees.find({},{name:1,_id:0,salary:1}).sort({salary:-1}).limit(1)

db.employees.find({},{_id:0,Empname:"$name"}) //would just show the name after Empname: 

//to rename the field
db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
)

//to remove the field use $unset
db.employees.updateMany(
    {},
    {$unset: {score: ""}}
)

db.employees.find({},{_id:0,name:1,location:1})

//FOR ARRAY FIELDS
db.employees.updateMany(
    {},
    {$push:{points:5}}
)
//points: [5,3]
db.employees.updateMany(
    {},
    {$push:{points:3}}
)
//remove value from the points field which has deparmnet as IT and point greater than 3
db.employees.updateMany(
    {department:"IT"},
    {$pull:{points:{$gt:3}}}
)
//to insert unique values to array fields we use addToSet, otheriwse for duplicates we use push
db.employees.updateMany(
    {},
    {$addToSet:{location:"LA"}}
)

//remove last element of location array (only one)
db.employees.updateMany(
    {},
    {$pop:{location:1}}
)

//-1 first element would be removed
db.employees.updateMany(
    {},
    {$pop:{location:-1}}
)
