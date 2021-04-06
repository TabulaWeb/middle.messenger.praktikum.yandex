function editProfile() {
    let inputEmail = document.querySelector('#mail').value
    let inputLogin = document.querySelector('#login').value
    let inputFirstName = document.querySelector('#first_name').value
    let inputSecondName = document.querySelector('#second_name').value
    let inputDisplayName = document.querySelector('#display_name').value
    let inputPhone = document.querySelector('#phone').value

    let ObjEditProfile = {
        email: inputEmail,
        login: inputLogin,
        first_name: inputFirstName,
        second_name: inputSecondName,
        display_name: inputDisplayName,
        phone: inputPhone
    }

    console.log(ObjEditProfile)
}
