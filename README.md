# test-task-zaavto-react
Test task in Zaavto, implemented on React

----------------------------------------------
Написать небольшое приложение по написанию отзывов к фильмам Звездные войны

1) Выбор фильма
Начальная страница состоит из 2х блоков
Первый - список фильмов.
Второй - содержание фильма.
API для получения данных: https://swapi.dev/api/
Список фильмов: https://swapi.dev/api/films/
Конкретный фильм: https://swapi.dev/api/films/1/

2) Написание отзыва
При переходе на этот шаг, разметка и логика должны подгружаться динамически (лениво).
Форма на странице отзыва должна состоять из 3х полей.
"username" - input, required
"email" - input, required, email mask
"review" - textarea, required
Сэмулировать запрос отправки формы через:
new Promise((resolve) => { setTimeout(resolve, 1000) })

3) Сообщение о успешной отправке
Отобразить введенные пользователем данные в модальном окне.
Из инструментов желательно использовать React.js.


- Download repository files
- "npm run install" in console to install dependencies
- "npm run start" in console to start local server
- Wait for the project to open in the browser
- Use
