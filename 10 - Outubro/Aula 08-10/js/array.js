// gerar um array com 10 números entre 0 e 20
const numeros = [];

//somatória dos valores sorteados
let somatoria = 0;

//cardapio
const cardapio = ['Pizza', 'Lasanha', 'Bife a Parmegiana',
                              'Hamburguer', 'Coxinha', 'Pastel',
                              'Churrasco', 'Torta de Morango',
                              'Trufas', 'Bolo de Chocolate'];

// sortear 3 opções do cardápio
let sugestao = [];


// Checkpoint5
for(let i = 0; i<=9; i++){
    let numeroSorteado = Math.floor(Math.random()*21);    
    numeros.push(numeroSorteado);
    //fazer a somatória - Checkpoint5 
    somatoria+=numeroSorteado;
};
console.table(numeros);
console.log(`Valor final da somatória: ${somatoria}`);

console.table(cardapio);

//criar for - Checkpoint 5
for(let i = 0; i <= 2; i++){
    let sorteioCardapio = Math.floor(Math.random() * 10)
    sugestao.push(cardapio[sorteioCardapio]);
};
console.log(sugestao);