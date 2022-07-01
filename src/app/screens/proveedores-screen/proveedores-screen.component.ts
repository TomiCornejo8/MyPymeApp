import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/popup-categoria.model';
import { Insumo } from 'src/app/models/popup-insumo.model';
import { Proveedor } from 'src/app/models/popup-proveedor.model';
import { CategoriaProveedorService } from 'src/app/services/categoriaProveedor/categoria-proveedor.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedores-screen',
  templateUrl: './proveedores-screen.component.html',
  styleUrls: ['./proveedores-screen.component.sass']
})
export class ProveedoresScreenComponent implements OnInit {

  categorias:Categoria[];
  categoriaX:Categoria;
  typeCategoria:string;
  categoria:Categoria;

  typeProveedor:string;
  proveedores:Proveedor[];
  proveedor:Proveedor;

  insumo:Insumo;

  constructor(private categoriaService:CategoriaProveedorService,private proveedorService:ProveedorService) { }

  ngOnInit(): void {
    this.listCategoria();
    this.categoria = new Categoria("");
    this.listProveedor();
    this.proveedor = new Proveedor(0,"","","");
  }

  listCategoria(){
    this.categoriaService.list().subscribe(data=>{
      this.categorias = data;
      let aux = new Categoria('Todos');
      this.categorias.unshift(aux);
      this.categoriaX = aux;
    });
  }

  listProveedor(){
    this.proveedorService.list().subscribe(data =>{
      this.proveedores = data;
    });
  }

  addProveedor(proveedor:Proveedor){
    this.proveedorService.post(proveedor).subscribe(data=>{
      console.log(data);
      this.proveedores.push(data);
    });
  }

  cambioCategoria(categoria:Categoria){
    this.categoriaX = categoria;
  }

  editTypeCategoria(type:string){
    if(type == "Agregar"){
      this.categoria.categoria = "";
    }
    this.typeCategoria = type;
  }

  editTypeProveedor(type:string){
    if(type == "Agregar"){
      this.proveedor.categoria = 0;
      this.proveedor.nombre = "";
      this.proveedor.email = "";
      this.proveedor.telefono = "";
    }
    this.typeProveedor = type;
  }

  addCategoria(categoria:Categoria){
    this.categoriaService.post(categoria).subscribe(data=>{
      console.log(data);
      this.categorias.push(data);
    });
  }

  getCategoria(id:number){
    let array = this.categorias.filter(function (categoria) { return categoria.id == id; });
    this.categoria = array[0];
  }

  getProveedor(id:number){
    let array = this.proveedores.filter(function (proveedor) { return proveedor.id == id; });
    this.proveedor = array[0];
  }

  editCategoria(categoria:Categoria){
    this.categoria.categoria = categoria.categoria;
    this.categoriaService.put(this.categoria).subscribe(data=>{
      console.log(data);
    });
  }

  editProveedor(proveedor:Proveedor){
    this.proveedor.nombre = proveedor.nombre;
    this.proveedor.categoria = proveedor.categoria;
    this.proveedor.telefono = proveedor.telefono;
    this.proveedor.email = proveedor.email;
    this.proveedorService.put(this.proveedor).subscribe(data=>{
      console.log(data);
    });
  }

  deleteCategoria(id:number){
    this.categoriaService.delete(id).subscribe(data=>{
      console.log(data);
    });
    this.getCategoria(id);
    this.categorias.splice(this.categorias.indexOf(this.categoria),1);
  }

  deleteProveedor(id:number){
    this.proveedorService.delete(id).subscribe(data=>{
      console.log(data);
    });
    this.getProveedor(id);
    this.proveedores.splice(this.proveedores.indexOf(this.proveedor),1);
  }

  subirInsumo(insumo:Insumo){
    this.insumo = insumo;
  }
}
