import ClasseUsuario, { idade as IdadeUsuario } from './functions';
import Github, { umPorSegundo } from './c2ex3'

ClasseUsuario.info();
console.log(IdadeUsuario);

console.log(umPorSegundo());

Github.getRepositories('odenirdev/crud-pessoa');
Github.getRepositories('rocketseat/dslkvmskv');
Github.buscaUsuario('odenirdev');