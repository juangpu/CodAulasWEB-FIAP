// declarar a função
function primeiraMensagem() {
    // corpo da função
    console.log(`Olá, eu sou uma função!!!`);
}

//chamar a função
primeiraMensagem();


// função parametros
function segundaMensagem(turma) {
    console.log(`Olá turma ${turma}, eu sou uma função`);
}

// chamando a função e passando de argumentos
segundaMensagem('1SIR');

//retorno
//mais bonitinha 
function multiplicaValor(valor1=0, valor2=0){
    const resultado = (valor1 * valor2);
    return resultado;
}

console.log(`Multiplicando 5 x 5 = ${multiplicaValor(5,5)}`);
console.log(`Multiplicando 15 x 5 = ${multiplicaValor(15,5)}`);
console.log(`Multiplicando 25 x 5 = ${multiplicaValor(21,5)}`);
console.log(`Multiplicando 35 x 5 = ${multiplicaValor(35,5)}`);
console.log(`Multiplicando 45 x 5 = ${multiplicaValor(45,5)}`);

let resultado = multiplicaValor(3,999);
console.log(resultado);


// funções anônimas
const media = function(nota1, nota2) {
    return (nota1 + nota2) /2;
}

console.log(`A média obtida foi: ${media(8,6)}`);

//Arrow functions
const mediaFiap = (mediaPrimeiroSemestre, mediaSegundoSemestre) => {
    return (mediaPrimeiroSemestre * 0.4) + (mediaSegundoSemestre * 0.6);
}

console.log(`Média Final = ${mediaFiap(8,9)}`);
console.log(`Média Final = ${mediaFiap(7,8)}`);
console.log(`Média Final = ${mediaFiap(9,8)}`);
console.log(`Média Final = ${mediaFiap(7,8)}`);


let valor = Math.floor(Math.random()*6);
while(valor === 0){
    valor = Math.floor(Math.random() * 6);
}
console.log(valor);