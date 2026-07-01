const courseForm = document.getElementById('course-form');
const courseSelect = document.getElementById('course-name');
const courseCodeInput = document.getElementById('course-code');
const courseTypeInput = document.getElementById('course-type');
const courseList = document.getElementById('course-list');
const courseCount = document.getElementById('course-count');
const clearCoursesButton = document.getElementById('clear-courses');

const availableCourses = [
    { code: 'HTML101', name: 'HyperText Markup Language', type: 'Compulsory' },
    { code: 'CSS101', name: 'Cascading Style Sheets', type: 'Compulsory' },
    { code: 'JS101', name: 'JavaScript', type: 'Compulsory' },
    { code: 'REACT101', name: 'React', type: 'Elective' },
    { code: 'BOOT101', name: 'Bootstrap', type: 'Elective' }
];

let registeredCourses = [];

function updateCourseCount() {
    courseCount.textContent = registeredCourses.length;
}

function renderCourseList() {
    courseList.innerHTML = '';

    registeredCourses.forEach((course, index) => {
        const li = document.createElement('li');
        li.className = 'course-item';

        li.innerHTML = `
            <div class="course-info">
                <p class="course-title">${course.name}</p>
                <span class="course-meta">${course.code} · ${course.type}</span>
            </div>
            <button type="button" class="delete-course" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
        `;

        courseList.appendChild(li);
    });
}

function populateCourseDetails() {
    const selectedCode = courseSelect.value;
    const course = availableCourses.find(item => item.code === selectedCode);

    if (!course) {
        courseCodeInput.value = '';
        courseTypeInput.value = '';
        return;
    }

    courseCodeInput.value = course.code;
    courseTypeInput.value = course.type;
}

courseSelect.addEventListener('change', populateCourseDetails);

courseForm.addEventListener('submit', event => {
    event.preventDefault();

    const selectedCode = courseSelect.value;
    const course = availableCourses.find(item => item.code === selectedCode);
    if (!course) return;

    registeredCourses.unshift(course);
    courseForm.reset();
    courseCodeInput.value = '';
    courseTypeInput.value = '';
    updateCourseCount();
    renderCourseList();
});

courseList.addEventListener('click', event => {
    const button = event.target.closest('.delete-course');
    if (!button) return;

    const index = Number(button.dataset.index);
    registeredCourses.splice(index, 1);
    updateCourseCount();
    renderCourseList();
});

clearCoursesButton.addEventListener('click', () => {
    registeredCourses = [];
    updateCourseCount();
    renderCourseList();
});

updateCourseCount();
renderCourseList();
