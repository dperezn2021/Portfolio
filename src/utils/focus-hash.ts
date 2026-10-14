// Abre los <details> que contienen el elemento indicado en el hash de la URL,
// lo desplaza a la vista y le da el foco (para enlaces desde el buscador).
export function focusHashTarget(): void {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  if (target instanceof HTMLDetailsElement) target.open = true;
  let parent = target.closest('details');
  while (parent) {
    parent.open = true;
    parent = parent.parentElement?.closest('details') ?? null;
  }

  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  requestAnimationFrame(() => {
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.focus({ preventScroll: true });
    target.classList.add('ring-2', 'ring-cyan-500');
    window.setTimeout(() => target.classList.remove('ring-2', 'ring-cyan-500'), 2500);
  });
}
