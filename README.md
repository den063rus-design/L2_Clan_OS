# MMO Clan OS Public

Публичная витрина проекта **MMO Clan OS**.

Сайт обновлён под текущую архитектуру:

- кроссплатформенность: **Discord + Telegram + VK**;
- единый `core` с бизнес-логикой (рейды, attendance, DKP, лут, роли, доступ);
- платформы работают как адаптеры (parse -> payload -> core action -> render);
- поддержка терминологии разных игр и сообществ: *клан / гильдия / конста / корпа / статик*;
- изоляция данных по сообществам и контроль доступа.

Важно: часть скриншотов на сайте исторически из Discord MVP, но доменная логика и сценарии описаны для кроссплатформенной версии.

## GitHub Pages

Для публикации:

1. Открыть `Settings -> Pages`.
2. В `Build and deployment` выбрать `Deploy from a branch`.
3. Выбрать ветку `main`.
4. Выбрать папку `/root`.
5. Нажать `Save`.

После публикации страница будет доступна по адресу:

```text
https://den063rus-design.github.io/MMO_Clan_OS_public/
```

Отдельная страница с полным мануалом:

```text
https://den063rus-design.github.io/MMO_Clan_OS_public/manual.html
```
