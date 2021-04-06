function resetPassword(){
    let oldPasswordInput = document.querySelector('#oldPassword').value
    let newPasswordInput = document.querySelector('#newPassword').value
    let newPasswordTwoInput = document.querySelector('#newPasswordTwo').value

    let ObjResetPassword = {
        oldPassword: oldPasswordInput,
        newPassword: newPasswordInput,
        newPasswordTwo: newPasswordTwoInput
    }

    console.log(ObjResetPassword)
}
