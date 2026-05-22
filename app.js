// ========== DATA ==========
const games = [
    { id: 1,  title: "Cyberpunk 2077",         genre: "RPG",       price: 59.99, rating: 4.8, year: 2020, platforms: ["PC", "PS5", "Xbox"],           image: "cyberpunk.jpg",  description: "An open-world action-adventure RPG set in the dark future of Night City.",                              moods: ["story", "open-world", "action"] },
    { id: 2,  title: "Halo Infinite",           genre: "Shooter",   price: 0,     rating: 4.5, year: 2021, platforms: ["PC", "Xbox"],                   image: " halo infinite.jpg",  description: "Step inside the armor of humanity's greatest hero in an epic adventure.",                               moods: ["action"] },
    { id: 3,  title: "The Witcher 3",           genre: "Adventure", price: 39.99, rating: 4.9, year: 2015, platforms: ["PC", "PS5", "Switch"],           image: "the witcher.jpg",   description: "A story-driven open world RPG set in a breathtaking fantasy universe.",                                moods: ["story", "open-world", "chill"] },
    { id: 4,  title: "Grand Theft Auto V",      genre: "Action",    price: 29.99, rating: 4.8, year: 2013, platforms: ["PC", "PS5", "Xbox"],             image: "GTA V.jpg",   description: "Experience the ultimate open-world playground in Los Santos.",                                          moods: ["action", "open-world"] },
    { id: 5,  title: "Civilization VI",         genre: "Strategy",  price: 59.99, rating: 4.6, year: 2016, platforms: ["PC", "Switch"],                  image: "Civilization4.jpg",   description: "Build an empire to stand the test of time in this legendary strategy game.",                           moods: ["strategy"] },
    { id: 6,  title: "Red Dead Redemption 2",   genre: "Action",    price: 59.99, rating: 4.9, year: 2019, platforms: ["PC", "PS5", "Xbox"],             image: "rdr 2.jpg",  description: "An epic tale of life in America's unforgiving heartland.",                                              moods: ["story", "open-world", "chill"] },
    { id: 7,  title: "Final Fantasy VII Remake",genre: "RPG",       price: 69.99, rating: 4.7, year: 2020, platforms: ["PS5", "PC"],                     image: "final fansty 4.jpg",  description: "A spectacular reimagining of one of the most visionary games ever created.",                           moods: ["story", "action"] },
    { id: 8,  title: "Elden Ring",              genre: "Adventure", price: 59.99, rating: 4.9, year: 2022, platforms: ["PC", "PS5", "Xbox"],             image: "elden ring.jpg",  description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",                    moods: ["action", "open-world"] },
    { id: 9,  title: "Hollow Knight",           genre: "Adventure", price: 14.99, rating: 4.9, year: 2017, platforms: ["PC", "PS5", "Xbox", "Switch"],   image: "hollow knight.jpg",   description: "A challenging, beautiful action-adventure through a vast ruined kingdom.",                              moods: ["chill", "story"] },
    { id: 10, title: "Stardew Valley",          genre: "RPG",       price: 13.99, rating: 4.9, year: 2016, platforms: ["PC", "PS5", "Xbox", "Switch"],   image: "stardew valley.jpg",   description: "Move to the countryside and build your farming dream in this relaxing RPG.",                           moods: ["chill", "story"] },
    { id: 11, title: "Resident Evil Village",   genre: "Horror",    price: 39.99, rating: 4.7, year: 2021, platforms: ["PC", "PS5", "Xbox"],             image: "resident evil village.jpg",  description: "Experience survival horror like never before in a mysterious village.",                                 moods: ["horror", "action"] },
    { id: 12, title: "FIFA 24",                 genre: "Sports",    price: 59.99, rating: 4.2, year: 2023, platforms: ["PC", "PS5", "Xbox"],             image: "fifa 24.jpg",  description: "The world's game with HyperMotionV technology.",                                                        moods: ["action"] },
    { id: 13, title: "Terraria",                genre: "Adventure", price: 9.99,  rating: 4.9, year: 2011, platforms: ["PC", "PS5", "Xbox", "Switch"],   image: "Terraria.jpg",   description: "Dig, fight, explore, build in this 2D sandbox adventure with endless content.",                        moods: ["chill", "strategy"] },
    { id: 14, title: "Dark Souls III",          genre: "Action",    price: 59.99, rating: 4.8, year: 2016, platforms: ["PC", "Xbox"],                    image: "Dark Souls III.jpg",   description: "The latest chapter in the Dark Souls series. Face the end of the age of fire.",                       moods: ["action", "horror"] },
    { id: 15, title: "Minecraft",               genre: "Adventure", price: 26.95, rating: 4.9, year: 2011, platforms: ["PC", "PS5", "Xbox", "Switch"],   image: "minecraft.jpg", description: "Explore, build, and survive in an infinite world made entirely of blocks.", moods: ["chill", "strategy", "open-world"], isNew: true },
    { id: 16, title: "Apex Legends",            genre: "Shooter",   price: 0,     rating: 4.6, year: 2019, platforms: ["PC", "PS5", "Xbox"],             image: "Apex Legends.jpg",  description: "A free-to-play battle royale hero shooter with a diverse cast of legends.",                            moods: ["action"] },
];

const faqs = [
    { q: "How do I purchase a game?",                   a: "Click '+ Cart' on any card to add it to your cart. Open the cart from the navbar, review your items, and click 'Checkout Now' to complete your purchase." },
    { q: "Are there any free games available?",         a: "Yes! Halo Infinite and Apex Legends are completely free-to-play — labelled FREE in red. Just add them to your library and start playing." },
    { q: "What platforms are supported?",               a: "We carry games for PC, PlayStation 5, Xbox Series X/S, and Nintendo Switch. Use the platform filter tabs to narrow down compatible titles." },
    { q: "How does the Wishlist work?",                 a: "Click the heart button on any card to save it to your wishlist. Your wishlist appears in a dedicated section below the main grid for your session." },
    { q: "How do I get personalized recommendations?",  a: "Scroll to the 'Not Sure What To Play?' section, pick your mood and platform, then hit 'Get My Suggestions' for curated picks from our library." },
    { q: "How are ratings calculated?",                 a: "Ratings are aggregated from Steam, Metacritic, and OpenCritic, representing combined critic and community sentiment at the time of listing." },
    { q: "What is your refund policy?",                 a: "We offer a 14-day refund for games with less than 2 hours of playtime. Contact support@proarena.games within the refund window." },
    { q: "What payment methods are accepted?",          a: "We accept Visa, MasterCard, Amex, PayPal, UPI, and select cryptocurrencies. All transactions use 256-bit SSL encryption." },
    { q: "Can I filter by multiple criteria at once?",  a: "Yes — the genre filter, platform filter, sort dropdown, and search bar all work together simultaneously for precise results." },
    { q: "Is my personal data safe?",                   a: "Absolutely. We never sell your data. All personal information is encrypted at rest and in transit. See our Privacy Policy for full details." },
];

// ========== STATE ==========
let cart = [], wishlist = [];
let currentCat = 'All', currentPlat = 'All', currentSearch = '', currentSort = 'default';
let loggedIn = false, currentUser = '';

// ========== INIT ==========
window.addEventListener('DOMContentLoaded', () => {
    renderGames();
    renderFAQs();
    attachAll();
});

window.addEventListener('scroll', () => {
    document.getElementById('backTop').classList.toggle('visible', scrollY > 400);
});

// ========== AUTH ==========
function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach((b, i) => {
        b.classList.remove('active');
        if (['signin', 'signup', 'forgot'][i] === tab) b.classList.add('active');
    });
    document.querySelectorAll('.auth-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
    // Reset forgot success state
    if (tab === 'forgot') {
        document.getElementById('forgot-form').style.display = 'block';
        document.getElementById('forgot-success').classList.remove('visible');
    }
}

function showAuth() {
    document.getElementById('authOverlay').classList.remove('hidden');
}

function hideAuth() {
    document.getElementById('authOverlay').classList.add('hidden');
}

function doSignIn() {
    const email = document.getElementById('si-email').value.trim();
    const pass  = document.getElementById('si-pass').value;
    if (!email || !pass)          { toast('Please fill in all fields.'); return; }
    if (!email.includes('@'))     { toast('Enter a valid email address.'); return; }
    // Demo: accept any credentials
    currentUser = email.split('@')[0];
    loggedIn = true;
    document.getElementById('loginNavBtn').textContent = '⊙ ' + currentUser;
    hideAuth();
    toast('Welcome back, ' + currentUser + '!');
}

function doSignUp() {
    const fname = document.getElementById('su-fname').value.trim();
    const email = document.getElementById('su-email').value.trim();
    const pass  = document.getElementById('su-pass').value;
    const pass2 = document.getElementById('su-pass2').value;
    const user  = document.getElementById('su-user').value.trim();
    if (!fname || !email || !pass || !pass2 || !user) { toast('Please fill in all fields.'); return; }
    if (!email.includes('@'))    { toast('Enter a valid email address.'); return; }
    if (pass.length < 8)         { toast('Password must be at least 8 characters.'); return; }
    if (pass !== pass2)          { toast('Passwords do not match!'); return; }
    currentUser = user;
    loggedIn = true;
    document.getElementById('loginNavBtn').textContent = '⊙ ' + currentUser;
    hideAuth();
    toast('Account created! Welcome, ' + currentUser + '!');
}

function doForgot() {
    const email = document.getElementById('fp-email').value.trim();
    if (!email || !email.includes('@')) { toast('Enter a valid email address.'); return; }
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById('forgot-success').classList.add('visible');
}

function checkStrength(val) {
    const bars = [
        document.getElementById('bar1'),
        document.getElementById('bar2'),
        document.getElementById('bar3')
    ];
    bars.forEach(b => { b.className = 'pw-bar'; });
    if (val.length === 0) return;
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val) && /[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    const cls = ['weak', 'medium', 'strong'];
    for (let i = 0; i < score; i++) bars[i].classList.add(cls[score - 1]);
}

function socialAuth(provider) {
    currentUser = provider + 'User';
    loggedIn = true;
    document.getElementById('loginNavBtn').textContent = '⊙ ' + currentUser;
    hideAuth();
    toast('Signed in with ' + provider + '!');
}

// ========== FILTERING & SORTING ==========
function getGames() {
    let g = [...games];
    if (currentCat !== 'All')   g = g.filter(x => x.genre === currentCat);
    if (currentPlat !== 'All')  g = g.filter(x => x.platforms.includes(currentPlat));
    if (currentSearch)          g = g.filter(x =>
        x.title.toLowerCase().includes(currentSearch) ||
        x.genre.toLowerCase().includes(currentSearch) ||
        x.platforms.some(p => p.toLowerCase().includes(currentSearch))
    );
    if      (currentSort === 'rating')     g.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'price-low')  g.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') g.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name')       g.sort((a, b) => a.title.localeCompare(b.title));
    return g;
}

// ========== RENDER GAMES ==========
function renderGames() {
    const g    = getGames();
    const grid = document.getElementById('gamesGrid');
    const nr   = document.getElementById('noResults');
    document.getElementById('resultCount').textContent =
        g.length + ' game' + (g.length !== 1 ? 's' : '') + ' found';
    if (!g.length) {
        nr.style.display = 'block';
        grid.innerHTML = '';
        return;
    }
    nr.style.display = 'none';
    grid.innerHTML = g.map((game, i) => buildCard(game, i)).join('');
}

function buildCard(game, i) {
    const iw    = wishlist.includes(game.id);
    const ic    = cart.find(c => c.id === game.id);
    const delay = Math.min(i * 0.04, 0.35);
    let badge   = '';
    if (game.price === 0) badge = '<div class="gc-badge-free">Free</div>';
    else if (game.isNew)  badge = '<div class="gc-badge-new">New</div>';

    return `<div class="game-card" style="animation-delay:${delay}s">
    <div class="gc-img-wrap">
        <img src="${game.image}" alt="${game.title}" class="gc-img" loading="lazy">
        <div class="gc-rating"><span class="gc-star">★</span>${game.rating}</div>
        ${badge}
        <button class="gc-wish${iw ? ' active' : ''}" onclick="toggleWish(${game.id})">${iw ? '♥' : '♡'}</button>
    </div>
    <div class="gc-body">
        <div class="gc-meta">
            <span class="gc-genre">${game.genre}</span>
            <span class="gc-year">${game.year}</span>
        </div>
        <div class="gc-title">${game.title}</div>
        <p class="gc-desc">${game.description}</p>
        <div class="gc-plats">${game.platforms.map(p => `<span class="gc-plat">${p}</span>`).join('')}</div>
        <div class="gc-foot">
            ${game.price === 0
                ? '<span class="gc-price free">FREE</span>'
                : `<span class="gc-price">$${game.price.toFixed(2)}</span>`}
            <button class="gc-cart${ic ? ' added' : ''}" onclick="addToCart(${game.id})">
                ${ic ? '✓ Added' : '+ Cart'}
            </button>
        </div>
    </div>
</div>`;
}

// ========== CART ==========
function addToCart(id) {
    const g = games.find(x => x.id === id);
    if (cart.find(c => c.id === id)) {
        cart = cart.filter(c => c.id !== id);
        toast(`Removed "${g.title}" from cart.`);
    } else {
        cart.push(g);
        toast(`"${g.title}" added to cart!`);
    }
    document.getElementById('cartCount').textContent = cart.length;
    renderGames();
    renderCart();
}

function toggleCart() {
    document.getElementById('cartSidebar').classList.toggle('open');
    document.getElementById('cartOverlay').classList.toggle('open');
}

function renderCart() {
    const list = document.getElementById('cartList');
    const foot = document.getElementById('cartFoot');
    if (!cart.length) {
        list.innerHTML = '<div class="cart-empty"><p style="font-size:2rem">🛒</p><p style="margin-top:0.5rem">Your cart is empty</p></div>';
        foot.innerHTML = '';
        return;
    }
    list.innerHTML = cart.map(g => `
        <div class="cart-item">
            <img src="${g.image}" alt="${g.title}">
            <div>
                <div class="ci-title">${g.title}</div>
                <div class="ci-price">${g.price === 0 ? 'FREE' : '$' + g.price.toFixed(2)}</div>
            </div>
            <button class="ci-rm" onclick="addToCart(${g.id})">✕</button>
        </div>`).join('');
    const total = cart.reduce((s, g) => s + g.price, 0);
    foot.innerHTML = `
        <div class="cart-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
        <button class="checkout-btn" onclick="checkout()">Checkout Now →</button>`;
}

function checkout() {
    toast('Order placed! (demo)');
    cart = [];
    document.getElementById('cartCount').textContent = 0;
    renderCart();
    renderGames();
    setTimeout(toggleCart, 1200);
}

// ========== WISHLIST ==========
function toggleWish(id) {
    const g = games.find(x => x.id === id);
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(w => w !== id);
        toast(`Removed "${g.title}" from wishlist.`);
    } else {
        wishlist.push(id);
        toast(`"${g.title}" wishlisted!`);
    }
    document.getElementById('wishCount').textContent = wishlist.length;
    renderWishlist();
    renderGames();
}

function renderWishlist() {
    const sec  = document.getElementById('wishlist-section');
    const grid = document.getElementById('wishlistGrid');
    if (!wishlist.length) { sec.style.display = 'none'; return; }
    sec.style.display = 'block';
    grid.innerHTML = wishlist.map(id => {
        const g = games.find(x => x.id === id);
        return `<div class="wish-item">
            <img src="${g.image}" alt="${g.title}">
            <div>
                <div class="wish-title">${g.title}</div>
                <div class="wish-price">${g.price === 0 ? 'FREE' : '$' + g.price.toFixed(2)}</div>
            </div>
        </div>`;
    }).join('');
}

function goWishlist() {
    const el = document.getElementById('wishlist-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ========== QUIZ / SUGGESTIONS ==========
function getSuggestions() {
    const moods = [...document.querySelectorAll('[data-mood].selected')].map(b => b.dataset.mood);
    const plats = [...document.querySelectorAll('[data-plat2].selected')].map(b => b.dataset.plat2);
    let pool = [...games];
    if (moods.length) pool = pool.filter(g => g.moods && g.moods.some(m => moods.includes(m)));
    if (plats.length) pool = pool.filter(g => g.platforms.some(p => plats.includes(p)));
    if (!pool.length) pool = [...games].sort((a, b) => b.rating - a.rating).slice(0, 4);
    const picks = pool.sort((a, b) => b.rating - a.rating).slice(0, 4);
    const out   = document.getElementById('suggestOut');
    const grid  = document.getElementById('suggestGrid');
    out.style.display = 'block';
    grid.innerHTML = picks.map(g => `
        <div class="sc">
            <img src="${g.image}" alt="${g.title}">
            <div class="sc-body">
                <div class="sc-genre">${g.genre}</div>
                <div class="sc-title">${g.title}</div>
                <div class="sc-foot">
                    <span class="sc-price${g.price === 0 ? ' free' : ''}">${g.price === 0 ? 'FREE' : '$' + g.price.toFixed(2)}</span>
                    <button class="sc-add" onclick="addToCart(${g.id})">+ Cart</button>
                </div>
            </div>
        </div>`).join('');
    out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ========== FAQ ==========
function renderFAQs() {
    document.getElementById('faqContainer').innerHTML = faqs.map((f, i) => `
        <div class="faq-item" id="fi${i}">
            <div class="faq-q" onclick="toggleFaq(${i})">
                <span>${f.q}</span>
                <span class="faq-ico">+</span>
            </div>
            <div class="faq-a" id="fa${i}">
                <div class="faq-a-inner">${f.a}</div>
            </div>
        </div>`).join('');
}

function toggleFaq(i) {
    const item = document.getElementById('fi' + i);
    const ans  = document.getElementById('fa' + i);
    const was  = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('open');
        el.querySelector('.faq-a').style.maxHeight = '0';
    });
    // Open clicked if it was closed
    if (!was) {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
    }
}

// ========== TOAST ==========
function toast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('show'), 2600);
}

// ========== EVENT LISTENERS ==========
function attachAll() {
    document.getElementById('searchInput').addEventListener('input', e => {
        currentSearch = e.target.value.trim().toLowerCase();
        renderGames();
    });

    document.getElementById('sortSelect').addEventListener('change', e => {
        currentSort = e.target.value;
        renderGames();
    });

    document.getElementById('genreFilters').addEventListener('click', e => {
        if (!e.target.classList.contains('genre-btn')) return;
        document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCat = e.target.dataset.filter;
        renderGames();
    });

    document.getElementById('platFilters').addEventListener('click', e => {
        if (!e.target.classList.contains('plat-btn')) return;
        document.querySelectorAll('.plat-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentPlat = e.target.dataset.plat;
        renderGames();
    });

    document.getElementById('moodOpts').addEventListener('click', e => {
        if (e.target.classList.contains('quiz-btn')) e.target.classList.toggle('selected');
    });

    document.getElementById('platOpts').addEventListener('click', e => {
        if (!e.target.classList.contains('quiz-btn')) return;
        document.querySelectorAll('[data-plat2]').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
    });
}
