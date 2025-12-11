// === Toggle Menu (Hamburger Navigation) ===
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// === Navbar Scroll Effect dengan Hide/Show Animation ===
let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  // Tambah class scrolled untuk mengubah warna background
  if (currentScroll > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Hide/Show header berdasarkan arah scroll
  if (currentScroll > scrollThreshold) {
    if (currentScroll > lastScrollTop) {
      // Scroll ke bawah - sembunyikan header
      header.classList.add('hide');
      header.classList.remove('show');
    } else {
      // Scroll ke atas - tampilkan header
      header.classList.remove('hide');
      header.classList.add('show');
    }
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// === Tutup menu otomatis jika user klik link ===
const navLinks = document.querySelectorAll('.menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  });
});

// === Fade In Animation on Scroll ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach(el => observer.observe(el));

// === Testimonial Slider - UPDATED to match HTML IDs ===
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach((card, i) => {
    card.classList.remove('active');
    if (i === index) {
      card.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}

function prevTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
  showTestimonial(currentTestimonial);
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);
  
  // Auto slide setiap 5 detik
  setInterval(nextTestimonial, 5000);
}

// === Smooth Scroll untuk semua anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// === Form Submit Handler ===
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    contactForm.reset();
  });
}

// === Parallax Effect untuk Hero Section ===
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
  }
});

// === Product Card Hover Effect ===
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// === Gallery Item Click to Enlarge (Optional) ===
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
  item.addEventListener('click', function() {
    const img = this.querySelector('img');
    if (img) {
      // Bisa ditambahkan lightbox atau modal di sini
      console.log('Gallery item clicked:', img.src);
    }
  });
});

// === Loading Animation ===
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// === Scroll to Top Button (Optional Enhancement) ===
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: navy;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 999;
`;

