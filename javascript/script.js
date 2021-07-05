// login button event handler.
document.getElementById('enter').addEventListener('click', function (event) {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';

})

// deposit button event handler.
document.getElementById('depositAdd').addEventListener('click', function (event) {
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

})



// withdraw event handler .
document.getElementById('addWithdraw').addEventListener('click', function (event) {
    const withdrawAmountNumber = getInputNumber('withdrawAmount');


    updateSpanText('currentWithdraw', withdrawAmountNumber);
    updateSpanText('currentBalance', -1 * withdrawAmountNumber);



})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    document.getElementById(id).value = '';

    return amountNumber;

}
function updateSpanText(id, addNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addNumber + currentNumber;
    document.getElementById(id).innerText = total;
}