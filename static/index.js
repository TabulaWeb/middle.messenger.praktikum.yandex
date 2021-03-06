let elementNotice = document.querySelector('.bell_block')
let elementProfile = document.querySelector('.info-account__block')
let elementChatSetting = document.querySelector('.chat-setting__block')
let elementAvatar = document.querySelector('.add-avatar__wripper')
let elementAddUser = document.querySelector('.chatAddUser__wriper')
let elementDelUser = document.querySelector('.chatDelUser__wriper')
let elementAddFile = document.querySelector('.block_addfile')

function elementNoticeActivator(){
    if(elementNotice.classList.contains('active')){
        elementNotice.classList.remove('active')
    } else {
        elementNotice.classList.add('active')
    }
}

function elementProfileActivator(){
    if(elementProfile.classList.contains('active')){
        elementProfile.classList.remove('active')
    } else {
        elementProfile.classList.add('active')
    }
}

function elementChatSettingActivator(){
    if(elementChatSetting.classList.contains('active')){
        elementChatSetting.classList.remove('active')
    } else {
        elementChatSetting.classList.add('active')
    }
}

function elementChangeAvatar(){
    elementAvatar.setAttribute("style", "display:flex;")
}

function AddUser(){
    if(elementAddUser.classList.contains('active-flex')){
        elementAddUser.classList.remove('active-flex')
    } else {
        elementAddUser.classList.add('active-flex')
        elementChatSetting.classList.remove('active')
    }
}

function DelUser(){
    if(elementDelUser.classList.contains('active-flex')){
        elementDelUser.classList.remove('active-flex')
    } else {
        elementDelUser.classList.add('active-flex')
        elementChatSetting.classList.remove('active')
    }
}

function addFileActivator(){
    if(elementAddFile.classList.contains('active-flex')){
        elementAddFile.classList.remove('active-flex')
    } else {
        elementAddFile.classList.add('active-flex')
    }
}

function search(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}