

//phone plus button clicked

document.getElementById('btn-phn-plus').addEventListener('click', function () {
    const previousNumber = getValueById('phn-number-field');
    const newNumber = updateCartNumber(true, previousNumber, 'phn-number-field');
    const phonePrice = updatePhonePrice('phn-price', newNumber);
    calcultateTotal();





})

//phone minus button clicked

document.getElementById('btn-phn-minus').addEventListener('click', function () {
    const previousNumber = getValueById('phn-number-field');
    const newNumber = updateCartNumber(false, previousNumber, 'phn-number-field');
    const price = updatePhonePrice('phn-price', newNumber);
    calcultateTotal();


})


//case plus button clicked

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const previousNumber = getValueById('case-number-field');
    const newNumber = updateCartNumber(true, previousNumber, 'case-number-field');
    const casePrice = updateCasePrice('case-price', newNumber);

    calcultateTotal();



})
//case minus button clicked

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const previousNumber = getValueById('case-number-field');
    const newNumber = updateCartNumber(false, previousNumber, 'case-number-field');
    const casePrice = updateCasePrice('case-price', newNumber);

    calcultateTotal();

})





