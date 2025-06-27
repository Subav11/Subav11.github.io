db.employees.find()
db.employees.find().skip(1) //skip first document
db.employees.find().limit(1) //show only first document
db.employees.find().skip(1).limit(1) //skip first and show only second doc
db.employees.find({deparment:"IT"}) //it will show only those whole doc which have deparment as IT
db.employees.find({deparment:"IT"},{_id:0,name:1})
db.employees.find(
    {department: {$eq:"IT"}},
    {_id:0,name:1,salary:1}
)
//$eq - equal deparment ke andar bhi ek aur object
db.employees.find(
    {salary: {$gt:3000}}, //$gt - greater than
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary: {$gte:3000}}, //$gte - greater than or equal to
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary: {$lt:3000}}, //$lt - less than
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary: {$lte:3000}}, //$lte - less than or equal to
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary: {$lte:3000},deparment:"IT"}, //$lte - less than or equal to and department also should be IT
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$or: [{salary: {$lte:3000}},{deparment:{$eq:"IT"} }]}, //or any one of them should be true
    {_id:0,name:1,salary:1}
)

db.employees.find({deparment:{$ne:"IT"}},
    {_id:0,name:1}
) //notequal
