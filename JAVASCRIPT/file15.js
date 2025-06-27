//json
const student = '{"name" : "Amy", "age":21}';
const obj = JSON.parse(student);
console.log(obj);
console.log(JSON.stringify(obj));
