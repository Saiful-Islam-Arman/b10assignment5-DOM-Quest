function getInputValueById(id){
    const donateInputValue = document.getElementById(id).value;
    const donateInputValueFloat = parseFloat(donateInputValue);
    return donateInputValueFloat;
}


// text vlue
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueFloat = parseFloat(textValue);
    return textValueFloat;
}