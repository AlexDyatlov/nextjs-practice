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
