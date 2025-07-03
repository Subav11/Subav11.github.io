//regex - regular expression (it's like like operator)
db.employees.find({name:{$regex:"Cathy"}})

//to ignore case
db.employees.find({name:{$regex:"cathy",$options:"i"}})

//would display all the names that begin with letter c irrespective of the case
db.employees.find({name:{$regex:"^c",$options:"i"}})

//would display all the names ending with letter y irrespective of the case
db.employees.find({name:{$regex:"y$",$options:"i"}})
