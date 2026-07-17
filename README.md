# Pink & White CV — React + Vite + Tailwind

## Run it in VS Code

1. Open this folder in VS Code.
2. Open a terminal (``Ctrl + ` ``) and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Edit your content

Open **`src/data.js`** — every piece of text on the CV (name, contact info,
skills, projects, experience, education, certifications, languages) lives in
that one file. You do not need to touch any other file to update your info.

## Change the design

- **Colors**: edit the `cv` color palette in `tailwind.config.js`.
- **Layout / sections**: edit `src/CV.jsx`.
- **Fonts**: swap the Google Fonts link in `index.html` (currently Poppins for
  headings, Inter for body text).

## Export to PDF

Click the **"Print / Save as PDF"** button in the top-right corner of the page,
then choose "Save as PDF" as the destination in your browser's print dialog.

## Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder, which you can deploy
anywhere (Vercel, Netlify, GitHub Pages, etc.).
