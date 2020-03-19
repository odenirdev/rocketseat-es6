const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

const { nome, endereco: { estado, cidade } } = empresa;

function mostraInfo({ nome, endereco: { cidade } }) {
    return `${ nome } é de ${ cidade }`;
}

console.log(mostraInfo());