#from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from .models import *
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

#Pyme
class PymeView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request,nombre="",password=""):
        pymes = list(Pyme.objects.filter(nombre=nombre).values())
        status = 0
        if len(pymes) > 0:
            pyme = Pyme.objects.get(nombre=nombre)
            if(pyme.password == password):
                datos = {'Mensaje': "Exito",'pymes':pymes}
                status = 202
            else:
                datos= {'Mensaje': "Contraseña incorrecta"}
                status = 401
        else:
            datos= {'Mensaje': "Pyme no encontrada"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        Pyme.objects.create(nombre=jd['nombre'],password=jd['password'])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)
    
    def put(self,request,id):
        jd = json.loads(request.body)
        pymes = list(Pyme.objects.filter(id=id).values())
        if len(pymes) > 0:
            pyme = Pyme.objects.get(id=id)
            pyme.nombre = jd['nombre']
            pyme.password = jd['password']
            pyme.save()
            datos={'Mensaje':"Exito"}
            status = 200
        else:
            datos={'Mensaje':"Pyme no encontrada"}
            status = 404
        return JsonResponse(datos,status)

    def delete(self,request,id):
        pymes = list(Pyme.objects.filter(id=id).values())
        if len(pymes)>0:
            Pyme.objects.filter(id=id).delete()
            datos={'Mensaje':"Exito"}
            status = 200
        else:
            datos={'Mensaje':"Pyme no encontrada"}
            status = 404
        return JsonResponse(datos,status)
#
#Categoria de producto
class CategoriaProductoView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        jd = json.loads(request.body)
        categorias = list(CategoriaProducto.objects.filter(pyme=jd["id"]).values())
        if len(categorias) > 0:
            datos={'Mensaje':"Exito",'categorias':categorias}
            status = 200
        else:
            datos={'Mensaje':"Categoria no encontrada"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        CategoriaProducto.objects.create(pyme=jd['pyme'],categoria=jd['categoria'])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)

    def delete(self,request,id):
        categorias = list(CategoriaProducto.objects.filter(id=id).values())
        if len(categorias)>0:
            CategoriaProducto.objects.filter(id=id).delete()
            datos={'Mensaje':"Exito"}
            status = 200
        else:
            datos={'Mensaje':"Categoria no encontrada"}
            status = 404
        return JsonResponse(datos,status)

class ProductoView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        jd = json.loads(request.body)
        productos = list(Producto.objects.filter(pyme=jd["id"]).values())
        if len(productos) > 0:
            datos={'Mensaje':"Exito",'productos':productos}
            status = 200
        else:
            datos={'Mensaje':"Producto no encontrada"}
            status = 404
        return JsonResponse(datos,status)

    def post(self,request):
        jd = json.loads(request.body)
        Producto.objects.create(pyme=jd['pyme'],categoria=jd['categoria'],nombre=jd['nombre'],ranking=jd['ranking'],precio=jd['precio'],stock=jd['stock'],img=jd['img'])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)
#
#Venta
class MetodoPagoView(View):
    def get(self,request):
        metodosPago = list(MetodoPago.objects.values())
        if len(metodosPago) > 0:
            datos = {'Mensaje': "Exito",'metodosPago':metodosPago}
        else:
            datos= {'message': "Metodos de pago no encontrados"}
        return JsonResponse(datos,status=200)

class VentaView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)

    def get(self,request):
        jd = json.loads(request.body)
        ventas = list(Venta.objects.filter(pyme=jd["id"]).values())
        if len(ventas) > 0:
            datos={'Mensaje':"Exito",'ventas':ventas}
            status = 200
        else:
            datos={'Mensaje':"Ventas no encontrada"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        Venta.objects.create(pyme=jd['pyme'],metodoPago=jd['metodoPago'],productos=jd['productos'],fecha=jd['fecha'],montoTotal=jd['montoTotal'])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)

    def delete(self,request,id):
        ventas = list(Venta.objects.filter(id=id).values())
        if len(ventas)>0:
            Venta.objects.filter(id=id).delete()
            datos={'Mensaje':"Exito"}
            status = 200
        else:
            datos={'Mensaje':"Venta no encontrada"}
            status = 404
        return JsonResponse(datos,status)
#
#Proveedor
class CategoriaProveedorView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        jd = json.loads(request.body)
        categorias = list(CategoriaProveedor.objects.filter(pyme=jd["id"]).values())
        if len(categorias) > 0:
            datos={'Mensaje':"Exito",'categorias':categorias}
            status = 200
        else:
            datos={'Mensaje':"Categorias no encontradas"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        CategoriaProveedor.objects.create(pyme=jd['pyme'],categoria=jd["categoria"])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)
    
    def delete(self,request,id):
        categorias = list(CategoriaProveedor.objects.filter(id=id).values())
        if len(categorias)>0:
            CategoriaProveedor.objects.filter(id=id).delete()
            datos={'Mensaje':"Exito"}
            status = 200
        else:
            datos={'Mensaje':"Categoria no encontrada"}
            status = 404
        return JsonResponse(datos,status)

class ProveedorView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        jd = json.loads(request.body)
        provedores = list(Proveedor.objects.filter(pyme=jd["id"]).values())
        if len(provedores) > 0:
            datos={'Mensaje':"Exito",'provedores':provedores}
            status = 200
        else:
            datos={'Mensaje':"Provedores no encontradas"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        Proveedor.objects.create(pyme=jd['pyme'],categoria=jd["categoria"],nombre=jd["nombre"],telefono=jd["telefono"],email=jd["email"])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)
    
    def delete(self,request,id):
        proveedores = list(Proveedor.objects.filter(id=id).values())
        if len(proveedores)>0:
            Proveedor.objects.filter(id=id).delete()
            datos={'Mensaje':"Exito"}
            status = 200
        else:
            datos={'Mensaje':"Proveedor no encontrada"}
            status = 404
        return JsonResponse(datos,status)

class InsumoView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        jd = json.loads(request.body)
        insumos = list(Insumo.objects.filter(proveedor=jd["id"]).values())
        if len(insumos) > 0:
            datos={'Mensaje':"Exito",'insumos':insumos}
            status = 200
        else:
            datos={'Mensaje':"Insumos no encontradas"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        Insumo.objects.create(proveedor=jd['proveedor'],nombre=jd["nombre"],precio=jd["precio"])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)

class GastoView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request):
        jd = json.loads(request.body)
        gastos = list(Gasto.objects.filter(pyme=jd["id"]).values())
        if len(gastos) > 0:
            datos={'Mensaje':"Exito",'gastos':gastos}
            status = 200
        else:
            datos={'Mensaje':"Gastos no encontradas"}
            status = 404
        return JsonResponse(datos,status)
    
    def post(self,request):
        jd = json.loads(request.body)
        Gasto.objects.create(pyme=jd['pyme'],fecha=jd["fecha"],montoTotal=jd["montoTotal"],insumos=jd["insumos"])
        datos={'Mensaje':"Exito"}
        return JsonResponse(datos,status = 201)
#