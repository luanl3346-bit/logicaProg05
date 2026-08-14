// PRODUTOS 
const produtos = [
    {
        id: "n1",
        nome: "Camiseta Santos",
        preco: 300.00,
        categoria: "Roupas e Acessorios",
        imagem: "./css/img/camisa_neymar2-removebg-preview.png",
    },
    {
        id: "n2",
        nome: "iPhone 17 Pro Max",
        preco: 7999.00,
        categoria: "Informática",
        imagem: "./css/img/iphone-removebg-preview(1).png",
    },
    {
        id: "n3",
        nome: "Notebook Gamer Acer",
        preco: 5000.00,
        categoria: "Informática",
        imagem: "./css/img/notebook_gamer-removebg-preview.png",
    },
    {
        id: "n4",
        nome: "Óculos de sol Oakley",
        preco: 150.00,
        categoria: "Roupas e Acessorios",
        imagem: "./css/img/oculos-removebg-preview.png",
    },
    {
        id: "n5",
        nome: "SmartWatch Garmin",
        preco: 1099.00,
        categoria: "Informática",
        imagem: "./css/img/relogio-removebg-preview.png",
    },
    {
        id: "n6",
        nome: "Pilha Duracell",
        preco: 50.00,
        categoria: "Eletrônicos",
        imagem: "./css/img/pilha_duracel-removebg-preview.png",
    },
    {
        id: "n7",
        nome: "Yves Saint Laurent Parfum",
        preco: 650.00,
        categoria: "Beleza e Cuidado Pessoal",
        imagem: "./css/img/perfume11-removebg-preview.png",
    },
];

//DOM
const container = document.getElementById("product-list");

// Renderização dos products cards.
// Para cada produto aparecer na tela, foi criada uma função para RENDERIZÁ-LOS.
function renderizarProdutos(lista) {
    
    //limpa antes de renderizar
    container.innerHTML = "";

    lista.forEach(produto => {

        //cria o card
        const card = document.createElement("article");
        card.classList.add("product-card");

        // conteúdo do card
        card.innerHTML = `
            <h3 class="novo">NEW!</h3>
            <h3 class="prec">R$ ${produto.preco} </h3>
                <img 
                    src="${produto.imagem}"
                    id="${produto.id}" 
                    alt="${produto.nome}" 
                >

                <h3>${produto.nome}</h3>

                <button type="submit" class="btn-adicionar">
                    Adicionar ao carrinho
                </button>
        `;

        // ação do botão
        const botao = card.querySelector(".btn-adicionar");

        botao.addEventListener("click", () => {
            adicionarAoCarrinho(produto.id);
        });

        // adiciona no container
        container.appendChild(card);

    });
}

// DESTRUCTURING
const { nome, preco } = produtos[0];
console.log(`Produto: ${nome} - R$ ${preco}`);



// LISTAR PRODUTOS
function listarProdutos(lista) {
    lista.forEach(produto => {
        console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`);
     });
}


// FILTRAR POR CATEGORIA
function filtrarProdutos(categoria) {
    return produtos.filter(
        produto => produto.categoria === categoria
    );
}

const produtosInformatica = filtrarProdutos("Informática");
console.log("---Filtro Informática---")
listarProdutos(produtosInformatica);


// SPREAD OPERATOR
const produtosNovos = [
    ...produtos,
    {
        id: "n8",
        nome: "Camiseta Simpsons",
        preco: 200,
        categoria: "Roupas e Acessorios",
        imagem: "./css/img/camiseta_simp-removebg-preview.png",
    },
];

listarProdutos(produtosNovos);


//SIMULAÇÃO JSON
const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);

const produtosConvertidos = JSON.parse(produtosJSON);
console.log(produtosConvertidos);


// VALIDAÇÃO DO FORMULÁRIO
const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const idade = document.getElementById("idade").value.trim();

        if (
            nome === "" || email === "" || senha === "" || idade === "") {
            
                mensagem.textContent = "Preencha todos os campos!";
                mensagem.style.color = "red";

        } else if (senha.length < 6) {
            mensagem.textContent = "A senha deve possuir pelo menos 6 caracteres.";
            mensagem.style.color = "red";

        } else if (Number(idade) < 18) {
            mensagem.textContent = "É necessário ter 18 anos ou mais.";
            mensagem.style.color = "red";

        } else {
            mensagem.textContent = "Formulário enviado com sucesso!";
            mensagem.style.color = "green";
        }
    });
}

// TO-DO LISTA DE TAREFAS
const inputTarefa = document.getElementById("nova-tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista-tarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; // carregar do localStorage

function renderizarTarefas() {

    if (!lista) return;

    lista.innerHTML = "";

    tarefas.forEach((tarefa, index) => {

        const li = document.createElement("li");

        li.textContent = tarefa;

        const btn = document.createElement("button");
        btn.textContent = "Remover";

        btn.addEventListener("click", () => {
            tarefas.splice(index, 1);
            salvar();
        });

        li.appendChild(btn);
        lista.appendChild(li);
    });
}

//salvar no localStorage
function salvar() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarTarefas();
}

//adicionar tarefa
if (botaoAdicionar) {
    botaoAdicionar.addEventListener("click", () => {

        const nova = inputTarefa.value.trim();

        if (nova !== "") {
            tarefas.push(nova);
            inputTarefa.value = "";

            salvar();
        }
    });
}

renderizarTarefas(); //iniciar


// VARIÁVEIS GLOBAIS
// referências aos elementos do DOM (serão atribuídas após o carregamento da página)
let productList;
let cartList;
let totalEl;

//Elementos do mini carrinho
let cartCount;
let miniTotal;
let miniList;

// ARRAY do estado atual do carrinho
let carrinho = [];

// ADICIONAR PRODUTO AO CARRINHO 

// recebe o id do produto e adiciona ao carrinho
function adicionarAoCarrinho(id) {

    // Busca o produto pelo id
    const produtoSelecionado = produtos.find(
        p => p.id === id
    );
        
    if (!produtoSelecionado) {
        console.error("Produto não encontrado!");
        return;
    }

    // Adiciona ao array do carrinho
    carrinho.push(produtoSelecionado);

    // Atualiza sistema
    salvarCarrinho();
}
 

// Renderização do carrinho principal
function renderizarCarrinho() {

    // Se não estiver na página do carrinho, não faz nada
    if (!cartList || !totalEl) return;

    cartList.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {

        total += item.preco;

        const li = document.createElement("li");

        li.innerHTML = `
            ${item.nome} - R$ ${item.preco.toFixed(2).replace(".", ",")}
            <button>Remover</button>
        `;

        li.querySelector("button").addEventListener("click", () => {

            carrinho.splice(index, 1);

            salvarCarrinho();
        });

        cartList.appendChild(li);
    });

    totalEl.textContent =
        `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}

// MINI CARRINHO 

//atualiza o mini carrinho (ícone no topo)
function atualizaMiniCarrinho() {

    //atualiza o contador de itens
    cartCount.textContent = carrinho.length;

    //limpa lista
    miniList.innerHTML = "";

    let total = 0;

    //percorre itens
    carrinho.forEach(item => {

        total += item.preco;

        //cria item da lista 
        const li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        miniList.appendChild(li);
    });

    //atualiza total
    miniTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// FINALIZAR COMPRA

//simula finalização de compra 
function finalizarCompra() {
    
    //validação: carrinho vazio
    if (carrinho.length === 0) {
        mensagemCompra.textContent = "Seu carrinho está vazio!";
        mensagemCompra.style.color = "red";
        return;
    } 

    //Mensagem de sucesso
    mensagemCompra.textContent ="Compra realiza com sucesso!";
    mensagemCompra.style.color = "green";

    //limpa carrinho
    carrinho = [];

    salvarCarrinho();
}

// LOCALSTORAGE
//salva carrinho no sistema e atualiza interface
function salvarCarrinho () {
     
    // Salva no localstorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    //atualiza telas
    renderizarCarrinho();
    atualizaMiniCarrinho();
}

// INICIALIZAÇÃO DO SISTEMA

//aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {

    // Captura elementos do DOM
    productList = document.getElementById("product-list");
    cartList = document.getElementById("cart-list");
    totalEl = document.getElementById("total");

    cartCount = document.getElementById("cart-count");
    miniList = document.getElementById("mini-cart-list");
    miniTotal = document.getElementById("mini-total");

    // elemento do checkout
    btnFinalizar = document.getElementById("finalizar-compra");
    mensagemCompra = document.getElementById("mensagem-compra");

    // Recupera dados salvos
    carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Renderização inicial
    renderizarProdutos(produtos);
    renderizarCarrinho();
    atualizaMiniCarrinho();

    // evento do botão finalizar compra
    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", finalizarCompra);
    }
})


