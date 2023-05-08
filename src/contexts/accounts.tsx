import React, { createContext } from "react";

interface IAccountLogin {
    username: string,
    password: string
}

interface IAccountSignUp {
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
}

interface IAccountProviderFunctions {
    signUp: (data: IAccountSignUp) => void
    login: (data: IAccountLogin) => void
    logout: () => void
}

interface IAccountProviderProps {
    children: React.ReactNode
}

export const AccountContext = createContext<IAccountProviderFunctions>({} as IAccountProviderFunctions);

export const AccountProvider = ({children}: IAccountProviderProps) => {

    const signUp = (data: IAccountSignUp) => {
        console.log('Requisição de cadastro de usuário')
        console.log(data)
    }

    const login = (data: IAccountLogin) => {
        console.log('Requisição de login')
        console.log(data)
        console.log('salvar token no localStorage')
    }

    const logout = () => {
        console.log('Logout')
        console.log('Limpar token do localStorage')
    }

    return(
        <AccountContext.Provider value={{
            signUp,
            login,
            logout
        }}>
            {children}
        </AccountContext.Provider>
    )

}