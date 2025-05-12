const form = document.getElementById('form-contato');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato "${inputNomeContato.value}" já foi adicionado!`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        alert(`Contato "${inputNomeContato.value}" adicionado com sucesso!`);
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const botaoTema = document.getElementById('btn-tema');

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
