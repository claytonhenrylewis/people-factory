const personForm = document.querySelector('form');

personForm.onsubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const details = document.querySelector('.details');

  const personName = form.personName.value;
  const hairColor = form.hairColor.value;
  const age = form.age.value;
  const birthplace = form.birthplace.value;

  const em = document.createElement('em');
  em.textContent = personName;

  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = hairColor;
  colorDiv.style.height = '50px';
  colorDiv.style.width = '100px';

  details.appendChild(em);
  details.appendChild(colorDiv);
}