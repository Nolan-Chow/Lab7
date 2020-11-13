let courseList = [
    course1 = {
        code: 1515,
        name: 'Scripting for IT'
    },
    course2 = {
        code: 1620,
        name: 'Fundamental Web Technologies'
    },
    course3 = {
        code: 1630,
        name: 'Database Systems'
    }
];
let user_code;
let incourseList = false;
do {
    user_code = prompt('Enter a course code.')
} while (isNaN(Number(user_code)) || user_code.length !== 4);
for (let course of courseList) {
    if (Number(user_code) === course.code) {
        console.log(`Yes I am taking the course: ACIT ${user_code} - ${course.name}`);
        incourseList = true;
    }
};
if (!incourseList) {
    courseList.push(
        course4 = {
            code: Number(user_code),
            name: null
        }
    );
    console.log('Course successfully added')
};