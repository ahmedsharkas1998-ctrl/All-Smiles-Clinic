/**
 * Appointment Booking Modal & Form Logic for All Smiles Dental Clinic
 * Handles validation, patient type selection, consent verification,
 * and direct WhatsApp message dispatching.
 */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('appointment-modal');
  const openButtons = document.querySelectorAll('[data-action="open-appointment"]');
  const closeButtons = document.querySelectorAll('[data-action="close-appointment"]');
  const inlineForm = document.getElementById('inline-appointment-form');
  const modalForm = document.getElementById('modal-appointment-form');

  // Open Modal Handler
  const openModal = (defaultReason = '') => {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus first input
    const firstInput = modal.querySelector('input, select');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }

    if (defaultReason && modalForm) {
      const reasonSelect = modalForm.querySelector('[name="reason"]');
      if (reasonSelect) {
        reasonSelect.value = defaultReason;
      }
    }
  };

  // Close Modal Handler
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const reason = btn.getAttribute('data-service') || '';
      openModal(reason);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  // Close on outside click or ESC key
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Form Submission Logic
  function setupAppointmentForm(formElement) {
    if (!formElement) return;

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      const data = Object.fromEntries(formData.entries());

      // Validation
      const consentChecked = formElement.querySelector('[name="consent"]')?.checked;
      if (!consentChecked) {
        alert('Please agree to the contact and privacy consent checkbox to proceed.');
        return;
      }

      const submitBtn = formElement.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="animate-spin" style="width: 18px; height: 18px; animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" stroke-opacity="0.3"></circle>
            <path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          Processing Request...
        `;
      }

      // Format WhatsApp prefilled message
      const whatsappMsg = `*New Appointment Request - All Smiles Dental Clinic*\n` +
        `• *Name:* ${data.firstName || ''} ${data.lastName || ''}\n` +
        `• *Phone:* ${data.phone || ''}\n` +
        `• *WhatsApp:* ${data.whatsapp || data.phone || ''}\n` +
        `• *Patient Type:* ${data.patientType || 'General'}\n` +
        `• *Preferred Date:* ${data.preferredDate || 'Flexible'}\n` +
        `• *Preferred Time:* ${data.preferredTime || 'Anytime'}\n` +
        `• *Reason for Visit:* ${data.reason || 'General Consultation'}\n` +
        (data.notes ? `• *Notes:* ${data.notes}\n` : '');

      const encodedMsg = encodeURIComponent(whatsappMsg);
      const directWhatsAppUrl = `https://wa.me/201225522201?text=${encodedMsg}`;

      // Simulate instantaneous processing & show confirmation
      setTimeout(() => {
        const formContainer = formElement.parentElement;
        if (formContainer) {
          formContainer.innerHTML = `
            <div class="text-center py-8 animate-fade-in">
              <div class="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6" style="background-color: var(--color-green-light); color: var(--color-natural-green);">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 class="font-serif text-3xl mb-3 text-dark">THANK YOU</h3>
              <p class="text-muted text-base mb-6 max-w-md mx-auto leading-relaxed">
                Your appointment request for <strong>${data.firstName || 'your visit'}</strong> has been received. Our team at Silver Mall, First Settlement will contact you shortly to confirm your time.
              </p>
              
              <div class="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFE9DF] max-w-md mx-auto mb-6 text-left text-sm text-[#77736C]">
                <p class="font-bold text-[#242321] mb-1">Want instant confirmation?</p>
                <p class="text-xs">Send this request directly to our clinic WhatsApp for rapid response during business hours.</p>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="${directWhatsAppUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
                  <span>SEND VIA WHATSAPP</span>
                  <span class="btn-arrow">→</span>
                </a>
                <button type="button" class="btn btn-cream" onclick="location.reload()">
                  <span>BACK TO HOME</span>
                </button>
              </div>
            </div>
          `;
        }
      }, 700);
    });
  }

  setupAppointmentForm(modalForm);
  setupAppointmentForm(inlineForm);

  // Expose global helper for trigger buttons
  window.openAppointmentModal = openModal;
});
