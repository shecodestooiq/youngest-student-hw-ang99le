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
