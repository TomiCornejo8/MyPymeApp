import { Insumo } from "./popup-insumo.model";

export class Proveedor{
    id:number;
    categoria:string;
    nombre:string;
    email:string;
    telefono:string;
    insumos:Insumo[];

    constructor(id:number,categoria:string,nombre:string,email:string,telefono:string,insumos:Insumo[]){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.insumos = insumos;
    }
}