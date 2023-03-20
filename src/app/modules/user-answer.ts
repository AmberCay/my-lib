import { User } from "./user";

export class UserAnswer {
    constructor(public error: boolean,
                public code: number,
                public message: string,
                public data: User) {
        
    }
}
