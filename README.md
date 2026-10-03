# Диагностика axisbimsolutions.com

## Вердикт

Сайт **не сломан в коде**. Готовая статическая сборка есть в ветке `gh-pages` репозитория [laskevich1899/axis](https://github.com/laskevich1899/axis). Живой домен отдаёт 404, потому что **GitHub Pages сейчас публикует ветку `main`** (исходники Next.js без `index.html`), а не `gh-pages`.

| Проверка | Результат |
|----------|-----------|
| DNS `axisbimsolutions.com` | → IP GitHub Pages (`185.199.*.*`) |
| CNAME | → `laskevich1899.github.io` |
| Файл `CNAME` в репо | `axisbimsolutions.com` |
| Ветка `gh-pages` | Есть `index.html`, `_next/`, `.nojekyll` — сайт собирается |
| Последний deploy (2 окт) | Источник: **`main`** → «There isn't a GitHub Pages site here» |
| Workflow `deploy-pages.yml` | **Отсутствует** (в README он описан, в репо файла нет) |

## Что сделать прямо сейчас (1–2 минуты)

1. Откройте [Settings → Pages](https://github.com/laskevich1899/axis/settings/pages) репозитория `axis`.
2. **Build and deployment → Source**: Deploy from a branch.
3. **Branch**: `gh-pages` / `/ (root)` → Save.
4. Custom domain: `axisbimsolutions.com` → при необходимости **Check again**.
5. Когда DNS станет зелёным — включите **Enforce HTTPS**.

Через 1–5 минут [https://axisbimsolutions.com](https://axisbimsolutions.com) должен снова открываться.

## Чтобы не сломалось снова

Добавьте в репозиторий `axis` файл из этой папки:

`fixes/deploy-pages.yml` → `.github/workflows/deploy-pages.yml`

Он при каждом push в `main` собирает статический экспорт и публикует в `gh-pages`. После этого в Pages можно оставить источник `gh-pages`, либо перейти на деплой через Actions (GitHub / `github-pages` environment).

Если откроете репозиторий `axis` в Cursor с доступом на запись — я сам добавлю workflow и проверю деплой.

## Как работать со мной экономно по токенам

- Одна чёткая задача за раз («почини деплой», «поменяй текст hero»).
- Прикладывайте ссылку на репо / скрин / ошибку — меньше ходов на поиск.
- Не просите «переписать весь сайт», если нужна точечная правка.
- Для мелких правок текста/DNS часто достаточно короткого сообщения без полного контекста прошлого чата.
- Большие рефакторинги и длинные переписки съедают лимит быстрее всего.
