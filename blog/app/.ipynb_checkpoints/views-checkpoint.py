from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Blog
from .serializers import Serializer

# Create your views here.
@api_view(['GET'])
def apiOverview(request):
    api_urls={'AAREEZ':"HELLO WORLD"}
    return Response(api_urls)

@api_view(['GET'])
def blogContent(request):
    contents=Blog.objects.all()[::-1]
    serializer = Serializer(contents, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def contentUpdate(request,pk):
    content=Blog.objects.get(id=pk)
    serializer = Serializer(instance=content, data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['POST'])
def blogCreate(request):
    serializer = Serializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['DELETE'])
def contentDelete(request,pk):
    
    content=Blog.objects.get(id=pk)
    content.delete()
    
    return Response('Item succsesfully delete!')

