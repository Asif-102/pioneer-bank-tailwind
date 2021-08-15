//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const depositAmount = document.getElementById('deposit-input');

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount.value);

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmount.value);

    //clear the deposit input field;
    depositAmount.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = document.getElementById('withdraw-input');

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount.value);

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount.value);

    //clear the withdraw input field;
    withdrawAmount.value = '';


})