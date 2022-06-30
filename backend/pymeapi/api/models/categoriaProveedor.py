from django.db import models

class CategoriaProveedor(models.Model):
    categoria = models.CharField(max_length=55)