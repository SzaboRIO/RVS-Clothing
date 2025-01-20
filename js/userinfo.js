function IsUserLogin(){
    const divUser = document.getElementById('UserName')

    //vai buscar o carrinho casa exista, ou deixa em branco caso nao exista
	name = sessionStorage.getItem('name') || "null"

    if (name != "null"){
        window.location.href = "logout.html"
        UserData()
    }


}

function LogOut(){
    //confirma que quer sair
    let conf = confirm("Are you sure you want to leave?")

    //se sim, limpa a sessao e redireciona para o home
    if (conf){
        sessionStorage.removeItem('name')
        sessionStorage.removeItem('email')
        window.location.href = "index.html";
    }

}

function UserVerify(){
    const divUser = document.getElementById('UserName')

    //vai buscar o carrinho casa exista, ou deixa em branco caso nao exista
	name = sessionStorage.getItem('name') || "null"


    //se existe user, muda o icon pelo nome do user
    if (name != "null"){
        divUser.innerHTML = `
            <div class="container-fluid">
                <a href="user.html" class="user-name-icon-login text-end">${name}</a>
            </div>`
    }else {
        divUser.innerHTML = `<a href="user.html"><img src="img/add-user.png"  class="iconsmenu icon-util-posi"></a>`
    }

}

//quando carrega chama a verificação para ver se existe um user
document.addEventListener('DOMContentLoaded', function() {
	UserVerify()
  });

function ChangeCartLabellogout(option){
    
	let label = document.getElementById('cart-label-text')

	//vai buscar o carrinho casa exista, ou deixa em branco caso nao exista
	carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []

	let tamanho = carrinho.length

	if (tamanho == 0){
		label.textContent = ""
	}else {
		label.textContent = tamanho
	}

    if (option != 1){
        const nome = document.getElementById('nome')
        const email = document.getElementById('email')

        nome.value = sessionStorage.getItem('name')
        email.value = sessionStorage.getItem('email')
    }

    

}