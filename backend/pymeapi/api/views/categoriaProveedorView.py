from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.categoriaProveedor import CategoriaProveedor


class CategoriaProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model =CategoriaProveedor
        fields = '__all__'

@api_view(['GET','POST'])
def categoriaproveedor_api_view(request):
    
    if request.method == 'GET':
        categoriaproveedors = CategoriaProveedor.objects.all()
        categoriaproveedors_serializer = CategoriaProveedorSerializer(categoriaproveedors,many = True)
        return Response(categoriaproveedors_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        categoriaproveedor_serializer = CategoriaProveedorSerializer(data = request.data)
        if categoriaproveedor_serializer.is_valid():
            categoriaproveedor_serializer.save()
            return Response(categoriaproveedor_serializer.data,status = status.HTTP_201_CREATED)
        return Response(categoriaproveedor_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT','DELETE'])
def categoriaproveedor_detail_api_view(request,pk=None):
    
    categoriaproveedor = CategoriaProveedor.objects.filter(id = pk).first()
    if categoriaproveedor:
    
        if request.method == 'PUT':
            categoriaproveedor_serializer = CategoriaProveedorSerializer(categoriaproveedor,data = request.data)
            if categoriaproveedor_serializer.is_valid():
                categoriaproveedor_serializer.save()
                return Response(categoriaproveedor_serializer.data,status = status.HTTP_200_OK)
            return Response(categoriaproveedor_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            categoriaproveedor.img.delete(save=True)
            categoriaproveedor.delete()
            return Response({'message':'CategoriaProveedor deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'CategoriaProveedor not found'},status = status.HTTP_400_BAD_REQUEST)