/*
// Variaveis
const nomeLoja = "Amazon Livre";

let produto1= "Smartphone"
let preco1 = 8000;
let emPromocao = true;

console.log(`Produto: ${produto1}`);
 
// Função Calcular Desconto 
function calcularDesconto(preco, desconto) {
    return preco - (preco * desconto);
}



// Usando Condicional
let precoFinal;
if(emPromocao) {
    precoFinal = calcularDesconto(preco1, 0.1); // 10% Desconto
}else {
    precoFinal = preco1;
}

console.log(`Produto: ${produto1}`);
console.log(`Preço final: R$ ${precoFinal}`);

// Lista de produtos (SIMULAÇÃO)
const produtos = [
    {nome: "Smartphone", preco: 8000},
    {nome: "Camiseta Santos", preco: 300},
    {nome: "Notebook Gamer", preco: 3500},
];


// LOOP
for(let i=0; i<produtos.length; i++) {
    console.log(`Produto: ${produtos[i].nome} - R$ ${produtos[i].preco}`);
}

//Arrow Function
const exibirProduto = (produto) => {
    return `Produto: ${produto.nome} - R$ ${produto.preco}`;
};

console.log(exibirProduto(produto[0]));*/

const produtos = [
    {
        nome: "Iphone 17",
        preco: 7999,
        categoria: "Informática",
        imagem: "minha-loja/css/img/iphone-removebg-preview (1).png",
    },
    {
        nome: "Camiseta Santos 2011",
        preco: 300,
        categoria: "Roupas e Acessórios",
        imagem: "minha-loja/css/img/camisa_neymar2-removebg-preview.png",
    },
    {
        nome: "Notebook Gamer de última geração",
        preco: 5000,
        categoria: "Informática",
        imagem: "minha-loja/css/img/notebook1-removebg-preview.png",
    },
    {
        nome: "Óculos de sol Masculino Oakley",
        preco: 150,
        categoria: "Roupas e Acessórios",
        imagem: "minha-loja/css/img/oculos-removebg-preview.png",
    },
    {
        nome: "Yves Saint Laurent Parfum",
        preco: 800,
        categoria: "Beleza e Cuidado Pessoal",
        imagem: "minha-loja/css/img/perfume11-removebg-preview.png",
    },
];

function listarProdutos(lista) {
    lista.forEach(produto => {
        console.log(`Produto: ${produto.nome} - R$ ${produto.preco}`);
     });
}

listarProdutos(produtos);

function filtrarProdutos(categoria) {
    return produtos.filter(
        produto => produto.categoria === categoria
    );
}

const produtosInformatica = filtrarProdutos("Informática");
console.log("---Filtro Informática---")
listarProdutos(produtosInformatica);

const produtosNovos = [
    ...produtos,
    {
        nome: "Camiseta Simpsons",
        preco: 200,
        categoria: "Roupas e Acessorios",
        imagem: "minha-loja/css/img/camiseta_simp-removebg-preview.png",
    },
];

listarProdutos(produtosNovos);