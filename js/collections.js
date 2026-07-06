/* Script della pagina Collections.
   L'elenco completo dei prodotti vive in js/products.js. */

const grid = document.getElementById('productGrid');

function renderGrid(filter){
  grid.innerHTML = '';
  products
    .filter(p => filter === 'all' || p.fam === filter)
    .forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="card-visual image-slot">
          <img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'">
        </div>
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
      `;
      grid.appendChild(card);
    });
}
renderGrid('all');

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(btn.dataset.fam);
  });
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
