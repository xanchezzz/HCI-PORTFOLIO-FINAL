# Glen Alexander | Event Committee Portfolio

A single-page, responsive personal portfolio built for the Week 06 HCI lab assignment at Binus International University.

![Portfolio preview](webview.png)

## Purpose

The goal of this project is to:

- Present my experience in event organizing in a clear and professional way
- Apply what I learned about HTML structure, the CSS box model, Flexbox, and responsive design
- Create a portfolio I can use when applying to join event committees

## 👥 Target Audience

- ✅ Event recruiters and organizers looking for committee members

## 🧱 Technologies Used

- HTML5 (semantic tags such as `header`, `aside`, `main`, `section`, `footer`)
- CSS3 (Flexbox, box model, media queries, transitions, hover effects)
- Google Fonts (Jost)
- Figma (layout and color planning)

## 📐 Layout & Sections

The website has a sidebar on the left and the main content on the right (on desktop):

- **Sidebar (Header)** – Profile photo, name, tagline, GitHub and LinkedIn links, contact details, and a "Contact Me" button
- **About Me** – A short introduction and what I can bring to an event team
- **Experience** – Three cards (School Charity, Kernel Journal, Carnival for Charity), each with a photo, year, role, and description
- **Skills** – Skills shown as small tags
- **Contact** – A short message and an email link
- **Footer** – Copyright

## 🎨 Design Choices

- **Color scheme:** a light orange theme (pale orange background, white cards, orange accents)
- **Font:** Jost, a free Google Font similar to Futura, with `sans-serif` as a fallback
- **Style:** white rounded cards with soft shadows, and hover effects on the buttons, experience cards, and skill tags

## 📱 Responsiveness

The site was tested in browser DevTools on:

- **Desktop** – sidebar and main content side by side
- **Tablet (up to 768px)** – the sidebar moves above the main content, and the layout becomes a single column
- **Mobile (up to 480px)** – smaller padding so content fits comfortably

Responsiveness is done with Flexbox (`flex`, `flex-wrap`, `gap`), relative units (`%`, `rem`), and media queries.

## 🧪 How to Run Locally

1. Open a code editor such as Visual Studio Code.
2. Open the terminal and clone the repository:

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

3. Open `index.html` in your browser, or use the Live Server extension in VS Code.

## 📂 Folder Structure

```
portfolio/
│
├── index.html
├── style.css
├──profile.jpg
├──school-charity.jpg
├──kernel-journal.jpg
├──carnival-charity.jpg
└── README.md

```

## How It Works

The experience cards and skills are not written by hand in the HTML. Instead, `script.js` stores them in the `projects` and `skills` arrays, loops through each one, and inserts the generated HTML into the page. To add a new experience, add one more object to the `projects` array.

## Run Locally

1. Clone the repository: `git clone https://github.com/xanchezzz/HCI-PORTFOLIO-FINAL.git`
2. Open the folder in VS Code.
3. Open `index.html` in a browser (or use the Live Server extension).

## Author

Glen Alexander, Computer Science, Binus International University
