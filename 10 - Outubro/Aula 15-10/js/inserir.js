//pegando o  botão e criando a função
document.querySelector('#insereConteudo').addEventListener('click', () =>{

//pegando conteúdo do campo do form
const novosDados = document.querySelector('#novosDados').value;

//recuperando o elemento html que receberá a nova tag
const novaTag = document.querySelector('#novaTag');

//criar um elemento, no JAVASCRIPT,  h2 que será inserido na div novaTag
const novoH2 = document.createElement('h2');

//atribuindo o valor digitado ao elemento criado no Javascript
novoH2.textContent = novosDados;

// colocar no documento a tag criada com o valor digitado
novaTag.appendChild(novoH2);
});