export interface User {
    username: string;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    weight: number;
    height: number;
    isMale: "true" | "false";
    birthDate: Date;

}
