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
        Enviando...
      `;
      submitBtn.disabled = true;
    }

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const publicKey = window.EMAILJS_PUBLIC_KEY;
      const serviceId = window.EMAILJS_SERVICE_ID;
      const templateId = window.EMAILJS_TEMPLATE_ID;

      if (typeof window.emailjs !== 'undefined' && publicKey && serviceId && templateId) {
        await window.emailjs.send(serviceId, templateId, {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject || 'Nuevo mensaje de contacto',
          message: data.message,
          reply_to: data.email,
        }, publicKey);
      } else {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error('Error al enviar');
        }
      }

      form.reset();
      showNotification('¡Mensaje enviado con éxito!', 'success');
    } catch (error) {
      showNotification('El formulario está listo para conectar con EmailJS o Formspree. Si quieres, te ayudo a dejarlo operativo con tu cuenta.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = originalText || 'Enviar Mensaje';
        submitBtn.disabled = false;
      }
    }
  });
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