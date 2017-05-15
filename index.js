const personForm = document.querySelector('form');

personForm.onsubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const details = document.querySelector('.details');
  const personName = form.personName.value;
  const hairColor = form.hairColor.value;
  const age = form.age.value;
  const birthplace = form.birthplace.value;
  details.innerHTML = `<em>${personName}</em>`;
}