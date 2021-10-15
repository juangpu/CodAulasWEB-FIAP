const exercicioA = []; // números entre 0 e 100. 
const exercicioB = []; // números negativos
const exercicioC = []; // sucessores
const exercicioD = []; // antecessores
const exercicioE = []; // números pares
const exercicioF = []; // números impares


for(let i = 0; i <= 19; i++) {

    let sorteio = Math.floor(Math.random() * 100);
    exercicioA.push(sorteio);
    exercicioB.push(sorteio * -1);
    exercicioC.push(sorteio + 1);
    exercicioD.push(sorteio - 1);
    if (sorteio % 2 == 0){exercicioE.push(sorteio);}
    else{exercicioF.push(sorteio);}

}

console.log ('Numeros: ');
console.table(exercicioA);

console.log ('Numeros negativos: ');
console.table(exercicioB);

console.log ('Numeros sucessores: ');
console.table(exercicioC);

console.log ('Numeros antecessores: ');
console.table(exercicioD);

console.log ('Numeros pares: ');
console.table(exercicioE);

console.log ('Numeros impares: ');
console.table(exercicioF);