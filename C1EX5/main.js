console.log(soma(1, 2, 3, 4));

function soma(...parametros) {
    return parametros.reduce((total, numero) => {
        return total + numero;
    });
}

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: "Gabriel" }
console.log({ 'usuário 2: ': usuario2 });

const usuario3 = {...usuario, endereco: {...usuario.endereco, cidade: "Lontras" } }
console.log({ 'usuário 3: ': usuario3 });

console.log(`O usuário ${usuario.nome} possui ${usuario.idade} anos.`);

const nome = 'Diego';
const idade = '23';

const usuario4 = {
    nome,
    idade,
    cidade: 'Rio do Sul'
}

console.log({ 'usuário 4: ': usuario4 });