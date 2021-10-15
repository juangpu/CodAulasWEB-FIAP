const caracteres = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*' ];

const senhaAleatoria = [];

for(let i = 0; i <= 19; i++) {

    let exibicaoAleatoria = Math.floor(Math.random() * 67);
    senhaAleatoria.push(caracteres[exibicaoAleatoria]);

}

console.log('Senha de 20 caracteres: ');
console.table(senhaAleatoria.join(""));