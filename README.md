# PaperCut

A static research-summary site based on the editable PaperCut Figma design. It uses plain HTML, CSS, and JavaScript, so GitHub Pages can serve it directly without a build step.

## Preview

From this folder, run `python -m http.server 8080` and open `http://localhost:8080`.

## Publish on GitHub Pages

1. Create a public GitHub repository and upload the contents of this folder to its root.
2. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
3. GitHub will display the published URL in the same Pages settings screen.

## Editing content

Edit `src/papers.js`. Each paper needs a unique `slug`, `date` in `YYYY-MM-DD` format, `topic`, `title`, `summary`, `care`, and `readMinutes`. Add a `sections` object for a full detail page. The current entries are illustrative layout content; replace them with sourced papers before presenting them as research summaries.

The homepage heading uses the visitor's current date. It shows the newest available issue below that heading, and older entries in Archive. The queue is stored in each visitor's browser.

The wordmark uses `Frankfurter` when that font is installed or supplied as a licensed webfont; otherwise it falls back to Noto Sans Black. Add a licensed webfont file and an `@font-face` rule to `styles.css` when available. The rest of the site uses Noto Sans.

