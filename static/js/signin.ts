const inputMail = (<HTMLInputElement>document.querySelector("#email"))
const inputLogin = (<HTMLInputElement>document.querySelector("#display_name"))
const inputFirstName = (<HTMLInputElement>document.querySelector("#first_name"))
const inputSecondName = (<HTMLInputElement>document.querySelector("#second_name"))
const inputPhone = (<HTMLInputElement>document.querySelector("#phone"))
const inputPassword = (<HTMLInputElement>document.querySelector("#password"))
const inputPasswordTwo = (<HTMLInputElement>document.querySelector("#passwordTwo"))
const textError = document.querySelector('.error_signin') as HTMLFormElement

function errorSignin(){
    if(inputMail.value.length == 0 || inputLogin.value.length == 0 || inputFirstName.value.length == 0 || inputSecondName.value.length == 0 || inputPhone.value.length == 0){
        return textError.textContent = 'есть не заполненное поле';
    } else if (!inputMail.value.includes('@')){
        return textError.textContent = 'введите правильный email';
    } else if(inputPasswordTwo.value.length < 6 && inputPassword.value.length < 6){
        return textError.textContent = 'пароль менее 6 символов';
    } else if(inputPassword.value.toLowerCase() != inputPasswordTwo.value.toLowerCase()){
        return textError.textContent = 'пароль не совпадает';
    } else {
        return window.location.pathname = '/'
    }
}

inputMail.onblur = function(){
  if (!inputMail.value.includes('@')) { // не email
    return textError.textContent = 'введите правильный email';
  }
}

inputMail.onfocus = function(){
  if (!inputMail.value.includes('@')) { // не email
    return textError.textContent = '';
  }
}

inputPassword.onblur = function(){
  if (inputPasswordTwo.value.length < 6 && inputPassword.value.length < 6) { // не email
    return textError.textContent = 'пароль менее 6 символов';
  }
}

inputPassword.onfocus = function(){
  if (inputPasswordTwo.value.length < 6 && inputPassword.value.length < 6) { // не email
    return textError.textContent = '';
  }
}

inputPasswordTwo.onblur = function(){
  if (inputPassword.value.toLowerCase() != inputPasswordTwo.value.toLowerCase()) { // не email
    return textError.textContent = 'пароль не совпадает';
  }
}

inputPasswordTwo.onfocus = function(){
  if (inputPassword.value.toLowerCase() != inputPasswordTwo.value.toLowerCase()) { // не email
    return textError.textContent = '';
  }
}


