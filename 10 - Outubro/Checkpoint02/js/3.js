let forca = Math.floor(Math.random() * 50);
console.log('Força:');
console.log(forca);

let agilidade = Math.floor(Math.random() * 50);
console.log('Agilidade:');
console.log(agilidade);

let dano = Math.floor(Math.random() * 50);
while (dano == 0){dano = Math.floor(Math.random() * 50)};
console.log('Dano:');
console.log(dano);

let xpClassificacao = (forca * agilidade) / dano

    if (xpClassificacao <= 9.0) {
        console.log('Classificação: Péssimo ' + xpClassificacao);
    }

    else if (xpClassificacao <= 18.0) {
        console.log('Classificação: Ruim ' + xpClassificacao);
    }

    else if (xpClassificacao <= 27.0){
        console.log('Classificação: Normal ' + xpClassificacao);
    }

    else if (xpClassificacao <= 36){
        console.log('Classificação: Bom ' + xpClassificacao);
    }

    else if (xpClassificacao > 36) {
        console.log('Classificação: Ótimo ' + xpClassificacao);
    }