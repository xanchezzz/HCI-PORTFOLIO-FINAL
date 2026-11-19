// ---------- 1. DATA ----------
// All the content lives here. To add or change something, edit these arrays.

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


// ---------- 2. FUNCTIONS THAT BUILD THE HTML ----------

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


// ---------- 3. RUN ----------
showProjects();
showSkills();


// ---------- 4. DARK MODE ----------
const themeButton = document.getElementById("theme-toggle");

function setDarkMode(isDark) {
    document.body.classList.toggle("dark", isDark);
    themeButton.textContent = isDark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-pressed", isDark);
    localStorage.setItem("darkMode", isDark);   // remember the choice
}

themeButton.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark");
    setDarkMode(isDark);
});

// When the page loads, use the saved choice (if there is one)
setDarkMode(localStorage.getItem("darkMode") === "true");


// ---------- 5. MESSAGE POP-UP ----------
const modal = document.getElementById("message-modal");
const openButton = document.getElementById("open-message");
const closeButton = document.getElementById("close-message");
const form = document.getElementById("message-form");
const note = document.getElementById("form-note");

function openModal() {
    modal.hidden = false;
    note.textContent = "";
    document.getElementById("msg-name").focus();
}

function closeModal() {
    modal.hidden = true;
    openButton.focus();   // return to the button that opened it
}

function showError(fieldId, errorId, message) {
    document.getElementById(errorId).textContent = message;
    document.getElementById(fieldId).classList.toggle("invalid", message !== "");
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

// Close when clicking the dark area outside the box
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Close with the Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) {
        closeModal();
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();   // stop the page from reloading

    const name = document.getElementById("msg-name").value.trim();
    const email = document.getElementById("msg-email").value.trim();
    const text = document.getElementById("msg-text").value.trim();
    let valid = true;

    if (name === "") {
        showError("msg-name", "error-name", "Please enter your name.");
        valid = false;
    } else {
        showError("msg-name", "error-name", "");
    }

    if (!email.includes("@") || !email.includes(".")) {
        showError("msg-email", "error-email", "Please enter a valid email, like name@example.com.");
        valid = false;
    } else {
        showError("msg-email", "error-email", "");
    }

    if (text.length < 5) {
        showError("msg-text", "error-text", "Please write a short message.");
        valid = false;
    } else {
        showError("msg-text", "error-text", "");
    }

    if (!valid) {
        return;
    }

    // No server, so open the visitor's email app with the message filled in
    const subject = encodeURIComponent("Portfolio message from " + name);
    const body = encodeURIComponent(text + "\n\nFrom: " + name + " (" + email + ")");
    window.location.href = "mailto:Glenalexander31@gmail.com?subject=" + subject + "&body=" + body;

    note.textContent = "Thank you! Your email app should open so you can send the message.";
    form.reset();
});


// ---------- 6. TEXT SIZE SLIDER ----------
const sizeSlider = document.getElementById("text-size-slider");
const sizeValue = document.getElementById("text-size-value");

function setTextSize(percent) {
    // Changing the size of the whole page changes every rem/em size inside it
    document.documentElement.style.fontSize = percent + "%";
    sizeValue.textContent = percent + "%";
    sizeSlider.value = percent;
    localStorage.setItem("textSize", percent);   // remember the choice
}

// "input" runs while the slider is being dragged, so the text changes live
sizeSlider.addEventListener("input", function () {
    setTextSize(sizeSlider.value);
});

// When the page loads, use the saved size (or 100 if nothing is saved)
setTextSize(localStorage.getItem("textSize") || 100);
