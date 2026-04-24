<div align="center">

# Timer & Stopwatch Web App ⏱️

<p>
	<b>A clean, responsive timer + stopwatch experience built with vanilla web tech.</b>
</p>

<p>
	<a href="https://ahmed-adel-morsi.github.io/Timer-and-Stopwatch/"><img alt="Live Demo" src="https://img.shields.io/badge/Live-Demo-ff9800?style=for-the-badge"></a>
	<img alt="Tech" src="https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JavaScript-1a1a1a?style=for-the-badge">
	<img alt="Responsive" src="https://img.shields.io/badge/Responsive-Yes-4caf50?style=for-the-badge">
	<img alt="Storage" src="https://img.shields.io/badge/Storage-localStorage-333333?style=for-the-badge">
</p>

</div>

🚀 A clean, responsive web application that combines a countdown timer and a stopwatch in one interface. It is built with vanilla web technologies and includes preset timers, animated progress feedback, and completion sound alerts.

---

## 🧭 Quick Navigation

- 📌 [Overview](#overview)
- ✨ [Key Features](#key-features)
- 🛠️ [Tech Stack & Libraries](#tech-stack--libraries)
- 🗂️ [Project Structure](#project-structure)
- ⚙️ [How It Works](#how-it-works)
- 🚀 [Getting Started](#getting-started)
- 🎯 [Usage Guide](#usage-guide)
- 🌐 [Live Demo](#live-demo)
- 🧠 [Roadmap Ideas](#roadmap-ideas)
- 👨‍💻 [Author](#author)

## 📖 Overview

⏳ This project is designed for quick daily timing tasks like study sessions, workouts, focus blocks, and productivity sprints. It provides two modes:

- 🔔 Countdown Timer: set custom time, start/pause/resume/cancel, and get an audio alert on completion.
- ⌚ Stopwatch: track elapsed time with simple start/pause/resume/reset controls.

---

## ✨ Key Features

- 🔄 Two-tab experience: seamless switch between Timer and Stopwatch.
- 🔢 Flexible timer inputs: hours, minutes, and seconds with increment/decrement controls.
- 🧩 Preset timer manager: save custom presets with names, apply them instantly, and remove them anytime.
- 💾 Persistent local storage: presets survive page reloads.
- 🟠 Circular progress UI: live conic-gradient progress during countdown.
- ✅🔊 Completion feedback: success icon + sound notification.
- 📱💻 Responsive design: optimized for desktop and mobile screens.

---

## 🛠️ Tech Stack & Libraries

- 🧱 HTML5 for structure.
- 🎨 CSS3 for styling, responsive layouts, and animations.
- ⚡ Vanilla JavaScript (ES6) for app logic and DOM interactions.
- 🌐 Web APIs: `localStorage`, `setInterval` / `clearInterval`, and `HTMLAudioElement`.
- 🔤 External libraries/CDNs: Google Fonts (`Cairo`) and Font Awesome 4.7.

---

## 🗂️ Project Structure

```text
timerAndStopwatch/
├── index.html          # App layout, controls, and page sections
├── style.css           # Theme, responsive behavior, animations
├── main.js             # Timer/stopwatch logic and preset management
├── stopwatch.png       # Favicon
├── audio/
│   └── complete.mp3    # Timer completion sound
└── README.md
```

---

## ⚙️ How It Works

1. 🔢 Timer values are converted into total seconds.
2. ⏱️ A 1-second interval updates remaining time and UI progress.
3. ✅🔔 On reaching zero, the app stops the interval, switches the circle to a success state, shows a check icon, and plays the completion sound.
4. 🧠 Presets are stored as JSON in `localStorage` and rendered dynamically.
5. ⌛ Stopwatch mode increments seconds each tick and rolls into minutes/hours.

---

## 🚀 Getting Started

🎉 No build step or package installation is required.

1. Clone the repository:

```bash
git clone https://github.com/Ahmed-Adel-Morsi/Timer-and-Stopwatch
cd timerAndStopwatch
```

2. Open `index.html` in your browser.

---

## 🎯 Usage Guide

### ⏳ Timer Mode

1. 🧮 Set `Hours:Minutes:Seconds`.
2. Click `Start`.
3. Use `Pause` / `Resume` or `Cancel` as needed.
4. ➕ Optionally save the current values as a preset with `+`.

### ⌚ Stopwatch Mode

1. Click `Start` to begin counting.
2. Click `Pause` to stop temporarily.
3. Click `Resume` to continue.
4. Click `Reset` to return to `00:00:00`.

---

## 🌐 Live Demo

🎉 Try it here: [Live Demo](https://ahmed-adel-morsi.github.io/Timer-and-Stopwatch/)

---

## 🧠 Roadmap Ideas

- 🏁 Add lap list/history for stopwatch.
- 🔊 Add multiple alarm sounds and volume control.
- ♿ Add keyboard shortcuts and improved accessibility labels.
- 🌞 Add optional light theme.

---

## 👨‍💻 Author

- Ahmed Adel
- ahmedadel0239@gmail.com

<p align="center">
	☕💛 Made with focus, coffee, and JavaScript
</p>
