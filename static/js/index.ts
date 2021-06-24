let elementNotice = document.querySelector('.bell_block') as HTMLImageElement;
let elementProfile = document.querySelector('.info-account__block') as HTMLImageElement;
let elementChatSetting = document.querySelector('.chat-setting__block') as HTMLImageElement;
let elementAvatar = document.querySelector('.add-avatar__wripper') as HTMLImageElement;
let elementAddUser = document.querySelector('.chatAddUser__wriper') as HTMLImageElement;
let elementDelUser = document.querySelector('.chatDelUser__wriper') as HTMLImageElement;
let elementAddFile = document.querySelector('.block_addfile') as HTMLImageElement;

window.elementNoticeActivator= elementNoticeActivator;
function elementNoticeActivator(): void{
    if(elementNotice.classList.contains('active')){
        elementNotice.classList.remove('active');
    } else {
        elementNotice.classList.add('active');
    }
}

window.elementProfileActivator= elementProfileActivator;
function elementProfileActivator(): void{
    if(elementProfile.classList.contains('active')){
        elementProfile.classList.remove('active')
    } else {
        elementProfile.classList.add('active')
    }
}

window.elementChatSettingActivator= elementChatSettingActivator;
function elementChatSettingActivator(): void{
    if(elementChatSetting.classList.contains('active')){
        elementChatSetting.classList.remove('active')
    } else {
        elementChatSetting.classList.add('active')
    }
}

window.elementChangeAvatar= elementChangeAvatar;
function elementChangeAvatar(): void{
    elementAvatar.setAttribute("style", "display:flex;")
}

window.AddUser= AddUser;
function AddUser(): void{
    if(elementAddUser.classList.contains('active-flex')){
        elementAddUser.classList.remove('active-flex')
    } else {
        elementAddUser.classList.add('active-flex')
        elementChatSetting.classList.remove('active')
    }
}

window.DelUser= DelUser;
function DelUser(): void{
    if(elementDelUser.classList.contains('active-flex')){
        elementDelUser.classList.remove('active-flex')
    } else {
        elementDelUser.classList.add('active-flex')
        elementChatSetting.classList.remove('active')
    }
}

window.addFileActivator= addFileActivator;
function addFileActivator(): void{
    if(elementAddFile.classList.contains('active-flex')){
        elementAddFile.classList.remove('active-flex')
    } else {
        elementAddFile.classList.add('active-flex')
    }
}

window.search= search;
function search(): void{
    let input;
    let filter;
    let ul;
    let li;
    let a;
    let i;
    let txtValue;
    input = document.getElementById("searchInput");
    filter = (<HTMLInputElement>input).value.toUpperCase();
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
