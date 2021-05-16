// Texto no formato JSON
var textoJSON = '{ "contatos": [ {"nome": "Antonio dos Anjos", "email": "antonio@abc.com.br", "telefone": "031-98232-4455" }, { "nome": "Carlos Amaral", "email": "carlos@xyz.com.br", "telefone": "031-97628-3349" } ] }';

// converte JSON em Objeto Javascript agenda
var agenda = JSON.parse(textoJSON);

function procContatos() {
    lista = "";
    for (let i = 0; i < agenda.contatos.length; i++) {
        lista += agenda.contatos[i].nome + " - " +
            agenda.contatos[i].email + " - " +
            agenda.contatos[i].telefone + "<br>";
    }
    document.getElementById('saida_contatos').innerHTML = lista;
}

function printJSON() {
    document.getElementById('saida_json').innerHTML = JSON.stringify(agenda, null, 2);
}