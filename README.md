# Task Management Next App

## Overview

The **Task Management Next App** is a simple and user-friendly tool to help users manage their tasks efficiently. It allows users to add, edit, delete, and track their tasks with ease. This project is being built as part of [Hacktoberfest 2024](https://hacktoberfest.com/) and aims to provide contributors with hands-on experience in contributing to open-source projects.

## Table of Contents

- [Task Management Next App](#task-management-next-app)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [How to Contribute](#how-to-contribute)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Issues and Features](#issues-and-features)
    - [Open Issues](#open-issues)
    - [Feature Requests](#feature-requests)
  - [Technologies Used](#technologies-used)
  - [License](#license)

## Features

- **Task Creation**: Users can create new tasks with title, description, and deadlines.
- **Task Status**: Mark tasks as completed or In Progress.
- **Task Editing**: Edit tasks as priorities change.
- **Task Filtering**: Filter tasks based on their completion status.
- **Mobile-Responsive Design**: Optimized for both desktop and mobile devices.

## Project Structure

```.
task-manager/
│
├── app/                    // New folder for routing in Next.js 14+
│   ├── layout.tsx           // Layout wrapper for your app
│   ├── page.tsx             // Main page for task management
│   ├── api/
│   │   └── tasks/
│   │       ├── route.ts    // API route for tasks (GET, POST, etc.)
│   ├── tasks/              // Dynamic routes for individual tasks
│       ├── page.tsx         // Page to view a specific task
│       └── edit.tsx         // Page to edit a specific task
│
├── components/
│   ├── TaskForm.tsx         // Component for adding a new task
│   ├── TaskCard.tsx         // Card component to display individual tasks
│   └── TaskList.tsx         // Component to display lists of tasks by status
│
├── globals.css              // // Global styles
│
├── utils/                  // Utility functions (e.g., API helpers)
│   └── api.ts              // API client for tasks
│
├── fonts/                  // Folder for public fonts
├── favicon.ico             // Favicon for page title
│
├── next.config.mjs          // Next.js configuration
├── package.json            // Dependencies and scripts
├── README.md               // Readme file for the project
└── .eslintrc.json            // ESLint configuration

```

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development environment:

- **Node.js** (v14 or later) - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

### Setup

1. **Fork this repository** by clicking the `Fork` button at the top-right of this page.
2. **Clone your forked repository** to your local machine:
   ```bash
   git clone https://github.com/d-code-h/task-management-next-app.git
   ```
3. Navigate to the project directory:
   `cd task-management-next-app`
4. Install dependencies:
   `pnpm install`
5. Start the development server:
   `pnpm dev`

The app will run locally at http://localhost:5173.

## How to Contribute

We welcome all contributors who want to improve this project! Here’s how you can get started:

1. Fork the repository and make your changes on a new branch.
2. Create an issue if you want to work on a new feature or improvement.
3. Create a pull request after you’ve tested your changes.
4. Your pull request will be reviewed and merged if everything looks good!

## Contribution Guidelines

Please ensure your code follows the project's linting rules.

1. For larger changes, consider discussing them in a GitHub issue first.
2. When creating PRs, ensure they have a detailed description of the changes made and link to the relevant issue.

## Issues and Features

### Open Issues

You can find the list of open issues in the Issues section. These are features or bugs that need attention.

### Feature Requests

If you have a suggestion or feature you'd like to see implemented, feel free to open a new issue with the enhancement label.

## Technologies Used

NextJs: Front-end framework.
Axios: For making HTTP requests (for API integration).
TailwindCss: For styling the app.
ESLint: For enforcing consistent code style.

## License

This project is licensed under the MIT License
