{
  const personForm = document.querySelector('form');

  const renderColor = (value) => {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = value;
    colorDiv.style.height = '50px';
    colorDiv.style.width = '100px';
    return colorDiv;
  }

  const renderText = (name, value) => {
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${value}`;
    return li;
  }

  /*
  const renderList = (inputs, labels) => {
    const list = document.createElement('ul');
    for (let i = 0; i < inputs.length; i++) {
      list.appendChild(handleInput(inputs[i], labels[i]))
    }
    return list;
  }
  */

  const renderList = (person) => {
    const list = document.createElement('ul');
    Array.from(person).map((input, i, formElements) => {
      if (input.value) {
        let value = input.value;
        if (input.type === 'color') {
          value = renderColor(input.value).outerHTML;
        }
        const li = renderText(input.name, value);
        list.appendChild(li);
      }
    });
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

    const list = renderList(form.elements);
    details.appendChild(list);
  }

  personForm.addEventListener('submit', handleSubmit);
}