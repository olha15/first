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