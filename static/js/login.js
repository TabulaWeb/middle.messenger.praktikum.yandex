function loginButton(){
    let inputLogin = document.querySelector('#login').value
    let inputPassword = document.querySelector('#password').value
    let textError = document.querySelector('.error_login')

    let user = {
        login: inputLogin,
        password: inputPassword
    }

    console.log(user)

    if(inputLogin.toLowerCase() == 'admin' && inputPassword.toLowerCase() == 'admin'){
        return window.location.pathname = '/'
    } else {
        return textError.textContent = 'Логин или пароль не верный';
    }
}
