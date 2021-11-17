from rest_framework import serializers
from .models import Blog

class Serializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields="__all__"