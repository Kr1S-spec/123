const imoti = [
    {
        id: 1,
        title: "Green Hills",
        location: "Green Hills",
        image: "images/BeliOsymFront.jpg"
    },
    {
        id: 2,
        title: "Sunny Beach",
        location: "Sunny Beach",
        image: "images/BeliOsymFront.jpg"
    },
    {
        id: 3,
        title: "Pleven",
        location: "Pleven",
        image: "images/BeliOsymFront.jpg"
    }
];

const prevodi = {
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
        addressValue: "гр. Плевен, бул. България №8",
        phoneValue: "+359878802151",
        emailValue: "officeresheniabg@gmail.com",
        footerDesc: "Вашият надежден партньор в намирането на перфектния дом в КП Хилс.",
        quickLinks: "Бързи връзки",
        newsletter: "Новинар",
        newsletterDesc: "Абонирайте се за най-новите оферти",
        yourEmail: "Вашият имейл",
        copyright: "2024 КП Хилс. Всички права запазени.",
        noResults: "Няма намерени имоти",
        foundResults: "Намерени {count} имоти",
        thanksSubscribe: "Благодарим за абонамента!"
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
        addressValue: "Pleven, Bulgaria Blvd. №8",
        phoneValue: "+359878802151",
        emailValue: "officeresheniabg@gmail.com",
        footerDesc: "Your reliable partner in finding the perfect home in KP Hills.",
        quickLinks: "Quick Links",
        newsletter: "Newsletter",
        newsletterDesc: "Subscribe for the latest offers",
        yourEmail: "Your email",
        copyright: "2024 KP Hills. All rights reserved.",
        noResults: "No properties found",
        foundResults: "Found {count} properties",
        thanksSubscribe: "Thanks for subscribing!"
    }
};

let tekushtEzik = 'bg';

function smeniEzik(ezik) {
    tekushtEzik = ezik;
    const t = prevodi[ezik];
    
    document.querySelectorAll('.nav-links a')[0].textContent = t.home;
    document.querySelectorAll('.nav-links a')[1].textContent = t.properties;
    document.querySelectorAll('.nav-links a')[2].textContent = t.about;
    document.querySelectorAll('.nav-links a')[3].textContent = t.contact;
    
    const naslovHero = document.querySelector('.hero h1');
    naslovHero.innerHTML = ezik === 'bg' 
        ? 'Намерете своя перфектен <span class="highlight">дом в КП Хилс</span>'
        : 'Find your <span class="highlight">perfect home in KP Hills</span>';
    document.querySelector('.hero p').textContent = t.heroDesc;
    document.querySelector('.search-btn').innerHTML = '<i class="fa-solid fa-magnifying-glass"></i> ' + t.search;
    
    document.querySelectorAll('.section-header h2')[0].textContent = t.ourProperties;
    document.querySelectorAll('.section-header p')[0].textContent = t.browseProperties;
    
    document.querySelectorAll('.house-card-info p').forEach(function(el) { el.textContent = t.details; });
    
    document.querySelectorAll('.section-header h2')[1].textContent = t.aboutKP;
    document.querySelectorAll('.section-header p')[1].textContent = '';
    document.querySelector('.about-text > p').textContent = t.aboutDesc;
    
    const featurei = document.querySelectorAll('.feature span');
    featurei[0].textContent = t.verified;
    featurei[1].textContent = t.agents;
    featurei[2].textContent = t.support;
    featurei[3].textContent = t.deals;
    
    document.querySelectorAll('.section-header h2')[2].textContent = t.contactUs;
    document.querySelectorAll('.section-header p')[2].textContent = t.hearFromYou;
    
    const zaglaviq = document.querySelectorAll('.info-item h4');
    zaglaviq[0].textContent = t.address;
    zaglaviq[1].textContent = t.phone;
    zaglaviq[2].textContent = t.email;
    
    const stoinosti = document.querySelectorAll('.info-item p');
    stoinosti[0].innerHTML = t.addressValue;
    stoinosti[1].textContent = t.phoneValue;
    stoinosti[2].textContent = t.emailValue;
    
    document.querySelector('.footer-section p').textContent = t.footerDesc;
    document.querySelectorAll('.footer-section h4')[0].textContent = t.quickLinks;
    document.querySelectorAll('.footer-section h4')[1].textContent = t.newsletter;
    document.querySelectorAll('.footer-section p')[1].textContent = t.newsletterDesc;
    document.querySelector('#newsletterEmail').placeholder = t.yourEmail;
    document.querySelector('.footer-bottom p').textContent = '© ' + t.copyright;
    
    document.querySelector('title').textContent = ezik === 'bg' ? 'КП Хилс - Агенция за недвижими имоти' : 'KP Hills - Real Estate Agency';
}

function scrollToImoti() {
    document.getElementById('imoti').scrollIntoView({ behavior: 'smooth' });
}

function otvoriKushta(ime) {
    window.location.href = ime + '/index.html';
}

function tirseneImoti() {
    scrollToImoti();
    const lokaciq = document.getElementById('lokaciq').value;
    let filtirani = imoti.filter(function(p) {
        return p.location.toLowerCase().includes(lokaciq.toLowerCase()) || p.title.toLowerCase().includes(lokaciq.toLowerCase());
    });
    if (filtirani.length === 0) {
        pokazhiToast(prevodi[tekushtEzik].noResults, 'info');
    } else {
        const msg = prevodi[tekushtEzik].foundResults.replace('{count}', filtirani.length);
        pokazhiToast(msg, 'success');
    }
}

function abonament(e) {
    e.preventDefault();
    const msg = prevodi[tekushtEzik].thanksSubscribe;
    pokazhiToast(msg, 'success');
    document.getElementById('newsletterEmail').value = '';
}

function pokazhiToast(message, tip) {
    var container = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + tip;
    var ikona = 'info-circle';
    if (tip === 'success') ikona = 'check-circle';
    if (tip === 'error') ikona = 'xmark';
    toast.innerHTML = '<i class="fa-solid fa-' + ikona + '"></i><span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function() { toast.classList.add('show'); }, 10);
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(function(kotva) {
    kotva.addEventListener('click', function(e) {
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