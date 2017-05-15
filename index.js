const personForm = document.querySelector('form');

personForm.onsubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const details = document.querySelector('.details');

  const personName = form.personName.value;
  const hairColor = form.hairColor.value;
  const age = form.age.value;
  const birthplace = form.birthplace.value;

  /*const list = document.createElement('li');

  const em = document.createElement('li');
  em.innerHTML = `Name: ${personName}`;

  const ageDiv = document.createElement('li');
  ageDiv.textContent = age;

  const placeDiv = document.createElement('li');
  placeDiv.textContent = birthplace;
  */

  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = hairColor;
  colorDiv.style.height = '50px';
  colorDiv.style.width = '100px';

  details.innerHTML = `
  <ul>
    <li>Name: ${personName}</li>
    <li>Hair Color: ${colorDiv.outerHTML}</li>
    <li>Age: ${age}</li>
    <li>Birthplace: ${birthplace}</li>
  </ul>`;
}