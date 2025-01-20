	//categorias
		// women:
		// 1 - sweaters
		// 2 - t-shirts
		// 3 - pants
		// 4 - shoes
		
		// men:
		// 5 - sweaters
		// 6 - t-shirts
		// 7 - pants
		// 8 - shoes
		
		// 9 - promos
		
		// 11 - top
		
		// 13 - new
		
		// 15 - tudo mulher
		// 16 - tudo homem
	
//variaveis
const divMulheres = document.getElementById('divmulheres')
const divHomens = document.getElementById('divHomens')
let carrinho = []

//mostrar as infos do produto no modal
function MostrarUmProduto(i){
	
	//conseguir os elementos necessarios
	let img = document.getElementById('modal-image')
	let title = document.getElementById('modal-title')
	let description = document.getElementById('modal-description')
	let price = document.getElementById('modal-price')
	let btt = document.getElementById('add-to-cart')

	//fazer as alterações necessarias
	img.src = produtos[i].src
	title.textContent = produtos[i].nome
	description.textContent = produtos[i].descricao
	price.textContent = produtos[i].preco + "€"
	btt.onclick = () => AdicionarAoCarrinho(i)

	//mostrar o modal
	document.getElementById('productModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
	

}

function PreencherMulheres(){
	let temp
	for(let i = 0; i < 20; i++){

		// A cada 5 cards, cria uma nova linha
		if (i % 5 === 0) {
			rowtemp = document.createElement('div')
			rowtemp.className = 'row'
			divMulheres.appendChild(rowtemp)
		}

		// card
		var card = document.createElement('div')  
        card.className = `card col-2 cardstorecss`
		card.id = `card${i}`
		card.onclick = () => MostrarUmProduto(i)
        rowtemp.appendChild(card)
		// imagem
		var card = document.createElement('img')  
        card.className = `card-img-top`
		card.src = produtos[i].src
		temp = document.getElementById(`card${i}`)
        temp.appendChild(card)
		// div body
		var card = document.createElement('div')  
        card.className = `card-body`
		card.id = `card-body${i}`
		temp = document.getElementById(`card${i}`)
        temp.appendChild(card)
		// h5
		var card = document.createElement('h5')  
        card.className = `card-title`
		card.textContent = produtos[i].nome
		temp = document.getElementById(`card-body${i}`)
        temp.appendChild(card)
		// descrição
		var card = document.createElement('p')  
        card.className = `card-text`
		card.textContent = produtos[i].preco + "€"
		temp = document.getElementById(`card-body${i}`)
        temp.appendChild(card)		

    }
}

function PreencherHomens(){
	let temp
	for(let i = 20; i < 40; i++){
		
		// A cada 5 cards, cria uma nova linha
		if (i % 5 === 0) {
			rowtemp = document.createElement('div')
			rowtemp.className = 'row'
			divMulheres.appendChild(rowtemp)
		}

		// card
		var card = document.createElement('div')  
        card.className = `card col-2 cardstorecss`
		card.id = `card${i}`
		card.onclick = () => MostrarUmProduto(i)
        rowtemp.appendChild(card)
		// imagem
		var card = document.createElement('img')  
        card.className = `card-img-top`
		card.src = produtos[i].src
		temp = document.getElementById(`card${i}`)
        temp.appendChild(card)
		// div body
		var card = document.createElement('div')  
        card.className = `card-body`
		card.id = `card-body${i}`
		temp = document.getElementById(`card${i}`)
        temp.appendChild(card)
		// h5
		var card = document.createElement('h5')  
        card.className = `card-title`
		card.textContent = produtos[i].nome
		temp = document.getElementById(`card-body${i}`)
        temp.appendChild(card)
		// descrição
		var card = document.createElement('p')  
        card.className = `card-text`
		card.textContent = produtos[i].preco + "€"
		temp = document.getElementById(`card-body${i}`)
        temp.appendChild(card)		

    }
}

function MostrarMulherFiltrado(id){
	//limpar o conteudo para adicionar o novo
	divMulheres.innerHTML = ""

	//vai buscar o id dos produtos
	array = BDcategorias(id)
	//saber quantos produtos vao aparecer
	max = array.length


	let rowtemp;  // Variável para armazenar a linha atual

	for (let i = 0; i < max; i++) {

		// A cada 5 cards, cria uma nova linha
		if (i % 5 === 0) {
			rowtemp = document.createElement('div')
			rowtemp.className = 'row'
			divMulheres.appendChild(rowtemp)
		}

		// Card
		var card = document.createElement('div')
		card.className = `card col-2 cardstorecss`
		card.id = `card${i}`
		card.onclick = () => MostrarUmProduto(array[i] - 1)
		rowtemp.appendChild(card)

		// Imagem
		var cardImage = document.createElement('img')
		cardImage.className = `card-img-top`
		cardImage.src = produtos[(array[i] - 1)].src
		temp = document.getElementById(`card${i}`)
		temp.appendChild(cardImage)

		// Div body
		var cardBody = document.createElement('div')
		cardBody.className = `card-body`
		cardBody.id = `card-body${i}`
		temp = document.getElementById(`card${i}`)
		temp.appendChild(cardBody)

		// h5
		var cardTitle = document.createElement('h5')
		cardTitle.className = `card-title justify-content-between`
		cardTitle.textContent = produtos[(array[i] - 1)].nome
		temp = document.getElementById(`card-body${i}`)
		temp.appendChild(cardTitle)

		// Descrição
		var cardText = document.createElement('p')
		cardText.className = `card-text`
		cardText.textContent = produtos[(array[i] - 1)].preco + "€"
		temp = document.getElementById(`card-body${i}`)
		temp.appendChild(cardText)
	}

	
}

function MostrarHomemFiltrado(id){
	
}

const selectmulher = document.getElementById('selectmulher')

if (selectmulher != null){

//ir buscar os ids dos produtos para exibir
selectmulher.addEventListener('change', function(e) {
	id = selectmulher.value
    MostrarMulherFiltrado(id)
})

}



//chamar on load
function WomenLoad(){
	produtos = BDprodutos()
	PreencherMulheres()
	ChangeCartLabel()
}

function MenLoad(){
	produtos = BDprodutos()
	PreencherHomens()
	ChangeCartLabel()
}

function SaleLoad(){
	produtos = BDprodutos()
	MostrarMulherFiltrado(9)
	ChangeCartLabel()
}

function TopLoad(){
	produtos = BDprodutos()
	MostrarMulherFiltrado(11)
	ChangeCartLabel()
}

function NewLoad(){
	produtos = BDprodutos()
	MostrarMulherFiltrado(13)
	ChangeCartLabel()
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





//fechar o modal
function closeModal() {
	document.getElementById('productModal').style.display = 'none';
	document.body.style.overflow = 'auto';
}

//fechar o modal se clicar fora do modal
window.onclick = function(event) {
	if (event.target === document.getElementById('productModal')) {
		closeModal();
	}
}

//selecionar um tamanho
function selectSize(button) {
	document.querySelectorAll('.size-button').forEach(btn => {
		btn.classList.remove('selected');
	});
	button.classList.add('selected');
}

//adicionar ao carrinho
function AdicionarAoCarrinho(i) {
	//recebe o i sendo o id do produto

	let selectedSize = document.querySelector('.size-button.selected');
	if (!selectedSize) {
		alert('Por favor, selecione um tamanho');
		return;
	}

	//vai buscar o carrinho casa exista, ou deixa em branco caso nao exista
	carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];

	let item = carrinho.find(item => item.id === i && item.tamanho === selectedSize.textContent);

	if(item){
		item.quantidade++
	}else{
		carrinho.push({ id: i, tamanho: selectedSize.textContent, quantidade: 1 })
	}


	
	//guardar na sessao
	sessionStorage.setItem('carrinho', JSON.stringify(carrinho));

	alert(`Produto adicionado ao carrinho - Tamanho: ${selectedSize.textContent}`);
	closeModal();

	ChangeCartLabel()
}