from django.contrib import admin
from django.urls import path
from django.urls import include
from . import views

app_name= 'worldmap'

urlpatterns = [
    # 初期画面(世界地図)
    path( '', views.startView, name='start' ) ,
    #日本地図画面
    path( 'japan', views.japanView, name='japan' ) ,
    #都道府県画面
    path( 'todouhuken', views.todouhukenView, name='todouhuken' ) ,
    
]