import { papers, topics } from './papers.js?v=20260927-real-only-1';

const app = document.querySelector('#app');
const search = document.querySelector('#search');
const today = new Date();
const newestDate = papers[0].date;
const state = { topic: 'All topics', query: '' };
const queueKey = 'papercut-reading-queue-v1';
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const longDate = date => new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const shortDate = date => new Date(`${date}T12:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
const paperUrl = slug => `./?paper=${encodeURIComponent(slug)}`;
const getQueue = () => { try { const saved = JSON.parse(localStorage.getItem(queueKey)); return Array.isArray(saved) ? saved : []; } catch { return []; } };
const setQueue = value => { try { localStorage.setItem(queueKey, JSON.stringify(value)); } catch { /* Reading queue remains session-only when storage is blocked. */ } };
const currentPaper = () => papers.find(p => p.slug === new URLSearchParams(location.search).get('paper'));
const isSaved = slug => getQueue().includes(slug);

function card(paper) {
  return `<article class="paper-card">
    <div class="card-meta"><span class="topic-pill">${escape(paper.topic)}</span><span>${escape(paper.venue)} · ${paper.readMinutes} min read</span></div>
    ${paper.visuals?.hero ? `<a class="card-visual" href="${paperUrl(paper.slug)}" aria-label="Read ${escape(paper.title)}"><img src="${escape(paper.visuals.hero.src)}" alt="${escape(paper.visuals.hero.alt)}" loading="eager"></a><p class="card-image-credit"><a href="${escape(paper.visuals.hero.creditUrl)}" target="_blank" rel="noopener noreferrer">Figure 1 from the paper ↗</a></p>` : ''}
    <h3><a href="${paperUrl(paper.slug)}">${escape(paper.title)}</a></h3>
    <p class="card-summary">${escape(paper.summary)}</p>
    <div class="care-preview"><strong>Why I might care</strong><p>${escape(paper.care)}</p></div>
    <div class="card-actions"><a class="button button-dark" href="${paperUrl(paper.slug)}">Read summary <span aria-hidden="true">→</span></a><button class="button button-light queue-button" data-save="${escape(paper.slug)}" aria-pressed="${isSaved(paper.slug)}">${isSaved(paper.slug) ? '✓ Saved' : '+ Reading queue'}</button><span class="read-time">${paper.readMinutes} min read</span></div>
  </article>`;
}

function topicsNav() {
  return `<aside class="topics-sidebar" id="topics"><h2>Topics</h2><nav aria-label="Filter by topic">${topics.map(topic => `<button class="topic-button ${state.topic === topic ? 'selected' : ''}" data-topic="${escape(topic)}" aria-pressed="${state.topic === topic}">${escape(topic)}</button>`).join('')}</nav></aside>`;
}

function listPanel(title, entries, emptyMessage) {
  return `<section class="side-panel"><h2>${title}</h2>${entries.length ? entries.map(p => `<a class="side-entry" href="${paperUrl(p.slug)}"><strong>${escape(p.title)}</strong><span>${escape(shortDate(p.date))} · ${escape(p.topic)}</span></a>`).join('') : `<p class="empty-small">${emptyMessage}</p>`}</section>`;
}

function glancePanel(paper) {
  return `<section class="side-panel"><h2>At a glance</h2><div class="side-entry"><strong>Topic</strong><span>${escape(paper.topic)}</span></div><div class="side-entry"><strong>Reading time</strong><span>${paper.readMinutes} minutes</span></div><div class="side-entry"><strong>Your next step</strong><span>${escape(paper.care)}</span></div></section>`;
}

function home() {
  document.title = 'PaperCut — Daily research summaries';
  document.querySelector('.nav-today').setAttribute('aria-current', 'page');
  const matches = papers.filter(p => (state.topic === 'All topics' || p.topic === state.topic) && (!state.query || `${p.title} ${p.summary} ${p.topic} ${p.authors ?? ''}`.toLowerCase().includes(state.query)));
  const featured = matches.filter(p => p.date === newestDate);
  const archived = matches.filter(p => p.date !== newestDate).sort((a, b) => b.date.localeCompare(a.date));
  const saved = getQueue().map(slug => papers.find(p => p.slug === slug)).filter(Boolean);
  app.innerHTML = `<div class="content-grid">${topicsNav()}<div class="home-main">
    <h1>${escape(today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }))}</h1>
    <div class="cards">${featured.length ? featured.map(card).join('') : '<div class="empty-state">No summaries match this search. Try another topic or keyword.</div>'}</div>
    <section class="archive" id="archive"><h2>Archive</h2>${archived.length ? archived.map(p => `<a class="archive-row" href="${paperUrl(p.slug)}"><span>${escape(shortDate(p.date))}</span><strong>${escape(p.title)}</strong><span class="archive-read">Read →</span></a>`).join('') : '<p class="empty-small">No older summaries yet.</p>'}</section>
  </div><aside class="right-sidebar">${listPanel('Reading Queue', saved, 'Save a paper to read it later.')}${listPanel('Recent Summaries', [...papers].filter(p => p.date !== newestDate).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3), 'No earlier summaries yet.')}</aside></div>`;
}

function visualFigure(visual, className = '') {
  return `<figure class="article-figure ${className}"><div class="figure-media"><img src="${escape(visual.src)}" alt="${escape(visual.alt)}" loading="lazy"></div><figcaption>${visual.creditUrl ? `<a href="${escape(visual.creditUrl)}" target="_blank" rel="noopener noreferrer">${escape(visual.caption)} ↗</a>` : escape(visual.caption)}</figcaption></figure>`;
}

function section(id, paragraphs) {
  return `<section class="summary-section ${id === 'Why I might care' ? 'highlight-section' : ''}" id="${id.toLowerCase().replace(/[^a-z0-9]+/g, '-')}"><h2>${escape(id)}</h2>${paragraphs.map(text => `<p>${escape(text)}</p>`).join('')}</section>`;
}

function detail(paper) {
  document.title = `${paper.title} — PaperCut`;
  document.querySelector('.nav-today').removeAttribute('aria-current');
  const content = paper.sections;
  const order = ['TL;DR', 'Why I might care', 'Why it matters', 'Main idea', 'Method', 'Experiments', 'What is new', 'Limitations'];
  app.innerHTML = `<div class="content-grid detail-grid"><aside class="detail-nav"><a class="back-link" href="./">← Back to today</a><div class="on-this-page"><strong>ON THIS PAGE</strong><nav aria-label="On this page">${order.map(key => `<a href="#${key.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">${escape(key)}</a>`).join('')}</nav></div></aside>
  <article class="detail-main"><div class="detail-intro"><span class="topic-pill">${escape(paper.topic)}</span><h1>${escape(paper.title)}</h1><p class="detail-meta">${escape(paper.authors)} · ${escape(paper.venue)} · Published ${escape(longDate(paper.publishedDate))} · ${paper.readMinutes} min read</p><div class="detail-actions"><a class="button button-dark" href="${escape(paper.sourceUrl)}" target="_blank" rel="noopener noreferrer">Read paper ↗</a><a class="button button-light" href="${escape(paper.pdfUrl)}" target="_blank" rel="noopener noreferrer">PDF ↗</a><button class="button button-light queue-button" data-save="${escape(paper.slug)}" aria-pressed="${isSaved(paper.slug)}">${isSaved(paper.slug) ? '✓ Saved' : '+ Reading queue'}</button></div></div>
  ${paper.visuals?.hero ? visualFigure(paper.visuals.hero, 'hero-figure') : ''}<div class="summary-panel">${order.map(key => section(key, content[key])).join('')}</div><p class="source-note">Summary based on the <a href="${escape(paper.sourceUrl)}" target="_blank" rel="noopener noreferrer">original paper on arXiv ↗</a>. “Why I might care” includes a suggested follow-up.</p></article>
  <aside class="right-sidebar">${glancePanel(paper)}${papers.length > 1 ? listPanel('Related summaries', papers.filter(p => p.slug !== paper.slug).slice(0, 2), 'No related summaries yet.') : ''}<div class="green-note"><strong>Read with a question.</strong><p>What would I test differently in my own setup?</p></div></aside></div>`;
}

function render() {
  const paper = currentPaper();
  if (paper) detail(paper); else home();
}

document.addEventListener('click', event => {
  const topic = event.target.closest('[data-topic]');
  if (topic) { state.topic = topic.dataset.topic; home(); return; }
  const save = event.target.closest('[data-save]');
  if (save) { const slug = save.dataset.save; const queue = getQueue(); setQueue(queue.includes(slug) ? queue.filter(item => item !== slug) : [...queue, slug]); render(); }
});
search.addEventListener('input', () => { state.query = search.value.trim().toLowerCase(); if (currentPaper()) history.replaceState(null, '', './'); home(); });
window.addEventListener('popstate', render);
render();

