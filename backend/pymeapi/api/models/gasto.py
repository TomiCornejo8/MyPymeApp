from django.db import models
from ..models.insumo import Insumo

class Gasto(models.Model):
    fecha = models.DateField(auto_now=True)
    montoTotal = models.PositiveIntegerField()
    insumos = models.ManyToManyField(Insumo)