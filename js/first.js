// Напиши цикл for, который выведет в консоль все чётные числа от 1 до 20.

for(let i = 0; i<=20; i++){
    if(i%2 == 0){
      console.log(i);  
    } 
}

//Напиши цикл for...in, чтобы вывести все ключи и значения из объекта, описывающего твоего любимого героя

const hero = {
    name: "Doctor Who",
    power: "Time Lord",
    age: 903
};

for(let key in hero){
    console.log(key, hero[key])
}

/* Створи об'єкт car з полем brand і методами showBrand (звичайна функція) та showBrandArrow (стрілкова функція).
 Подивись, як працює this при виклику цих методів.
 */


let car = {
    brand: "bmw",

    showBrand: function  (){
    console.log (this.brand)
},

     showBrandArrow: () => {
    console.log(this.brand)
},
   
};

car.showBrandArrow()
car.showBrand()

/* Створи масив рядків, що представляє список товарів.
 Використовуй стрілкову функцію з методом filter, щоб залишити тільки ті рядки, довжина яких перевищує 5 символів.
Потім використай стрілкову функцію з методом map, щоб перетворити всі рядки у верхній регістр. */

let goodsList = ['milk', 'eggs', 'cereals', 'bananas', 'pineapple',];

let above5Symbols = goodsList.filter(str => str.length > 5);
console.log(above5Symbols);

let upperCase = goodsList.map(str => str.toUpperCase());
console.log(upperCase);

/* Застосуй стрілкові функції замість звичайних у наступному коді: */

const words = ["apple", "banana", "grape", "kiwi", "strawberry"];

/* Звичайна функція з filter
const longWords = words.filter(function(word) {
  return word.length > 5;
}); */
const longWords = words.filter(word => word.length >5);

/* // Звичайна функція з map
const uppercaseWords = words.map(function(word) {
  return word.toUpperCase();
}); */
const uppercaseWords = words.map(word => word.toUpperCase());

console.log(longWords);      // Виведе: ["banana", "strawberry"]
console.log(uppercaseWords); // Виведе: ["APPLE", "BANANA", "GRAPE", "KIWI", "STRAWBERRY"]