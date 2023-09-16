//title_age - Переменная для смены h2
//myImg.src - Переменная для смены пути изображения

let age = prompt('Enter your age');
let title_age = document.querySelector('h2');

if (isNaN(age)) {
  console.log('incorrect input');
  myImg.src = 'images/error.jpg';
  title_age.textContent = 'Error';
  alert('Error');
} else if (age > 0 && age <= 18) {
  console.log('You are still young. You need to study');
  myImg.src = 'images/young.jpg';
  title_age.textContent = 'You are still young. You need to study';
  alert('You are still young. You need to study');
} else if (age > 18 && age <= 50) {
  console.log('You need to work');
  myImg.src = 'images/worker.jpg';
  title_age.textContent = 'You need to work';
  alert('You need to work');
} else if (age > 50 && age <= 59) {
  console.log('You will retire soon');
  myImg.src = 'images/old_worker.jpg';
  title_age.textContent = 'You will retire soon';
  alert('You will retire soon');
} else if (age > 59 && age <= 100) {
  console.log('You are a pensioner');
  myImg.src = 'images/pensioner.jpg';
  title_age.textContent = 'You are a pensioner';
  alert('You are a pensioner');
} else {
  console.log('Something went wrong');
  myImg.src = 'images/error.jpg';
  title_age.textContent = 'Error';
  alert('Something went wrong');
}
