const divcart = document.getElementById('divcart')

function GetTotal(){
    let max = carrinho.length
    let total = 0
    for(let i = 0; i < max; i++){
        let quantati = document.getElementById(`label-${carrinho[i].id}-${carrinho[i].tamanho}`)

        total = produtos[carrinho[i].id].preco * Number(quantati.textContent) + Number(total)

    }
    total = total.toFixed(2)
    let precoTotal = document.getElementById("precoTotal")
    precoTotal.textContent = total + " €"
}

function DiminuirQuantidade(quantati,price,totalprice){
    let label = document.getElementById(quantati)
    let total = document.getElementById(totalprice)
    if (label.textContent != 1){
        let temp = Number(label.textContent)
        label.textContent = temp - 1
        let twocase = label.textContent * price
        twocase = twocase.toFixed(2)
        total.textContent = twocase
    }else{
        alert("Minimum quantity reached!")
    }
    GetTotal()
}

function AumentarQuantidade(quantati,price,totalprice){
    let label = document.getElementById(quantati)
    let total = document.getElementById(totalprice)
    let temp = Number(label.textContent)
    label.textContent = temp + 1
    let twocase = label.textContent * price
    twocase = twocase.toFixed(2)
    total.textContent = twocase
    GetTotal()
}

function Eliminar(id,tamanho){
    carrinho = carrinho.filter(item => !(item.id === id && item.tamanho === tamanho))
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
    PreenCarrinho();
    GetTotal()
    ChangeCartLabel()
}



function PreenCarrinho(){
	let temp

    divcart.innerHTML = ""

    let max = carrinho.length
	for(let i = 0; i < max; i++){


		// card
		var div = document.createElement('div')  
        div.className = `row`
		div.id = `rowcart${i}`
        divcart.appendChild(div)
		// imagem
		var div = document.createElement('div')  
        div.className = `col-4 cart-div-name`
		div.textContent = produtos[carrinho[i].id].nome
		temp = document.getElementById(`rowcart${i}`)
        temp.appendChild(div)
        // imagem
		var div = document.createElement('div')  
        div.className = `col-2 cart-div-name center-cart-divs cart-size-visible`
		div.textContent = carrinho[i].tamanho
		temp = document.getElementById(`rowcart${i}`)
        temp.appendChild(div)
        // imagem
		var div = document.createElement('div')  
        div.className = `col-2 cart-div-name center-cart-divs`
        div.id = `preco-${carrinho[i].id}-${carrinho[i].tamanho}`
		div.textContent = produtos[carrinho[i].id].preco
		temp = document.getElementById(`rowcart${i}`)
        temp.appendChild(div)
        // imagem
		var div = document.createElement('div')  
        div.className = `col-3 cart-div-name center-cart-divs cart-btt-visible`
		div.id = `itemId${i}`
		temp = document.getElementById(`rowcart${i}`)
        temp.appendChild(div)

        //______________________________________________________

        // row para a quantidade
		var div = document.createElement('div')  
        div.className = `row cart-row-div`
        div.id = `rowcontidade${i}`
        temp = document.getElementById(`itemId${i}`)
        temp.appendChild(div)


        // btt menos
		var btt = document.createElement('input')  
        btt.className = `col-3 btt-cart-quantati btt-cart-sub`
        btt.value = "-"
        btt.type = "button"
        btt.onclick = () => DiminuirQuantidade(`label-${carrinho[i].id}-${carrinho[i].tamanho}`,produtos[carrinho[i].id].preco,`preco-${carrinho[i].id}-${carrinho[i].tamanho}`)
        temp = document.getElementById(`rowcontidade${i}`)
        temp.appendChild(btt)

        // card
		var label = document.createElement('label')  
        label.className = `col-2 text-label-cart-quantati`
        label.textContent = carrinho[i].quantidade
        label.id= `label-${carrinho[i].id}-${carrinho[i].tamanho}`
        temp = document.getElementById(`rowcontidade${i}`)
        temp.appendChild(label)

        // btt mais
		var btt = document.createElement('input')  
        btt.className = `col-3 btt-cart-quantati btt-cart-add`
        btt.value = "+"
        btt.type = "button"
        btt.onclick = () => AumentarQuantidade(`label-${carrinho[i].id}-${carrinho[i].tamanho}`,produtos[carrinho[i].id].preco,`preco-${carrinho[i].id}-${carrinho[i].tamanho}`)
        temp = document.getElementById(`rowcontidade${i}`)
        temp.appendChild(btt)

        //______________________________________________________

        // div
		var div = document.createElement('div')  
        div.className = `col-1 cart-div-name center-cart-divs`
		div.id = `Delete-${i}`
		temp = document.getElementById(`rowcart${i}`)
        temp.appendChild(div)
        
        // imagem
		var img = document.createElement('img')
        img.className = "bin-cart "
        img.src = "img/bin.png"
        img.type = "button"
        img.onclick = () => Eliminar(carrinho[i].id,carrinho[i].tamanho)
		temp = document.getElementById(`Delete-${i}`)
        temp.appendChild(img)
        
			

    }

    GetTotal()
}

function Comprar(){
    let precoTotal = document.getElementById("precoTotal")
    precoTotal = precoTotal.textContent.replace(/\s|€/g, "")
    

    if(precoTotal == "0.00"){
        alert("O carrinho esta vazio!")
    }else{
        sessionStorage.setItem("total", precoTotal)

        window.location.href = "payment.html";
    }

    

}

window.onload = function() {
	carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    produtos = BDprodutos()
    PreenCarrinho()
    
}

function ChangeCartLabel(){
	let label = document.getElementById('cart-label-text')

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