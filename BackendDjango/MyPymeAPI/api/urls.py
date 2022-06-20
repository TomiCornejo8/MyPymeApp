from django.urls import path
from .views import *

urlpatterns = [
    path('pymes/',PymeView.as_view(),name='listaPymes'),
    path('pymes/<str:nombre>/<str:password>',PymeView.as_view(),name='validarPyme'),
    path('pymes/<int:id>',PymeView.as_view(),name='editarPyme')
]