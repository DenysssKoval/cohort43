// 1. Дан массив с числами. Сформировать новый массив, в который попадут
// все числа из исходного массива, возведенные в 3 степень **3

//1 for
const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];
const numbers_pow0= [];
for(let i = 0;i<numbers.length; i++){
    numbers_pow0.push(numbers[i]**3)
}
console.log(numbers_pow0)
//2 map
const numbers_pow1= numbers.map(el =>el **3)

//3 forEach

const numbers_pow2 =[];
numbers.forEach(el=>numbers_pow2.push(el**3))
console.log(numbers_pow2)

// const numbers = [4, 6, 1, 17, 9, 15, 27, 43, 7];
// const resArray = [];

// for (let i = 0; i<numbers.length; i++){
//     resArray[i] = numbers[i]**3;
// }
// console.log(resArray);

// 2. Сформировать новый массив, в который попадут все последние цифры  %10

const lastDigits = numbers.map(el=>el%10)
console.log(lastDigits)

const strings = ['hello', 'apple', 'orange', 'good morning', 'danke', 'duck', 'dinosaure'];
// 3. Сформировать новый массив, в который попадут все элементы из исходного массива.
// Если длина элемента меньше
// 6 (<), то добавить к этой строке 1

// .map()
const strings_2 = strings.map(el => el.length < 6 ? el + 1 : el);
console.log(strings_2)

// if
const newStrings = strings.map(str=>{
    if (str.length<6){
        return str+"1"
    }
    else{
        return str;
    }
})
console.log( typeof newStrings);

// Функции взаимодействия с пользователем
alert("Вы на странице")




///
console.log(undefined > 5); 
console.log(70 < false);
console.log(1 <= true);
console.log(1 >= 9);


let userAge = prompt("Enter your age");

if (userAge > 18) {
  console.log("Hi");
} else if (Number(userAge) === 18) {
  console.log("Ok");
} else {
  console.log("Bye");
}