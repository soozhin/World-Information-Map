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
    # 展開される出力画面のテンプレート
    template_file = "worldmap/start.html"

    # ----------------------
    # メイン処理
    # ----------------------

    # ----------------------
    # 連想配列の生成
    options = {

    }
    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    return render(request, template_file, options)

########################
# 世界地図画面表示
########################


def japanView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/japan.html"

    # ----------------------
    # メイン処理
    # ----------------------

    # ----------------------
    # 連想配列の生成
    options = {

    }
    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    return render(request, template_file, options)

########################
# 都道府県画面表示
########################


def AichiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Aichi.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def AkitaView(request):

    # 展開される出力画面のテンプレート
    template_file = "worldmap/Akita.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def AomoriView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Aomori.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def ChibaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Chiba.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def EhimeView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Ehime.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def FukuiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Fukui.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def FukuokaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Fukuoka.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def FukushimaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Fukushima.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def GifuView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Gifu.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def GunmaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Gunma.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def HiroshimaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Hiroshima.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def HokkaidoView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Hokkaido.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def HyogoView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Hyogo.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def IbarakiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Ibaraki.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def IshikawaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Ishikawa.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def IwateView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Iwate.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def KagawaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Kagawa.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def KagoshimaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Kagoshima.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def KanagawaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Kanagawa.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def KochiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Kochi.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def KumamotoView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Kumamoto.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def KyotoView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Kyoto.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def MieView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Mie.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def MiyagiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Miyagi.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def MiyazakiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Miyazaki.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def NaganoView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Nagano.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def NagasakiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Nagasaki.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def NaraView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Nara.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def NiigataView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Niigata.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def OitaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Oita.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def OkayamaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Okayama.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def OkinawaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Okinawa.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def OsakaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Osaka.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def SagaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Saga.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def SaitamaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Saitama.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def ShigaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Shiga.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def ShimaneView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Shimane.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def ShizuokaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Shizuoka.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def TochigiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Tochigi.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def TokushimaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Tokushima.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def TokyoView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Tokyo.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def TottoriView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Tottori.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def ToyamaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Toyama.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def WakayamaView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Wakayama.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def YamagataView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Yamagata.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def YamaguchiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Yamaguchi.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)


def YamanashiView(request):
    # 展開される出力画面のテンプレート
    template_file = "worldmap/Yamanashi.html"

    option = {}

    # ----------------------
    # テンプレートを展開して結果画面としてブラウザに返す
    # return render(request, template_file, option)
    return render(request, template_file, option)
