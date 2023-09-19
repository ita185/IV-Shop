const catalogo =[
    
        {
        id: 1,
        nome: "Moto E 32",
        preco: "750",
        marca: "Motorola",
        nomeArquivoImagem :"img1.jpeg",
        },
        
      {
            id: 2,
            nome: "Smart TV 50 Polegadas",
            preco: "2750",
            marca: "LG",
            nomeArquivoImagem :"img2.jpeg",
            },
        
        {
                id: 3,
                nome: "Play Station 5",
                preco: "4200",
                marca: "Sony",
                nomeArquivoImagem :"img3.jpeg",
        },
        {
            id: 4,
            nome: "Notebook Sansung",
            preco: "2200",
            marca: "Sansung",
            nomeArquivoImagem :"img4.jpeg",
        },
        {
            id: 5,
            nome: "Headphone",
            preco: "110",
            marca: "Marshall",
            nomeArquivoImagem :"img5.jpeg",
        },
        {
            id: 6,
            nome: "Lavadora de roupas",
            preco: "Sansung",
            nomeArquivoImagem :"img6.jpg",
        },
        {
            id: 7,
            nome: "Lava louças",
            preco: "5000",
            marca: "Brastemp",
            nomeArquivoImagem :"img7.jpeg",
        },
        {
            id: 8,
            nome: "HomeTheater",
            preco: "1100",
            marca: "Sony",
            nomeArquivoImagem :"img8.jpeg",
        },
        {
            id: 9,
            nome: "Aparelho de Som",
            preco: "1500",
            marca: "Sony",
            nomeArquivoImagem :"img9.jpeg",
        },
        {
            id: 10,
            nome: "Cooktop",
            preco: "700",
            marca: "Brastemp",
            nomeArquivoImagem :"img10.jpeg",
        },
]

for (const produtoCatalogo of catalogo){
 
 const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2'
 id="card-produto-1">
<img src="./Imagens/${produtoCatalogo.nomeArquivoImagem}" 
alt="Produto 1 IV Shop" style="height: 200px"
/>
<p>${produtoCatalogo.nome}</p>
<p>${produtoCatalogo.marca}</p>
<p>R$${produtoCatalogo.preco}</p> 
<button>Adicionar</button>
</div>` ;

document.getElementById("container-produto").innerHTML += cartaoProduto;   
}

