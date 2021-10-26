//objeto literal
const usuario = {
    nome:  'Fulano',
    senha: '1234456',
    email: 'fulano@fulano.com',
    logado: true
};

console.log(usuario);
console.log(usuario.email);

//array de objetos
const pessoas = [
    {nome: 'Eu', idade: 50, email: 'teste1@teste.com'},
    {nome: 'Tu', idade: 20, email: 'teste2@teste.com'},
    {nome: 'Ele', idade: 30, email: 'teste3@teste.com'},
    {nome: 'Nós', idade: 40, email: 'teste4@teste.com'},
    {nome: 'Vós', idade: 25, email: 'teste5@teste.com'},
    {nome: 'Eles', idade: 38, email: 'teste6@teste.com'},
]

console.log(pessoas);
for(let i = 0; i < pessoas.length; i++){
    let {nome, idade, email} = pessoas[i];
    console.log(`Nome: ${nome} | Idade: ${email} | Email: ${email} `);
}

// definir uma função para gerar objetos - Factory
function criaPet(nome, tipo, idade) {
    return {
        nome,
        tipo,
        idade,

        exibirPet() {
                console.log(`Nome do pet: ${this.nome} | Tipo do pet: ${this.tipo}, Idade do pet: ${this.idade}`);
        },

        adicionarIdade() {
            this.idade++;
            alert(`Opa...temos um aniversariante, parabéns ${this.nome}`);
        }
    }
}

const pet1 = criaPet('Clotário', 'cachorro', 6);
const pet2 = criaPet('Kratos', 'cachorro', 2,);
const pet3 = criaPet('Mimi', 'gato', 8);

pet1.exibirPet();
pet2.exibirPet();
pet3.exibirPet();

pet1.adicionarIdade();
pet1.exibirPet();