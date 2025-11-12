function criaCartao(categoria, pergunta, resposta) {
    // Seleciona o container principal
    const container = document.getElementById('container');

    // Cria o elemento do cartão
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    // Define o conteúdo interno do cartão com template string
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Controla se a resposta está visível
    let respostaEstaVisivel = false;

    // Função para virar o cartão ao clicar
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }

    // Adiciona o evento de clique no cartão
    cartao.addEventListener('click', viraCartao);

    // Adiciona o cartão ao container
    container.appendChild(cartao);
}