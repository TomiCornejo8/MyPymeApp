export class Categoria{
    id:number;
    categoria:string;

    constructor(categoria:string,id:number=0){
        this.id = id;
        this.categoria = categoria;
    }
}