function expandir(id) {
    var cont = document.getElementById("mCont" + id);
    var botao = cont.querySelector(".bot");

    var expandido = cont.classList.toggle("exp");

    if (expandido) {
        botao.textContent = "LER MENOS";
    } else {
        botao.textContent = "LER MAIS";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.split("/").pop(); // Obtém o nome do arquivo atual
    const navLinks = document.querySelectorAll(".navi");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); // Adiciona a classe 'active' ao link correspondente
        }
    });
});



// Seleciona o formulário e a área onde os comentários serão exibidos
const comentarioForm = document.getElementById("comentario-form");
const comentariosContainer = document.querySelector("#fala-torcedor .comentarios");

// Adiciona um evento ao formulário para enviar o comentário
comentarioForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Obtém os valores do formulário
    const nome = document.getElementById("comentario-nome").value.trim();
    const texto = document.getElementById("comentario-texto").value.trim();

    // Verifica se os campos estão preenchidos
    if (nome && texto) {
        // Cria um novo elemento de comentário
        const novoComentario = document.createElement("div");
        novoComentario.classList.add("comentario");

        // Adiciona o conteúdo do comentário
        novoComentario.innerHTML = `
        <p class="autor"><strong>${nome}:</strong></p>
        <p class="texto">${texto}</p>
    `;
    

        // Adiciona o comentário à lista de comentários
        comentariosContainer.appendChild(novoComentario);

        // Limpa os campos do formulário
        comentarioForm.reset();
    } else {
        alert("Por favor, preencha todos os campos antes de enviar.");
    }
}); 
let totalCarrinho = 0; // Variável para armazenar o total do carrinho

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    const carrinho = document.getElementById("itens-carrinho");
    const totalValor = document.getElementById("total-valor");

    // Se o carrinho estiver vazio, remova a mensagem padrão
    if (carrinho.children[0] && carrinho.children[0].tagName === "P") {
        carrinho.innerHTML = ""; // Remove a mensagem "Seu carrinho está vazio"
    }

    // Adiciona o item ao carrinho
    const item = document.createElement("div");
    item.className = "carrinho-item";
    item.innerHTML = `
        <span>${nomeProduto}</span> 
        <span>R$ ${precoProduto.toFixed(2)}</span>`;
    carrinho.appendChild(item);

    // Atualiza o total do carrinho
    totalCarrinho += precoProduto;
    totalValor.textContent = `R$ ${totalCarrinho.toFixed(2)}`;
}

// Função para limpar o carrinho
function limparCarrinho() {
    const carrinho = document.getElementById("itens-carrinho");
    const totalValor = document.getElementById("total-valor");

    carrinho.innerHTML = `<p>Seu carrinho está vazio.</p>`; // Exibe mensagem padrão
    totalCarrinho = 0; // Reinicia o total
    totalValor.textContent = "R$ 0,00"; // Reseta o valor exibido
}

// Função para alternar a exibição da lista de produtos
function alternarListaProdutos() {
    const listaProdutos = document.getElementById("itens-carrinho");
    const botao = document.getElementById("toggle-lista");

    if (listaProdutos.style.display === "none") {
        listaProdutos.style.display = "block"; // Mostra a lista
        botao.textContent = "LER MENOS"; // Altera o texto do botão
    } else {
        listaProdutos.style.display = "none"; // Oculta a lista
        botao.textContent = "LER MAIS"; // Altera o texto do botão
    }
}
