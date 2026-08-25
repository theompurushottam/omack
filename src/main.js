import { gsap } from 'gsap';
import { createIcons, ArrowDownUp, BarChart3, ChevronDown, FileDown, Search, Zap } from 'lucide';
import './styles.css';
import { comparisonCatalog } from './catalog.js';

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="site-shell">
    <header class="nav">
      <a class="brand" href="#top" aria-label="OMAC home">
        <span class="logo-mark"><img src="/assets/omac-logo.svg" alt="OMAC logo"></span>
        <span>
          <span class="brand-name">OMAC</span>
          <span class="brand-sub">ElectriCompare</span>
        </span>
      </a>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#solution">What We Do</a>
        <button class="nav-compare" type="button" data-open-comparison>
          <i data-lucide="bar-chart-3"></i>
          <span>Comparison</span>
        </button>
        <a href="#contact" class="nav-cta">Talk to the Team</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow"><span></span>Energy Infrastructure Intelligence</div>
          <h1>From Grid to Ground. Compare Smart, Consume Smarter.</h1>
          <p>OMAC brings EPC execution, solar intelligence, product comparison, and workforce training into one Bihar-first electrical platform.</p>
          <div class="hero-actions">
            <button class="btn primary" type="button" data-open-comparison>
              <i data-lucide="arrow-down-up"></i>
              <span>Open Comparison</span>
            </button>
            <a class="btn ghost" href="#contact">Book Demo Call</a>
          </div>
          <div class="stats-row">
            <div><strong>5</strong><span>Product categories</span></div>
            <div><strong>15</strong><span>Demo SKUs</span></div>
            <div><strong>Real</strong><span>Source sheet mapped</span></div>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="visual-board">
            <div class="visual-row active"><span>Solar Panels</span><b>94</b></div>
            <div class="visual-row"><span>Transformers</span><b>92</b></div>
            <div class="visual-row"><span>HVAC</span><b>90</b></div>
            <div class="pulse-line"></div>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div>
          <div class="section-kicker">About Us</div>
          <h2>Bihar-born. Operating since 2020.</h2>
        </div>
        <p>OMAC Electrical Private Limited is headquartered in Gaya, Bihar. OMAC EPC handles turnkey electrical and solar infrastructure, while ElectriCompare brings structured comparison data to buyers, installers, and procurement teams.</p>
      </section>

      <section id="solution" class="section">
        <div class="section-intro">
          <div class="section-kicker">What We Do</div>
          <h2>One ecosystem, three pillars</h2>
        </div>
        <div class="pillar-grid">
          <article class="pillar">
            <span class="pillar-chip navy"></span>
            <h3>OMAC EPC</h3>
            <p>Industrial electrification, HT/LT lines, substations, solar EPC, underground smart wiring, and site execution.</p>
          </article>
          <article class="pillar">
            <span class="pillar-chip amber"></span>
            <h3>ElectriCompare</h3>
            <p>Appliance and electrical product comparison, solar ROI, smart-meter billing, and decision support for buyers.</p>
          </article>
          <article class="pillar">
            <span class="pillar-chip blue"></span>
            <h3>Training Academy</h3>
            <p>Solar PV, cable jointing, safety, and fault-finding training that feeds trained local talent into OMAC projects.</p>
          </article>
        </div>
      </section>

      <section id="comparison" class="comparison-section" hidden>
        <div class="comparison-top">
          <div>
            <div class="section-kicker on-dark">Investor Demo</div>
            <h2>Product Comparison Engine</h2>
            <p>Dropdown-driven product listing and comparison for solar, transformers, HVAC, inverters, and batteries.</p>
          </div>
          <div class="source-actions">
            <a class="btn small amber" href="/compare-sheet.pdf" target="_blank" rel="noopener">
              <i data-lucide="file-down"></i>
              <span>Source PDF</span>
            </a>
          </div>
        </div>

        <div class="compare-console">
          <div class="select-grid">
            <label class="field">
              <span>Category</span>
              <span class="select-wrap">
                <select id="categorySelect"></select>
                <i data-lucide="chevron-down"></i>
              </span>
            </label>
            <label class="field">
              <span>Product A</span>
              <span class="select-wrap">
                <select id="productASelect"></select>
                <i data-lucide="chevron-down"></i>
              </span>
            </label>
            <label class="field">
              <span>Product B</span>
              <span class="select-wrap">
                <select id="productBSelect"></select>
                <i data-lucide="chevron-down"></i>
              </span>
            </label>
            <button id="compareButton" class="btn compare-now" type="button">
              <i data-lucide="zap"></i>
              <span>Compare Now</span>
            </button>
          </div>

          <div class="category-meta">
            <div>
              <span>Primary audience</span>
              <strong id="audienceText"></strong>
            </div>
            <div>
              <span>Metric focus</span>
              <strong id="metricFocusText"></strong>
            </div>
          </div>

          <div class="result-stage">
            <article class="product-card" id="productACard"></article>
            <div class="score-bridge">
              <span id="winnerBadge"></span>
              <strong>vs</strong>
            </div>
            <article class="product-card" id="productBCard"></article>
          </div>

          <div class="table-panel">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th id="tableProductA">Product A</th>
                  <th id="tableProductB">Product B</th>
                </tr>
              </thead>
              <tbody id="metricTable"></tbody>
            </table>
          </div>
        </div>

       
      </section>

      <section class="segments">
        <div class="section-kicker">Who We Serve</div>
        <h2>Six segments, one connected ecosystem</h2>
        <div class="segments-row">
          <span>MSMEs & Factory Owners</span>
          <span>Commercial Establishments</span>
          <span>Builders & Premium Homeowners</span>
          <span>PM Surya Ghar Households</span>
          <span>Appliance-Comparing Consumers</span>
          <span>Local Workforce & Trainees</span>
        </div>
      </section>

      <section id="contact" class="contact">
        <div>
          <div class="section-kicker">Get In Touch</div>
          <h2>Talk to us about a project, solar install, or comparison demo.</h2>
        </div>
        <div class="contact-card">
          <strong>OMAC & ElectriCompare</strong>
          <span>Himanshu Ranjan</span>
          <a href="mailto:himanshuthehulk6@gmail.com">himanshuthehulk6@gmail.com</a>
          <a href="tel:+917033336559">+91 70333 36559</a>
        </div>
      </section>
    </main>
  </div>
`;

const categorySelect = document.querySelector('#categorySelect');
const productASelect = document.querySelector('#productASelect');
const productBSelect = document.querySelector('#productBSelect');
const compareButton = document.querySelector('#compareButton');
const comparisonSection = document.querySelector('#comparison');

comparisonCatalog.forEach((category) => {
  categorySelect.add(new Option(category.name, category.id));
});

function selectedCategory() {
  return comparisonCatalog.find((category) => category.id === categorySelect.value) || comparisonCatalog[0];
}

function fillProductSelects() {
  const category = selectedCategory();
  productASelect.replaceChildren();
  productBSelect.replaceChildren();

  category.products.forEach((product) => {
    productASelect.add(new Option(product.name, product.id));
    productBSelect.add(new Option(product.name, product.id));
  });

  productASelect.value = category.products[0].id;
  productBSelect.value = category.products[1]?.id || category.products[0].id;
}

function selectedProducts() {
  const category = selectedCategory();
  const productA = category.products.find((product) => product.id === productASelect.value) || category.products[0];
  const productB = category.products.find((product) => product.id === productBSelect.value) || category.products[1] || category.products[0];
  return { category, productA, productB };
}

function productCard(product, label) {
  return `
    <span class="option-label">${label}</span>
    <h3>${product.name}</h3>
    <p>${product.maker}</p>
    <div class="score-ring" style="--score:${product.score}">
      <span>${product.score}</span>
      <small>match</small>
    </div>
    <div class="price-band">${product.priceBand}</div>
  `;
}

function renderComparison(animate = true) {
  const { category, productA, productB } = selectedProducts();
  const metricNames = Array.from(new Set([...Object.keys(productA.metrics), ...Object.keys(productB.metrics)]));
  const winner = productA.score === productB.score ? 'Balanced match' : `${productA.score > productB.score ? productA.name : productB.name} leads`;

  document.querySelector('#audienceText').textContent = category.audience;
  document.querySelector('#metricFocusText').textContent = category.metricFocus;
  document.querySelector('#productACard').innerHTML = productCard(productA, 'Product A');
  document.querySelector('#productBCard').innerHTML = productCard(productB, 'Product B');
  document.querySelector('#winnerBadge').textContent = winner;
  document.querySelector('#tableProductA').textContent = productA.name;
  document.querySelector('#tableProductB').textContent = productB.name;
  document.querySelector('#metricTable').innerHTML = metricNames.map((metric) => `
    <tr>
      <td>${metric}</td>
      <td>${productA.metrics[metric] || '-'}</td>
      <td>${productB.metrics[metric] || '-'}</td>
    </tr>
  `).join('');

  if (animate) {
    gsap.fromTo('.product-card, .table-panel tbody tr', { opacity: 0, y: 12 }, {
      opacity: 1,
      y: 0,
      duration: 0.35,
      stagger: 0.035,
      ease: 'power2.out'
    });
  }
}

function openComparison() {
  const wasHidden = comparisonSection.hidden;
  comparisonSection.hidden = false;
  comparisonSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (wasHidden) {
    gsap.fromTo(comparisonSection, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' });
  }
}

document.querySelectorAll('[data-open-comparison]').forEach((button) => {
  button.addEventListener('click', openComparison);
});

categorySelect.addEventListener('change', () => {
  fillProductSelects();
  renderComparison();
});
productASelect.addEventListener('change', () => renderComparison());
productBSelect.addEventListener('change', () => renderComparison());
compareButton.addEventListener('click', () => {
  openComparison();
  renderComparison();
});

fillProductSelects();
renderComparison(false);
createIcons({ icons: { ArrowDownUp, BarChart3, ChevronDown, FileDown, Search, Zap } });

gsap.fromTo('.hero-copy > *, .hero-visual', { opacity: 0, y: 18 }, {
  opacity: 1,
  y: 0,
  duration: 0.55,
  stagger: 0.08,
  ease: 'power2.out'
});
