

let totalDonate = 0;
// donate for nkhali
document.getElementById('btn-donate1')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateNkhali = getInputValueById('input-value-nkhali');
        const totalDonateCatch = getTextFieldValueById('donate-nkhali');
        const selfBalance = getTextFieldValueById('self-balance');

        // value validation
        if(isNaN(donateNkhali)){
            alert("please Donte valid amount");
            return;
        }

        // validation for 0 or negative value
        if(donateNkhali <= 0){
            alert("please Donte valid amount");
            return;
        }

         // validation for negative donate
         if(selfBalance < donateNkhali){
            alert("please Donte valid amount");
            return;
        }

        const totalDonateAmount = donateNkhali + totalDonateCatch;
        const selfBalanceTotal = selfBalance - donateNkhali;
        document.getElementById('donate-nkhali').innerText = totalDonateAmount;
        document.getElementById('self-balance').innerText = selfBalanceTotal;

        // add donation history to history section
        const d = new Date();
        const p = document.createElement('p');
        p.innerHTML += `
            <div class="card bg-base-100 shadow-xl my-4">
            <div class="card-body" >
            <p class="card-title"> ${donateNkhali} Taka is Donated for Flood Relief in Noakhali,Bangladesh</p>
            <p class="card-title">Date: ${d}</p>
            </div>
            </div>
        `

        document.getElementById('history-container').appendChild(p);
        
    });

// donate for feni
document.getElementById('btn-donate2')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateFeni = getInputValueById('input-value-feni');
        const TotalDonateCatch = getTextFieldValueById('donate-feni');
        const selfBalance = getTextFieldValueById('self-balance');

         // value validation
         if(isNaN(donateFeni)){
            alert("please Donte valid amount");
            return;
        }

        // validation for 0 or negative value
        if(donateFeni <= 0){
            alert("please Donte valid amount");
            return;
        }

        // validation for negative donate
        if(selfBalance < donateFeni){
            alert("please Donte valid amount");
            return;
        }

        const totalDonateAmount = donateFeni + TotalDonateCatch;
        const selfBalanceTotal = selfBalance - donateFeni;
        document.getElementById('donate-feni').innerText = totalDonateAmount;
        document.getElementById('self-balance').innerText = selfBalanceTotal;

        // add donation history to history section
        const d = new Date();
        const p = document.createElement('p');
        p.innerHTML += `
            <div class="card bg-base-100 shadow-xl my-4">
            <div class="card-body" >
            <p class="card-title"> ${donateFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p class="card-title">Date: ${d}</p>
            </div>
            </div>
        `

        document.getElementById('history-container').appendChild(p);

    });


// donate for dhaka
document.getElementById('btn-donate3')
    .addEventListener('click', function(event){
        event.preventDefault();
        const donateQuota = getInputValueById('input-value-quota');
        const TotalDonateCatch = getTextFieldValueById('donate-quota');
        const selfBalance = getTextFieldValueById('self-balance');
        

        // value validation
        if(isNaN(donateQuota)  ){
            alert("please Donte valid amount");
            return;
        }

        // validation for 0 or negative value
        if(donateQuota <= 0){
            alert("please Donte valid amount");
            return;
        }

         // validation for negative donate
         if(selfBalance < donateQuota){
            alert("please Donte valid amount");
            return;
        }

        

        const totalDonateAmount = donateQuota + TotalDonateCatch;
        const selfBalanceTotal = selfBalance - donateQuota;
        document.getElementById('donate-quota').innerText = totalDonateAmount;
        document.getElementById('self-balance').innerText = selfBalanceTotal;
  

        // add donation history to history section
        const d = new Date();
        const p = document.createElement('p');
        p.innerHTML += `
            <div class="card bg-base-100 shadow-xl my-4">
            <div class="card-body" >
            <p class="card-title"> ${donateQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p class="card-title">Date: ${d}</p>
            </div>
            </div>
        `

        document.getElementById('history-container').appendChild(p);
    });


// hide and show donate UI
function showSectionById(id){

    // hide all the section
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById('blog-container').classList.add('hidden');

    //show the section with provided id as perameter
    document.getElementById(id).classList.remove('hidden');

}

// hide show active color button
function showButtonActiveColor(id){
     // active button
     document.getElementById('btn-donate-container').classList.remove('bg-buttonPrimay');
     document.getElementById('btn-history-container').classList.remove('bg-buttonPrimay');
     
 
     document.getElementById(id).classList.add('bg-buttonPrimay');
}

// // close showon modal
// document.getElementById('btn-donate3').addEventListener('click', function(){
//     if(donateQuota <= 0){ 
//         document.getElementById('btn-donate3').removeAttribute("onclick"); 
//         return;
//     }
// });

