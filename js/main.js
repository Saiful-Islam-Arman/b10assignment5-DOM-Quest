

let totalDonate = 0;
// donate for nkhali
document.getElementById('btn-donate1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateNkhali = getInputValueById('input-value-nkhali');
        const totalDonateCatch = getTextFieldValueById('donate-nkhali');
        const selfBalance = getTextFieldValueById('self-balance');
        const totalDonateAmount = donateNkhali + totalDonateCatch;
        const selfBalanceTotal = selfBalance - donateNkhali;
        document.getElementById('donate-nkhali').innerText = totalDonateAmount;
        document.getElementById('self-balance').innerText = selfBalanceTotal;
        
    });

// donate for feni
document.getElementById('btn-donate2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateFeni = getInputValueById('input-value-feni');
        console.log(donateFeni);

    });

// donate for dhaka
document.getElementById('btn-donate3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateFeni = getInputValueById('input-value-quota');
        console.log(donateFeni);

    });
