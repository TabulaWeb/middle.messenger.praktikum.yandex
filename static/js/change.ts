function fileUploader(elem: any): void {
    const inputElem = document.querySelector("#" + elem);
    const outputElem = document.querySelector("#upload-message");

    inputElem.addEventListener("change", function () {
      const fileList = (<HTMLInputElement>inputElem).files[0];
      const uploadReader = new FileReader();

      outputElem.setAttribute("style", "display:block;")
      outputElem.innerHTML = fileList.name
      uploadReader.readAsDataURL(fileList);
      if((<HTMLInputElement>document.getElementById("upload")).files.length >= 1){
          document.querySelector('.fileUploader__button').setAttribute("style", "display:none;")
      }
    });
}

function changeFile(){
    let nameInputElem = document.querySelector("#upload");
    let fileList = (<HTMLInputElement>nameInputElem).files[0];
    let TextOutputElem = document.querySelector("#upload-message");


    if((<HTMLInputElement>nameInputElem).files.length <= 0){
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
}

fileUploader("upload");
