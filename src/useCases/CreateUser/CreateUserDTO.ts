// envia dados -> 

// de 'CreateUserController' 

    // (camada externa - http ) 

// para 'CreateUserUseCase.ts' 

    // (camada interna - domínio)

export interface ICreateUserRequestDTO {
    name: string,
    email: string,
    password: string,
}