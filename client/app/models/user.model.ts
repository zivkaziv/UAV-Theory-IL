export class User {
    _id:string;
    email: string;
    password: string;
    name: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    gender: string;
    location: string;
    picture: string;
    chapters: [{}];
    constructor(email:string, password:string) {}
}