const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);
const {form} = document.forms as HTMLCollection

function retrieveFormValue(event: { preventDefault: () => void; }){
  event.preventDefault()

  const { elements } = form;
  const values = {};

  for (let i = 0; i < elements.length; i++){
    const formElement = elements[i];
    const {name} = formElement;

    if (name){
      const {value, type, checked} = formElement;

      values[name] = isCheckboxOrRadio(type) ? checked : value;
    }
  }

  console.log(values)
}

form.addEventListener('submit', retrieveFormValue);
