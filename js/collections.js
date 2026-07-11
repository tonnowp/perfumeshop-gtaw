/* Script della pagina Collections.
   L'elenco completo dei prodotti vive in js/products.js. */

const grid = document.getElementById('productGrid');
const priceMinInput = document.getElementById('priceMin');
const priceMaxInput = document.getElementById('priceMax');
const priceForm = document.getElementById('priceForm');
const priceReset = document.getElementById('priceReset');
const priceCount = document.getElementById('priceCount');

const allPrices = products.map(p => p.price);
const GLOBAL_MIN = Math.min(...allPrices);
const GLOBAL_MAX = Math.max(...allPrices);

let currentFam = 'all';
let currentMin = GLOBAL_MIN;
let currentMax = GLOBAL_MAX;

priceMinInput.placeholder = `$${GLOBAL_MIN}`;
priceMaxInput.placeholder = `$${GLOBAL_MAX}`;

function formatPrice(n){
  return `$${n.toLocaleString('en-US')}`;
}

function renderGrid(){
  grid.innerHTML = '';
  const filtered = products.filter(p =>
    (currentFam === 'all' || p.fam === currentFam) &&
    p.price >= currentMin && p.price <= currentMax
  );

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card-visual image-slot">
        <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
      </div>
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <div class="price-tag">${formatPrice(p.price)}</div>
    `;
    grid.appendChild(card);
  });

  if (priceCount){
    priceCount.textContent = filtered.length === products.length
      ? `${filtered.length} fragrances`
      : `${filtered.length} of ${products.length} fragrances`;
  }
}
renderGrid();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFam = btn.dataset.fam;
    renderGrid();
  });
});

priceForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const minVal = parseFloat(priceMinInput.value);
  const maxVal = parseFloat(priceMaxInput.value);
  currentMin = isNaN(minVal) ? GLOBAL_MIN : minVal;
  currentMax = isNaN(maxVal) ? GLOBAL_MAX : maxVal;

  // Se l'utente inverte i valori, li scambiamo automaticamente
  if (currentMin > currentMax){
    [currentMin, currentMax] = [currentMax, currentMin];
  }
  renderGrid();
});

priceReset.addEventListener('click', () => {
  priceMinInput.value = '';
  priceMaxInput.value = '';
  currentMin = GLOBAL_MIN;
  currentMax = GLOBAL_MAX;
  renderGrid();
});

// Effetto di comparsa graduale allo scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
  });
}, { threshold: 0.2 });
revealEls.forEach(el => io.observe(el));
