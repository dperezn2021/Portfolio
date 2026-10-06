function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.innerHTML;

    if (submitBtn) {
      submitBtn.innerHTML = `
        <span class="material-symbols-outlined text-sm animate-spin">progress_activity</span>
        ${getContactText('contact.sending', 'Enviando...')}
      `;
      submitBtn.disabled = true;
    }

    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const config = window.EMAILJS_CONFIG;
      if (
        typeof window.emailjs === 'undefined' ||
        !config?.publicKey ||
        !config.serviceId ||
        !config.templateId
      ) {
        throw new Error('EMAILJS_NOT_CONFIGURED');
      }

      await window.emailjs.send(config.serviceId, config.templateId, {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || getContactText('contact.default_subject', 'Nuevo mensaje de contacto'),
        message: data.message,
        reply_to: data.email,
      }, { publicKey: config.publicKey });

      form.reset();
      showNotification(getContactText('contact.sent', '¡Mensaje enviado con éxito!'), 'success');
    } catch (error) {
      const message = error?.message === 'EMAILJS_NOT_CONFIGURED'
        ? getContactText('contact.not_configured', 'El formulario de contacto aún no está configurado.')
        : getContactText('contact.send_error', 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.');
      showNotification(message, 'error');
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = originalText || 'Enviar Mensaje';
        submitBtn.disabled = false;
      }
    }
  });
}

function getContactText(key, fallback) {
  const language = document.documentElement.lang || 'es';
  return window.translations?.[language]?.[key] || fallback;
}

function showNotification(message, type = 'success') {
  const existing = document.querySelector('.notification-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `
    notification-toast fixed bottom-6 left-1/2 -translate-x-1/2 z-50
    px-6 py-4 rounded-xl text-white font-medium
    transition-all duration-500 transform
    ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}
  `;
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}

window.initContact = initContact;