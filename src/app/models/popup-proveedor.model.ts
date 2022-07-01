import { Insumo } from "./popup-insumo.model";

export class Proveedor{
    id:number;
    categoria:number;
    nombre:string;
    email:string;
    telefono:string;
    insumos:Insumo[];

    constructor(categoria:number,nombre:string,email:string,telefono:string,insumos:Insumo[] = [],id:number = 0){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.insumos = insumos;
    }
}