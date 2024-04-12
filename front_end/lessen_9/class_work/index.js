// Пример 1 - создание объекта
const student = {
    age:22,
    name:'Василий'
}
console.log(student.age); //22
console.log(student.name);// Василий


// Пример 2  - ключ может состоять из двкх слов
//Если  ключ имеет пробелы - его нужно обернуть в кавычки

const product = {
    title:'iPhone nokia',
    price:2000,
    'model of phone':'XR'
}
console.log(student);
// Получить значение по ключу 
console.log(product.price)
console.log(product["model of phone"]);

// положить значение по ключу
product.diagonal = 6.5;
product["type of adapder"]= "USB-C"
console.log(product);

//Пример 3
// Если у нас есть переменная и мы хотим доставать
// значения из объекта по этой переменной

let key = "age";
console.log(student[key]);
key = "name";
console.log(student[key]);

const client = {
    firstname:"John",
    wife:"Maria"
};
const key1 = "wife"
// как достать по переменной из объекта
console.log(client.key1) // undefined
console.log(client[key1])// Maria

//Пример 4 
//Допустим у нас были переменные - и мы хотим создать из низ объект

const title = "Titanic"
const capacity = 1500

const titanic ={title, capacity}
console.log(titanic);

// Пример 5 
const name1 = "Avrora"
const cap = 300
const avrora = {title:name1, capacity:cap}
console.log(avrora);

//Пример 6 
//Метод внутри объекта

const dog={
    nick:'Tuzik',
    bark(){
        console.log("Гав,Гав")
    }
};
// вызов метода
dog.bark();

// Прототипное наследование
// один объект будет выступать как прототип для другого

const bike = {
    brand:"Turist",
    drive(){
        console.log("bsh,-br-br")
    }
};

const mountineBike = {
__proto__:bike,
gears:20,
price:600,
};
console.log(mountineBike);
console.log(mountineBike.brand);
// console.log(mountineBike.drive())
mountineBike.drive()


