# Renuka Bagade, Retro Portfolio
React 18 + Vite + Lucide. Run: `npm install && npm run dev`. Build: `npm run build`.
Deploy on Vercel: push to GitHub, import the repo, framework Vite, deploy.
## Replace placeholders
- Device art: put the supplied transparent PNG at `public/retro-device.png` (1315x1196). Without it, a simple fallback shows and keys will not line up.
- Email, social links, resume path: `src/data/content.js` (`PROFILE`). Empty values hide the link. Resume PDF: `public/resume.pdf`.
- Projects: `github`, `demo`, `img` in `PROJECTS` (images in `public/projects/`).
- Certificates: `src/data/certificates.js`, images in `public/certificates/`.
- Skill proficiency labels in `SKILLS` are estimates; edit them to be accurate.
## Notes
Resume lives at `public/resume.pdf`. Project screenshots are in `public/projects/`. Repos and live demos are set in `PROJECTS` (`src/data/content.js`). IntelliTour and EmployeeAttrition have no live demo yet.
