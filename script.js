// Add this function to script.js
function displayCertifications() {
    const certificationsList = document.getElementById('certificationsList');

    // Sample certifications data
    const certifications = [
        { name: "Certification 1", year: 2022 },
        { name: "Certification 2", year: 2021 },
        // Add more certifications as needed
    ];

    certifications.forEach(certification => {
        const listItem = document.createElement('li');
        listItem.textContent = `${certification.name} - Year: ${certification.year}`;
        certificationsList.appendChild(listItem);
    });
}

// Modify the window.onload function
window.onload = function () {
    if (document.getElementById('projectList')) {
        filterProjects();
    }
    if (document.getElementById('educationList')) {
        displayEducation();
    }
    if (document.getElementById('certificationsList')) {
        displayCertifications(); // Call the new function for certifications
    }
};
