function criaCartao(categoria,pergunta,resposta)
let container= document.getElementById('container')
letcartao=document.createElement('article')
criaCartao.className='cartao'
criaCartao.innerHTML=
<div class= " cartao_conteudo">
    <h3>${categoria}</h3>
    <div class="cartao_conteudo_pergunta> 
    <p>${pergunta}</p>
</div>
<div class="cartao_conteudo_resposta">
<p>${resposta}</p>
</div>
</div>