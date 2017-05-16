const personForm = document.querySelector('form');

const renderColor = (name, value) => {
  const li = document.createElement('li');
  li.textContent = `${name}:`;
  const colorDiv = document.createElement('div');
  colorDiv.style.backgroundColor = value;
  colorDiv.style.height = '50px';
  colorDiv.style.width = '100px';
  li.appendChild(colorDiv);
  return li;
}

const renderText = (name, value) => {
  const li = document.createElement('li');
  li.textContent = `${name}: ${value}`;
  return li;
}

const renderList = (inputs, labels) => {
  const list = document.createElement('ul');
  for (let i = 0; i < inputs.length; i++) {
    list.appendChild(handleInput(inputs[i], labels[i]))
  }
  return list;
}

const handleInput = (input, label) => {
  if (input.type === 'color') {
    return renderColor(label.textContent, input.value);
  }
  return renderText(label.textContent, input.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const details = document.querySelector('.details');
  const inputs = form.querySelectorAll('input');
  const labels = form.querySelectorAll('label');

  const list = renderList(inputs, labels);
  details.appendChild(list);
}

personForm.addEventListener('submit', handleSubmit);