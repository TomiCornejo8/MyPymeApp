from django.contrib import admin
from .models.categoriaProveedor import CategoriaProveedor
from .models.proveedor import Proveedor
from .models.insumo import Insumo
from .models.gasto import Gasto

# Register your models here.
admin.site.register(CategoriaProveedor)
admin.site.register(Proveedor)
admin.site.register(Insumo)
admin.site.register(Gasto)