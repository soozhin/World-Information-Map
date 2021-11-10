from os import error
from django.shortcuts import redirect
from django.http import response
from . import models
from django.shortcuts import render

# Create your views here.

########################
# 世界地図画面表示
########################
def startView(request):
    #展開される出力画面のテンプレート
    template_file = "worldmap/start.html"

    #----------------------
    # メイン処理
    #----------------------

    #----------------------
    #連想配列の生成
    options = {
        
    }
    #----------------------
    #テンプレートを展開して結果画面としてブラウザに返す
    return render(request, template_file, options)

########################
# 世界地図画面表示
########################
def japanView(request):
    #展開される出力画面のテンプレート
    template_file = "worldmap/japan.html"

    #----------------------
    # メイン処理
    #----------------------

    #----------------------
    #連想配列の生成
    options = {
        
    }
    #----------------------
    #テンプレートを展開して結果画面としてブラウザに返す
    return render(request, template_file, options)

########################
# 都道府県画面表示
########################
def todouhukenView(request):
    #展開される出力画面のテンプレート
    template_file = "worldmap/todouhuken.html"

    #----------------------
    # メイン処理
    #----------------------

    #----------------------
    #連想配列の生成
    options = {
        
    }
    #----------------------
    #テンプレートを展開して結果画面としてブラウザに返す
    return render(request, template_file, options)