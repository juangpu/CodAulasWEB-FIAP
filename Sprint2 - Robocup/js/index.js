const iconeContato = document.getElementById('icone_contato');
const iconeContato2 = document.getElementById('icone_contato2');
const iconeContato3 = document.getElementById('icone_contato3');

iconeContato.onclick = function () {
    swal ("Entre em contato por telefone:", "Número: +55 (11) 91111-1111", "info")
};
iconeContato2.onclick = function () {
    swal ("Siga-nos no Instagram:", "@axiom", "success")
};
iconeContato3.onclick = function () {
    swal ("Entre em contato por e-mail:", "E-mail: axiom@axiom.com.br", "info")
};