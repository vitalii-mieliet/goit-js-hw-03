/*
!Задача 1. Генератор slug

Напиши функцію slugify(title), яка приймає заголовок статті,
параметр title і повертає slug, створений із цього рядка.

Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
Усі символи slug повинні бути в нижньому регістрі.
Усі слова slug повинні бути розділені тире.

*/

'use strict';

console.log('\nTask-1');

function slugify(title) {
  const slug = title.trim().toLowerCase().split(' ').join('-').toString();
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
