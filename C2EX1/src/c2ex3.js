import axios from 'axios';

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

export async function umPorSegundo() {
    try {
        await delay();
        console.log('1s');
        try {
            await delay();
            console.log('2s');
            try {
                await delay();
                console.log('3s');
            } catch (err) {
                console.warn('Erro na requisição');
            }
        } catch (err) {
            console.warn('Erro na requisição');
        }
    } catch (err) {
        console.warn('Erro na requisição');
    }
}

export default class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.warn('Repositório não existe');
        }
    }

    static async buscaUsuario(usuario) {
        try {
            const response = axios.get(`https://api.github.com/users/${usuario}`);
            console.log(response);
        } catch (err) {
            console.warn('Usuário não existe');
        }
    }

}