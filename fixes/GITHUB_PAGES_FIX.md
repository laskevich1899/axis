# Быстрый фикс GitHub Pages

## Симптом

`https://axisbimsolutions.com` → страница GitHub «404 — There isn't a GitHub Pages site here».

## Причина

Pages публикует ветку `main` (исходники Next.js). Нужная ветка — `gh-pages` (готовая статика).

## Фикс в UI

https://github.com/laskevich1899/axis/settings/pages

- Source: **Deploy from a branch**
- Branch: **gh-pages** / **/(root)** → Save

## Фикс на будущее

Скопировать `deploy-pages.yml` в `.github/workflows/` репозитория `axis` и запушить в `main`.
