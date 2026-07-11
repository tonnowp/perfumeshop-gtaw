/* ==========================================================
   ELENCO PRODOTTI

   - name:  nome della fragranza
   - fam:   categoria per il filtro — deve corrispondere ESATTAMENTE
            a uno dei valori data-fam dei bottoni:
            "Women" | "Men" | "UoL"
   - desc:  breve descrizione
   - image: percorso dell'immagine in images/prodotti/
   - price: prezzo in $ (numero, senza simboli) — usato in collections.html
            per il filtro a fascia di prezzo
   ========================================================== */
const products = [
  { name:"Florale",     fam:"Women",   desc:"A luxurious, modern bouquet where the seductive warmth of night-blooming jasmine meets the delicate romance of Damask rose. Infused with a soft, velvety base of Madagascar vanilla and white musk, it leaves an elegant, powdery trail that embodies timeless femininity.", image:"images/prodotti/florale.png", price:5000 },
  { name:"Blossom Éclat",    fam:"Women", desc:"A luminous and sophisticated floral-fruity masterpiece. It opens with the crisp, sparkling sweetness of white pear and orange blossom, gently unfolding into a rich heart of absolute iris. A base of smooth praline and patchouli adds an addictive, modern touch of elegance.",       image:"images/prodotti/blossom.png", price:5000 },
  { name:"Rouge Velours",   fam:"Women",   desc:"An opulent and deeply seductive fragrance. It pairs the dark, syrupy sweetness of black cherry and roasted almond with a rich heart of crimson rose. A warm, lingering base of amberwood and tonka bean gives it a striking, nocturnal allure.",           image:"images/prodotti/Rouge.png", price:5000 },
  { name:"Orchid Nuit", fam:"Women",   desc:"An enigmatic and deeply sensual scent centered around rare black orchid and dark plum. The fragrance is sharpened by a touch of pink pepper and grounded in an earthy, luxurious base of patchouli, vetiver, and rich dark chocolate.",          image:"images/prodotti/orchid.png", price:5000 },
  { name:"Soie Blanche",      fam:"Women", desc:"The ultimate expression of clean, understated luxury. It captures the crisp sensation of white silk on the skin with notes of bright aldehydes, soft cotton flower, and powdery white iris, resting beautifully on a delicate bed of blonde woods.",               image:"images/prodotti/SoieBlanche.png", price:5000 },
  { name:"Oud Voyage",      fam:"Men",   desc:"A deep, magnetic fragrance that opens with the intense warmth of dark Cambodian Oud wood, balanced by the sharp spice of saffron and rich cardamom. The scent settles into a sophisticated base of roasted tonka bean and leather, creating a powerful, mysterious, and commanding presence.",           image:"images/prodotti/oud.png", price:5000 },
  { name:"Bleu Impérial",      fam:"Men",   desc:"A sharp, commanding scent that balances raw freshness with deep woodiness. It leads with a striking burst of cold mint and crushed pink pepper, moving swiftly into a solid heart of cedarwood and vetiver. The fragrance closes with a luxurious, lingering trace of dark incense and ambergris.",           image:"images/prodotti/bleu.png", price:5000 },
  { name:"Tabac Doré",      fam:"Men",   desc:"A rich, warm, and comforting fragrance built for the modern gentleman. It highlights the sweet, smoky aroma of premium tobacco leaves and rich Cuban rum, layered with spicy cinnamon and drizzled with warm, golden honey over a base of dark vanilla.",           image:"images/prodotti/tabac.png", price:5000 },
  { name:"Cuir Noir",      fam:"Men",   desc:"A bold, ruggedly sophisticated fragrance that celebrates ultra-premium leather. It blends the smoky texture of black suede with wild Tuscan iris and saffron, supported by a heavy, masculine backbone of dark woods, styrax, and rich frankincense.",           image:"images/prodotti/noir.png", price:5000 },
  { name:"Vert Sauvage",      fam:"Men",   desc:"A vibrant, masculine green fragrance that feels like an upscale escape into the wild. Crisp galbanum, crushed mint leaves, and bitter bergamot collide with a sharp heart of violet leaf, resting on a clean, modern base of oakmoss and mineral amber.",           image:"images/prodotti/vert.png", price:5000 },
];
