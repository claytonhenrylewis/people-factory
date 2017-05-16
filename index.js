const App = {
  init() {
    const personForm = document.querySelector('form');
    personForm.addEventListener('submit', (e) => this.handleSubmit(e));
  },

  renderColor(value) {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = value;
    colorDiv.style.height = '50px';
    colorDiv.style.width = '100px';
    return colorDiv;
  },

  renderText(name, value) {
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${value}`;
    return li;
  },

  /*
  const renderList = (inputs, labels) => {
    const list = document.createElement('ul');
    for (let i = 0; i < inputs.length; i++) {
      list.appendChild(handleInput(inputs[i], labels[i]))
    }
    return list;
  }
  */

  renderList(person) {
    const list = document.createElement('ul');
    Array.from(person).map((input, i, formElements) => {
      if (input.value) {
        let value = input.value;
        if (input.type === 'color') {
          value = this.renderColor(input.value).outerHTML;
        }
        const li = this.renderText(input.name, value);
        list.appendChild(li);
      }
    });
    return list;
  },

  handleInput(input, label) {
    if (input.type === 'color') {
      return this.renderColor(label.textContent, input.value);
    }
    return this.renderText(label.textContent, input.value);
  },

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const details = document.querySelector('.details');
    const inputs = form.querySelectorAll('input');
    const labels = form.querySelectorAll('label');

    const list = this.renderList(form.elements);
    details.appendChild(list);
  },
}

App.init();