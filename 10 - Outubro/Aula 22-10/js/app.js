//recuperar o tbody da página - será nele que iremos vincular a linha e as colunas que serão criadas pelo JS
const tbody = document.querySelector('tbody');

//recuperar o formulário e criar uma função ao evento de envio(submit) adicionar um escutador de eventos 
document.querySelector('form').addEventListener('submit', function(event) {

    // cancelar o submit para que a função que está sendo escrita AQUI funcione
    // passar o submit como parâmetro na função vamos cancelar o evento preventDefault()
    event.preventDefault();

    //recuperar os campos do form armazenar em um array
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
     ];

    //  criação da tr 
    const tr = document.createElement('tr');
    
    // forEach = percorrer um array e cada vez que encontrar um conteúdo - ele vai executar uma função
    campos.forEach((campo) => {
        
        // criar uma td
        const td = document.createElement('td');

        //passar a informação digitada para a td criada
        td.textContent = campo.value;

        //colocar a td criada dentro da tr criada
        tr.appendChild(td);
    });

    //colocar a tr no tbody
    tbody.appendChild(tr);

    // limpar o formulário
    this.reset();
});