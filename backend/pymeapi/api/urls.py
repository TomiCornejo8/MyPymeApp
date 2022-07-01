from django.urls import path
from .views.pymeView import pyme_api_view, pyme_detail_api_view
from .views.categoriaProveedorView import categoriaproveedor_api_view,categoriaproveedor_detail_api_view
from .views.proveedorView import proveedor_api_view,proveedor_detail_api_view
from .views.insumoView import insumo_api_view,insumo_detail_api_view
from .views.gastoView import gasto_api_view,gasto_detail_api_view

urlpatterns = [
    path('categoriaproveedor/',categoriaproveedor_api_view,name='categoriaproveedor_api'),
    path('categoriaproveedor/<int:pk>',categoriaproveedor_detail_api_view,name='categoriaproveedor_detail_api'),

    path('proveedor/',proveedor_api_view,name='proveedor_api'),
    path('proveedor/<int:pk>',proveedor_detail_api_view,name='proveedor_detail_api'),

    path('insumo/',insumo_api_view,name='insumo_api'),
    path('insumo/<int:pk>',insumo_detail_api_view,name='insumo_detail_api'),

    path('gasto/',gasto_api_view,name='gasto_api'),
    path('gasto/<int:pk>',gasto_detail_api_view,name='gasto_detail_api'),

    path('pyme/',pyme_api_view,name='pyme_api'),
    path('pyme/<str:usuario>/<str:clave>',pyme_detail_api_view,name='pyme_detail_api'),
]
