const portfolioItems = [
{
  img:'./assets/images/nazatai.webp',
  title:'Nazat AI',
  description:'Developed an AI-powered platform to help students explore higher education opportunities abroad. Integrated intelligent search, personalized recommendations, and AI-assisted guidance for universities, scholarships, and admissions.',
  demoLink:'#',
  technologies:['Python','AI','Flask','OpenRouter']
},
{
  img:'./assets/images/nazatai.webp',
  title:'Study Chatbot Mobile App',
  description:'Built a Flutter-based AI chatbot application that assists students with study materials, academic questions, and personalized learning support through an interactive conversational interface.',
  demoLink:'#',
  technologies:['Flutter','Firebase','AI','Dart']
},
{
  img:'./assets/images/gym.webp',
  title:'AI Gym Mobile Application',
  description:'Developed an AI-powered fitness application with personalized workout plans, exercise tracking, progress monitoring, and intelligent recommendations to help users achieve their fitness goals.',
  demoLink:'#',
  technologies:['React Native','Expo','Open Router','']
},
{
  img:'./assets/images/obhibash.webp',
  title:'Obhibash.eu',
  description:'Developed a multilingual platform connecting Bangladeshi communities across Europe. The platform provides immigration resources, local services, business listings, news, and community support in a modern, responsive web application.',
  demoLink:'https://obhibash.eu',
  technologies:['Next JS','TypeScript','Prisma','Bootstrap']
},
{
  img:'./assets/images/wakeup.webp',
  title:'Wake Up Projects Website',
  description:'Developed the official multilingual website for Wake Up Projects, an Erasmus+ mobility organization. Built a responsive platform with modern UI, optimized performance, multilingual support, and an enhanced user experience.',
  demoLink:'https://wakeup-projects.com',
  technologies:['Laravel','Blade','JavaScript','Bootstrap','CSS']
},
{ img:'./assets/images/bravori.webp', 
  title:'Bravori Music School App', 
  description:'Fixed multiple bugs in a React Native music school application designed for children to learn music. Improved performance and user experience.', 
  demoLink:'https://play.google.com/store/apps/details?id=com.bravorimusic.bravori', 
  technologies:['React Native','JavaScript','Firebase'] 
},
{ img:'./assets/images/unique.webp', title:'Class Management System', description:'A collaborative project from my university course under Dr. Ahmad Fadhil Yusof. Gained hands-on experience in teamwork, software development, and project management.', demoLink:'https://github.com/arifulUTM/Application-Development-Project-UTM-2020', technologies:['PHP','MySQL','Bootstrap'] },
{ img:'./assets/images/addarapp.webp', title:'Addar Beauty Application', description:'Freelance project for Rubysoft Sdn Bhd to develop a beauty services application. Created features and authored a comprehensive user manual for primary users.', demoLink:'https://addarapp.com/docs/addar-manual-110.pdf', technologies:['Flutter','Dart','Firebase'] },
{ img:'./assets/images/Application.webp', title:'Pathfinder – Travel Guide App', description:'Pathfinder is a travel guide app with COVID-19 safety features, built with Flutter, Firebase, and Google Cloud, developed for my undergraduate thesis.', demoLink:'https://bitbucket.org/pro_ariful/pathfinder-a-travel-guide-mobile-application/src/master/pathfinder/', technologies:['Flutter','Google Cloud Platform','Firebase'] },
{ img:'./assets/images/lost.webp', title:'Lost and Found Web Application', description:'Developed a robust lost-and-found web platform using Servlets, JSP, Maven, and MySQL with item registration, search, and authentication features.', demoLink:'https://github.com/arifulUTM/Lost-and-Found', technologies:['Java Servlet','JSP','MySQL'] },
{ img:'./assets/images/travel.webp', title:'Travel Guide Web App', description:'In-development travel guide app for a Spanish company, built with React.js and Laravel, featuring real-time data, authentication, and cloud storage.', demoLink:'#', technologies:['React','Laravel','MySQL'] },
{ img:'./assets/images/aitools.webp', title:'AI Research Platform', description:'Developed an AI-powered research platform for academic collaboration and knowledge sharing with advanced search and recommendation features.', demoLink:'#', technologies:['Python','TensorFlow','React','MongoDB'] },
{ img:'./assets/images/covidTracker.webp', title:'Covid Tracker', description:'React.js application showing real-time COVID-19 stats using Disease.sh API. Includes filtering by country and interactive map visualization.', demoLink:'https://resume-jade-seven.vercel.app/projects', technologies:['JavaScript','JSON','REST API','PHP'] },
{ img:'./assets/images/tood.webp', title:'Task Management Mobile App', description:'A task management mobile application designed to help users stay organized and boost productivity.', demoLink:'https://github.com/Yasser-dev/what-to-do', technologies:['Flutter','JSON','REST API','Firebase'] },
{
  img: './assets/images/busticket.webp',
  title: 'Bus Ticket Booking',
  description: 'A full-stack bus ticket booking application that enables users to search routes, check seat availability, book tickets, make secure online payments, and manage reservations through an intuitive interface.',
  demoLink: 'https://bitbucket.org/arifulatwork-admin/bus-ticket/src/main/',
  technologies: ['JavaScript', 'PHP', 'MySQL', 'REST API']
},
{
  img: './assets/images/stockPredictor.webp',
  title: 'Stock Predictor',
  description: 'Developed an AI-powered stock prediction system with a React frontend and Flask backend. Trained TensorFlow models to forecast stock opening and closing prices, with interactive data visualization and prediction insights.',
  demoLink: 'https://bitbucket.org/arifulatwork-admin/stock-market-predictor-python/src',
  technologies: ['React', 'Flask', 'TensorFlow', 'Python']
},
{
  img: './assets/images/job.webp',
  title: 'FindITJobs Web Application',
  description: 'Built a Laravel-based job portal with an integrated admin dashboard for managing job postings, applications, employers, and candidates. Implemented authentication, role-based access control, and responsive UI.',
  demoLink: 'https://github.com/arifulatwork/FindITJobs',
  technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap']
},
{
  img: './assets/images/market.webp',
  title: 'Classified Marketplace',
  description: 'Developed a classified marketplace platform where users can buy and sell products securely. Implemented authentication, product listings, search filters, messaging, and transaction management.',
  demoLink: 'https://resume-jade-seven.vercel.app/projects',
  technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap']
},
{
  img: './assets/images/pos.webp',
  title: 'Point of Sale (POS) System',
  description: 'Developed a PHP-based Point of Sale system using the MVC architecture. Features include inventory management, sales tracking, customer records, reporting, and secure user authentication.',
  demoLink: 'https://github.com/arifulatwork/Point-of-sales',
  technologies: ['PHP', 'MySQL', 'MVC', 'Bootstrap']
},
{
  img: './assets/images/pos.webp',
  title: 'Restoran Nasi Lounge',
  description: 'Developed an online food ordering and restaurant management system with menu management, order tracking, promotional campaigns, and customer engagement features.',
  demoLink: 'https://resume-jade-seven.vercel.app/projects',
  technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript']
},
{
  img: './assets/images/chat.webp',
  title: 'AI Chatbot Application',
  description: 'Built an AI-powered chatbot capable of handling natural conversations. Initially developed as a university project with top-grade recognition and later enhanced with modern UI and advanced conversational capabilities.',
  demoLink: 'https://github.com/arifulUTM/Chatbot-with-PHP',
  technologies: ['PHP', 'JavaScript', 'AI', 'MySQL']
},
{
  img: './assets/images/msri.webp',
  title: 'Malaysian Social Research Institute',
  description: 'Developed a custom web application for the Malaysian Social Research Institute, providing dynamic content management, optimized performance, and an intuitive user experience.',
  demoLink: 'https://msri.org.my/',
  technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript']
},
{ img:'./assets/images/xerox.webp', title:'Photocopying (Xerox) Machine', description:'Successfully completed the project and built a working circuit based on the problem we identified.', demoLink:'https://github.com/Yasser-dev/what-to-do', technologies:['Digital Logic','Circuit'] },
{ img:'./assets/images/covid.webp', title:'Covid Care', description:'A website that provides health-related tips along with real-time updates on the coronavirus situation around the world.', demoLink:'https://github.com/arifulUTM/COVID-CARE', technologies:['JavaScript','PHP','REST API'] },


];

// ============ RENDER ============
const grid = document.getElementById('projects');
const filtersEl = document.getElementById('filters');
const moreBtn = document.getElementById('moreBtn');
const LIMIT = 6;
let expanded = false, active = 'All';

const groups = {
  All: () => true,
  AI: p => /AI|TensorFlow|OpenRouter|Open Router/i.test(p.technologies.join(' ')),
  Web: p => p.technologies.some(t => /Laravel|PHP|React$|Next|Bootstrap|Servlet|JSP/i.test(t)),
  Mobile: p => p.technologies.some(t => /Flutter|Dart|React Native|Expo/i.test(t))
};

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function card(p) {
  const tags = p.technologies.filter(Boolean).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join('');
  const link = p.demoLink && p.demoLink !== '#'
    ? `<a class="link" href="${esc(p.demoLink)}" target="_blank" rel="noopener">View project ↗</a>` : '';
  return `<article class="proj rv">
    <div class="img"><img src="${esc(p.img)}" alt="${esc(p.title)}" loading="lazy" onerror="this.style.display='none'"></div>
    <div class="body"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><p class="tags">${tags}</p>${link}</div>
  </article>`;
}

function render() {
  const list = portfolioItems.filter(groups[active]);
  const shown = expanded ? list : list.slice(0, LIMIT);
  grid.innerHTML = shown.map(card).join('');
  moreBtn.parentElement.classList.toggle('hide', list.length <= LIMIT);
  moreBtn.textContent = expanded ? 'Show fewer' : `Show all ${list.length} projects`;
  observe();
}

filtersEl.innerHTML = Object.keys(groups).map(k =>
  `<button data-k="${k}" class="${k === 'All' ? 'on' : ''}">${k}</button>`).join('');
filtersEl.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  active = b.dataset.k; expanded = false;
  filtersEl.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  // highlight active nav link
const secs = [...document.querySelectorAll('main section[id]')];
const navLinks = [...links.querySelectorAll('a')];
addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(sec => { if (scrollY + 120 >= sec.offsetTop) cur = sec.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

render();
});
moreBtn.addEventListener('click', () => { expanded = !expanded; render(); });

// reveal on scroll
const io = 'IntersectionObserver' in window
  ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 })
  : null;
function observe() {
  document.querySelectorAll('.rv:not(.in)').forEach(el => io ? io.observe(el) : el.classList.add('in'));
}
document.querySelectorAll('.card,.row,.stats>div,.hero-text,.prose').forEach(el => el.classList.add('rv'));

// nav
const nav = document.getElementById('nav');
const links = document.getElementById('links');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 8), { passive: true });
document.getElementById('burger').addEventListener('click', () => links.classList.toggle('open'));
links.addEventListener('click', () => links.classList.remove('open'));
document.getElementById('year').textContent = new Date().getFullYear();

// highlight active nav link
const secs = [...document.querySelectorAll('main section[id]')];
const navLinks = [...links.querySelectorAll('a')];
addEventListener('scroll', () => {
  let cur = '';
  secs.forEach(sec => { if (scrollY + 120 >= sec.offsetTop) cur = sec.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });

render();
