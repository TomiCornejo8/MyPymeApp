from django.urls import path
from .views import *

urlpatterns = [
    #Pyme
    path('pymes/',PymeView.as_view(),name='listaPymes'),
    path('pymes/<str:nombre>/<str:password>',PymeView.as_view(),name='validarPyme'),
    path('pymes/<int:id>',PymeView.as_view(),name='editarPyme'),
    #
    #Producto
    path('categoriasProducto/',CategoriaProductoView.as_view(),name='listaCategoriasProducto'),
    path('categoriasProducto/<int:id>',CategoriaProductoView.as_view(),name='editarCategoriasProducto'),
    path('productos/',ProductoView.as_view(),name='listaProducto'),
    #

    #Ventas
    path('metodoPago/',MetodoPagoView.as_view(),name='listaMetodoPago'),
    path('ventas/',VentaView.as_view(),name='listaVentas'),
    path('ventas/<int:id>',VentaView.as_view(),name='editarVentas'),
    #

    #Proveedor
    path('categoriasProveedor/',CategoriaProveedorView.as_view(),name='listaCategoriasProveedor'),
    path('categoriasProveedor/<int:id>',CategoriaProveedorView.as_view(),name='editarCategoriasProveedor'),
    path('proveedores/',ProveedorView.as_view(),name='listaProveedores'),
    path('proveedores/<int:id>',ProveedorView.as_view(),name='editarProveedores'),
    path('insumos/',InsumoView.as_view(),name='listaInsumos'),
    path('gastos/',GastoView.as_view(),name='listaGastos'),
    #
]