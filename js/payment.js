let validacaoCard = false;


//vai buscar o preço total guardado quando o user clica em comprar no carrinho
window.onload = function() {
    let total = sessionStorage.getItem("total")
    let labeltotal = document.getElementById('pay-price')
    labeltotal.innerHTML = total + " €"
};

function PayTesting(){
    let eName = false
    let eaddress = false
    let ephone = false
    let enumber = false
    let ecvv = false
    let edate = false

    let name = document.getElementById('InputCardName')
    let address = document.getElementById('InputAddress')
    let phone = document.getElementById('InputPhone')
    let number = document.getElementById('InputCardN')
    let cvv = document.getElementById('InputCVV')
    let date = document.getElementById('InputDT')

    let labelname = document.getElementById('LabelCardName')
    let labeladdress = document.getElementById('LabelAddress')
    let labelphone = document.getElementById('LabelPhone')
    let labelnumber = document.getElementById('LabelCardN')
    let labelcvv = document.getElementById('LabelCVV')
    let labeldate = document.getElementById('LabelDT')


    if (name.value.trim().length == 0){
        labelname.innerHTML = "The field is mandatory."
        eName = true
    }else if(name.value.trim().length < 3){
        labelname.innerHTML = "The name must be at least 3 letters long."
        eName = true
    }else{
        labelname.innerHTML = ""
        eName = false
    }

    if (address.value.trim().length == 0){
        labeladdress.innerHTML = "The field is mandatory."
        eaddress = true
    }else if(address.value.trim().length < 10){
        labeladdress.innerHTML = "The address must be at least 10 letters long."
        eaddress = true
    }else{
        labeladdress.innerHTML = ""
        eaddress = false
    }

    if (phone.value.trim().length == 0){
        labelphone.innerHTML = "The field is mandatory."
        ephone = true
    }else if (isNaN(phone.value)){
        labelphone.innerHTML = "Only use numbers."
        ephone = true
    }else if(phone.value.trim().length < 9){
        labelphone.innerHTML = "The phone number must be at least 9 numbers long."
        ephone = true
    }else{
        labelphone.innerHTML = ""
        ephone = false
    }

    if (validacaoCard){
        if (number.value.trim().length == 0){
            labelnumber.innerHTML = "The field is mandatory."
            enumber = true
        }else if (isNaN(number.value)){
            labelnumber.innerHTML = "Only use numbers."
            enumber = true
        }else if(number.value.trim().length < 13){
            labelnumber.innerHTML = "The card number must be at least 13 numbers long."
            enumber = true
        }else if(number.value.trim().length > 19){
            labelnumber.innerHTML = "The card number have a max of 19 numbers long."
            enumber = true
        }else{
            labelnumber.innerHTML = ""
            enumber = false
        }

        if (cvv.value.trim().length == 0){
            labelcvv.innerHTML = "The field is mandatory."
            ecvv = true
        }else if (isNaN(cvv.value)){
            labelcvv.innerHTML = "Only use numbers."
            ecvv = true
        }else if(cvv.value.trim().length != 3){
            labelcvv.innerHTML = "The cvv number must be 3 numbers long."
            ecvv = true
        }else{
            labelcvv.innerHTML = ""
            ecvv = false
        }

        const dataAtual = new Date()
        const ano = dataAtual.getFullYear()
        const mes = dataAtual.getMonth() + 1 //+1 porque janeiro é 0

        if (date.value.trim().length == 0){
            labeldate.innerHTML = "The field is mandatory."
            edate = true
        }else if(date.value.trim().length != 7 || date.value[4] != "-"){
            labeldate.innerHTML = "The date must be valid and follow this format: e.g. 2027-04."
            edate = true
        }else if(date.value.slice(0, 4) <= ano && date.value.slice(5,7) <= mes){
            labeldate.innerHTML = "teste"
            edate = true
        }else if(date.value.trim().length == 7 && date.value[4] == "-"){
            labeldate.innerHTML = ""
            edate = false
        }

        if(eName || eaddress || ephone || enumber || ecvv || edate){
            return true
        }else{
            return false
        }

    }

    if(eName || eaddress || ephone){
        return true
    }else{
        return false
    }

}

optionPay.addEventListener('change', function(e) {
	let option = optionPay.value

    let card = document.getElementById('cardInfo')
    let mb = document.getElementById('MBInfo')

    if (option == "Card"){
        card.style.display = 'block';
        mb.style.display = 'none';
        validacaoCard = true
    }else{
        mb.style.display = 'block';
        card.style.display = 'none';
        validacaoCard = false
    }
})


//simular o pagamento
function Pay(){
    let errors = true
    errors = PayTesting()
    if (!errors){
        carrinho = []
        sessionStorage.removeItem('carrinho')
        sessionStorage.removeItem('total')
        ChangeCartLabellogout(1)

        alert("The order has been accepted and will be shipped within the next millennium.")

        window.location.href = "index.html";
    }
    

}