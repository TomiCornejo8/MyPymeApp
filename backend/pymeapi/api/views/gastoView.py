from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.gasto import Gasto


class GastoSerializer(serializers.ModelSerializer):
    class Meta:
        model =Gasto
        fields = '__all__'

@api_view(['GET','POST'])
def gasto_api_view(request):
    
    if request.method == 'GET':
        gastos = Gasto.objects.all()
        gastos_serializer = GastoSerializer(gastos,many = True)
        return Response(gastos_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        gasto_serializer = GastoSerializer(data = request.data)
        if gasto_serializer.is_valid():
            gasto_serializer.save()
            return Response(gasto_serializer.data,status = status.HTTP_201_CREATED)
        return Response(gasto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def gasto_detail_api_view(request,pk=None):
    
    gasto = Gasto.objects.filter(id = pk).first()
    if gasto:
        if request.method == 'DELETE':
            gasto.img.delete(save=True)
            gasto.delete()
            return Response({'message':'Gasto deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Gasto not found'},status = status.HTTP_400_BAD_REQUEST)