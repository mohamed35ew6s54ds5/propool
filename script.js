/* ================= DATA ================= */
const services = [
  {icon:'M12 3c-4 4-7 7-7 10.5A7 7 0 0 0 12 21a7 7 0 0 0 7-7.5C19 10 16 7 12 3Z', ar:'تصميم المسابح', en:'Swimming Pool Design', dar:'تصاميم هندسية مخصصة تعكس ذوقك وتُراعي طبيعة الموقع.', den:'Bespoke engineering designs tailored to your taste and site.'},
  {icon:'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6', ar:'إنشاء المسابح', en:'Pool Construction', dar:'تنفيذ دقيق بأحدث التقنيات ومواد عالية الجودة.', den:'Precise execution with the latest techniques and premium materials.'},
  {icon:'M4 4v16M4 4h16M4 12h16M4 20h16', ar:'ترميم المسابح', en:'Pool Renovation', dar:'إعادة حياة لمسبحك القديم بتشطيبات وتقنيات حديثة.', den:'Breathing new life into old pools with modern finishing.'},
  {icon:'M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8', ar:'صيانة المسابح', en:'Pool Maintenance', dar:'خطط صيانة دورية تحافظ على نقاء المياه وسلامة المعدات.', den:'Regular maintenance plans keeping water pure and equipment safe.'},
  {icon:'M12 22c4-4 8-7.58 8-12A8 8 0 0 0 4 10c0 4.42 4 8 8 12Z', ar:'الشلالات المائية', en:'Water Features', dar:'شلالات ونوافير مائية تضفي طابعًا فاخرًا على المكان.', den:'Waterfalls and fountains that add a luxurious touch.'},
  {icon:'M9 3H5a2 2 0 0 0-2 2v4m18 0V5a2 2 0 0 0-2-2h-4m0 18h4a2 2 0 0 0 2-2v-4M3 15v4a2 2 0 0 0 2 2h4', ar:'تركيب المعدات', en:'Pool Equipment Installation', dar:'أنظمة فلترة وتسخين وإضاءة متطورة وموثوقة.', den:'Advanced, reliable filtration, heating and lighting systems.'},
  {icon:'M12 2a5 5 0 0 1 5 5c0 3-2 5-2 8H9c0-3-2-5-2-8a5 5 0 0 1 5-5Z', ar:'إنشاء الجاكوزي', en:'Jacuzzi Construction', dar:'أحواض استرخاء فاخرة مصممة بعناية فائقة.', den:'Premium relaxation spas crafted with meticulous care.'},
  {icon:'M12 2 2 22h20L12 2Z', ar:'تنسيق المناظر الطبيعية', en:'Landscaping Around Pools', dar:'تنسيق حدائق ومساحات محيطة تكمل جمال المسبح.', den:'Landscaping surrounding spaces that complete the pool experience.'}
];

const projects = [
  {img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=700&q=80', tag:{ar:'مسابح لا نهائية',en:'Infinity Pools'}, title:{ar:'فيلا الشاطئ الذهبي',en:'Golden Coast Villa'}, loc:{ar:'الجهراء',en:'Jahra'}, type:{ar:'مسبح لا نهائي',en:'Infinity Pool'}, date:'2025'},
  {img:'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=80', tag:{ar:'فلل خاصة',en:'Private Villas'}, title:{ar:'واحة السلام',en:'Al Salam Oasis'}, loc:{ar:'السالمية',en:'Salmiya'}, type:{ar:'مسبح فيلا',en:'Villa Pool'}, date:'2024'},
  {img:'https://images.unsplash.com/photo-1618767689160-da3fb810aad7?auto=format&fit=crop&w=700&q=80', tag:{ar:'إضاءة ليلية',en:'Night Lighting'}, title:{ar:'لؤلؤة الخليج',en:'Gulf Pearl Residence'}, loc:{ar:'مدينة الكويت',en:'Kuwait City'}, type:{ar:'مسبح وإضاءة',en:'Pool & Lighting'}, date:'2024'},
  {img:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80', tag:{ar:'فلل خاصة',en:'Private Villas'}, title:{ar:'قصر النخيل',en:'Palm Estate'}, loc:{ar:'الفنطاس',en:'Fintas'}, type:{ar:'مسبح عائلي',en:'Family Pool'}, date:'2023'},
  {img:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=700&q=80', tag:{ar:'جاكوزي',en:'Jacuzzi'}, title:{ar:'روضة الاسترخاء',en:'Serenity Garden'}, loc:{ar:'مشرف',en:'Mishref'}, type:{ar:'جاكوزي خارجي',en:'Outdoor Jacuzzi'}, date:'2023'},
  {img:'https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=700&q=80', tag:{ar:'مسابح لا نهائية',en:'Infinity Pools'}, title:{ar:'أفق بيان',en:'Bayan Horizon'}, loc:{ar:'بيان',en:'Bayan'}, type:{ar:'مسبح بانورامي',en:'Panoramic Pool'}, date:'2022'}
];

const testimonials = [
  {name:{ar:'م. فهد العنزي',en:'Eng. Fahad Al-Anzi'}, loc:{ar:'فيلا خاصة، الجهراء',en:'Private Villa, Jahra'}, img:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&q=80', q:{ar:'تجربة بروبول كانت استثنائية من أول اجتماع حتى تسليم المسبح. الدقة في التنفيذ والالتزام بالمواعيد أمر نادر.', en:'The PROPOOL experience was exceptional from our first meeting to handover. The precision and commitment to deadlines is rare to find.'}},
  {name:{ar:'أ. منى الرشيد',en:'Mona Al-Rashid'}, loc:{ar:'السالمية',en:'Salmiya'}, img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80', q:{ar:'فريق محترف ولمسة تصميم فاخرة حقًا. مسبحنا أصبح نقطة الجذب الأساسية في المنزل.', en:'A truly professional team with a genuinely luxurious design touch. Our pool has become the centerpiece of the home.'}},
  {name:{ar:'م. عبدالله الصباح',en:'Eng. Abdullah Al-Sabah'}, loc:{ar:'بيان',en:'Bayan'}, img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80', q:{ar:'خدمة الصيانة الدورية غيّرت تجربتنا بالكامل، المياه دائمًا نقية والفريق دقيق جدًا في مواعيده.', en:'The recurring maintenance service completely changed our experience — the water is always crystal clear and the team is punctual.'}}
];

const pricing = [
  {name:{ar:'أساسية',en:'Basic'}, desc:{ar:'مناسبة للمسابح المنزلية الصغيرة',en:'Suited for small home pools'}, price:'25', feat:[{ar:'زيارة شهرية واحدة',en:'One monthly visit'},{ar:'فحص جودة المياه',en:'Water quality testing'},{ar:'تنظيف سطحي',en:'Surface cleaning'},{ar:'فحص المعدات الأساسي',en:'Basic equipment check'}]},
  {name:{ar:'احترافية',en:'Professional'}, desc:{ar:'الأكثر طلبًا لدى فلل الكويت',en:'Most popular for Kuwait villas'}, price:'45', featured:true, feat:[{ar:'زيارتان أسبوعيًا',en:'Two visits weekly'},{ar:'فحص شامل لجودة المياه',en:'Full water quality testing'},{ar:'تنظيف عميق للمسبح',en:'Deep pool cleaning'},{ar:'فحص وصيانة المعدات',en:'Equipment inspection & upkeep'},{ar:'تقرير شهري مفصل',en:'Detailed monthly report'}]},
  {name:{ar:'بريميوم',en:'Premium'}, desc:{ar:'للفلل والمنتجعات الفاخرة',en:'For luxury villas & resorts'}, price:'75', feat:[{ar:'زيارات غير محدودة',en:'Unlimited visits'},{ar:'فحص متقدم للمياه والكيمياء',en:'Advanced water chemistry testing'},{ar:'تنظيف وتلميع كامل',en:'Full cleaning & polishing'},{ar:'صيانة شاملة للمعدات',en:'Comprehensive equipment care'},{ar:'أولوية دعم 24/7',en:'Priority 24/7 support'}]}
];

const blogPosts = [
  {img:'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=500&q=80', cat:{ar:'تصميم المسابح',en:'Pool Design'}, title:{ar:'5 اتجاهات تصميم تتصدر مسابح 2026',en:'5 Design Trends Leading Pools in 2026'}, date:{ar:'12 يونيو 2026',en:'June 12, 2026'}},
  {img:'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=500&q=80', cat:{ar:'نصائح الصيانة',en:'Maintenance Tips'}, title:{ar:'كيف تحافظ على نقاء مياه مسبحك صيفًا',en:'Keeping Your Pool Water Pristine in Summer'}, date:{ar:'2 يونيو 2026',en:'June 2, 2026'}},
  {img:'https://images.unsplash.com/photo-1591825381131-9ef2f2a03fdc?auto=format&fit=crop&w=500&q=80', cat:{ar:'الحياة الفاخرة',en:'Luxury Outdoor Living'}, title:{ar:'كيف تحوّل حديقتك إلى منتجع خاص',en:'Turning Your Backyard into a Private Resort'}, date:{ar:'24 مايو 2026',en:'May 24, 2026'}},
  {img:'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=500&q=80', cat:{ar:'تقنيات المسابح',en:'Pool Technology'}, title:{ar:'أنظمة الفلترة الذكية: مستقبل صيانة المسابح',en:'Smart Filtration: The Future of Pool Care'}, date:{ar:'10 مايو 2026',en:'May 10, 2026'}}
];

const galleryImgs = [
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1618767689160-da3fb810aad7?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1524293581917-878a6d017c71?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1591825381131-9ef2f2a03fdc?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=500&q=80'
];

const faqs = [
  {q:{ar:'كم يستغرق بناء مسبح فاخر في الكويت؟',en:'How long does it take to build a luxury pool in Kuwait?'}, a:{ar:'تتراوح المدة عادة بين 6 إلى 10 أسابيع حسب حجم المسبح والتشطيبات المطلوبة والظروف الجوية.', en:'It typically takes 6 to 10 weeks depending on pool size, finishing requirements and weather conditions.'}},
  {q:{ar:'هل تقدمون ضمانًا على أعمال الإنشاء؟',en:'Do you offer a warranty on construction work?'}, a:{ar:'نعم، نقدم ضمانًا شاملًا يغطي الهيكل الإنشائي والعزل والمعدات لمدة تصل إلى 10 سنوات.', en:'Yes, we offer a comprehensive warranty covering structure, waterproofing and equipment for up to 10 years.'}},
  {q:{ar:'هل يمكنكم ترميم مسبح قديم بدلًا من إنشاء مسبح جديد؟',en:'Can you renovate an old pool instead of building a new one?'}, a:{ar:'بالتأكيد، لدينا فريق متخصص في ترميم المسابح القديمة وتحديث التشطيبات والأنظمة بالكامل.', en:'Absolutely, we have a dedicated team specialized in renovating old pools and fully upgrading finishes and systems.'}},
  {q:{ar:'كيف تعمل خطط الصيانة الشهرية؟',en:'How do the monthly maintenance plans work?'}, a:{ar:'نقوم بزيارات دورية حسب الخطة المختارة تشمل فحص المياه، التنظيف، وصيانة المعدات مع تقرير دوري.', en:'We conduct scheduled visits per your chosen plan, including water testing, cleaning and equipment maintenance with regular reporting.'}},
  {q:{ar:'هل تقدمون استشارة تصميم مجانية؟',en:'Do you offer a free design consultation?'}, a:{ar:'نعم، نوفر استشارة أولية مجانية لفهم احتياجاتك وتقديم مقترح تصميم مبدئي.', en:'Yes, we provide a free initial consultation to understand your needs and present an initial design proposal.'}}
];

/* ================= RENDER ================= */
let currentLang = document.documentElement.lang;

function svgIcon(path){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg>`;}

function renderServices(){
  document.getElementById('servicesGrid').innerHTML = services.map(s=>`
    <div class="service-card reveal">
      <div class="service-icon">${svgIcon(s.icon)}</div>
      <h3 data-ar="${s.ar}" data-en="${s.en}">${currentLang==='ar'?s.ar:s.en}</h3>
      <p data-ar="${s.dar}" data-en="${s.den}">${currentLang==='ar'?s.dar:s.den}</p>
    </div>`).join('');
}

function renderProjects(){
  document.getElementById('projectsGrid').innerHTML = projects.map(p=>`
    <div class="project-card reveal">
      <img src="${p.img}" alt="${p.title.en}" loading="lazy">
      <div class="project-overlay">
        <span class="project-tag" data-ar="${p.tag.ar}" data-en="${p.tag.en}">${currentLang==='ar'?p.tag.ar:p.tag.en}</span>
        <h3 data-ar="${p.title.ar}" data-en="${p.title.en}">${currentLang==='ar'?p.title.ar:p.title.en}</h3>
        <div class="project-meta">
          <span data-ar="${p.loc.ar}" data-en="${p.loc.en}">📍 ${currentLang==='ar'?p.loc.ar:p.loc.en}</span>
          <span data-ar="${p.type.ar}" data-en="${p.type.en}">${currentLang==='ar'?p.type.ar:p.type.en}</span>
          <span>${p.date}</span>
        </div>
      </div>
    </div>`).join('');
}

function renderTestimonials(){
  document.getElementById('testTrack').innerHTML = testimonials.map(t=>`
    <div class="test-card reveal">
      <div class="stars">★★★★★</div>
      <div class="test-quote">"</div>
      <p data-ar="${t.q.ar}" data-en="${t.q.en}">${currentLang==='ar'?t.q.ar:t.q.en}</p>
      <div class="test-person">
        <img src="${t.img}" alt="${t.name.en}">
        <div>
          <div class="name" data-ar="${t.name.ar}" data-en="${t.name.en}">${currentLang==='ar'?t.name.ar:t.name.en}</div>
          <div class="loc" data-ar="${t.loc.ar}" data-en="${t.loc.en}">${currentLang==='ar'?t.loc.ar:t.loc.en}</div>
        </div>
      </div>
    </div>`).join('');
}

function renderPricing(){
  document.getElementById('pricingGrid').innerHTML = pricing.map(p=>`
    <div class="price-card reveal ${p.featured?'featured':''}">
      ${p.featured?`<div class="price-badge" data-ar="الأكثر طلبًا" data-en="Most Popular">الأكثر طلبًا</div>`:''}
      <div class="price-name" data-ar="${p.name.ar}" data-en="${p.name.en}">${currentLang==='ar'?p.name.ar:p.name.en}</div>
      <div class="price-desc" data-ar="${p.desc.ar}" data-en="${p.desc.en}">${currentLang==='ar'?p.desc.ar:p.desc.en}</div>
      <div class="price-amount">${p.price} <span>KWD</span></div>
      <div class="price-per" data-ar="شهريًا" data-en="per month">شهريًا</div>
      <ul class="price-features">
        ${p.feat.map(f=>`<li>${svgIcon('m9 12 2 2 4-4')}<span data-ar="${f.ar}" data-en="${f.en}">${currentLang==='ar'?f.ar:f.en}</span></li>`).join('')}
      </ul>
      <a href="#contact" class="btn ${p.featured?'btn-ghost':'btn-dark'} price-cta" data-ripple>
        <span data-ar="اختر هذه الخطة" data-en="Choose Plan">اختر هذه الخطة</span>
      </a>
    </div>`).join('');
}

function renderBlog(){
  document.getElementById('blogGrid').innerHTML = blogPosts.map(b=>`
    <a href="#" class="blog-card reveal">
      <div class="blog-img"><img src="${b.img}" alt="${b.title.en}" loading="lazy"></div>
      <div class="blog-body">
        <div class="blog-cat" data-ar="${b.cat.ar}" data-en="${b.cat.en}">${currentLang==='ar'?b.cat.ar:b.cat.en}</div>
        <h3 data-ar="${b.title.ar}" data-en="${b.title.en}">${currentLang==='ar'?b.title.ar:b.title.en}</h3>
        <div class="blog-date">${currentLang==='ar'?b.date.ar:b.date.en}</div>
      </div>
    </a>`).join('');
}

function renderGallery(){
  document.getElementById('masonryGrid').innerHTML = galleryImgs.map((g,i)=>`
    <div class="g-item reveal" data-idx="${i}">
      <img src="${g}" alt="Gallery ${i+1}" loading="lazy">
      <div class="g-overlay">${svgIcon('M21 21l-4.35-4.35M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z')}</div>
    </div>`).join('');
}

function renderFaq(){
  document.getElementById('faqList').innerHTML = faqs.map((f,i)=>`
    <div class="faq-item reveal">
      <div class="faq-q"><span data-ar="${f.q.ar}" data-en="${f.q.en}">${currentLang==='ar'?f.q.ar:f.q.en}</span><div class="plus"></div></div>
      <div class="faq-a"><p data-ar="${f.a.ar}" data-en="${f.a.en}">${currentLang==='ar'?f.a.ar:f.a.en}</p></div>
    </div>`).join('');
  document.querySelectorAll('.faq-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item=q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });
}

function renderAll(){
  renderServices(); renderProjects(); renderTestimonials(); renderPricing(); renderBlog(); renderGallery(); renderFaq();
  observeReveal();
  bindLightbox();
}

/* ================= I18N ================= */
function applyLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==='ar' ? 'rtl' : 'ltr';
  document.getElementById('langLabel').textContent = lang==='ar' ? 'English' : 'العربية';

  document.querySelectorAll('[data-ar]').forEach(el=>{
    const val = lang==='ar' ? el.getAttribute('data-ar') : el.getAttribute('data-en');
    if(val!==null) el.textContent = val;
  });
  document.querySelectorAll('[data-ar-ph]').forEach(el=>{
    const val = lang==='ar' ? el.getAttribute('data-ar-ph') : el.getAttribute('data-en-ph');
    if(val!==null) el.setAttribute('placeholder', val);
  });
  renderAll();
  localStorage.setItem('propool-lang', lang);
}

document.getElementById('langToggle').addEventListener('click',()=>{
  applyLang(currentLang==='ar' ? 'en' : 'ar');
});

/* ================= THEME ================= */
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeLabel').setAttribute('data-ar', theme==='dark' ? 'الوضع الفاتح':'الوضع الداكن');
  document.getElementById('themeLabel').setAttribute('data-en', theme==='dark' ? 'Light Mode':'Dark Mode');
  document.getElementById('themeLabel').textContent = currentLang==='ar'
    ? (theme==='dark' ? 'الوضع الفاتح':'الوضع الداكن')
    : (theme==='dark' ? 'Light Mode':'Dark Mode');
  localStorage.setItem('propool-theme', theme);
}
document.getElementById('themeToggle').addEventListener('click',()=>{
  const cur = document.documentElement.getAttribute('data-theme');
  applyTheme(cur==='dark' ? 'light' : 'dark');
});

/* ================= NAV ================= */
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll',()=>{
  mainNav.classList.toggle('scrolled', window.scrollY>20);
  document.getElementById('backTop').classList.toggle('show', window.scrollY>500);
  const bg = document.getElementById('heroBg');
  if(window.scrollY < window.innerHeight){
    bg.style.transform = `scale(1.08) translateY(${window.scrollY*0.25}px)`;
  }
});
document.getElementById('backTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

/* ================= REVEAL ON SCROLL ================= */
function observeReveal(){
  const els = document.querySelectorAll('.reveal:not(.in), .reveal-scale:not(.in)');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.15});
  els.forEach(el=>io.observe(el));
}

/* ================= COUNTERS ================= */
function animateCounters(){
  document.querySelectorAll('.stat-num').forEach(el=>{
    const target = parseInt(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix')||'';
    let cur = 0;
    const step = Math.max(1, Math.round(target/60));
    const timer = setInterval(()=>{
      cur += step;
      if(cur>=target){ cur=target; clearInterval(timer);}
      el.textContent = cur + suffix;
    },20);
  });
}
const statsIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ animateCounters(); statsIO.disconnect(); } });
},{threshold:.4});
statsIO.observe(document.querySelector('.stats'));

/* ================= BEFORE / AFTER SLIDER ================= */
const baWrap = document.getElementById('baWrap');
const baHandle = document.getElementById('baHandle');
const baAfter = document.querySelector('.ba-after');
let dragging=false;
function moveBa(x){
  const rect = baWrap.getBoundingClientRect();
  let pct = ((x-rect.left)/rect.width)*100;
  pct = Math.max(2,Math.min(98,pct));
  baHandle.style.left = pct+'%';
  if(document.documentElement.dir==='rtl'){
    baAfter.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
  } else {
    baAfter.style.clipPath = `inset(0 0 0 ${pct}%)`;
  }
}
baHandle.addEventListener('mousedown',()=>dragging=true);
window.addEventListener('mouseup',()=>dragging=false);
window.addEventListener('mousemove',e=>{ if(dragging) moveBa(e.clientX); });
baHandle.addEventListener('touchstart',()=>dragging=true);
window.addEventListener('touchend',()=>dragging=false);
window.addEventListener('touchmove',e=>{ if(dragging) moveBa(e.touches[0].clientX); });

/* ================= LIGHTBOX ================= */
let lbIndex=0;
function bindLightbox(){
  document.querySelectorAll('.g-item').forEach(item=>{
    item.addEventListener('click',()=>{
      lbIndex = parseInt(item.getAttribute('data-idx'));
      openLightbox();
    });
  });
}
function openLightbox(){
  document.getElementById('lbImg').src = galleryImgs[lbIndex];
  document.getElementById('lightbox').classList.add('open');
}
document.getElementById('lbClose').addEventListener('click',()=>document.getElementById('lightbox').classList.remove('open'));
document.getElementById('lightbox').addEventListener('click',e=>{ if(e.target.id==='lightbox') e.currentTarget.classList.remove('open'); });
document.getElementById('lbNext').addEventListener('click',()=>{ lbIndex=(lbIndex+1)%galleryImgs.length; openLightbox(); });
document.getElementById('lbPrev').addEventListener('click',()=>{ lbIndex=(lbIndex-1+galleryImgs.length)%galleryImgs.length; openLightbox(); });

/* ================= FILTER BAR ================= */
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ================= RIPPLE ================= */
document.addEventListener('click',e=>{
  const btn = e.target.closest('[data-ripple]');
  if(!btn) return;
  const rect = btn.getBoundingClientRect();
  const circle = document.createElement('span');
  const size = Math.max(rect.width,rect.height);
  circle.style.width = circle.style.height = size+'px';
  circle.style.left = (e.clientX-rect.left-size/2)+'px';
  circle.style.top = (e.clientY-rect.top-size/2)+'px';
  circle.classList.add('ripple');
  btn.appendChild(circle);
  setTimeout(()=>circle.remove(),700);
});

/* ================= FORM ================= */
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"] span');
  const original = btn.textContent;
  btn.textContent = currentLang==='ar' ? 'تم الإرسال بنجاح ✓' : 'Sent successfully ✓';
  this.reset();
  setTimeout(()=>{ btn.textContent = original; },2800);
});

/* ================= INIT ================= */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('preloader').classList.add('hide'),600);
});

renderAll();
applyLang(document.documentElement.lang);
applyTheme('light');
