// escrevendo no console
console.log('Olá, sou o console!!!'); 
console.log('Introdução Js');
console.log('------------------------------------');

//variáveis

let nomeUsuario = 'Fulano de Tal';
let senhaUsuario = '987654';
let loginUsuario = true;
let acessoUsuario = 45612;
const dataNascimentoUsuario = '12/12/2000';

console.log(nomeUsuario);
console.log(senhaUsuario);
console.log(loginUsuario);
console.log(acessoUsuario);
console.log(`------------------------------------`);

console.log(nomeUsuario, senhaUsuario, loginUsuario, acessoUsuario);
//EM JS NÓS NÃO FAZEMOS ISSO
console.log('Nome do usuário: ' + nomeUsuario + 'Senha: ' + senhaUsuario);

// template string = USAR SEMPRE
console.log(`Usuário ${nomeUsuario} Senha ${senhaUsuario}
Quantidade de acessos: ${acessoUsuario}`);

console.log(`${dataNascimentoUsuario}`);
// ERRO POIS ELA é UMA const dataNascimentoUsuario = '12/02/1998';

console.log(`------------------------------------`);

// propriedade typeof - mostrar tipo
console.log(typeof nomeUsuario, nomeUsuario);
console.log(typeof loginUsuario, loginUsuario);
console.log(typeof(acessoUsuario), acessoUsuario);
console.log(typeof(senhaUsuario), senhaUsuario);

loginUsuario = 'NUNCA LOGOU';
console.log(typeof loginUsuario, loginUsuario);

var sextaFeira = true;
console.log(sextaFeira, typeof sextaFeira);

for(var i = 0; i <= 10; i++){
    console.log(i);
    if( i == 5){
        let j = i;
        console.log('Valor de i agora em j = ' + j);
    }
};

let j = 900;


console.log(`Valor final de i: ${i}`);
console.log(`Valor de j: ${j}`);

// Objeto literal
const pessoa = {
    nome: 'Eu mesmo',
    email: 'profisrael.copi@fiap.com',
    idade: 50
}
console.log(pessoa);
console.log(pessoa.email);
console.log(pessoa.idade);

console.log(`------------------------------------`);
// Operadores 

let n1 = 10;
let n2 = 2;

// Aritméticos
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${n1 / n2}`);
console.log(`${n1} % ${n2} = ${n1 % n2}`);
console.log(`${n1} elevado a ${n2} = ${n1 ** n2}`);

console.log(`------------------------------------`);
// relacionais retorno TRUE / FALSE

let resultado = (n1 > n2)
console.log(`${n1} > ${n2} = ${resultado}`);

resultado = (n1 < n2)
console.log(`${n1} < ${n2} = ${resultado}`);

resultado = (n1 >= n2)
console.log(`${n1} >= ${n2} = ${resultado}`);

resultado = (n1 <= n2)
console.log(`${n1} <= ${n2} = ${resultado}`);

n1 = 100;
n2 = '100';
// quando usamos == testa apenas o valor
resultado = (n1 == n2)
console.log(`${n1} == ${n2} = ${resultado}`);

resultado = (n1 != n2)
console.log(`${n1} != ${n2} = ${resultado}`);

// quando for comparar dois valores em JS use ===
// testa se são iguais E do mesmo tipo USE SEMPRE
resultado = (n1 === n2)
console.log(`${n1} === ${n2} = ${resultado}`);

resultado = (n1 !== n2)
console.log(`${n1} != ${n2} = ${resultado}`);

console.log(`------------------------------------`);
// LOGICOS retorno TRUE / FALSE

n1 = 10;
n2 = 30;


// Operador OU ( || ) basta 1 argumento ser TRUE para resposta TRUE
resultado = ((n1 >=10) || (n2 >35));
console.log(`((${n1} >= 10) || (${n2} > 35)) ${resultado}`);

// Operador E ( && ) Todos argumentos devem TRUE para resposta TRUE
resultado = ((n1 >= 10) && (n2 > 35));
console.log(`((${n1} >= 10) && (${n2} > 35)) ${resultado}`);

// Operador NÃO ( ! ) NEGAÇÃO
resultado = !((n1 >= 10) && (n2 > 35));
console.log(`!((${n1} >= 10) && (${n2} > 35)) ${resultado}`);

//unitários

console.log(n1);
console.log(n1);

n1++;
n2--;
console.log(n1);
console.log(n2);

// atribuição
n1+=10;
console.log(n1);

n1-=10;
console.log(n1);
