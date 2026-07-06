/* Script della homepage.
   L'elenco completo dei prodotti vive in js/products.js
   (condiviso con collections.html). Qui in home mostriamo
   solo un'anteprima: i primi FEATURED_COUNT profumi. */

const FEATURED_COUNT = 4;
const grid = document.getElementById('productGrid');

function renderFeatured(){
  grid.innerHTML = '';
  products
    .slice(0, FEATURED_COUNT)
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
renderFeatured();

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
