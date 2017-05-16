const personForm = document.querySelector('form');

const renderColor = (name, value) => {
  const li = document.createElement('li');
  li.textContent = name + ':';
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = value;
  colorDiv.style.height = '50px';
  colorDiv.style.width = '100px';
  li.appendChild(colorDiv);
  return li;
}

const renderText = (name, value) => {
  const li = document.createElement('li');
  li.textContent = name + ': ' + value;
  return li;
}

const handleInput = (label) => {
  inputs = document.getElementsByName(label['for']);
  console.log(label.attributes);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const details = document.querySelector('.details');
  const inputs = document.querySelectorAll('input');
  const labels = document.querySelectorAll('label');
  labels.forEach(handleInput);

  const personName = form.personName.value;
  const hairColor = form.hairColor.value;
  const age = form.age.value;
  const birthplace = form.birthplace.value;

  const personDiv = renderText("Name", personName);
  const colorDiv = renderColor("Hair Color", hairColor);
  const ageDiv = renderText("Age", age);
  const placeDiv = renderText("Birthplace", birthplace);

  const list = document.createElement('ul');
  list.appendChild(personDiv);
  list.appendChild(colorDiv);
  list.appendChild(ageDiv);
  list.appendChild(placeDiv);

  details.appendChild(list);
  /*
  details.innerHTML = `
  <ul>
    <li>Name: ${personName}</li>
    <li>Hair Color: ${colorDiv.outerHTML}</li>
    <li>Age: ${age}</li>
    <li>Birthplace: ${birthplace}</li>
  </ul>`;
  */
}

personForm.addEventListener('submit', handleSubmit);