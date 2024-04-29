// Дан массив users. 
// 1. Для каждого объекта асформировтаь карточку пользователя с именем + фамилия и возрастом
// 2. Стилизовать карточки (border, border-radius, padding). А из контейнера сделать flex-контейнер
// 3. Добавить каждому пользователю почту и сделать ее кликабельной
// 4. Добавить каждому пользователю аватар.
// 5. Стилизовать аватар - сделать размеры 150х150px (без деформации изображения)
// 6. Если возраст пользователя >= 18 и имя пользователя начинается на букву a/A,
// то покрасить цвет заднего фона карточки в светло-розовый. Всем остальным сделать
// цвет заднего фона карточки - светло-голубой



const users = [
    {
      id: 1,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      age: 55,
      progress: 10
    },
    {
      id: 2,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
      age: 73,
      progress: 40
    },
    {
      id: 3,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
      age: 15,
      progress: 25
    },
    {
      id: 4,
      email: "anna.ivanova@reqres.in",
      first_name: "Anna",
      last_name: "Ivanova",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
      age: 18,
      progress: 50
    },
    {
      id: 5,
      email: "anton.petrov@reqres.in",
      first_name: "Anton",
      last_name: "Petrov",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
      age: 12,
      progress: 80
    }
  ];

const container = document.querySelector('.container');

users.forEach(({first_name, last_name, avatar,  age, email, progress   })=>{
const cardElem = document.createElement('div');
const nameElem = document.createElement('p');
const ageElem = document.createElement('p');
const emailElem = document.createElement('a');
const emailTextElem = document.createElement('span');
const avatarElem = document.createElement('img');
const progressContainer = document.createElement('div');
const progressLine = document.createElement('div');
const progressValue = document.createElement('p');

nameElem.innerText = `Name: ${first_name} ${last_name}`;
ageElem.innerText = `Age: ${age}`;
emailElem.innerText = email;
emailTextElem.innerText = "Email: ";
progressValue.innerText = progress + "%";

cardElem.classList.add('user_card');
progressContainer.classList.add('progress_container');
progressLine.classList.add('progress_line');


emailElem.href= `mailto:${email}`;
avatarElem.src= avatar;
avatarElem.alt= `${first_name} ${last_name}`;

cardElem.style.background = age >=18 && first_name[0].toLowerCase() ==='a' ? 'lightgreen': 'lightblue';
progressLine.style.width = progress + '%';

progressContainer.append(progressLine,progressValue);
cardElem.append(avatarElem, nameElem,ageElem,emailTextElem,emailElem,progressContainer);
container.append(cardElem);
})



