function getValueById(inputId) {
    const caseNumberField = document.getElementById(inputId);
    const previousnumber = parseInt(caseNumberField.value);
    return previousnumber;

}

function getInnerTextById(inputId) {
    const textField = document.getElementById(inputId);
    const text = parseFloat(textField.innerText).toFixed(2);
    return text;
}

function setTextElementById(inputId, value) {
    const elementField = document.getElementById(inputId);
    elementField.innerText = parseFloat(value).toFixed(2);
}


function updateCartNumber(updateNumber, previousNumber, id) {
    const numberField = document.getElementById(id);
    let newCartNumber;
    if (updateNumber) {
        newCartNumber = previousNumber + 1;
    }
    else {
        newCartNumber = previousNumber - 1;
        if (newCartNumber < 1) {
            alert('Provide positive Number');
        }
    }
    numberField.value = newCartNumber;
    return newCartNumber;
}


function updatePhonePrice(id, number) {
    const totalPrice = number * 1219;
    const totalPriceField = document.getElementById(id);
    totalPriceField.innerText = totalPrice;
    return totalPrice;
}
function updateCasePrice(id, number) {
    const totalPrice = number * 59;
    const totalPriceField = document.getElementById(id);
    totalPriceField.innerText = totalPrice;
    return totalPrice;
}

function calcultateTotal() {

    //sub-total field
    const phonePrice = parseFloat(getInnerTextById('phn-price'));
    const casePrice = parseFloat(getInnerTextById('case-price'));

    const subTotal = (phonePrice + casePrice);
    setTextElementById('sub-total', subTotal);


    //tex field

    const taxAmount = subTotal * 0.1;
    setTextElementById('tax-field', taxAmount);

    //calculate total

    const total = (subTotal + taxAmount);
    setTextElementById('total-field', total);





}
