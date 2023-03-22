export class User {

    // set up properties

    public id_user: number
    public f_name: string
    public l_name: string
    public email: string
    public photo: string
    public password: string

    // constructor

    constructor(id_user: number, f_name:string, l_name:string, email:string, photo:string, password:string) {
        this.id_user = id_user
        this.f_name = f_name
        this.l_name = l_name
        this.email = email
        this.photo = photo
        this.password = password
    }
}
