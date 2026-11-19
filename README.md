# Glen Alexander | Event Committee Portfolio

A single-page, responsive personal portfolio built for the Week 06 HCI lab assignment at Binus International University.

![Portfolio preview](webview.png)

## Purpose

The portfolio presents my participation and contributions in charity and event organizations, aimed at event recruiters who are looking for committee members.

## Features

- Sidebar with profile, contact details, and links, plus main content cards (About, Experience, Skills, Contact)
- Experience cards and skills are generated with JavaScript from data arrays
- Dark mode toggle that remembers the visitor's choice
- Text size slider (80% to 150%) that remembers the visitor's choice
- Message pop-up with form validation and friendly error messages
- Responsive layout that adapts to tablet and mobile screens
- Light orange color scheme and Jost font

## Built With

- HTML
- CSS
- JavaScript

## Project Structure

```
HCI-PORTFOLIO-FINAL/
├── index.html      # Page structure (empty containers for cards and skills)
├── style.css       # Styling, dark mode, and responsive layout
├── script.js       # Portfolio data, cards, dark mode, and message pop-up
├── profile.jpeg
├── school-charity.png
├── kernel-journal.png
├── carnival-charity.png
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
