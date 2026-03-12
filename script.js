const properties = [
    {
        id: 1,
        title: "Green Hills",
        type: "house",
        price: 385000,
        priceType: "sale",
        location: "Green Hills",
        beds: 4,
        baths: 3,
        sqft: 2400,
        image: "images/BeliOsymFront.jpg",
        description: "Welcome to Green Hills - a stunning property with spacious living room, modern kitchen, and beautiful terrace."
    },
    {
        id: 2,
        title: "Sunny Beach Apartment",
        type: "apartment",
        price: 150000,
        priceType: "sale",
        location: "Sunny Beach",
        beds: 2,
        baths: 1,
        sqft: 850,
        image: "images/BeliOsymFront.jpg",
        description: "Beautiful apartment in Sunny Beach with sea view. Perfect for vacation or investment."
    },
    {
        id: 3,
        title: "Pleven House",
        type: "house",
        price: 180000,
        priceType: "sale",
        location: "Pleven",
        beds: 5,
        baths: 2,
        sqft: 2000,
        image: "images/BeliOsymFront.jpg",
        description: "Large family house in Pleven with spacious yard and garage."
    }
];

const translations = {
    bg: {
        home: "Начало",
        properties: "Имоти",
        about: "За нас",
        contact: "Контакти",
        heroTitle: "Намерете своя перфектен дом в КП Хилс",
        heroDesc: "Открийте топлината и красотата на имотите в КП Хилс.",
        search: "Търси",
        ourProperties: "Нашите имоти",
        browseProperties: "Прегледайте нашите прекрасни имоти",
        details: "Подробно",
        aboutKP: "За КП Хилс",
        aboutDesc: "Добре дошли в КП Хилс - вашата дестинация за намиране на перфектния дом. Нашите имоти предлагат топлина, комфорт и красота в спокойна среда.",
        verified: "Проверени оферти",
        agents: "Професионални агенти",
        support: "24/7 Поддръжка",
        deals: "Сигурни сделки",
        contactUs: "Свържете се с нас",
        hearFromYou: "Бихме искали да чуем от вас",
        address: "Адрес",
        phone: "Телефон",
        email: "Имейл",
        footerDesc: "Вашият надежден партньор в намирането на перфектния дом в КП Хилс.",
        quickLinks: "Бързи връзки",
        newsletter: "Новинар",
        newsletterDesc: "Абонирайте се за най-новите оферти",
        yourEmail: "Вашият имейл",
        copyright: "2024 КП Хилс. Всички права запазени."
    },
    en: {
        home: "Home",
        properties: "Properties",
        about: "About",
        contact: "Contact",
        heroTitle: "Find your perfect home in KP Hills",
        heroDesc: "Discover the warmth and beauty of properties in KP Hills.",
        search: "Search",
        ourProperties: "Our Properties",
        browseProperties: "Browse our beautiful properties",
        details: "Details",
        aboutKP: "About KP Hills",
        aboutDesc: "Welcome to KP Hills - your destination for finding the perfect home. Our properties offer warmth, comfort, and beauty in a peaceful setting.",
        verified: "Verified Offers",
        agents: "Professional Agents",
        support: "24/7 Support",
        deals: "Secure Deals",
        contactUs: "Contact Us",
        hearFromYou: "We'd love to hear from you",
        address: "Address",
        phone: "Phone",
        email: "Email",
        footerDesc: "Your reliable partner in finding the perfect home in KP Hills.",
        quickLinks: "Quick Links",
        newsletter: "Newsletter",
        newsletterDesc: "Subscribe for the latest offers",
        yourEmail: "Your email",
        copyright: "2024 KP Hills. All rights reserved."
    }
};

let currentLang = 'bg';

function changeLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    document.querySelectorAll('.nav-links a')[0].textContent = t.home;
    document.querySelectorAll('.nav-links a')[1].textContent = t.properties;
    document.querySelectorAll('.nav-links a')[2].textContent = t.about;
    document.querySelectorAll('.nav-links a')[3].textContent = t.contact;
    
    const heroTitle = document.querySelector('.hero h1');
    heroTitle.innerHTML = lang === 'bg' 
        ? 'Намерете своя перфектен <span class="highlight">дом в КП Хилс</span>'
        : 'Find your <span class="highlight">perfect home in KP Hills</span>';
    document.querySelector('.hero p').textContent = t.heroDesc;
    document.querySelector('.search-btn').innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> ' + t.search;
    
    document.querySelectorAll('.section-header h2')[0].textContent = t.ourProperties;
    document.querySelectorAll('.section-header p')[0].textContent = t.browseProperties;
    
    document.querySelectorAll('.house-card-info p').forEach(el => el.textContent = t.details);
    
    document.querySelectorAll('.section-header h2')[1].textContent = t.aboutKP;
    document.querySelectorAll('.section-header p')[1].textContent = '';
    document.querySelector('.about-text > p').textContent = t.aboutDesc;
    
    const features = document.querySelectorAll('.feature span');
    features[0].textContent = t.verified;
    features[1].textContent = t.agents;
    features[2].textContent = t.support;
    features[3].textContent = t.deals;
    
    document.querySelectorAll('.section-header h2')[2].textContent = t.contactUs;
    document.querySelectorAll('.section-header p')[2].textContent = t.hearFromYou;
    
    const infoHeadings = document.querySelectorAll('.info-item h4');
    infoHeadings[0].textContent = t.address;
    infoHeadings[1].textContent = t.phone;
    infoHeadings[2].textContent = t.email;
    
    document.querySelector('.footer-section p').textContent = t.footerDesc;
    document.querySelectorAll('.footer-section h4')[0].textContent = t.quickLinks;
    document.querySelectorAll('.footer-section h4')[1].textContent = t.newsletter;
    document.querySelectorAll('.footer-section p')[1].textContent = t.newsletterDesc;
    document.querySelector('#newsletterEmail').placeholder = t.yourEmail;
    document.querySelector('.footer-bottom p').textContent = '© ' + t.copyright;
    
    document.querySelector('title').textContent = lang === 'bg' ? 'КП Хилс - Агенция за недвижими имоти' : 'KP Hills - Real Estate Agency';
}

function scrollToHouses() {
    document.getElementById('houses').scrollIntoView({ behavior: 'smooth' });
}

function openHousePage(houseName) {
    window.location.href = houseName + '/index.html';
}

function searchProperties() {
    scrollToHouses();
    const location = document.getElementById('locationSearch').value;
    let filtered = properties.filter(function(p) {
        return p.location.toLowerCase().includes(location.toLowerCase()) || p.title.toLowerCase().includes(location.toLowerCase());
    });
    if (filtered.length === 0) {
        showToast(currentLang === 'bg' ? 'Няма намерени имоти' : 'No properties found', 'info');
    } else {
        const msg = currentLang === 'bg' ? 'Намерени ' + filtered.length + ' имоти' : 'Found ' + filtered.length + ' properties';
        showToast(msg, 'success');
    }
}

function submitContactForm(e) {
    e.preventDefault();
    var name = document.getElementById('contactName').value;
    const msg = currentLang === 'bg' ? 'Благодаря Ви, ' + name + '! Ще се свържем с Вас скоро.' : 'Thank you, ' + name + '! We will contact you soon.';
    showToast(msg, 'success');
    document.getElementById('contactForm').reset();
}

function subscribeNewsletter(e) {
    e.preventDefault();
    var email = document.getElementById('newsletterEmail').value;
    const msg = currentLang === 'bg' ? 'Благодарим за абонамента!' : 'Thanks for subscribing!';
    showToast(msg, 'success');
    document.getElementById('newsletterEmail').value = '';
}

function showToast(message, type) {
    var container = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    var icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'error') icon = 'xmark';
    toast.innerHTML = '<i class="fa-solid fa-' + icon + '"></i><span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function() { toast.classList.add('show'); }, 10);
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-links a').forEach(function(a) { a.classList.remove('active'); });
            this.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});