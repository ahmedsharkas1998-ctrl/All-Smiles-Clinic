/**
 * Main Interactive Controller for All Smiles Dental Clinic
 * Handles Navigation, Scroll Reveals, Mobile Menu, Tabs, and Dynamic Data Binding.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Transition
  const navbar = document.querySelector('.site-navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Announcement Bar Dismissal
  const announcementBar = document.querySelector('.announcement-bar');
  const closeAnnouncementBtn = document.querySelector('.announcement-close');
  if (closeAnnouncementBtn && announcementBar) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileCloseBtn = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const openMobileMenu = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileMenu);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileMenu);
  
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeMobileMenu();
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // 4. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal-fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // 5. Dynamic Year in Footer
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  // 6. Services Directory Filter / Accordion Logic
  const directoryButtons = document.querySelectorAll('.directory-tab-btn');
  const directoryPanels = document.querySelectorAll('.directory-tab-panel');

  if (directoryButtons.length > 0 && directoryPanels.length > 0) {
    directoryButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetCategory = btn.getAttribute('data-target');
        
        directoryButtons.forEach(b => {
          b.classList.remove('active-tab');
          b.style.backgroundColor = 'var(--bg-cream)';
          b.style.color = 'var(--color-dark)';
          b.style.borderColor = 'var(--border-subtle)';
        });
        btn.classList.add('active-tab');
        btn.style.backgroundColor = 'var(--color-dark)';
        btn.style.color = 'var(--bg-primary)';
        btn.style.borderColor = 'var(--color-dark)';

        directoryPanels.forEach(panel => {
          if (targetCategory === 'ALL' || panel.getAttribute('data-category') === targetCategory) {
            panel.style.display = 'block';
            setTimeout(() => panel.classList.add('is-revealed'), 20);
          } else {
            panel.style.display = 'none';
          }
        });
      });
    });
  }

  // 7. Render dynamic Business Data where needed
  if (window.BUSINESS_DATA) {
    const data = window.BUSINESS_DATA;
    
    // Bind review stats
    const reviewScoreEls = document.querySelectorAll('[data-bind="rating-score"]');
    reviewScoreEls.forEach(el => el.textContent = data.rating.score);
    
    const reviewCountEls = document.querySelectorAll('[data-bind="rating-count"]');
    reviewCountEls.forEach(el => el.textContent = data.rating.reviewCount);

    // Bind phone and address
    const phoneLinks = document.querySelectorAll('[data-bind="phone-link"]');
    phoneLinks.forEach(el => {
      el.setAttribute('href', `tel:${data.contact.primaryPhoneTel}`);
      el.textContent = data.contact.primaryPhone;
    });

    const whatsappLinks = document.querySelectorAll('[data-bind="whatsapp-link"]');
    whatsappLinks.forEach(el => {
      el.setAttribute('href', data.contact.whatsappUrl);
    });

    const mapsLinks = document.querySelectorAll('[data-bind="maps-link"]');
    mapsLinks.forEach(el => {
      el.setAttribute('href', data.location.googleMapsUrl);
    });
  }
});
