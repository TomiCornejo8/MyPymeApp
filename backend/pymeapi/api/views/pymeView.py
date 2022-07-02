from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from werkzeug.security import generate_password_hash, check_password_hash
from ..models.pyme import Pyme

class PymeSerializer(serializers.ModelSerializer):
    icono = Base64ImageField(required=False)
    class Meta:
        model = Pyme
        fields = '__all__'

class PymeDataSerializer(serializers.ModelSerializer):
    icono = Base64ImageField(required=False)
    class Meta:
        model = Pyme
        fields = ['usuario','icono']

@api_view(['POST'])
def pyme_api_view(request):
    if request.method == 'POST':
        request.data['clave'] = generate_password_hash(request.data['clave'],'sha256',30)
        pyme_serializer = PymeSerializer(data = request.data)
        if pyme_serializer.is_valid():
            pyme_serializer.save()
            return Response({'message':'Pyme created'},status = status.HTTP_201_CREATED)
        return Response(pyme_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def pyme_detail_api_view(request,usuario=None,clave=None):
    
    pyme = Pyme.objects.filter(usuario = usuario).first()

    if pyme:
        if(check_password_hash(pyme.clave,clave)):
            if request.method == 'GET':
                pyme_serializer = PymeDataSerializer(pyme)
                return Response(pyme_serializer.data,status = status.HTTP_200_OK)

            elif request.method == 'PUT':
                if request.data['clave'] != pyme.clave:
                    request.data['clave'] = generate_password_hash(request.data['clave'],'sha256',30)
                pyme_serializer = PymeSerializer(pyme,data = request.data)
                if pyme_serializer.is_valid():
                    pyme_serializer.save()
                    return Response({'message':'Pyme edited'},status = status.HTTP_200_OK)
                return Response(pyme_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

            elif request.method == 'DELETE':
                pyme.icono.delete(save=True)
                pyme.delete()
                return Response({'message':'Pyme deleted'},status = status.HTTP_200_OK)
        else:
            return Response({'message':'Pyme dont have accces'},status = status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)

    return Response({'message':'Pyme not found'},status = status.HTTP_204_NO_CONTENT)