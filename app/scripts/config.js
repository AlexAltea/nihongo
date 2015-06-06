// Global configuration object
var config = {
  "name": "Minna No Nihongo",
  "description": "Vocabulary of the first 6 lessons",
  "settings": {
    "difficulty": "kana"
  },
  "tasks": [
    {
      "type": "vocabulary",
      "name": "Minna no Nihongo: L1",
      "data": {
        "words": [
          {"romaji":"watashi", "kana":"わたし", "kanji":"", "meaning":"ich"},
          {"romaji":"anata", "kana":"あなた", "kanji":"", "meaning":"Sie"},
          {"romaji":"anohito", "kana":"あのひと", "kanji":"あの人", "meaning":"er, sie, die Person dort drüben"},
          {"romaji":"〜san", "kana":"〜さん", "kanji":"", "meaning":"Herr, Frau (respektvolle Anrede)"},
          {"romaji":"〜chan", "kana":"〜ちゃん", "kanji":"", "meaning":"(Suffix, das für Vornamen von Kindern an Stelle von 〜さん verwendet wird)"},
          {"romaji":"〜jin", "kana":"〜じん", "kanji":"〜人", "meaning":"(Suffix, die die Nationalität ausdrückt)"},
          {"romaji":"sensei", "kana":"せんせい", "kanji":"先生", "meaning":"Lehrer/-in, Dozent/-in (wird nicht für den eigenen Berug verwendet)"},
          {"romaji":"kyoushi", "kana":"きょうし", "kanji":"教師", "meaning":"Lehrer/-in, Dozent/-in"},
          {"romaji":"gakusei", "kana":"がくせい", "kanji":"学生", "meaning":"Student/-in"},
          {"romaji":"kaishain", "kana":"かいしゃいん", "kanji":"会社員", "meaning":"Angestellte/-r"},
          {"romaji":"shain", "kana":"しゃいん", "kanji":"社員", "meaning":"Angestellte/-r einer Firma (wird im Zusammenhang mit dem Firmennamen verwendet)"},
          {"romaji":"ginkoin", "kana":"ぎんこういん", "kanji":"銀行員", "meaning":"Bankangestellte/-r"},
          {"romaji":"isha", "kana":"いしゃ", "kanji":"医者", "meaning":"Artz, Ärtzin"},
          {"romaji":"kenkyuusha", "kana":"けんきゅうしゃ", "kanji":"研究者", "meaning":"Forscher/-in"},
          {"romaji":"daigaku", "kana":"だいがく", "kanji":"大学", "meaning":"Universität"},
          {"romaji":"byouin", "kana":"びょういん", "kanji":"病院", "meaning":"Krankenhaus"},
          {"romaji":"dare", "kana":"だれ", "kanji":"", "meaning":"wer"},
          {"romaji":"〜sai", "kana":"〜さい", "kanji":"〜歳", "meaning":"〜 Jahre alt"},
          {"romaji":"nansai", "kana":"なんさい", "kanji":"何歳", "meaning":"wie alt"},
          {"romaji":"hai", "kana":"はい", "kanji":"", "meaning":"ja"},
          {"romaji":"iie", "kana":"いいえ", "kanji":"", "meaning":"nein"}
        ]
      }
    },
    {
      "type": "vocabulary",
      "name": "Minna no Nihongo: L2",
      "data": {
        "words": [
          {"romaji":"kore", "kana":"これ", "kanji":"", "meaning":"diese/-r/-s (Gegenstände hier, beim Sprecher)"},
          {"romaji":"sore", "kana":"それ", "kanji":"", "meaning":"diese/-r/-s (Gegenstände da, beim Gesprächspartner)"},
          {"romaji":"are", "kana":"あれ", "kanji":"", "meaning":"jene/-r/-s (Gegenstände dort drüben, von beiden entfernt)"},
          {"romaji":"kono〜", "kana":"この", "kanji":"", "meaning":"diese/-r/-s 〜 hier"},
          {"romaji":"sono〜", "kana":"その", "kanji":"", "meaning":"diese/-r/-s 〜 da"},
          {"romaji":"ano〜", "kana":"あの", "kanji":"", "meaning":"jene/-r/-s 〜 dort drüben"},
          {"romaji":"hon", "kana":"ほん", "kanji":"本", "meaning":"Buch"},
          {"romaji":"jisho", "kana":"じしょ", "kanji":"辞書", "meaning":"Wörterbuch"},
          {"romaji":"zasshi", "kana":"ざっし", "kanji":"雑誌", "meaning":"Zeitschrift"},
          {"romaji":"shinbun", "kana":"しんぶん", "kanji":"新聞", "meaning":"Zeitung"},
          {"romaji":"no-to", "kana":"ノート", "kanji":"", "meaning":"Heft"},
          {"romaji":"techou", "kana":"てちょう", "kanji":"手帳", "meaning":"Notizbuch"},
          {"romaji":"meishi", "kana":"めいし", "kanji":"名刺", "meaning":"Visitenkarte"},
          {"romaji":"ka-do", "kana":"カード", "kanji":"", "meaning":"Karte"},
          {"romaji":"enpitsu", "kana":"えんぴつ", "kanji":"鉛筆", "meaning":"Bleistift"},
          {"romaji":"bo-rupen", "kana":"ボールペン", "kanji":"", "meaning":"Kugelschreiber"},
          {"romaji":"sha-pupenshiru", "kana":"シャープペンシル", "kanji":"", "meaning":"Brehbleistift, Druckbleistift"},
          {"romaji":"kagi", "kana":"かぎ", "kanji":"", "meaning":"Schlüssel"},
          {"romaji":"tokei", "kana":"とけい", "kanji":"時計", "meaning":"Uhr"},
          {"romaji":"kasa", "kana":"かさ", "kanji":"傘", "meaning":"Regenschirm"},
          {"romaji":"kaban", "kana":"かばん", "kanji":"", "meaning":"Tasche"},
          {"romaji":"CD", "kana":"CD", "kanji":"", "meaning":"CD"},
          {"romaji":"terebi", "kana":"テレビ", "kanji":"", "meaning":"Fernseher"},
          {"romaji":"rajio", "kana":"ラジオ", "kanji":"", "meaning":"Radio"},
          {"romaji":"kamera", "kana":"カメラ", "kanji":"", "meaning":"Kamera"},
          {"romaji":"konpyu-ta-", "kana":"コンピューター", "kanji":"", "meaning":"Computer"},
          {"romaji":"kuruma", "kana":"くるま", "kanji":"車", "meaning":"Auto, Wagen"},
          {"romaji":"tsukue", "kana":"つくえ", "kanji":"机", "meaning":"Schreibtisch"},
          {"romaji":"isu", "kana":"いす", "kanji":"", "meaning":"Stuhl"},
          {"romaji":"chokore-to", "kana":"", "kanji":"", "meaning":"Schokolade"},
          {"romaji":"co-hi-", "kana":"", "kanji":"", "meaning":"Kaffee"},
          {"romaji":"[o]miyage", "kana":"[お]みやげ", "kanji":"[お]土産", "meaning":"Mitbringsel, Souvenir, Geschenk"},
          {"romaji":"eigo", "kana":"えいご", "kanji":"英語", "meaning":"Englisch"},
          {"romaji":"nihongo", "kana":"にほんご", "kanji":"日本語", "meaning":"Japanisch"},
          {"romaji":"〜go", "kana":"〜ご", "kanji":"語", "meaning":"〜 Sprache"},
          {"romaji":"nan", "kana":"なん", "kanji":"何", "meaning":"was"},
          {"romaji":"sou", "kana":"そう", "kanji":"", "meaning":"so"}
        ]
      }
    },
    {
      "type": "vocabulary",
      "name": "Minna no Nihongo: L3",
      "data": {
        "words": [
          {"romaji":"koko", "kana":"ここ", "kanji":"", "meaning":"hier (Umgebung des Sprechers)"},
          {"romaji":"soko", "kana":"そこ", "kanji":"", "meaning":"da (Umgebung des Gesprächspartners)"},
          {"romaji":"asoko", "kana":"あそこ", "kanji":"", "meaning":"dort drüben (von beiden entfernt)"},
          {"romaji":"doko", "kana":"どこ", "kanji":"", "meaning":"wo"},
          {"romaji":"kochira", "kana":"こちら", "kanji":"", "meaning":"hierhin, hier (höflich)"},
          {"romaji":"sochira", "kana":"そちら", "kanji":"", "meaning":"dahin, da (höflich)"},
          {"romaji":"achira", "kana":"あちら", "kanji":"", "meaning":"dorthin, dort drüben (höflich)"},
          {"romaji":"dochira", "kana":"どちら", "kanji":"", "meaning":"wohin, wo (höflich)"},
          {"romaji":"kyoushitsu", "kana":"きょうしつ", "kanji":"教室", "meaning":"Unterrichtsraum"},
          {"romaji":"shokudou", "kana":"しょくどう", "kanji":"食堂", "meaning":"Speisesaal, Kantine"},
          {"romaji":"jimusho", "kana":"じむしょ", "kanji":"事務所", "meaning":"Büro"},
          {"romaji":"kaigishitsu", "kana":"かいぎしつ", "kanji":"会議室", "meaning":"Konferenzraum"},
          {"romaji":"uketsuke", "kana":"うけつけ", "kanji":"受付", "meaning":"Anmeldung, Rezeption"},
          {"romaji":"robi-", "kana":"ロビー", "kanji":"", "meaning":"Lobby"},
          {"romaji":"heya", "kana":"へや", "kanji":"部屋", "meaning":"Zimmer, Raum"},
          {"romaji":"toire", "kana":"トイレ", "kanji":"", "meaning":"Toilette, WC"},
          {"romaji":"kaidan", "kana":"かいだん", "kanji":"階段", "meaning":"Treppe"},
          {"romaji":"erebe-ta-", "kana":"エレベーター", "kanji":"", "meaning":"Aufzug"},
          {"romaji":"esukare-ta-", "kana":"エスカレーター", "kanji":"", "meaning":"Rolltreppe"},
          {"romaji":"jidouhanbaiki", "kana":"じどうはんばいき", "kanji":"自動販売機", "meaning":"Verkaufsautomat"},
          {"romaji":"denwa", "kana":"でんわ", "kanji":"電話", "meaning":"Telefon, Anruf"},
          {"romaji":"[o]kuni", "kana":"[お]くに", "kanji":"[お]国", "meaning":"[Ihr] Land"},
          {"romaji":"kaisha", "kana":"かいしゃ", "kanji":"会社", "meaning":"Firma"},
          {"romaji":"uchi", "kana":"うち", "kanji":"", "meaning":"Haus"},
          {"romaji":"kutsu", "kana":"くつ", "kanji":"靴", "meaning":"Schuhe"},
          {"romaji":"nekutai", "kana":"ネクタイ", "kanji":"", "meaning":"Krawatte"},
          {"romaji":"wain", "kana":"ワイン", "kanji":"", "meaning":"Wein"},
          {"romaji":"uriba", "kana":"うりば", "kanji":"売り場", "meaning":"Verkaufsabteilung (in einem Kaufhaus)"},
          {"romaji":"chika", "kana":"ちか", "kanji":"地下", "meaning":"Untergeschoss"},
          {"romaji":"〜kai", "kana":"〜かい", "kanji":"〜階", "meaning":"〜-te Etage"},
          {"romaji":"nangai", "kana":"なんがい", "kanji":"何階", "meaning":"welche Etage"},
          {"romaji":"〜en", "kana":"〜えん", "kanji":"〜円", "meaning":"〜 Yen"},
          {"romaji":"ikura", "kana":"いくら", "kanji":"", "meaning":"wie viel (nur für Geld)"},
          {"romaji":"hyaku", "kana":"ひゃく", "kanji":"百", "meaning":"Hundert"},
          {"romaji":"sen", "kana":"せん", "kanji":"千", "meaning":"Tausend"},
          {"romaji":"man", "kana":"まん", "kanji":"万", "meaning":"Zehntausend"},
        ]
      }
    },
    {
      "type": "vocabulary",
      "name": "Minna no Nihongo: L4",
      "data": {
        "words": [
          {"romaji":"okimasu", "kana":"おきます", "kanji":"起きます", "meaning":"aufstehen"},
          {"romaji":"nemasu", "kana":"ねます", "kanji":"寝ます", "meaning":"schlafen, ins Bett gehen"},
          {"romaji":"hatarakimasu", "kana":"はたらきます", "kanji":"働きます", "meaning":"arbeiten"},
          {"romaji":"yasumimasu", "kana":"やすみます", "kanji":"休みます", "meaning":"Pause machen, sich ausruhen, urlaub nehmen"},
          {"romaji":"benkyoushimasu", "kana":"べんきょうします", "kanji":"勉強します", "meaning":"studieren, lernen"},
          {"romaji":"owarimasu", "kana":"おわります", "kanji":"終わります", "meaning":"enden"},
          {"romaji":"depa-to", "kana":"デパート", "kanji":"", "meaning":"Kaufhaus"},
          {"romaji":"ginkou", "kana":"ぎんこう", "kanji":"銀行", "meaning":"Bank"},
          {"romaji":"yuubinkyoku", "kana":"ゆうびんきょく", "kanji":"郵便局", "meaning":"Postamt"},
          {"romaji":"toshokan", "kana":"としょかん ", "kanji":"図書館", "meaning":"Bibliothek"},
          {"romaji":"bijutsukan", "kana":"びじゅつかん", "kanji":"美術館", "meaning":"Kunstmuseum"},
          {"romaji":"ima", "kana":"いま", "kanji":"今", "meaning":"jetzt"},
          {"romaji":"〜ji", "kana":"〜じ", "kanji":"〜時", "meaning":"〜 Uhr"},
          {"romaji":"〜fun", "kana":"〜ふん", "kanji":"〜分", "meaning":"〜 Minute/-n"},
          {"romaji":"han", "kana":"はん", "kanji":"半", "meaning":"Hälfte, halb"},
          {"romaji":"nanji", "kana":"なんじ", "kanji":"何時", "meaning":"wie spät, wie viel Uhr"},
          {"romaji":"nanpun", "kana":"なんぷん", "kanji":"何分", "meaning":"welche Minute, wie viel Minuten"},
          {"romaji":"gozen", "kana":"ごぜん", "kanji":"午前", "meaning":"Vormittag, vormittags, morgens"},
          {"romaji":"gogo", "kana":"ごご", "kanji":"午後", "meaning":"Nachmittag, nicahmittags"},
          {"romaji":"asa", "kana":"あさ", "kanji":"朝", "meaning":"Morgen, morgens"},
          {"romaji":"hiru", "kana":"ひる", "kanji":"昼", "meaning":"Mittag, mittags"},
          {"romaji":"ban", "kana":"ばん", "kanji":"晩", "meaning":"Abend, abends (Nacht, nachts)"},
          {"romaji":"ototoi", "kana":"おととい", "kanji":"", "meaning":"vorgestern"},
          {"romaji":"kinou", "kana":"きのう", "kanji":"", "meaning":"gestern"},
          {"romaji":"kyou", "kana":"きょう", "kanji":"", "meaning":"heute"},
          {"romaji":"ashita", "kana":"あした", "kanji":"", "meaning":"morgen"},
          {"romaji":"asatte", "kana":"あさって", "kanji":"", "meaning":"übermorgen"},
          {"romaji":"kesa", "kana":"けさ", "kanji":"", "meaning":"heute Morgen"},
          {"romaji":"konban", "kana":"こんばん", "kanji":"今晩", "meaning":"heute Abend"},
          {"romaji":"yasumi", "kana":"やすみ", "kanji":"休み", "meaning":"Pause, freier Tag, Ruhetag, Ferien"},
          {"romaji":"hiruyasumi", "kana":"ひらやすみ", "kanji":"昼休み", "meaning":"Mittagspause"},
          {"romaji":"shiken", "kana":"しけん", "kanji":"試験", "meaning":"Prüfung"},
          {"romaji":"kaigi", "kana":"かいぎ", "kanji":"会議", "meaning":"Konferenz"},
          {"romaji":"eiga", "kana":"えいが", "kanji":"映画", "meaning":"Film"},
          {"romaji":"maiasa", "kana":"まいあさ", "kanji":"毎朝", "meaning":"jeden Morgen"},
          {"romaji":"maiban", "kana":"まいばん", "kanji":"毎晩", "meaning":"jeden Abend"},
          {"romaji":"mainichi", "kana":"まいにち", "kanji":"毎日", "meaning":"jeden Tag"},
          {"romaji":"getsuyoubi", "kana":"げつようび", "kanji":"月曜日", "meaning":"Montag"},
          {"romaji":"kayoubi", "kana":"かようび", "kanji":"火曜日", "meaning":"Dienstag"},
          {"romaji":"suiyoubi", "kana":"すいようび", "kanji":"水曜日", "meaning":"Mittwoch"},
          {"romaji":"mokuyoubi", "kana":"もくようび", "kanji":"木曜日", "meaning":"Donnerstag"},
          {"romaji":"kinyoubi", "kana":"きにょうび", "kanji":"金曜日", "meaning":"Freitag"},
          {"romaji":"doyoubi", "kana":"どようび", "kanji":"土曜日", "meaning":"Samstag"},
          {"romaji":"nichiyoubi", "kana":"にちようび", "kanji":"日曜日", "meaning":"Sonntag"},
          {"romaji":"nanyoubi", "kana":"なにょうび", "kanji":"何曜日", "meaning":"welcher Wochentag"},
          {"romaji":"〜kara", "kana":"〜から", "kanji":"", "meaning":"von 〜"},
          {"romaji":"〜made", "kana":"〜まで", "kanji":"", "meaning":"bis 〜"},
          {"romaji":"〜to〜", "kana":"〜と〜", "kanji":"", "meaning":"〜 und 〜 (Verbindung von Nomina)"},
        ]
      }
    }/*,
    {
      "type": "vocabulary",
      "name": "Minna no Nihongo: L5",
      "data": {
        "words": [
          {"romaji":"", "kana":"", "kanji":"", "meaning":""},
        ]
      }
    },
    {
      "type": "vocabulary",
      "name": "Minna no Nihongo: L6",
      "data": {
        "words": [
        ]
      }
    }*/
  ]
};

// Loads a JSON configuration file
function configLoadFile(url) {
    $.getJSON(url, function(response) {
		    $.extend(config, response);
    });
}
