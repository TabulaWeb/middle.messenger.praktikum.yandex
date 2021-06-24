function editProfile(){
    const inputEmail = (<HTMLInputElement>document.querySelector("#mail")).value;
    const inputLogin = (<HTMLInputElement>document.querySelector("#login")).value;
    const inputFirstName = (<HTMLInputElement>document.querySelector("#first_name")).value;
    const inputSecondName = (<HTMLInputElement>document.querySelector("#second_name")).value;
    const inputDisplayName = (<HTMLInputElement>document.querySelector("#display_name")).value;
    const inputPhone = (<HTMLInputElement>document.querySelector("#phone")).value;

    let ObjEditProfile = {
        email: inputEmail,
        login: inputLogin,
        first_name: inputFirstName,
        second_name: inputSecondName,
        display_name: inputDisplayName,
        phone: inputPhone
    };

    console.log(ObjEditProfile);
}
