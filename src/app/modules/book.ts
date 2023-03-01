export class Book {

    // set up properties

    public id_book: number
    public id_user: number
    public title: string
    public type: string
    public author: string
    public price: number
    public photo: string

    // constructor

    constructor(title:string, type:string, author:string, price:number, photo:string) {
        this.id_book = 0
        this.id_user = 0
        this.title = title
        this.type = type
        this.author = author
        this.price = price
        this.photo = photo
    }
}
