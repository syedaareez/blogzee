from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.apiOverview),
    path('blog-content',views.blogContent,name="blog-content"),
    path('blog-create',views.blogCreate,name="blog-create"),
    path('content-update/<str:pk>',views.contentUpdate,name="content-update"),
    path('content-delete/<str:pk>',views.contentDelete,name="content-delete"),
]