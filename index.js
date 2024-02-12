<<<<<<< HEAD
function showYoungestStudent(userDefinedStudents) {
    let min=userDefinedStudents[1];
   for(let i=0 ;i < userDefinedStudents.length ; i++){
       
   if (userDefinedStudents[i]<min)
   {
      min=userDefinedStudents[i]; 
   }
 
   } 
   console.log("the youngest student is : ", min);
};
const userDefinedStudents = [
   { name: 'Alice', age: 25 },
   { name: 'Bob', age: 2 },
   { name: 'Charlie', age: 21 },
];
console.log(userDefinedStudents);
showYoungestStudent(userDefinedStudents);
module.exports = showYoungestStudent;
=======
function showYoungestStudent(userDefinedStudents) {
    let min=userDefinedStudents[1];
   for(let i=0 ;i < userDefinedStudents.length ; i++){
       
   if (userDefinedStudents[i]<min)
   {
      min=userDefinedStudents[i]; 
   }
 
   } 
   console.log("the youngest student is : ", min);
};
const userDefinedStudents = [
   { name: 'Alice', age: 25 },
   { name: 'Bob', age: 2 },
   { name: 'Charlie', age: 21 },
];
console.log(userDefinedStudents);
showYoungestStudent(userDefinedStudents);
module.exports = showYoungestStudent;
>>>>>>> 44b752e6c82353e2b09eb9fa8a7b4a75d52e7d4e
