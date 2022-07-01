export class Insumo{
    id:number;
    nombre:string;
    precio:number;
    proveedor:number;

    constructor(nombre:string,precio:number, proveedor:number,id:number = 0){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}