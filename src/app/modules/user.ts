export class User {

    // set up properties

    // public id_user: number
    public name: string
    public last_name: string
    public email: string
    public photo: string
    public password: string

    // constructor

    constructor(name:string, last_name:string, email:string, photo:string, password:string) {
        this.name = name
        this.last_name = last_name
        this.email = email
        this.photo = photo
        this.password = password
    }
}
