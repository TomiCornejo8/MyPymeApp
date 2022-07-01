from django.db import models

class Pyme(models.Model):
    usuario = models.CharField(max_length=60,unique=True)
    clave = models.CharField(max_length=255)
    icono = models.ImageField(null=True,upload_to='img/')