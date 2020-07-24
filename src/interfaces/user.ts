export interface User {
    username: string;
    surname: string;
    firstname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    weight: number;
    height: number;
    isMale: "true" | "false";
    birthDate: Date;

}
