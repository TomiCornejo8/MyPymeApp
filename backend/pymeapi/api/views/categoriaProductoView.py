from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.categoriaProducto import CategoriaProducto


class CategoriaProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model =CategoriaProducto
        fields = '__all__'

@api_view(['GET','POST'])
def categoriaproducto_api_view(request):
    
    if request.method == 'GET':
        categoriaproductos = CategoriaProducto.objects.all()
        categoriaproductos_serializer = CategoriaProductoSerializer(categoriaproductos,many = True)
        return Response(categoriaproductos_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        categoriaproducto_serializer = CategoriaProductoSerializer(data = request.data)
        if categoriaproducto_serializer.is_valid():
            categoriaproducto_serializer.save()
            return Response(categoriaproducto_serializer.data,status = status.HTTP_201_CREATED)
        return Response(categoriaproducto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT','DELETE'])
def categoriaproducto_detail_api_view(request,pk=None):
    
    categoriaproducto = CategoriaProducto.objects.filter(id = pk).first()
    if categoriaproducto:
    
        if request.method == 'PUT':
            categoriaproducto_serializer = CategoriaProductoSerializer(categoriaproducto,data = request.data)
            if categoriaproducto_serializer.is_valid():
                categoriaproducto_serializer.save()
                return Response(categoriaproducto_serializer.data,status = status.HTTP_200_OK)
            return Response(categoriaproducto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            categoriaproducto.delete()
            return Response({'message':'CategoriaProducto deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'CategoriaProducto not found'},status = status.HTTP_400_BAD_REQUEST)