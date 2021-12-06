from os import name
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib import admin
from django.urls import path
from django.urls import include
from . import views

app_name = 'worldmap'

urlpatterns = [
    # 初期画面(世界地図)
    path('', views.startView, name='start'),
    # 日本地図画面
    path('japan', views.japanView, name='japan'),
    # 都道府県画面
    path('Aichi', views.AichiView, name='Aichi'),
    path('Akita', views.AkitaView, name='Akita'),
    path('Aomori', views.AomoriView, name='Aomori'),
    path('Chiba', views.ChibaView, name='Chiba'),
    path('Ehime', views.EhimeView, name='Ehime'),
    path('Fukui', views.FukuiView, name='Fukui'),
    path('Fukuoka', views.FukuokaView, name='Fukuoka'),
    path('Fukushima', views.FukushimaView, name='Fukushima'),
    path('Gifu', views.GifuView, name='Gifu'),
    path('Gunma', views.GunmaView, name='Gunma'),
    path('Hiroshima', views.HiroshimaView, name='Hiroshima'),
    path('Hokkaido', views.HokkaidoView, name='Hokkaido'),
    path('Hyogo', views.HyogoView, name='Hyogo'),
    path('Ibaraki', views.IbarakiView, name='Ibaraki'),
    path('Ishikawa', views.IshikawaView, name='Ishikawa'),
    path('Iwate', views.IwateView, name='Iwate'),
    path('Kagawa', views.KagawaView, name='Kagawa'),
    path('Kagoshima', views.KagoshimaView, name='Kagoshima'),
    path('Kanagawa', views.KanagawaView, name='Kanagawa'),
    path('Kochi', views.KochiView, name='Kochi'),
    path('Kumamoto', views.KumamotoView, name='Kumamoto'),
    path('Kyoto', views.KyotoView, name='Kyoto'),
    path('Mie', views.MieView, name='Mie'),
    path('Miyagi', views.MiyagiView, name='Miyagi'),
    path('Miyazaki', views.MiyazakiView, name='Miyazaki'),
    path('Nagano', views.NaganoView, name='Nagano'),
    path('Nagasaki', views.NagasakiView, name='Nagasaki'),
    path('Nara', views.NaraView, name='Nara'),
    path('Niigata', views.NiigataView, name='Niigata'),
    path('Oita', views.OitaView, name='Oita'),
    path('Okayama', views.OkayamaView, name='Okayama'),
    path('Okinawa', views.OkinawaView, name='Okinawa'),
    path('Osaka', views.OsakaView, name='Osaka'),
    path('Saga', views.SagaView, name='Saga'),
    path('Saitama', views.SaitamaView, name='Saitama'),
    path('Shiga', views.ShigaView, name='Shiga'),
    path('Shimane', views.ShimaneView, name='Shimane'),
    path('Shizuoka', views.ShizuokaView, name='Shizuoka'),
    path('Tochigi', views.TochigiView, name='Tochigi'),
    path('Tokushima', views.TokushimaView, name='Tokushima'),
    path('Tokyo', views.TokyoView, name='Tokyo'),
    path('Tottori', views.TottoriView, name='Tottori'),
    path('Toyama', views.ToyamaView, name='Toyama'),
    path('Wakayama', views.WakayamaView, name='Wakayama'),
    path('Yamagata', views.YamagataView, name='Yamagata'),
    path('Yamaguchi', views.YamaguchiView, name='Yamaguchi'),
    path('Yamanashi', views.YamanashiView, name='Yamanashi'),

]
urlpatterns += staticfiles_urlpatterns()
