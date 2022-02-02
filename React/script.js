/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';



// const personalMovieDB = {
//     couunt: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     private: false,
//     start: function () {
//         personalMovieDB.couunt = prompt('Сколько фильмов вы уже посмотрели?', '');
//         while (personalMovieDB.couunt == '' || personalMovieDB.couunt == null || isNaN(personalMovieDB.couunt)) {
//             personalMovieDB.couunt = prompt('Сколько фильмов вы уже посмотрели?', '');
//         }
//     },
//     rememberMyFilms: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
//             if (a != null && b != null && a != '' && b != '' && a.length <= 50 && b.length <= 50) {
//                 personalMovieDB.movies[a] = b;
//             } else {
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function () {
//         if (personalMovieDB.couunt < 10) {
//             window.alert("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.couunt <= 30) {
//             window.alert("Вы классический зритель");
//         } else if (personalMovieDB.couunt > 30) {
//             window.alert("Вы киноман");
//         } else {
//             window.alert("Произошла ошибка");
//         }
//     },
//     showMyDB: function () {
//         if (!personalMovieDB.private) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function () {
//         for (let i = 1; i <2; i++) {
//             let genres = prompt(`Ваш любимый жанр через запятую`).toLocaleLowerCase();

//             if (genres == '' || genres == null) {
//                 console.log('вы ввели некорректные данные');
//                 i--;
//             } else {
//                 this.genres = genres.split(', ');
//                 this.genres.sort();
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр #${i+1} это ${item}`);
//         });
//     },
//     toggleVisibleMyDB: function () {
//         if (this.private) {
//             this.private = false;
//         } else { this.private = true; }
//     }
// };

const btns = document.querySelectorAll('button');
btns.forEach(item => {
    item.style.backgroundColor = 'red';
});
const div = document.createElement('img');
btns[1].after(div);
btns[2].replaceWith(btns[0]);