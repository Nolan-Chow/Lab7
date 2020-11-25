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

function findCourse (arr) {
    let user_code;
    let incourseList = false;
    do {
        user_code = prompt('Enter a course code.')
    } while (isNaN(Number(user_code)) || user_code.length !== 4);
    for (let course of arr) {
        if (course.code.includes(user_code)) {
            let matchingcourses = document.getElementsByClassName(user_code);
            incourseList = true;
            for (green of matchingcourses) {
                green.style.backgroundColor = "green";
            }
        }
    }
    if (!incourseList) {
        let article = document.querySelector('article');
        let lastCourse = document.querySelector('.last');
        let courseNum = document.createTextNode(user_code);
        let courseDes = document.createTextNode('N/A');
        let courseDate = document.createTextNode('Fall 2020');
        let elementNum = document.createElement('li');
        let elementDes = document.createElement('li');
        let elementDate = document.createElement('li');
        let elementCourse = document.createElement('ul');
        let elementSection = document.createElement('section');
        elementNum.appendChild(courseNum);
        elementDes.appendChild(courseDes);
        elementDate.appendChild(courseDate);
        elementCourse.appendChild(elementNum);
        elementCourse.appendChild(elementDes);
        elementCourse.appendChild(elementDate);
        elementSection.appendChild(elementCourse);
        article.appendChild(elementSection);
        elementCourse.setAttribute('class', 'course');
        lastCourse.setAttribute('class', 'course item')
    }
}

const Listofcourse = createCourseArrray();
findCourse(Listofcourse);