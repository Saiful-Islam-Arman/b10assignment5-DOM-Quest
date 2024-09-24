

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
        const TotalDonateCatch = getTextFieldValueById('donate-feni');
        const selfBalance = getTextFieldValueById('self-balance');
        const totalDonateAmount = donateFeni + TotalDonateCatch;
        const selfBalanceTotal = selfBalance - donateFeni;
        document.getElementById('donate-feni').innerText = totalDonateAmount;
        document.getElementById('self-balance').innerText = selfBalanceTotal;

        

    });

// donate for dhaka
document.getElementById('btn-donate3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateQuota = getInputValueById('input-value-quota');
        const TotalDonateCatch = getTextFieldValueById('donate-quota');
        const selfBalance = getTextFieldValueById('self-balance');
        if(isNaN(donateQuota)){
            alert("please Donte valid amount");
            return;
        }
        const totalDonateAmount = donateQuota + TotalDonateCatch;
        const selfBalanceTotal = selfBalance - donateQuota;
        document.getElementById('donate-quota').innerText = totalDonateAmount;
        document.getElementById('self-balance').innerText = selfBalanceTotal;

    });
