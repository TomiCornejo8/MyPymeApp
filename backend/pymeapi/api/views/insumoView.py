from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.insumo import Insumo


class InsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model =Insumo
        fields = '__all__'

@api_view(['POST'])
def insumo_api_view(request):
    
    if request.method == 'POST':
        insumo_serializer = InsumoSerializer(data = request.data)
        if insumo_serializer.is_valid():
            insumo_serializer.save()
            return Response(insumo_serializer.data,status = status.HTTP_201_CREATED)
        return Response(insumo_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def insumo_detail_api_view(request,pk=None):

    if request.method == 'GET':
        insumos = Insumo.objects.filter(proveedor = pk).all()
        if insumos:
            insumo_serializer = InsumoSerializer(insumos,many = True)
            return Response(insumo_serializer.data,status = status.HTTP_200_OK)
        else:
            return Response({'message':'Insumos not found'},status = status.HTTP_400_BAD_REQUEST)

    insumo = Insumo.objects.filter(id = pk).first()
    if insumo:
        if request.method == 'DELETE':
            insumo.delete()
            return Response({'message':'Insumo deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Insumo not found'},status = status.HTTP_400_BAD_REQUEST)