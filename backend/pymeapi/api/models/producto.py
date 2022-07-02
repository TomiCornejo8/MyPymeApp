from django.db import models
from ..models.categoriaProducto import CategoriaProducto

class Producto(models.Model):
    categoria = models.ForeignKey(CategoriaProducto,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=55)
    ranking = models.PositiveSmallIntegerField()
    precio = models.PositiveIntegerField()
    stock = models.PositiveIntegerField()
    img = models.ImageField(null=True,upload_to='img/')