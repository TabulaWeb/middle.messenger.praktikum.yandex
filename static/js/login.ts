const loginLogin = (<HTMLInputElement>document.querySelector("#login"))
const btn = (<HTMLInputElement>document.querySelector("#btn"))
const loginPassword = (<HTMLInputElement>document.querySelector("#password"))
const ErrorLogin = document.querySelector('.error_login') as HTMLFormElement

function loginError(){
  if(loginLogin.value.toLowerCase() == 'admin' && loginPassword.value.toLowerCase() == 'adminadmin'){
      return window.location.pathname = '/'
  } else if (loginLogin.value !== 'admin'){
      return ErrorLogin.textContent = 'логин не верен';
  } else if (loginPassword.value !== 'admin') {
      return ErrorLogin.textContent = 'пароль не верен';
  }
}

btn.addEventListener('submit', loginError)

loginLogin.onblur = function(){
  if (loginLogin.value !== 'admin') { // не email
    return ErrorLogin.textContent = 'логин не верен';
  }
}

loginLogin.onfocus = function(){
  if (loginLogin.value) { // не email
    return ErrorLogin.textContent = '';
  }
}

loginPassword.onblur = function(){
  if (loginPassword.value !== 'adminadmin') { // не email
    return ErrorLogin.textContent = 'пароль не верен';
  }
}

loginPassword.onfocus = function(){
  if (loginPassword.value !== 'adminadmin') { // не email
    return ErrorLogin.textContent = '';
  }
}
