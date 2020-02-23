const usuarios = [{
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}, {
    nome: 'Gabriel',
    idade: 15,
    empresa: 'Rocketseat'
}, {
    nome: 'Lucas',
    idade: 30,
    empresa: 'Facebook'
}];

var result = usuarios.map(function(item) {
    return item.idade;
});

console.log(result);

result = usuarios.filter(function(item) {
    return item.idade > 18 && item.empresa == 'Rocketseat';
});

console.log(result);

result = usuarios.find(function(item) {
    return item.empresa === 'Google';
});

console.log(result);

result = usuarios.map(function(item) {
    item.idade *= 2;
    return item;
});

result = result.filter(function(item) {
    return item.idade < 50;
});

console.log(result);