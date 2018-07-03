export interface User {
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    guid: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}