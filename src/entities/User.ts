import { uuid } from 'uuidv4';

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    // constructor

    // props: recebe todos atributos de User menos 'id'

    // id: é opcional (?) pois quando instanciamos a classe
    // User, com `new User()`, por exemplo, podemos estar: 

    // (1)criando um novo usuário, então não podemos passar
    // o atributo id, pois ainda será gerado.

    // (2)lendo um usuário específico, então devemos passar o
    // o atributo id para poder chegar nas informações desejadas
    // que estão armazenadas geralmente, num banco de dados.

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        if(!id) {
            this.id = uuid();
        }
    }
}