# PaperCut

A static research-summary site based on the editable PaperCut Figma design. It uses plain HTML, CSS, and JavaScript, so GitHub Pages can serve it directly without a build step.

## Preview

From this folder, run `python -m http.server 8080` and open `http://localhost:8080`.

## Publish on GitHub Pages

The site files are in the root of [NiccoloNiccoli/papercut](https://github.com/NiccoloNiccoli/papercut). In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. Once Pages finishes publishing, the site will be at <https://niccoloniccoli.github.io/papercut/>.

## Editing content

The two-week editorial plan and paper selection rules live in [`PAPER_QUEUE.md`](PAPER_QUEUE.md). Its 30 dated slots are production candidates; the site only displays papers added to `src/papers.js`. The site's **Reading Queue** is a separate bookmark list stored in each visitor's browser.

Edit `src/papers.js`. Each paper needs a unique `slug`, `date` in `YYYY-MM-DD` format, `topic`, `title`, `summary`, `care`, and `readMinutes`. Add a `sections` object for a full detail page. The RoadTrip Attack entry is sourced from [arXiv:2607.03277](https://arxiv.org/abs/2607.03277). Entries without `sourceUrl` are illustrative layout content and are marked as samples on the site.

`images/roadtrip-figure-1.png` is Figure 1 from [the paper's HTML version](https://arxiv.org/html/2607.03277#S1.F1), reproduced unchanged with credit in the article.

The homepage heading uses the visitor's current date. It shows the newest available issue below that heading, and older entries in Archive. The queue is stored in each visitor's browser.

The PaperCut wordmark uses the supplied `Franxurter` font from `fonts/Franxurter.ttf`; the rest of the site uses Noto Sans. The supplied font's embedded license text says it may not be used for commercial purposes. Confirm licensing before using PaperCut commercially.

