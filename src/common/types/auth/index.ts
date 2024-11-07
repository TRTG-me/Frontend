import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

interface LoginFormValues {
    password: string;
    email: string;
    
}

interface RegisterFormValues {
    name: string;
    username: string;
    email: string; 
    password: string;
    confirmPassword: string; 
}


export interface IPropsLogin {
    navigate: (to: string) => void;
    register: UseFormRegister<LoginFormValues>;
    errors: FieldErrors<LoginFormValues>;
}

export interface IPropsRegister
 {
    navigate: (to: string) => void
    register: UseFormRegister<any>
    errors: FieldErrors<RegisterFormValues>
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

interface IPublicUser {
    id: number | null,
    firstName: string,
    username: string,
    email: string,
    createdAt: string,
    updatedAt: string
    watchlist:[IWatchlist]
}

interface IWatchlist {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}