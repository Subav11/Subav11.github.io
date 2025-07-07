import dotenv from 'dotenv'
dotenv.config()
//It's used to safely encode special characters in the database username (DBUSER) and password (DBPASS)
//so they can be used in a MongoDB connection string URI, which is a URL.
//Some usernames or passwords may contain special characters like:
//@, :, /, ?, &, =, #, etc.
//These characters have special meaning in a URL. If they're not encoded,
//your connection string may break or behave unpredictably.
const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)
console.log(dbuser,dbpass)