const isCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

const {formData} = document.forms

function retrieveFormValue(event) {
    event.preventDefault()

    const {elements} = formData;
    const values = {};

    for(let i = 0; i < elements.length; i++){
        const formElement = elements[i];
        const {name} = formElement;

        if (name){
            const {value, type, checked} = formElement

            values[name] = isCheckboxOrRadio(type) ? checked : value;
        }
    }

    console.log(values)
}

formData.addEventListener('submit', retrieveFormValue)