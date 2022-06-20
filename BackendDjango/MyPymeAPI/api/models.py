from django.db import models
from django.forms import DateField

# Create your models here.

class Pyme(models.Model):
    nombre = models.CharField(max_length=60)
    password = models.CharField(max_length=60)

#Productos
class CategoriaProducto(models.Model):
    pyme = models.ForeignKey(Pyme,on_delete=models.CASCADE)
    categoria = models.CharField(max_length=60)

class Producto(models.Model):
    pyme = models.ForeignKey(Pyme,on_delete=models.CASCADE)
    categoria = models.ForeignKey(CategoriaProducto,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=60)
    ranking = models.PositiveSmallIntegerField()
    precio = models.PositiveIntegerField()
    stock = models.PositiveSmallIntegerField()
    img = models.CharField(max_length=255)
#

#Ventas
class MetodoPago(models.Model):
    metodoPago = models.CharField(max_length=60)

class Venta(models.Model):
    pyme = models.ForeignKey(Pyme,on_delete=models.CASCADE)
    metodoPago = models.ForeignKey(MetodoPago)
    productos = models.ManyToManyField(Producto)
    fecha = models.DateTimeField(auto_now=False)
    montoTotal = models.PositiveIntegerField()
#

#Proveedores
class CategoriaProveedor(models.Model):
    pyme = models.ForeignKey(Pyme,on_delete=models.CASCADE)
    categoria = models.CharField(max_length=60)

class Proveedor(models.Model):
    pyme = models.ForeignKey(Pyme,on_delete=models.CASCADE)
    categoria = models.ForeignKey(CategoriaProveedor,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=60)
    telefono = models.PositiveIntegerField()
    email = models.CharField(max_length=60)

class Insumo(models.Model):
    proveedor = models.ForeignKey(Proveedor,on_delete=models.CASCADE)
    nombre = models.CharField(max_length=60)
    precio = models.PositiveIntegerField()

class Gasto(models.Model):
    pyme = models.ForeignKey(Pyme,on_delete=models.CASCADE)
    fecha = models.DateField(auto_now=True)
    montoTotal = models.PositiveIntegerField()
    insumos = models.ManyToManyField(Insumo)
#