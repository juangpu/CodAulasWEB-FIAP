function mensagem() {
    alert('Olá, você me chamou, sou uma função');
}
// atribuir um evento a uma função
// buscar o elemento html que queremos que execute evento
// atribuir um Escutador de Eventos - qual é o evento
// ele vai executar a função

document.querySelector('#btn-1').addEventListener('click', mensagem);
document.querySelector('#btn-2').addEventListener('dblclick', mensagem);
// document.getElementById('btn-3').addEventListener('mouseover', mensagem);
// document.getElementById('btn-4').addEventListener('mouseout', mensagem);

