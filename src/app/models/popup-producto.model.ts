export class Producto{
    nombreProducto:string;
    stockProducto:number;
    precioProducto:number;

    constructor(nombreProducto:string,stockProducto:number,precioProducto:number){
        this.nombreProducto = nombreProducto;
        this.stockProducto = stockProducto;
        this.precioProducto = precioProducto;
    }
}