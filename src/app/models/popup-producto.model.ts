export class Producto{
    id:number;
    nombre:string;
    stock:number;
    precio:number;
    ranking:number;
    categoria:string;
    img:string

    constructor(id:number,nombre:string,stock:number,precio:number,ranking:number,categoria:string,img:string){
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.ranking = ranking;
        this.categoria = categoria;
        this.img = img;
    }
}