// String - Manipulação de texto - String == Array de Char
const texto = 'JavaScript é uma linguagem de programação fantástica. Estudem essa linguagem!!!!!';
console.log(texto);
console.log(`--------------------------------------------`);
//tamanho da string
console.log(`Total de caracteres: ${texto.length}`);
console.log(`-----------------------------------------`);

// maiúsculas
console.log(texto.toUpperCase());
console.log(`-----------------------------------------`);

//minúsculas
console.log(texto.toLowerCase());
console.log(`-----------------------------------------`);

//verificar o caracter em uma determinada posição na string
console.log(texto.charAt(4));
console.log(texto[4]);
console.log(`-----------------------------------------`);

// buscar algum caracter na string - encontrou == retorna o índice
console.log(texto.indexOf('l'));

//não encontra == retorno -1
console.log(texto.indexOf('@'));

// passar uma parte da string
console.log(texto.indexOf('gra'));
console.log(`-----------------------------------------`);

// exibir ou copiar uma parte da string
//definir onde começa e onde termina - não pega conteúdo do índice final
console.log(texto.slice(3, 9));
const fatia = texto.slice(3, 9);
console.log(fatia);
console.log(texto);
console.log(`-----------------------------------------`);

// separar a string por caracter - 
const stringSeparada = texto.split(' ')
console.log(stringSeparada);

// separar a string por caracter - definir a quantidade de separações 
const stringSeparada1 = texto.split(' ',5)
console.log(stringSeparada1);

// trocar um caracter na string = APENAS PRIMEIRO
console.log(texto.replace('a','@'));

//substituir todas as ocorrências  - letra U
console.log(texto.replace(/u/ig,'@'));