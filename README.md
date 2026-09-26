# PaperCut

A static research-summary site based on the editable PaperCut Figma design. It uses plain HTML, CSS, and JavaScript, so GitHub Pages can serve it directly without a build step.

## Preview

From this folder, run `python -m http.server 8080` and open `http://localhost:8080`.

## Publish on GitHub Pages

The site files are in the root of [NiccoloNiccoli/papercut](https://github.com/NiccoloNiccoli/papercut). In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. Once Pages finishes publishing, the site will be at <https://niccoloniccoli.github.io/papercut/>.

## Editing content

Edit `src/papers.js`. Each paper needs a unique `slug`, `date` in `YYYY-MM-DD` format, `topic`, `title`, `summary`, `care`, and `readMinutes`. Add a `sections` object for a full detail page. The current entries are illustrative layout content; replace them with sourced papers before presenting them as research summaries.

The homepage heading uses the visitor's current date. It shows the newest available issue below that heading, and older entries in Archive. The queue is stored in each visitor's browser.

The wordmark uses `Frankfurter` when that font is installed or supplied as a licensed webfont; otherwise it falls back to Noto Sans Black. Add a licensed webfont file and an `@font-face` rule to `styles.css` when available. The rest of the site uses Noto Sans.

