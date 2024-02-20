/* Logic operator */

//1.Что выведет код ниже?

alert( null || 2 || undefined );

//answer: 2


//2.Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );

//answer:  1, затем 2.

//3.Что выведет код ниже?

alert( 1 && null && 2 );

//answer:  null.

/* if */
//1.Выведется ли alert?

if ("0") {
  alert( 'Привет' );
}

//answer:  da.


//1.Используя конструкцию if..else, напишите код, который будет спрашивать: „
//Какое «официальное» название JavaScript?“
//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном 
//случае – отобразить: «Не знаете? ECMAScript!»

//answer:<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Document </title>
</head>
<body>
  <script>
    'use strict';

    let value = prompt('название JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Верно!');
    } else {
      alert('Не знаете? ECMAScript!');
    }

/*     if value == 'ECMAScript':
    alert('Верно!')
    else:
    alert('Не знаете? ECMAScript!') */
  </script>

</body>
</html>.

//3.Перепишите if..else с использованием нескольких операторов '?'.
//Для читаемости рекомендуется разбить код на несколько строк.

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

//answer:
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';