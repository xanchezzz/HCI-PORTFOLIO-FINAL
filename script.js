

const projects = [
    {
        title: "School Charity",
        image: "school-charity.png",
        alt: "School charity bazaar",
        date: "2025",
        role: "Member",
        description: "I helped promote the products being sold on the bazaar for charity, alongside being assigned to the food and beverages section."
    },
    {
        title: "Kernel Journal",
        image: "kernel-journal.png",
        alt: "Kernel Journal logo",
        date: "2026",
        role: "Founder",
        description: "Initially, before the our event bazaar, me and a partner had tested out different types of foods and beverages before selling them to the public."
    },
    {
        title: "Carnival for Charity",
        image: "carnival-charity.png",
        alt: "Carnival for charity event",
        date: "2025",
        role: "Member",
        description: "I was considered a member in that charity as I helped out around the whole carnival, cheering up the atmosphere, inviting others to play and helping others out."
    }
];

const skills = ["Leadership", "Teamwork", "Python", "HTML"];



function createProjectCard(project) {
    return `
        <div class="project">
            <img src="${project.image}" alt="${project.alt}">
            <h3>${project.title}</h3>
            <p class="date">${project.date}</p>
            <p class="role">Role: ${project.role}</p>
            <p>${project.description}</p>
        </div>
    `;
}

function showProjects() {
    const list = document.getElementById("project-list");
    let cards = "";

    for (const project of projects) {
        cards += createProjectCard(project);
    }

    list.innerHTML = cards;
}

function showSkills() {
    const list = document.getElementById("skills-list");
    let items = "";

    for (const skill of skills) {
        items += `<li>${skill}</li>`;
    }

    list.innerHTML = items;
}

showProjects();
showSkills();
