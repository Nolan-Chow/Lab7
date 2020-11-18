function createCourseArrray () {
    courseList = document.querySelectorAll('.course');
    courseArray = [];
    for (let courses of courseList) {
        course = {
            code: courses.querySelector('a').innerHTML.trim(),
            date: courses.querySelector('.term').innerHTML.trim()
        }
        courseArray.push(course);
    }
    return courseArray;
}

const Listofcourse = createCourseArrray();
