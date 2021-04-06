function signinButton(){
    let inputMail = document.querySelector('#email').value
    let inputLogin = document.querySelector('#display_name').value
    let inputFirstName = document.querySelector('#first_name').value
    let inputSecondName = document.querySelector('#second_name').value
    let inputPhone = document.querySelector('#phone').value
    let inputPassword = document.querySelector('#password').value
    let inputPasswordTwo = document.querySelector('#passwordTwo').value
    let textError = document.querySelector('.error_signin')

    let CreateUser = {
        mail: inputMail,
        login: inputLogin,
        first_name: inputFirstName,
        second_name: inputSecondName,
        phone: inputPhone,
        password: inputPassword,
        password_two: inputPasswordTwo
    }

    console.log(CreateUser)
    if(inputMail.length == 0 || inputLogin.length == 0 || inputFirstName.length == 0 || inputSecondName.length == 0 || inputPhone.length == 0){
        return textError.textContent = 'есть не заполненное поле';
    } else if(inputPasswordTwo.length < 6 && inputPassword.length < 6){
        return textError.textContent = 'пароль менее 6 символов';
    } else if(inputPassword.toLowerCase() != inputPasswordTwo.toLowerCase()){
        return textError.textContent = 'пароль не совпадает';
    } else {
        return window.location.pathname = '/'
    }
}
