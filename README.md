### Next.js практика

## Быстрый старт:
Создать env файл:
```
cp .env.example .env
```

### Запуск docker контейнера:

```
docker compose up -d
```

### Установить зависимости:

```
docker compose exec app sh -c 'yarn'
```

### Запуск dev сервера:

```
docker compose exec app sh -c 'yarn dev'
```

### Запуск форматирования, Prettier:

```
docker compose exec app sh -c 'yarn format'
```

### Запуск ESLint:

```
docker compose exec app sh -c 'yarn lint'
```

### Проверка ошибок TypeScript:

```
docker compose exec app sh -c 'yarn ts-lint'
```

### Проверка ошибок TypeScript, ESLint, Prettier:

```
docker compose exec app sh -c 'yarn control'
```

### Обратный прокси-сервер (reverse proxy) Nginx:
**Доступен по URL:** http://localhost:3000