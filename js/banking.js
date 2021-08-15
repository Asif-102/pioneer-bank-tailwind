//handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositAmount = document.getElementById('deposit-input');
    
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(depositTotal.innerText) + parseFloat(depositAmount.value);

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseFloat(balanceTotal.innerText) + parseFloat(depositAmount.value);

    //clear the deposit input field;
    depositAmount.value = '';
})