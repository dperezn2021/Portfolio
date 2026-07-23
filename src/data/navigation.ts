export interface NavItem {
  href: string;
  title: string;
  i18nKey: string;
}

export const navigation: NavItem[] = [
  { href: '/', title: 'Inicio', i18nKey: 'nav.home' },
  { href: '/sobre-mi', title: 'Sobre Mí', i18nKey: 'nav.about' },
  { href: '/trayectoria', title: 'Trayectoria', i18nKey: 'nav.career' },
  { href: '/proyectos', title: 'Proyectos', i18nKey: 'nav.projects' },
  { href: '/contacto', title: 'Contacto', i18nKey: 'nav.contact' },
];