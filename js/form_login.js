

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/

    return emailRegex.test(email)
}

function Login(){



    


}

document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const inputName = document.getElementById('InputName')
    const inputEmail = document.getElementById('InputEmail')
    const inputPassword = document.getElementById('InputPassword')
    const check1 = document.getElementById('Check1')

    const labelName = document.getElementById('LabelName')
    const labelEmail = document.getElementById('LabelEmail')
    const labelPassword = document.getElementById('LabelPass')
    const labelcheck1 = document.getElementById('Labelcheck')


    let error = 0

    let name = inputName.value.trim()
    let email = inputEmail.value
    let pass = inputPassword.value.trim()
    let verif = check1.checked

    if (name == ""){
        labelName.textContent = "Enter a name!"
        error++
    }else if (name.length < 3){
        labelName.textContent = "The name must be longer than 3 characters!"
        error++
    }else {
        labelName.textContent = ""
    }

    if (isEmailValid(email)){
        labelEmail.textContent = ""
    }else {
        labelEmail.textContent = "Please enter a valid email address!"
        error++
    }

    if (pass == ""){
        labelPassword.textContent = "Enter a password!"
        error++
    }else if (pass.length < 8){
        labelPassword.textContent = "The password must be longer than 8 characters!"
        error++
    }else {
        labelPassword.textContent = ""
    }

    if (verif){
        labelcheck1.textContent = ""
    }else {
        labelcheck1.textContent = "You must accept the terms!"
        error++
    }
    
    if (error == 0){

        //guardar na sessao
	    sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);

        //redireciona o usuario para a home
        window.location.href = 'index.html';
    }
});


function ChangeCartLabel(){
	const label = document.getElementById('cart-label-text')

	//vai buscar o carrinho casa exista, ou deixa em branco caso nao exista
	carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []

	let tamanho = carrinho.length

	if (tamanho == 0){
		label.textContent = ""
	}else {
		label.textContent = tamanho
	}
}

//quando carrega mostra a quantidade de itens no carrinho
document.addEventListener('DOMContentLoaded', function() {
	ChangeCartLabel()
  });