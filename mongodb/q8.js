// for backup write in cmd
// mongodump -d lpu -o E:\lpubackup
// d means data and o means output

db.dropDatabase()

// to restore
mongorestore -d lpu E:\lpubackup\lpu

//backup of a particular database
mongodump -d mydb -o E:\bck

//to restore a particular database
mongorestore -d mydb E:\bck\mydb
