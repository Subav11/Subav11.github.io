import bcrypt from "bcrypt";
// const pwd = "pass1234";
// const hashedpwd = await bcrypt.hash(pwd,10)
// console.log(hashedpwd);
const check = await bcrypt.compare(
  "pass1234",
  "$2b$10$YhUN6TjWLbcout8JasReuuOwKISpoehOCO8J3Dpe2NApNFQjGaB8W"
);
console.log(check);
