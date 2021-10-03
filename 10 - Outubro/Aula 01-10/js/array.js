// declarando Array
const personagens = ['Leia', 'Luke', 'Han Solo', 'Chewbacca',
                                    'R2-D2', 'Darth Vader', 'Obi Wan'];
console.log(personagens);
console.log(personagens[3]);
console.table(personagens);
console.log(`-------------------------------------------`);

// mudando conteúdo do índice
personagens[1] = 'Yoda'
console.log(personagens);
console.log(`------------------------------------------`);

//inserir no fim do array (último índice)
personagens.push('C3PO');
console.log(personagens);
console.log(`------------------------------------------`);

//excluir o último índice  EXCLUÍ MESMO
let retirado = personagens.pop();
console.log(personagens);
console.log(retirado);
console.log(`-----------------------------------------`);

//inserir no início do array (primeiro índice)
personagens.unshift('BB8');
console.log(personagens);
console.log(`-----------------------------------------`);

// excluir o primeiro índice 
retirado = personagens.shift();
console.log(personagens);
console.log(retirado);
console.log(`-----------------------------------------`);

// splice - inserir e/ou excluir uma determinada quantidade de 
// elementos

// excluir - índice inicial - quantidade de elementos a serem excluídos
personagens.splice(3, 2);
console.table(personagens)
console.log(`-----------------------------------------`);

// inserir - onde começa - quantos excluir - Novos elementos
personagens.splice(3, 0, 'Chewbacca', 'R2D2');
console.table(personagens)
console.log(`-----------------------------------------`);

//fatiar o array
const fatiaArray = personagens.slice(0,3)
console.log(fatiaArray);
console.log(personagens);
console.log(`-----------------------------------------`);

//atribuição por referência
//mudança narray ele altera as duas referências
const personagens1 = personagens
console.log(personagens1);
console.log(personagens);

// exclusão do ultimo indice do array personagens
personagens1.pop();

// a exclusão afetou também o personagens
console.log(personagens);

personagens.push('Obi Wan');
console.log(personagens1);
console.log(personagens);
console.log(`-----------------------------------------`);

//spread operator = NÃO FAZ REFERÊNCIA - ELE COPIA
const personagens2 = [...personagens];
console.log(personagens2);
personagens2.pop()
console.log(personagens2);
console.log(personagens);

// Concatenar
const novosPersonagens = ['Hank', 'Sheila', 'Boby'];
const personagensJuntos = personagens.concat(novosPersonagens, personagens2);
console.table(personagensJuntos)

//Concaternar com spread
const todosJuntos = [...personagens, ...novosPersonagens,
     ...personagens2, 'israel', ...[2, 3, 4, 5, 6, 7, 8], 
     ...personagensJuntos];
console.table(todosJuntos);