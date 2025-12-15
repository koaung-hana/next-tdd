## ⚠️ Usage Notice

**This repository is intended solely for internal use in technical assessments.**

Forking, cloning, or redistributing this repository — or any solutions derived from it — is **strictly prohibited**.

If you are an interview candidate, please do not share your solutions publicly or privately. Doing so may compromise the fairness of the evaluation process and violate our confidentiality expectations.

If you are not an authorized participant or evaluator, please refrain from using or replicating this repository in any form.


# TDD assessment with Next.js

Welcome to the **Next TDD** repository! This project is built with Next.js, and it includes Jest for unit testing and Playwright for screenshot testing. The candidate must resolve all 7 failed cases including 1 snapshot test and 1 screenshot test.

---

## Getting Started

This guide will walk you through setting up the development environment in GitHub Codespaces.

### Prerequisites

To work on this project in a local environment, you’ll need to have Node.js and npm installed. However, **GitHub Codespaces** provides a ready-to-go environment that simplifies setup.

---

## How to Start the Codespace

1. **Open the Repository in GitHub**  
   Go to the GitHub repository page for this project.

2. **Start a New Codespace**  
   - Click the **Code** button on the repository’s main page.
   - Select **Codespaces** from the dropdown menu.
   - Click **New codespace** to create a new development environment.

3. **Initialize the Environment**  
   - Once the Codespace is ready, dependencies should automatically install if you have a `.devcontainer` configuration in the repository.
   - If not, you may need to run:

     ```bash
     npm install
     ```

4. **Run the Development Server**  
   Start the Next.js development server with:

   ```bash
   npm run dev


## Running Jest Tests

```bash
npm test
```

## Running Playwright's screenshot Tests

```bash
npm run test:screenshot
```
