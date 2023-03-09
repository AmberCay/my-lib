import { Book } from "./book";


export class Answer {

    constructor(public error: boolean,
                public code: number,
                public message: string,
                public data: Book[]) {}
}
