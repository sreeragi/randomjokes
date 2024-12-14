const students = [
  { name: "John Doe", age: 18, marks: 85, subjects: ["Math", "English", "Physics"] },
  { name: "Jane Smith", age: 20, marks: 92, subjects: ["Math", "Biology"] },
  { name: "Alice Brown", age: 19, marks: 75, subjects: ["English", "History"] },
  { name: "Bob White", age: 22, marks: 88, subjects: ["Math", "Geography", "History"] },
  { name: "Charlie Green", age: 21, marks: 95, subjects: ["Math", "Physics", "Chemistry"] }
];

//1. get all student names
console.log(`1.------------All students name : -------------`);
const stdName= students.map(student=>student.name)
console.log(stdName);


//2. find the student with highest marks
console.log(`2.------------student with highest marks  -------------`);
const topmark=students.reduce((a,b)=>a.marks>b.marks? a:b)
console.log(topmark);


//3. get all subjects that the studentare studying , with no duplicates:
console.log(`3.------------all subjects that the studentare studying , with no duplicates -------------`);
output={}
students.forEach(student=>student.subjects.forEach(subject=>{
  if(!output.hasOwnProperty(subject)){
    output[subject]=subject
  }
}))
console.log(output)



//4. check if all students are above a certain age(eg:18)
console.log(`4.------------all students are above a certain age(eg:18) -------------`);
const above18=students.every(stdage=>stdage.age>=18)
console.log(above18);
console.log("names are : ");
students.filter(stdage=>stdage.age>18).forEach(stdage=>console.log(stdage.name))

//5. find the total mark of all students:
console.log(`5.------------total mark of all students: -------------`);
const totalmark=students.reduce((a,b)=>a+b.marks,0)
console.log(totalmark);

//6. get students who are studying a specific subject (eg: "Math")
console.log(`6.------------get students who are studying a specific subject (eg: "Math") -------------`);
const mathStudents = students.filter(student => student.subjects.includes("Math")).forEach(student=>console.log(student.name));

//7. create a new array of students where each students name is capitalized 
console.log("students where each students name is capitalized");
let nameArray=[]
students.forEach(element=>nameArray.push(element.name.toUpperCase()))
console.log(nameArray);

//8. sort students by marks in descending order
console.log("8.--------------sort students by marks in descending order------------- ");
students.sort((a,b)=>b.marks-a.marks).forEach(person=>console.log(person.name , person.marks))

//9. add a new subject to all students 
students.forEach(element=>element.subjects.push("Computer Science"))
console.log(students);

//10. find the average mark of all students
console.log(`10.------------the average mark of all students-------------`);
const totalMarks = students.reduce((a,b) => a + b.marks, 0);
const averageMark = totalMarks / students.length;
console.log(averageMark);