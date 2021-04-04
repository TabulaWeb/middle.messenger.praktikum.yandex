let elementNotice = document.querySelector('.bell_block')
let elementProfile = document.querySelector('.info-account__block')

document.querySelector(".bell_img img").addEventListener("click", function(){
    if(elementNotice.classList.contains('active')){
        elementNotice.classList.remove('active')
    } else {
        elementNotice.classList.add('active')
    }
});

document.querySelector(".content-header__info_account .account_detail").addEventListener("click", function(){
    if(elementProfile.classList.contains('active')){
        elementProfile.classList.remove('active')
    } else {
        elementProfile.classList.add('active')
    }
})

document.querySelector(".accountEditSave").addEventListener("click", function(){
    let inputEmail = document.querySelector("#mail").value
    let inputLogin = document.querySelector("#login").value
    let inputFirstName = document.querySelector("#first_name").value
    let inputSecondName = document.querySelector("#second_name").value
    let inputDisplayName = document.querySelector("#display_name").value
    let inputPhone = document.querySelector("#phone").value

    let ObjEditProfile = {
        email: inputEmail,
        login: inputLogin,
        first_name: inputFirstName,
        second_name: inputSecondName,
        display_name: inputDisplayName,
        phone: inputPhone
    }

    console.log(ObjEditProfile)
})