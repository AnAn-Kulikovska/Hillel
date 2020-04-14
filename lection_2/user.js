user = prompt("Кто пришел?");

if (user == 'Админ') {
    password = prompt('Пароль');

    if (password == 'Черный властелин') {
        alert('Добро пожаловать');
    } else if (password == null) {
        alert('Вход отменён');
    } else {
        alert('Пароль неверен');
    }
    
} else if (user == null) {
    alert('Вход отменён');
} else {
    alert('Я вас не знаю');
}