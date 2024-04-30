let number = document.querySelector(".number");
let usd = document.querySelector(".usd")
let ksa = document.querySelector(".ksa")

number.onblur = () => {
fetch("https://api.currencyfreaks.com/v2.0/rates/latest/?apikey=5729928b641244c7bc1980b10077b8ff").then(
    response => response.json()
    ).then(
        currency => {
            if(number.value !== '') {
                let main = currency.base;
                let subEg = currency.rates["EGP"]
                usd.textContent = `${number.value}${main} = ${(subEg * number.value).toFixed(1)} L.E`;

                let subSr = currency.rates["SAR"]
                let sar_usd_value = subSr * number.value;
                ksa.textContent = `${number.value}SAR = ${(number.value * ((subEg * number.value) / sar_usd_value)).toFixed(1)} L.E`;
                number.value = '';
            }
        }
    )
};