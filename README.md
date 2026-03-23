# Task Tracker

A simple React + Vite task tracker app for students to add assignments, mark them complete, and delete them.

## Features
- Add assignment tasks via input and `Add Task` button
- Complete tasks (toggles completed state with green text and ✔️)
- Delete tasks
- Empty state message when no tasks are pending
- Tasks persist across page reloads using localStorage

## Setup (local)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for GitHub Pages via GitHub Actions.

1. Set `base` in `vite.config.js`:
   ```js
   base: '/task-tracker/',
   ```
2. Commit and push to main
3. GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes `dist/`.
4. Live URL:
   `https://acidrisami.github.io/task-tracker/`

## File Structure

- `src/App.jsx` - main application with state and UI
- `src/components/TaskItem.jsx` - task row component with complete/delete
- `src/index.css` - Tailwind CSS base styles
- `vite.config.js` - base config for site path

## Notes
- Tasks are persisted in browser localStorage
- Built with React 18, Vite, and Tailwind CSS

