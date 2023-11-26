const projects = [
    { name: "Project 1", technology: "C#" },
    { name: "Project 2", technology: "Java" },
    { name: "Project 3", technology: "Node.js" },
    // Add more projects as needed
];

const education = [
    { course: "Computer Science", grade: "A", year: 2020 },
    { course: "Mathematics", grade: "B", year: 2018 },
    // Add more education details as needed
];

function filterProjects() {
    const filterInput = document.getElementById('techFilter').value.toLowerCase();
    const projectList = document.getElementById('projectList');

    projectList.innerHTML = '';

    projects.forEach(project => {
        if (project.technology.toLowerCase().includes(filterInput) || filterInput === '') {
            const listItem = document.createElement('li');
            listItem.textContent = `${project.name} - ${project.technology}`;
            projectList.appendChild(listItem);
        }
    });
}

function displayEducation() {
    const educationList = document.getElementById('educationList');

    education.forEach(edu => {
        const listItem = document.createElement('li');
        listItem.textContent = `${edu.course} - Grade: ${edu.grade}, Year: ${edu.year}`;
        educationList.appendChild(listItem);
    });
}

window.onload = function () {
    if (document.getElementById('projectList')) {
        filterProjects();
    }
    if (document.getElementById('educationList')) {
        displayEducation();
    }
};
