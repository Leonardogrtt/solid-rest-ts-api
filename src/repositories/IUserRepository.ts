import { User } from "../entities/User";

export interface IUsersRepository {

    // salvar usuário .
    
    // buscar usuário por e-mail .

    findByEmail(email: string): Promise<User>;

    save(user: User): Promise<void>;

}

