// document.addEventListener('DOMContentLoaded')

const table = document.querySelector('#table');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const points = document.querySelector('#points');
const formSubmit = document.querySelector('#form_sub');

const userObject = {
  firstName: '',
  lastName: '',
  points: '',
};

const saveToLocalStorage = (e) => {
  e.preventDefault();
  userObject.firstName = firstName.value;
  userObject.lastName = lastName.value;
  userObject.points = points.value;

  localStorage.setItem(new Date().toLocaleString(), JSON.stringify(userObject));

  (function () {
    firstName.value = '';
    lastName.value = '';
    points.value = '';
  })();

  refreshTable();
};

const refreshTable = () => {
  const localStorageValues = Object.values(localStorage);
  table.innerHTML = localStorageValues
    .map((i) => {
      tempData = JSON.parse(i);
      return (
        `<tr><td>${tempData.firstName}</td><td>${tempData.lastName}</td><td>${tempData.points}</td></tr>`
      );
    })
    .join('');
};

formSubmit.addEventListener('submit', saveToLocalStorage);
document.addEventListener('DOMContentLoaded', refreshTable);
