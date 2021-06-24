const {form} = document.forms as HTMLCollection

function retrieveFormValue(event: { preventDefault: () => void; }){
  event.preventDefault()

  const { login, password } = form;

  const values = {
    login: login.value,
    password: password.value
  }

  console.log(values)
}

form.addEventListener('submit', retrieveFormValue);
