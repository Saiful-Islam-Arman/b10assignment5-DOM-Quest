document.getElementById('btn-donate1').addEventListener('click', function(event){
    const inputValueDonate = document.getElementById('input-value-donate').value;
    const donateNakhaliEl = document.getElementById('donate-nkhali').innerText;
    const donateNakhali = donateNakhaliEl + inputValueDonate;
    console.log(donateNakhaliEl);
    donateNakhaliEl.innerText += donateNakhali;
    console.log(donateNakhaliEl);
});