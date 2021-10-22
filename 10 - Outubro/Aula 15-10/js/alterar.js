//pegar o botão e atribuir uma função para ele 
document.querySelector('#alterarConteudo').addEventListener('click', () => {

// pegando o campo dados - quero que pegue o que foi digitado  === value
const novosDados = document.querySelector('#dados').value;

//inserir no elemento html o conteúdo que foi digitado - nesse caso a div com id conteudo
document.querySelector('#conteudo').textContent = novosDados;
})