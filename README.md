# Sidiahi Training

Многостраничный тренировочный сайт на `Next.js` и `Tailwind CSS`.

В проекте есть:
- главная страница с обзором программы,
- страница плана по неделям,
- страница управления тренировками,
- страница восстановления,
- локальное редактирование тренировок через `localStorage` без базы данных.

## Локальный запуск

```bash
npm install
npm run dev
```

Приложение откроется на [http://localhost:3000](http://localhost:3000).

## Проверка проекта

```bash
npm run lint
npm run build -- --webpack
```

## Деплой на Vercel

Проект уже подходит для деплоя на Vercel как обычное `Next.js` приложение.

Рекомендуемые настройки:
- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `.next`

Минимальная рекомендуемая версия Node.js:

```bash
>=20
```

## Git

Сейчас изменения уже сохранены в ветке:

```bash
codex/training-site-expansion
```

И в коммите:

```bash
74bd3b6
```

Чтобы я сразу подключил GitHub-репозиторий и запушил код, пришли команды из нового репозитория или просто ссылку на него.
