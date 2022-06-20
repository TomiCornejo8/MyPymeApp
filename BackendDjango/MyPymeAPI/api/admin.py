from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Pyme)
admin.site.register(CategoriaProducto,Producto)
admin.site.register(MetodoPago,Venta)
admin.site.register(CategoriaProveedor,Proveedor,Insumo,Gasto)