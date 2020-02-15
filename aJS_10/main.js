function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = 10;
    this.printStudents = () => {
        students.forEach(element => {
            console.log(element);
        });
    }
    this.printSubjects = () => {
        subjects.forEach(element => {
            console.log(element);
        });
    }
}

function Subject(title, isElective, academy, students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = (num) => {
        if (num > 3) {
            this.numberOfClasses = num;
        } else {
            console.log("Number can't be smaller than 3");
        }
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = (academy) => {
        this.academy = academy;
        this.academy.students.push(this);
    }
    this.startSubject = (subject) => {
        if (this.currentSubject !== null) {
            this.completedSubjects.push(this.currentSubject);
            this.currentSubject = subject;
            this.currentSubject.students.push(this);
        } else if (this.academy !== null && this.academy.subjects.includes(subject)) {
            this.currentSubject = subject;
            this.currentSubject.students.push(this);
        } else {
            console.log("The student has no academy asigned and/or that subject doesnt not exist in this academy");
        }
    }
}

// --------------------- BONUS

let minMax = (...args) => {
    let stats = {
        minOfThree: Math.min(args[0], args[1], args[2]),
        maxOfAll: Math.max(...args)
    }
    return stats;
}

let {
    minOfThree: min,
    maxOfAll: max
} = minMax(7, 3, 5, 6, 7, 8, 9, 20, 3, 4, 2, 1, 4, 5, 2, 4, 5);

console.log(min);
console.log(max);