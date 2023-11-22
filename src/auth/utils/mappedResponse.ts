import { LoginResponse } from "../interfaces/LoginResponse";

export const mappedResponse = ( response: any ): LoginResponse => { 
    const {message, user} = response;
    return {
        message,
        user : {
            id : user.id,
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email,
            rol : user.rol
        }
    } 
} 