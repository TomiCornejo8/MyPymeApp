from django.db import models

class CategoriaProducto(models.Model):
    categoria = models.CharField(max_length=55)