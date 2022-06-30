from django.db import models
from ..models.categoriaProveedor import CategoriaProveedor

class Proveedor(models.Model):
    categoria = models.ForeignKey(CategoriaProveedor,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=60)
    telefono = models.CharField(max_length=60)
    email = models.CharField(max_length=60)