"use strict";
/* Задача №1
Отримати в константу елемент <body>

 */

const body = document.querySelector("body");
const list = document.createElement("ul");

//2 функцію, яка додає в <body> список UL
//)з певною кількістю LI
function createList(num) {
  for (let i = 0; i < num; i++) {
    const item = `<li>${i + 1}</li>`;
    list.insertAdjacentHTML("beforeend", item);
  }
}

createList(5);
const listString = list.innerHTML;

body.insertAdjacentHTML("beforeend", listString);

//Додати до елементу <body> класс loaded.
//Потім перевірити чи є клас loaded у елемента <body>
//і, якщо є, додати стиль кольору тесту зедлений.
body.classList.add(`loaded`);
if (body.classList.contains("loaded")) {
  body.style.color = `green`;
}

/*4) Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)". */

const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.classList.add(`active`);
  item.innerHTML = `"Елемент № ${index + 1}`;
});

/* Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
 */

const button = document.querySelector(`.button`);

//1-й варіант -ЧЕРЕЗ коордінати елемента
button.setAttribute(`data-scroll`, `scroll-down`);

// let buttonLeftPos = button.offsetLeft;
// let buttonTopPos = button.offsetTop;

// if (button.hasAttribute(`data-scroll`)) {
//   window.scrollTo({
//     top: `${buttonTopPos}`,
//     left: `${buttonLeftPos}`,
//     behavior: "smooth",
//   });
// }

//2-й варіант-через scrollIntoView()
function scrillToElem(element) {
  const btn = element.dataset.scrillToElem;
  element.scrollIntoView({
    block: btn,
    inline: "nearest",
    behavior: "smooth",
  });
}
scrillToElem(button);

/*

Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний */
const link = document.querySelector(".link");
link.setAttribute("data-num", `100`);
if (link.hasAttribute(`data-num`)) {
  if (parseFloat(link.dataset.num) < 200) {
    link.style.color = `red`;
  }
}
