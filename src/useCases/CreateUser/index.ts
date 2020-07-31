import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider();

const postgresUsersRepository = new PostresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase,
);

export { createUserUseCase, createUserController };