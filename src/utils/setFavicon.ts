// utils/setFavicon.ts
type Page = 'home' | 'construtora' | 'ceramica' | 'agropecuaria';

export function setFavicon(page: Page): void {
  // Mapeamento dos favicons de cada página
  const faviconMap: Record<Page, string> = {
    home: '/favicon-home.ico',
    construtora: '/favicon-construtora.ico',
    ceramica: '/favicon-ceramica.ico',
    agropecuaria: '/favicon-agropecuaria.ico',
  };

  // Seleciona o link do favicon ou cria um novo se não existir
  let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  // Define o href do link para o favicon correspondente à página
  link.href = faviconMap[page] || '/favicon-home.ico';
}
