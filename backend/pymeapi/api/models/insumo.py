from django.db import models

from ..models.proveedor import Proveedor

class Insumo(models.Model):
    proveedor = models.ForeignKey(Proveedor,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=60)
    precio = models.PositiveIntegerField()