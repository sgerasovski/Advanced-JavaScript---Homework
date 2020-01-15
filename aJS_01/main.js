/*
Exercises
Student constructor function
Create a constructor function for Student objects with:
Properties:
firstName
lastName
birthYear
academy
grades - array of numbers
Methods:
getAge() - returns age of student
getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
getGradesAverage() - returns the average of the student grades
Create an array with 3 students

---------------------------------------------------------------------------------------

Student signup
Create a form with first name, last name, birth year and academy
Create a button for signing up
The button should create a new Student object and add it in the array of students
*/


let students = [];
let btn = $("#btn");

function Student(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastname = lastName;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;

    this.getAge = function () {
        let studentAge;
        let currentYear = new Date().getFullYear();
        studentAge = currentYear - parseInt(this.birthYear);
        return studentAge;
    }

    this.getInfo = function () {
        return `This is ${this.firstName} ${this.lastname}, from the ${this.academy} academy`
    }

    this.getGradesAverage = function () {
        let avg;
        let sum = 0;
        for (i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }
        avg = sum / this.grades.length;
        return avg;
    }
}

let st1 = new Student("Mirche", "Dorchev", "1990", "SEDC", [2, 3, 5, 7, 3]);
students.push(st1);
let st2 = new Student("Tanya", "Kovalsky", "1997", "SEDC", [5, 4, 3, 5, 6]);
students.push(st2);
let st3 = new Student("Riley", "Gregory", "1992", "SEDC", [5, 5, 5, 3, 4]);
students.push(st3);

btn.click(() => {
    let firstNameNode = $("#firstName").val();
    let lastNameNode = $("#lastName").val();
    let birthYearNode = $("#birthYear").val();
    let parseBirth = parseInt(birthYearNode);
    let academyNode = $("#academy").val();

    // GRADES
    let grades = [];

    let firstGrade = $("#firstGrade").val();
    let first = parseInt(firstGrade);
    grades.push(first);
    let secondGrade = $("#secondGrade").val();
    let second = parseInt(secondGrade);
    grades.push(second);
    let thirdGrade = $("#thirdGrade").val();
    let third = parseInt(thirdGrade);
    grades.push(third);
    let fourthGrade = $("#fourthGrade").val();
    let fourth = parseInt(fourthGrade)
    grades.push(fourth);
    let fifthGrade = $("#fifthGrade").val();
    let fifth = parseInt(fifthGrade);
    grades.push(fifth);


    let newStudent = new Student(firstNameNode, lastNameNode, parseBirth, academyNode, [first, second, third, fourth, fifth]);
    students.push(newStudent);
    console.log(newStudent,
        newStudent.getAge(),
        newStudent.getInfo(),
        newStudent.getGradesAverage());
})