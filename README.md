# Os meus livros

App para gerir a tua biblioteca. Funciona no Android como app instalada (PWA).

## Pôr no GitHub Pages

1. Em github.com, cria um repositório novo (por exemplo `livros`), público.
2. Clica em **Add file → Upload files** e envia estes 5 ficheiros: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`.
3. Vai a **Settings → Pages**. Em *Build and deployment*, escolhe **Deploy from a branch**, branch `main`, pasta `/ (root)`, e grava.
4. Passado um ou dois minutos, a app fica em `https://O-TEU-UTILIZADOR.github.io/livros/`.
5. No Chrome do Android, abre esse endereço e usa o menu ⋮ → **Instalar app**.

## Como usar

- **Procurar**: escreve um ISBN ou o título e toca em Procurar.
- **Ler código**: aponta a câmara ao código de barras (EAN-13) atrás do livro. Funciona no Chrome para Android.
- **Ler capa**: tira uma foto à capa; o texto é lido (OCR) e usado na pesquisa. Da primeira vez descarrega os dados de idioma, por isso precisa de internet.
- Os dados vêm da Google Books e, como alternativa, da Open Library.

## Notas

- A lista fica guardada no telemóvel. Usa **Exportar cópia** de vez em quando.
- A Google Books pode limitar pedidos se fizeres muitos seguidos. Espera uns minutos.
- A câmara só funciona em HTTPS, o que o GitHub Pages já garante.
- Para atualizar a app, substitui o ficheiro no repositório e abre a app com internet.
