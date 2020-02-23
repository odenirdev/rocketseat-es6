// Exercicio 1
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        let retorno = false;
        if (this.admin) {
            retorno = true;
        }
        return retorno;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);
        this.admin = true;
    }
}

const user = new Usuario('teste@teste.com', '1234');
const admin = new Admin('teste@teste.com', '1234');

console.log(user.isAdmin());
console.log(admin.isAdmin());