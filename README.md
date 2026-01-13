# Countdown Timer & Stopwatch

A browser-based time tracking tool that combines a countdown timer with preset management and a standard stopwatch. Built for quick access when you need to time tasks or track elapsed time.

## What It Does

This is a straightforward web application with two modes:

**Timer Mode**

- Set hours, minutes, and seconds for countdown
- Save custom timer presets with names (stored in localStorage)
- Visual progress indicator with circular gradient
- Audio notification when countdown completes
- Pause and resume functionality

**Stopwatch Mode**

- Standard stopwatch with start, pause, and reset
- Displays hours, minutes, and seconds
- Simple lap time tracking

## Features

- Tab switching between timer and stopwatch modes
- Increment/decrement buttons for quick time adjustments
- Preset timer library with add/remove functionality
- Persistent storage for saved timers
- Responsive layout that works on mobile and desktop
- Dark theme UI with orange accents

## Tech Stack

Vanilla JavaScript, HTML5, CSS3. No frameworks or build tools required.

## How It Works

The timer converts all inputs to total seconds, then counts down using `setInterval()`. The circular progress indicator updates via a CSS conic-gradient based on remaining time percentage. Preset timers are stored in localStorage as JSON and persist between sessions.

The stopwatch counts up from zero, updating the display every second. Both timer and stopwatch handle pause/resume by clearing and restarting their intervals.

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No server or installation needed

```bash
git clone https://github.com/Ahmed-Adel-Morsi/Timer-and-Stopwatch
cd timerAndStopwatch
```

Then just open the `index.html` file directly in your browser.

## File Structure

```
├── index.html          # Main HTML structure
├── main.js             # Timer and stopwatch logic
├── style.css           # Styling and responsive layout
└── audio/              # Sound files for timer completion
```

## Live Demo

View the live version here: [Live Demo](https://ahmed-adel-morsi.github.io/Timer-and-Stopwatch/)

## Implementation Notes

The project is built using plain JavaScript with direct DOM manipulation.
Timer presets are saved in localStorage, allowing them to persist between sessions.

The countdown logic is based on total seconds, while the circular progress
indicator updates dynamically using a CSS conic-gradient.

The stopwatch and timer both rely on controlled intervals with proper
pause and resume handling to keep timing accurate.

## Contact

For questions or feedback, please contact the project maintainer:

- **Name**: Ahmed Adel
- **Email**: ahmedadel0239@gmail.com
