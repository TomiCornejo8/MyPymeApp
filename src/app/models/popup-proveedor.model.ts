export class Proveedor{
    nombreProveedor:string;
    emailProveedor:string;
    telefonoProveedor:string;
    // imagen:string;

    constructor(nombreProveedor:string,emailProveedor:string,telefonoProveedor:string){
        this.nombreProveedor = nombreProveedor;
        this.emailProveedor = emailProveedor;
        this.telefonoProveedor = telefonoProveedor;
    }
}