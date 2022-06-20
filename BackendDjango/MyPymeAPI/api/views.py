#from django.shortcuts import render
import json
from django.http import JsonResponse
from django.views import View
from .models import *
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

class PymeView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request,*args,**kwargs):
        return super().dispatch(request,*args,**kwargs)
    
    def get(self,request,nombre="",password=""):
        if(nombre!="" and password!=""):
            pymes = list(Pyme.objects.filter(nombre=nombre).values())
            if len(pymes) > 0:
                pyme = Pyme.objects.get(nombre=nombre)
                if(pyme.password == password):
                    datos = {'message': "Succes",'pymes':pymes}
                else:
                    datos= {'message': "Password incorrect"}
            else:
                datos= {'message': "Pyme not found"}
            return JsonResponse(datos)
        else:
            pymes = list(Pyme.objects.values())
            if len(pymes) > 0:
                datos = {'message': "Succes",'pymes':pymes}
            else:
                datos= {'message': "No hay pymes"}
            return JsonResponse(datos)
    
    def post(self,request):
        jd = json.loads(request.body)
        Pyme.objects.create(nombre=jd['nombre'],password=jd['password'])
        datos={'message':"Success"}
        return JsonResponse(datos)
    
    def put(self,request,id):
        jd = json.loads(request.body)
        pymes = list(Pyme.objects.filter(id=id).values())
        if len(pymes) > 0:
            pyme = Pyme.objects.get(id=id)
            pyme.nombre = jd['nombre']
            pyme.password = jd['password']
            pyme.save()
            datos={'message':"Success"}
        else:
            datos={'message':"Pyme not found ..."}
        datos={'message':"Success"}
        return JsonResponse(datos)
    
    def delete(self,request,id):
        pymes = list(Pyme.objects.filter(id=id).values())
        if len(pymes)>0:
            Pyme.objects.filter(id=id).delete()
            datos={'message':"Success"}
        else:
            datos={'message':"Company not found ..."}
        return JsonResponse(datos)