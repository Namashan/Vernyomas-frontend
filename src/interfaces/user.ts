export interface User {
    id: string;
    username: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    weight: number;
    height: number;
    isMale: "true" | "false";
    birthDate: Date;

}
