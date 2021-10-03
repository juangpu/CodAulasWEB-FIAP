// Objeto Math - Matemática

let numero = 321.484987456123;
console.log(numero);
console.log(typeof numero, numero);

// fixar número de casas decimais
console.log(numero.toFixed(2));
console.log(numero);

// Cuidado - converte a variável em string
const numero2 = numero.toFixed(2);
console.log(numero);
console.log(numero2, typeof numero2);
console.log(`----------------------------------------`);

// arredondamentos
// Math.ceil() arredondar para o próximo inteiro
console.log(Math.ceil(numero));

//Math.floor() arredondar para o inteiro anterior
console.log(Math.floor(numero));

//Math.round() conforme valor decimal
// valor decimal estiver entre 0 e 49 - interior anterior
// valor decimal estiver entre 50 e 99 - próximo inteiro
console.log(Math.round(numero));
console.log(`----------------------------------------`);

// encontre o maior valor em conjunto de  números
console.log(Math.max(323, 455, 12, 48, 99, 789,1, 5));

// encontre o menot valor em conjunto de  números
console.log(Math.min(323, 455, 12, 48, 99, 789));
console.log(`----------------------------------------`);

// raiz quadrada
console.log(Math.sqrt(25));

//raiz cubica
console.log(Math.cbrt(27));

//potência (**)
console.log(Math.pow(2,5));
console.log(2**5);
console.log(`----------------------------------------`);

// sorteio de números  Valor 0-1
let numeroSorteado = Math.random();
console.log(numeroSorteado);

//sortear números entre 0 e 11
numeroSorteado = Math.random() * 21;
console.log(numeroSorteado);

// sortear sem casas decimais
numeroSorteado = Math.floor(Math.random()*100);
console.log(numeroSorteado);

//sortear um valor entre 30 e 80
numeroSorteado = Math.floor(Math.random() * (80 - 30)) + 30;
console.log(numeroSorteado);