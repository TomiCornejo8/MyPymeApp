from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from ..models.producto import Producto

class ProductoSerializer(serializers.ModelSerializer):
    icono = Base64ImageField(required=False)
    class Meta:
        model = Producto
        fields = '__all__'

@api_view(['GET','POST'])
def producto_api_view(request):
    
    if request.method == 'GET':
        productos = Producto.objects.all()
        productos_serializer = ProductoSerializer(productos,many = True)
        return Response(productos_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        producto_serializer = ProductoSerializer(data = request.data)
        if producto_serializer.is_valid():
            producto_serializer.save()
            return Response(producto_serializer.data,status = status.HTTP_201_CREATED)
        return Response(producto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def producto_detail_api_view(request,pk=None):

    if request.method == 'GET':
        producto = Producto.objects.filter(categoria = pk).all()
        if producto:
            producto_serializer = ProductoSerializer(producto,many = True)
            return Response(producto_serializer.data,status = status.HTTP_200_OK)
        else:
            return Response({'message':'Productoes not found'},status = status.HTTP_400_BAD_REQUEST)


    producto = Producto.objects.filter(id = pk).first()
    if producto:

        if request.method == 'PUT':
            producto_serializer = ProductoSerializer(producto,data = request.data)
            if producto_serializer.is_valid():
                producto_serializer.save()
                return Response(producto_serializer.data,status = status.HTTP_200_OK)
            return Response(producto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            producto.img.delete(save=True)
            producto.delete()
            return Response({'message':'Producto deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Producto not found'},status = status.HTTP_400_BAD_REQUEST)