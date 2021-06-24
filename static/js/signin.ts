const btn = document.getElementById("btn") as HTMLButtonElement

btn.onclick = () =>{
    const inputMail = (<HTMLInputElement>document.querySelector("#email")).value
    let inputLogin = (<HTMLInputElement>document.querySelector("#display_name")).value
    let inputFirstName = (<HTMLInputElement>document.querySelector("#first_name")).value
    let inputSecondName = (<HTMLInputElement>document.querySelector("#second_name")).value
    let inputPhone = (<HTMLInputElement>document.querySelector("#phone")).value
    let inputPassword = (<HTMLInputElement>document.querySelector("#password")).value
    let inputPasswordTwo = (<HTMLInputElement>document.querySelector("#passwordTwo")).value
    let textError = document.querySelector('.error_signin') as HTMLFormElement

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
