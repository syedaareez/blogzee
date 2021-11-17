from django.db import models
from datetime import datetime

# Create your models here.
class Blog(models.Model):
    title=models.CharField(blank=True,max_length=200,default='Blog')
    content=models.CharField(blank=True,max_length=2000)
    show=models.BooleanField(default=False,blank=True,null=True)
    author=models.CharField(blank=True ,max_length=50,default='Syed Aareez')
    image=models.ImageField(upload_to='uploaded',null=True)
    date = models.DateTimeField(auto_now_add=True,blank=True)
    fvrt=models.BooleanField(default=False,blank=True,null=True)
    
    def __str__(self):
        return self.title