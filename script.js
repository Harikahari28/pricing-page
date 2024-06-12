document.getElementById('update-currency').addEventListener('click', function() {
    const currencySymbol = document.getElementById('currency').value;
    if(currencySymbol) {
        document.getElementById('basic-price').innerHTML = `${currencySymbol}10<span>/mo</span>`;
        document.getElementById('standard-price').innerHTML = `${currencySymbol}20<span>/mo</span>`;
        document.getElementById('premium-price').innerHTML = `${currencySymbol}30<span>/mo</span>`;
    }
});
