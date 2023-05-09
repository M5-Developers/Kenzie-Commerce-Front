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
    isLoggedIn: () => boolean
    isSuperUser: () => boolean
    isStaff: () => boolean
    isNormalUser: () => boolean
}

interface IAccountProviderProps {
    children: React.ReactNode
}

export const AccountContext = createContext<IAccountProviderFunctions>({} as IAccountProviderFunctions);

export const AccountProvider = ({children}: IAccountProviderProps) => {

    const isLoggedIn = () => {
        //authenticate
        return false //or true if authenticated success
    }
    
    const isSuperUser =() => {
        //authetnticate
        return false //or result from authentication
    } 
    
    const isStaff = () => {
        //authenticate
        return false //or result from authentication
    }

    const isNormalUser = () => {
        //authenticate
        //if not superuser and not staf, it becomes true
        return false //or result from authentication
    }

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
            logout,
            isLoggedIn,
            isSuperUser,
            isStaff,
            isNormalUser            
            }}>
            {children}
        </AccountContext.Provider>
    )

}