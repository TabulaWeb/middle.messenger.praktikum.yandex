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

function fileUploader(elem) {
    const inputElem = document.querySelector("#" + elem);
    const outputElem = document.querySelector("#upload-message");
  
    inputElem.addEventListener("change", function () {
      const fileList = inputElem.files[0];
      const uploadReader = new FileReader();
  
      outputElem.setAttribute("style", "display:block;")
      outputElem.innerHTML = fileList.name 
      uploadReader.readAsDataURL(fileList);
      if(document.getElementById("upload").files.length >= 1){
          document.querySelector('.fileUploader__button').setAttribute("style", "display:none;")
      }
    });
}

document.querySelector(".changeFileButton").addEventListener("click", function(){
    let nameInputElem = document.querySelector("#upload");
    let fileList = nameInputElem.files[0];
    let TextOutputElem = document.querySelector("#upload-message");
    

    if(nameInputElem.files.length <= 0){
        return document.querySelector('.FileForm__error').textContent = "Нужно выбрать файл"
    } else {
        TextOutputElem.setAttribute("style", "display:none;")
        document.querySelector('.fileUploader__button').setAttribute("style", "display:block;")
        document.querySelector('.add-avatar__wripper').setAttribute("style", "display:none;")
    }

    let contentFileText = fileList.name

    let formChangeFile = {
        avatar: contentFileText
    }
    console.log(formChangeFile)
})

fileUploader("upload");



document.querySelector("#addavatarrr").addEventListener("click", function(){
    document.querySelector('.add-avatar__wripper').setAttribute("style", 'display: flex')
})