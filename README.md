# NEXTV 📺
### The Next Wave of Streaming

## 👋 About the Project

I developed **NEXTV** as part of the **Smart Stream** project, which focuses on building a web-based IPTV and live TV platform.

My goal was to create an interactive and user-friendly application that allows users to browse television channels, explore categories, search for channels by name or number, and preview their selected channels.

Throughout this project, I focused on building a modular JavaScript application, consuming external APIs, handling asynchronous operations, and creating a responsive interface using Tailwind CSS.

## 💡 The Idea Behind NEXTV

The name **NEXTV** combines two words:

- **NEXT:** Represents the future, innovation, and the next generation of entertainment.
- **TV:** Represents television and the world of streaming.

Together, they form **NEXTV – The Next Wave of Streaming**.

I chose this name to reflect the vision behind the project: creating a modern television experience that makes discovering and accessing live TV channels simple, intuitive, and accessible.

## 🌐 Live Demo

[Explore NEXTV](https://nextv-kappa.vercel.app/)

## 🎯 Project Context

The Smart Stream assignment required me to develop a dynamic client-side application based on a validated UX/UI design.

The interface is divided into two main sections:

- **Navigation Sidebar:** Allows users to browse channels, view their numbers and logos, and filter them by category.
- **Preview Area:** Displays the selected channel's cover image, channel information, and available program details.

My mission was to bring this interface to life using JavaScript, connect it to an external testing API through MockAPI, and provide a smooth user experience through dynamic search and filtering.

## ✨ Features

### 1. Channel Catalogue
- Display available television channels.
- Show channel numbers, logos, and names.
- Organize channels by categories.
- Select channels directly from the sidebar.
- Highlight the currently selected channel.

### 2. Search and Filtering
- Search for channels by name.
- Search for channels by channel number.
- Filter channels by category.
- Dynamically update the displayed channel list.

### 3. Channel Preview
- Display the selected channel's preview image.
- Show the channel name and number.
- Display current program information.
- Show program start and end times.
- Display program progress percentage.

### 4. User Interface
- Responsive layout for different screen sizes.
- Interactive navigation sidebar.
- Dynamic category selection.
- Loading and error feedback.
- Current date and time display.

## 🛠️ Technologies & Tools

| Technology | How I used it |
|---|---|
| HTML5 | To structure the application. |
| Tailwind CSS | To style the interface and create responsive layouts. |
| JavaScript (ES6+) | To implement application logic and manipulate the DOM. |
| JSON | To structure and organize channel data. |
| Fetch API | To communicate with the external API. |
| Async/Await | To manage asynchronous operations. |
| Try/Catch | To handle errors during API requests. |
| MockAPI | To simulate a backend API for channel data. |
| Git & GitHub | To manage and version my source code. |
| Vercel | To deploy the application. |
| Jira | To plan and track development tasks. |

## 📁 Project Structure

I organized the project into separate folders and JavaScript modules to keep the code structured, readable, and easier to maintain.

```text
nextv/
│
├── assets/
│   ├── .gitkeep
│   ├── bell.png
│   ├── dotss.png
│   ├── image.png
│   ├── left-arrow.png
│   ├── nextv-logo.png
│   ├── nextv-text.png
│   ├── search-icon.png
│   └── television.png
│
├── data/
│   └── data.json
│
├── js/
│   ├── api.js
│   ├── category.js
│   ├── channels.js
│   ├── date.js
│   ├── main.js
│   ├── preview.js
│   └── search.js
│
├── .gitignore
├── DOCUMENTATION.md
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## 📡 API Integration & Data Management

One of the main objectives of this project was to work with external APIs and understand how frontend applications communicate with a backend service.

I followed these steps:

1. Created an initial `data.json` file containing the channel information.
2. Used **MockAPI** to create a testing API and host the channel data.
3. Used the **Fetch API** to retrieve channels from the MockAPI endpoint.
4. Managed asynchronous requests using `async/await`.
5. Used `try/catch` to handle network and request errors.
6. Checked HTTP responses using `response.ok` and handled unsuccessful requests.
7. Implemented loading and error feedback to improve the user experience.

## 🌿 Git & GitHub Workflow

I used Git and GitHub to track my progress, manage code changes, and maintain a stable version of the application.

I worked with two main branches:

- **main:** Contains the stable version of the project.
- **develop:** Used for implementing and integrating development tasks.

Instead of creating separate feature branches for individual tasks, I worked directly on the `develop` branch.

My workflow was:

1. Implement new features and improvements on `develop`.
2. Commit changes using Git.
3. Push updates to the remote `develop` branch.
4. Merge `develop` into `main` when the changes were ready.

## 📋 Project Management – Scrum & Jira

I organized my work using the **Scrum methodology** and used Jira to plan, organize, and track project tasks.

Jira helped me break down the project requirements into smaller tasks and follow my development progress.

- **Methodology:** Scrum
- **Project management tool:** Jira
- **Planning and task tracking:** Jira Backlog

[View NEXTV Project Planning on Jira](https://assiahamdan.atlassian.net/jira/software/projects/NEXTV/boards/35/backlog)

## 🚀 Installation & Setup

To run the project locally:

**1. Clone the repository**

```bash
git clone <repository-url>
```

**2. Navigate to the project directory**

```bash
cd nextv
```

**3. Install dependencies**

```bash
npm install
```

**4. Start a local development server**

Open the project using the VS Code Live Server extension or another local development server.

## 📚 What I Learned

Working on NEXTV gave me the opportunity to put my JavaScript knowledge into practice and improve my understanding of frontend development.

Some of the main concepts I practiced and explored were:

- Structuring a JavaScript project using separate modules.
- Fetching and consuming data from external APIs.
- Understanding HTTP responses and status codes.
- Managing asynchronous operations using `async/await`.
- Handling errors using `try/catch`.
- Manipulating the DOM dynamically.
- Using modern JavaScript array methods.
- Implementing dynamic search and category filtering.
- Working with events and user interactions.
- Building responsive interfaces using Tailwind CSS.
- Managing project versions using Git and GitHub.
- Organizing tasks and tracking progress using Jira and Scrum.

## 👩‍💻 Final Thoughts

NEXTV was an opportunity for me to move beyond individual JavaScript exercises and apply what I had learned in a complete web application.

Throughout its development, I worked on connecting different parts of the application, organizing my code, solving implementation challenges, and improving the user experience.

This project represents another step in my journey as a developer, helping me strengthen my technical skills and gain more confidence in building interactive web applications.

---

**Project:** NEXTV – The Next Wave of Streaming  
**Based on:** Smart Stream IPTV Project  
**Deployment:** Vercel  
**Project Management:** Jira & Scrum  
**Built with:** HTML, Tailwind CSS & Vanilla JavaScript