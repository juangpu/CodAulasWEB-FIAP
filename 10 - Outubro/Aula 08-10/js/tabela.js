// Manipular HTML e CSS com JS
// DOM - Document Object Model ==> Document == página
// Para Manipular ==> "copia" do HTML para o JS
// Manipular == inserir - alterar - excluir - consultar algum elemento na página
// tag - class - id ==> NÃO PODE TER SEU VALOR REPETIDO
// Quando você copia == ele pega o elemento completo == Atributos e todas as funcionalidades existem
// Tão completo que ele devolve descendentes.  

// pegar elementos na página HTML

// pegando id - lembrando que id tem valor único

// forma1
const personagens = document.getElementById('personagensDados');
console.log(personagens);

// forma2
const personaUm = document.querySelector('#personagem-um');
console.log(personaUm);

// pela class
//forma1
const nomePersonagens = document.getElementsByClassName('nome-personagem');
console.log(nomePersonagens);

// forma2
// quando usamos o querySelector - ele retorna apenas o primeiro elemento encontrado
// nesse caso querySelectorAll()
const forcaPersonagens = document.querySelectorAll('.forca-personagem');
console.log(forcaPersonagens);

console.log(nomePersonagens[3].textContent);
nomePersonagens[3].textContent = 'Princesa Leia';

//tag
// forma 1
const pegaTR = document.getElementsByTagName('tr');
console.log(pegaTR);

// forma2
const pegaTD = document.querySelectorAll('td');
console.log(pegaTD);

