"use strict";

var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    estado = _empresa$endereco.estado,
    cidade = _empresa$endereco.cidade;

function mostraInfo(_ref) {
  var nome = _ref.nome,
      cidade = _ref.endereco.cidade;
  return "".concat(nome, " \xE9 de ").concat(cidade);
}

console.log(mostraInfo());
