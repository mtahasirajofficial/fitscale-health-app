<h1 align="center">⚖️ FitScale</h1>

<p align="center">
  <b>Your health — measured, planned, and improved.</b><br>
  A modern React web app packed with smart health calculators and a personalized diet planner to help you reach your fitness goals.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap"/>
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" alt="Chart.js"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

---

## ✨ Overview

**FitScale** is a clean, responsive health and fitness web application built with React. It brings together a suite of evidence-based calculators and a personalized diet planner in one friendly interface. Users can calculate their BMI, find their ideal body weight, estimate daily calorie needs, measure calories burned during exercise, and generate a tailored macronutrient plan — all with instant, visual feedback through interactive charts.

It's a great showcase of practical React fundamentals: component-driven UI, client-side routing, form handling, and data visualization.

---

## 🚀 Features

- ⚖️ **BMI Calculator** — Calculate Body Mass Index with metric/imperial units, age & sex, a category breakdown, and a doughnut chart visualization plus health advice.
- 🧍 **Ideal Weight Calculator** — Estimate your ideal body weight using a standard height/gender formula.
- 🔥 **Daily Calorie Intake** — Compute your BMR and TDEE (total daily energy expenditure) based on activity level using the Mifflin–St Jeor equation.
- 🏃 **Calories Burned Calculator** — Estimate calories burned across running, cycling, walking, and swimming using MET values.
- 🥗 **Personalized Diet Planner** — Enter your details to get a tailored calorie target and macronutrient split, visualized with an interactive pie chart.
- 📊 **Interactive Charts** — Data visualizations powered by Chart.js and Recharts.
- 🎬 **Smooth Animations** — Subtle motion via Framer Motion.
- 📱 **Responsive Design** — Works smoothly across mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

| Layer            | Technology                          |
| ---------------- | ----------------------------------- |
| **Framework**    | React 18 (Create React App)         |
| **Routing**      | React Router DOM v7                 |
| **Styling**      | Bootstrap 5 + React-Bootstrap + custom CSS |
| **Charts**       | Chart.js + react-chartjs-2, Recharts |
| **Animations**   | Framer Motion                       |
| **Icons**        | Lucide React                        |

---

## 📂 Project Structure

```
fitScale/
├── public/
│   ├── images/                # Hero image, feature icons, assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css           # Top navigation
│   │   ├── Hero.js / .css             # Hero section
│   │   ├── Footer.js / .css           # Footer
│   │   ├── BMICalculator.js / .css    # BMI tool + doughnut chart
│   │   ├── IdealWeightCalculator.js   # Ideal body weight tool
│   │   ├── DailyCalorieIntake.js      # BMR / TDEE tool
│   │   ├── CaloriesBurned.js          # MET-based burn tool
│   │   ├── PersonalizedDietPlanner.js # Diet plan + macro pie chart
│   │   ├── ResultCard.js / .css       # Reusable result display
│   │   └── Calculator.css             # Shared calculator styles
│   ├── pages/
│   │   └── Home.js / .css             # Landing page
│   ├── App.js                          # Routes & layout
│   ├── App.css
│   └── index.js                        # App entry point
├── package.json
└── package-lock.json
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js** 16+ and **npm**

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app will open automatically at **http://localhost:3000**.

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `build/` folder, ready to deploy.

### Available Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm start`      | Run the app in development mode       |
| `npm run build`  | Build the app for production          |

---

## 🐙 Git Bash Commands

Use these commands in **Git Bash** to initialize the repository and push it to GitHub.

> 💡 If your project lives at a Windows path like `D:\fitScale`, write it in Git Bash as `/d/fitScale`.

### First-time setup (new repository)

```bash
# Navigate into your project folder
cd /d/fitScale

# Create a .gitignore so node_modules and build output aren't committed
cat > .gitignore << 'EOF'
node_modules/
build/
.env
.env.local
npm-debug.log*
.DS_Store
EOF

# Initialize a Git repository
git init

# Stage all files
git add .

# Create your first commit
git commit -m "Initial commit: FitScale health & fitness app"

# Rename the default branch to main
git branch -M main

# Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/mtahasirajofficial/fitscale.git

# Push your code to GitHub
git push -u origin main
```

### If the repo already has files (e.g. a README created on GitHub)

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Day-to-day workflow

```bash
git status                       # See what changed
git add .                        # Stage all changes
git commit -m "Your message"     # Commit
git push                         # Push to GitHub
```

### Useful extras

```bash
git checkout -b feature/new-tool      # Create & switch to a feature branch
git pull origin main                  # Pull latest changes
git log --oneline --graph --decorate  # Compact commit history
```

---

## 🔮 Future Enhancements

- [ ] Save calculation history with localStorage
- [ ] Progress tracking with charts over time
- [ ] User accounts and cloud sync
- [ ] Water intake & step tracking
- [ ] Dark mode

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a feature branch, commit your changes, and open a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Muhammad Taha Siraj**

- GitHub: [@mtahasirajofficial](https://github.com/mtahasirajofficial)
- LinkedIn: [mtahasirajofficial](https://www.linkedin.com/in/mtahasirajofficial)

<p align="center">⭐ If you found FitScale useful, give it a star!</p>
