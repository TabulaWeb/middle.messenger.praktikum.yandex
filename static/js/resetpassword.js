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

document.querySelector("#resetpassword").addEventListener("click", function(){
    let oldPasswordInput = document.querySelector("#oldPassword").value
    let newPasswordInput = document.querySelector("#newPassword").value
    let newPasswordTwoInput = document.querySelector("#newPasswordTwo").value

    let ObjResetPassword = {
        oldPassword: oldPasswordInput,
        newPassword: newPasswordInput,
        newPasswordTwo: newPasswordTwoInput
    }

    console.log(ObjResetPassword)
})