# Simple Quiz React App

A responsive and interactive quiz application built using React. This project is designed to help you practice JavaScript and React fundamentals, with a focus on dynamic rendering, state management, and user interaction.

## Features

- **Dynamic Question Display:** Questions are rendered dynamically from a data source, ensuring a smooth and efficient user experience.
- **Answer Recording:** User answers are recorded and stored for result calculation.
- **Quiz Results Display:** The app calculates and displays the quiz results based on the user's answers.
- **Navigation Controls:** Includes 'Next' and 'Prev' buttons for easy navigation between questions.
- **Final Submission:** A submit option appears upon reaching the final question, allowing users to submit their answers.
- **Result Summary:** Displays a summary of the quiz, highlighting the number of correct and incorrect answers.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. [Download Node.js](https://nodejs.org/)
- **Vite**: Use Vite to create your React app for fast and optimized development. [Learn more about Vite](https://vitejs.dev/)
- **Tailwind CSS**: Install Tailwind CSS for styling your app. Follow the official [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) for Vite.
- **React Icons**: Install React Icons to use a wide variety of icons in your app.

### Installation

1. **Create a React App using Vite:**
   ```bash
   npm create vite@latest simple-quiz-app --template react
   cd simple-quiz-app
   ```
2. **Install Dependencies**
```bash
npm install
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
3. **Configure Tailwind CSS:**
    
- Follow the setup instructions from the [Tailwind CSS](https://tailwindcss.com/docs/installation)  documentation for Vite.

4. **Install React Icons**
```bash
npm install react-icons --save
```
5. **Run App**
```bash
npm run dev
```

6. **File Structure**
```
.
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

7. **Useage**
 ``` bash
 npm run dev 
 ```
## Live Demo

- [Quiz React App Link](https://prashantswaroop001.github.io/Quiz-Practice-App/)

## Acknowledgments
- Thanks to [Vite](https://vitejs.dev/) for making development fast and easy.
- [Tailwind CSS](https://tailwindcss.com/) for providing a modern and flexible styling framework.
- [React Icons](https://react-icons.github.io/react-icons/) for offering a comprehensive set of icons.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
