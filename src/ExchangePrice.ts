import Chart from 'chart.js/auto'

export function ExchangePrice() {
    (async function () {
        function getData() {
            //Create logic in store.actions Get Data From Store
            return [
                {
                    "ask": 1.24122,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288200034
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288200061
                },
                {
                    "ask": 1.24123,
                    "bid": 1.2412,
                    "inst": "GBPUSD",
                    "time": 1681288200072
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288200984
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288201014
                },
                {
                    "ask": 1.24115,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288201018
                },
                {
                    "ask": 1.24114,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288201046
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288201101
                },
                {
                    "ask": 1.24111,
                    "bid": 1.2411,
                    "inst": "GBPUSD",
                    "time": 1681288201163
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288201259
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288202066
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288203561
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288203968
                },
                {
                    "ask": 1.24111,
                    "bid": 1.2411,
                    "inst": "GBPUSD",
                    "time": 1681288204222
                },
                {
                    "ask": 1.24112,
                    "bid": 1.2411,
                    "inst": "GBPUSD",
                    "time": 1681288204268
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288204576
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288205564
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288205617
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288206570
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288206586
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288206644
                },
                {
                    "ask": 1.24114,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288206651
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288207169
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288207269
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288207377
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288208279
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288208304
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288208424
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288208553
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288208772
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288209073
                },
                {
                    "ask": 1.24115,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288209989
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288210008
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288210017
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288210161
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288210169
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288210219
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288210284
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288211202
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288211251
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288211278
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288211375
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288212041
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288212740
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288212977
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288214193
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288214490
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288215086
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288215223
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288216083
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288216193
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288216620
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288216787
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288217121
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288217190
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24131,
                    "inst": "GBPUSD",
                    "time": 1681288217629
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288217640
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288218112
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288218191
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288218305
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288218625
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288218789
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288219119
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288219281
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288219443
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288219707
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288219735
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288219869
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288219873
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288220013
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288220789
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288221104
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288221297
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288221421
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288222816
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288222876
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288222887
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288222916
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288222922
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288223003
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288223017
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288223075
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288223092
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288223109
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288223143
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288223199
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288223591
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288224738
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288224799
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288225097
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288225700
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288225764
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288225801
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288226023
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288226803
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288226807
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288226986
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288227099
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288227601
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288227642
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288227701
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288227717
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288228127
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288228820
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288229411
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288229463
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288230820
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288230835
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288231009
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288231995
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288232735
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288233547
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288234145
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288234737
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288235047
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288235152
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288235164
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288235185
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288235266
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288235319
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288235369
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288235417
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288236096
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288236220
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288236273
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288237026
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288237107
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288237120
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288237156
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288237238
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288237265
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288238716
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288239019
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288240261
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24119,
                    "inst": "GBPUSD",
                    "time": 1681288241242
                },
                {
                    "ask": 1.24121,
                    "bid": 1.2412,
                    "inst": "GBPUSD",
                    "time": 1681288241296
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24121,
                    "inst": "GBPUSD",
                    "time": 1681288241365
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288241417
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288241432
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288242334
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288242635
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288242900
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288243455
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288243863
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288243925
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288243930
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288243946
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288243951
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288243984
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288244028
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288244443
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288245023
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288245437
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288246037
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288246114
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288246138
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288246165
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288246203
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288246241
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288246540
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288246848
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288246927
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288246984
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288247028
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288247049
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288247163
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288247190
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288247232
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288247428
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288247764
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288247833
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288247930
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288248131
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288248170
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288249129
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288249198
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288249236
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288249339
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288250332
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288250832
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288251131
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288251135
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288251432
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288251806
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288252088
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288252534
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288253010
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288253255
                },
                {
                    "ask": 1.24133,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288253540
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288254278
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288254343
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288254372
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288254441
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288254761
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288255150
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288255438
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288255504
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288256160
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288257682
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288258041
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24131,
                    "inst": "GBPUSD",
                    "time": 1681288258045
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24131,
                    "inst": "GBPUSD",
                    "time": 1681288258119
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288258275
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288258352
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288258383
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288258449
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288259368
                },
                {
                    "ask": 1.24133,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288260093
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288260192
                },
                {
                    "ask": 1.24133,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288260220
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288260253
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288260261
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288262457
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288263312
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288263651
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288264756
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288264852
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288265982
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288266012
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288266056
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288266625
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288266636
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288266676
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288266704
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288266931
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288266956
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288266989
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288267452
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288269158
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288269440
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288269562
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288269666
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288269705
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288269759
                },
                {
                    "ask": 1.24133,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288270860
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288271364
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288272148
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288272174
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288272191
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288272222
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288272268
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288272298
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288272366
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288272384
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288272400
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288273265
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288273641
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288273668
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288273866
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288274171
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288274646
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288274741
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288275935
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288275987
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288276151
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288277268
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288277391
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288277731
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288277772
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288277971
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288278270
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288278709
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288279133
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288279273
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288279614
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288279860
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288280156
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288280509
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288285052
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288285079
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288285083
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288285181
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288285183
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288285278
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288285281
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288285302
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288285382
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288285386
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288285980
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288286081
                },
                {
                    "ask": 1.24131,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288287818
                },
                {
                    "ask": 1.2413,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288287843
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288288081
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288288088
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288288263
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288288313
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288288385
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288289052
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288289203
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288289279
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288290286
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288291188
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288292162
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288294110
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288294202
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288294243
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288294269
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288296258
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288297263
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288297296
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288297600
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288297698
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288298700
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288298802
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288298958
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288299382
                },
                {
                    "ask": 1.24131,
                    "bid": 1.24129,
                    "inst": "GBPUSD",
                    "time": 1681288299400
                },
                {
                    "ask": 1.24132,
                    "bid": 1.2413,
                    "inst": "GBPUSD",
                    "time": 1681288299415
                },
                {
                    "ask": 1.24132,
                    "bid": 1.24131,
                    "inst": "GBPUSD",
                    "time": 1681288299439
                },
                {
                    "ask": 1.24133,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288299442
                },
                {
                    "ask": 1.24134,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288299489
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288299503
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288299524
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288300600
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288301400
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288303238
                },
                {
                    "ask": 1.24142,
                    "bid": 1.2414,
                    "inst": "GBPUSD",
                    "time": 1681288303436
                },
                {
                    "ask": 1.24141,
                    "bid": 1.2414,
                    "inst": "GBPUSD",
                    "time": 1681288303907
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288304481
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288304518
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288304533
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288304559
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288305092
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288305096
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288305127
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288305141
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288305278
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288305333
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288305373
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288306827
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288307751
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288308469
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288308515
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288308620
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288309595
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288309617
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288310126
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288310214
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288311318
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288311339
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288311346
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288311381
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288312101
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288312118
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288312235
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288313320
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288313628
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288313662
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288313817
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288314221
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288314278
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288314345
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288314494
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288314631
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288315283
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288315426
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24127,
                    "inst": "GBPUSD",
                    "time": 1681288315906
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288315934
                },
                {
                    "ask": 1.2413,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288316196
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288316228
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288316299
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288316325
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288316714
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288317228
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288317430
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288317740
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288318210
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288318717
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288319249
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288319263
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288319359
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288319697
                },
                {
                    "ask": 1.24127,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288319914
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288319920
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288319945
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288320161
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24121,
                    "inst": "GBPUSD",
                    "time": 1681288320549
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288321332
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288321976
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288322001
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288322124
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288322137
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288322233
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288322406
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288322446
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24121,
                    "inst": "GBPUSD",
                    "time": 1681288322475
                },
                {
                    "ask": 1.24122,
                    "bid": 1.24121,
                    "inst": "GBPUSD",
                    "time": 1681288322493
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288322542
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288322622
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288322649
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288323141
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288323171
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288323211
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288323257
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288323274
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288323342
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288325049
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288325081
                },
                {
                    "ask": 1.24119,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288325268
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288325841
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288326591
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288326644
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288326840
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288327146
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288327316
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288327350
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288327545
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288328521
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288328827
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288328850
                },
                {
                    "ask": 1.24115,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288330641
                },
                {
                    "ask": 1.24114,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288330645
                },
                {
                    "ask": 1.24114,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288330651
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288330658
                },
                {
                    "ask": 1.24114,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288330694
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288330724
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288330752
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288330773
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288331149
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288331247
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288331249
                },
                {
                    "ask": 1.24109,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288331254
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288331262
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24106,
                    "inst": "GBPUSD",
                    "time": 1681288331279
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288331317
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24106,
                    "inst": "GBPUSD",
                    "time": 1681288331352
                },
                {
                    "ask": 1.241,
                    "bid": 1.24096,
                    "inst": "GBPUSD",
                    "time": 1681288332142
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288332510
                },
                {
                    "ask": 1.241,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288332540
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288332558
                },
                {
                    "ask": 1.24101,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288332571
                },
                {
                    "ask": 1.24104,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288332656
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288333252
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288333443
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288333663
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288333667
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24104,
                    "inst": "GBPUSD",
                    "time": 1681288333672
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24104,
                    "inst": "GBPUSD",
                    "time": 1681288333758
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288334149
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24104,
                    "inst": "GBPUSD",
                    "time": 1681288334210
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288334388
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24104,
                    "inst": "GBPUSD",
                    "time": 1681288336084
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288336112
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288336177
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288336213
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288336263
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288336366
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288336395
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288336458
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288336611
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288336656
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288337161
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288337560
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24106,
                    "inst": "GBPUSD",
                    "time": 1681288337569
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288337849
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24106,
                    "inst": "GBPUSD",
                    "time": 1681288337925
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288338230
                },
                {
                    "ask": 1.24108,
                    "bid": 1.24106,
                    "inst": "GBPUSD",
                    "time": 1681288338405
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24106,
                    "inst": "GBPUSD",
                    "time": 1681288340725
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24105,
                    "inst": "GBPUSD",
                    "time": 1681288340749
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24104,
                    "inst": "GBPUSD",
                    "time": 1681288340795
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288341168
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288341295
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288341363
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288341504
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288341528
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288341537
                },
                {
                    "ask": 1.24103,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288341671
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288343968
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288344168
                },
                {
                    "ask": 1.24107,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288345170
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288345469
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288347258
                },
                {
                    "ask": 1.24105,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288347291
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288347299
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288347348
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288347372
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288347376
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288347448
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288347479
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288347496
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288347571
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288347676
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288348192
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288348298
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288349287
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288349734
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288352425
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288352700
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288353820
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288354447
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288354596
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288354945
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288355202
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288355481
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288355754
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288355845
                },
                {
                    "ask": 1.24099,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288355873
                },
                {
                    "ask": 1.24099,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288356236
                },
                {
                    "ask": 1.24098,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288356824
                },
                {
                    "ask": 1.24099,
                    "bid": 1.24096,
                    "inst": "GBPUSD",
                    "time": 1681288358686
                },
                {
                    "ask": 1.241,
                    "bid": 1.24096,
                    "inst": "GBPUSD",
                    "time": 1681288358769
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288358985
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288359986
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288360339
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288360487
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288362596
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288362693
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288362990
                },
                {
                    "ask": 1.24102,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288367057
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288367730
                },
                {
                    "ask": 1.24102,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288367756
                },
                {
                    "ask": 1.24102,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288368297
                },
                {
                    "ask": 1.24103,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288368798
                },
                {
                    "ask": 1.24102,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288368996
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288369075
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288369199
                },
                {
                    "ask": 1.24103,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288369393
                },
                {
                    "ask": 1.24102,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288369397
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288371015
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288371072
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288371101
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288371294
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288371403
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288371595
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288373305
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288373403
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288374448
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288374806
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288374864
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288374913
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288375002
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288375013
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288375037
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288375167
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288375184
                },
                {
                    "ask": 1.24106,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288375213
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288375218
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288375287
                },
                {
                    "ask": 1.24103,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288375310
                },
                {
                    "ask": 1.24104,
                    "bid": 1.241,
                    "inst": "GBPUSD",
                    "time": 1681288375333
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288376908
                },
                {
                    "ask": 1.24099,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288377602
                },
                {
                    "ask": 1.24099,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288377610
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288377726
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288378010
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288378110
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288378499
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288379501
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288379512
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288379580
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288380316
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288380506
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288380614
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288381117
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288381702
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288382109
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288382221
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288382232
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288382415
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288382876
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288382880
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288383617
                },
                {
                    "ask": 1.241,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288383638
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288383688
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288383723
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288384305
                },
                {
                    "ask": 1.24099,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288384519
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288384622
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288384711
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288384723
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288384760
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288384820
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288384853
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288385283
                },
                {
                    "ask": 1.241,
                    "bid": 1.24097,
                    "inst": "GBPUSD",
                    "time": 1681288385323
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288385720
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288385728
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288387125
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288387528
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288389015
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288389127
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288389428
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288390011
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288390228
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288390678
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288390928
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288391187
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288391899
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288391929
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288392037
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288392752
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288392791
                },
                {
                    "ask": 1.241,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288392903
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288393097
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288393317
                },
                {
                    "ask": 1.24101,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288393619
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288394137
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288394167
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24098,
                    "inst": "GBPUSD",
                    "time": 1681288394258
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24099,
                    "inst": "GBPUSD",
                    "time": 1681288394432
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24101,
                    "inst": "GBPUSD",
                    "time": 1681288394608
                },
                {
                    "ask": 1.24102,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288394622
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24102,
                    "inst": "GBPUSD",
                    "time": 1681288394632
                },
                {
                    "ask": 1.24103,
                    "bid": 1.24103,
                    "inst": "GBPUSD",
                    "time": 1681288394638
                },
                {
                    "ask": 1.24104,
                    "bid": 1.24104,
                    "inst": "GBPUSD",
                    "time": 1681288394682
                },
                {
                    "ask": 1.24109,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288396182
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288396248
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288396255
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288396268
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288396290
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288397351
                },
                {
                    "ask": 1.24114,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288397592
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288397602
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288397619
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288397633
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288397699
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288397743
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288397816
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288399049
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288399077
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288399146
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288399244
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288399319
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288400947
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288401034
                },
                {
                    "ask": 1.24109,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288401855
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288401920
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288402281
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288402732
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288403079
                },
                {
                    "ask": 1.2411,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288403739
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24107,
                    "inst": "GBPUSD",
                    "time": 1681288403760
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288403847
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288403888
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288404022
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24108,
                    "inst": "GBPUSD",
                    "time": 1681288404200
                },
                {
                    "ask": 1.24111,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288404347
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24109,
                    "inst": "GBPUSD",
                    "time": 1681288406122
                },
                {
                    "ask": 1.24112,
                    "bid": 1.2411,
                    "inst": "GBPUSD",
                    "time": 1681288406184
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24111,
                    "inst": "GBPUSD",
                    "time": 1681288406212
                },
                {
                    "ask": 1.24112,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288406217
                },
                {
                    "ask": 1.24113,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288406260
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24112,
                    "inst": "GBPUSD",
                    "time": 1681288406357
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288406506
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288407360
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288407585
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288407806
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288408089
                },
                {
                    "ask": 1.24116,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288408283
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24113,
                    "inst": "GBPUSD",
                    "time": 1681288408304
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24114,
                    "inst": "GBPUSD",
                    "time": 1681288408489
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24115,
                    "inst": "GBPUSD",
                    "time": 1681288410025
                },
                {
                    "ask": 1.24117,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288410039
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24116,
                    "inst": "GBPUSD",
                    "time": 1681288410059
                },
                {
                    "ask": 1.24118,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288410077
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288410156
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288410356
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288411313
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288411358
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288412358
                },
                {
                    "ask": 1.2412,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288413175
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24117,
                    "inst": "GBPUSD",
                    "time": 1681288413359
                },
                {
                    "ask": 1.24121,
                    "bid": 1.24118,
                    "inst": "GBPUSD",
                    "time": 1681288414459
                },
                {
                    "ask": 1.24122,
                    "bid": 1.2412,
                    "inst": "GBPUSD",
                    "time": 1681288416213
                },
                {
                    "ask": 1.24123,
                    "bid": 1.24122,
                    "inst": "GBPUSD",
                    "time": 1681288416221
                },
                {
                    "ask": 1.24124,
                    "bid": 1.24123,
                    "inst": "GBPUSD",
                    "time": 1681288416268
                },
                {
                    "ask": 1.24125,
                    "bid": 1.24124,
                    "inst": "GBPUSD",
                    "time": 1681288416295
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24125,
                    "inst": "GBPUSD",
                    "time": 1681288416316
                },
                {
                    "ask": 1.24126,
                    "bid": 1.24126,
                    "inst": "GBPUSD",
                    "time": 1681288416351
                },
                {
                    "ask": 1.24128,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288416369
                },
                {
                    "ask": 1.24129,
                    "bid": 1.24128,
                    "inst": "GBPUSD",
                    "time": 1681288416413
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288416765
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288417266
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288417555
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288417566
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288418430
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288419146
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288419439
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288419470
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288422090
                },
                {
                    "ask": 1.24135,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288422334
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24132,
                    "inst": "GBPUSD",
                    "time": 1681288422341
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24133,
                    "inst": "GBPUSD",
                    "time": 1681288422679
                },
                {
                    "ask": 1.24136,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288423243
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24134,
                    "inst": "GBPUSD",
                    "time": 1681288423375
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24135,
                    "inst": "GBPUSD",
                    "time": 1681288423425
                },
                {
                    "ask": 1.24137,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288423535
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288423573
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288423596
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288423973
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288423992
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288424194
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288424374
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288425399
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288425865
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288425950
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288426319
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288427063
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288427149
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288427439
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288427978
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288428182
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288428378
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288429072
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288429408
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288429884
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288430349
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288430379
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288430791
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288433691
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288433886
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288433978
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288433985
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288434143
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288434585
                },
                {
                    "ask": 1.24141,
                    "bid": 1.2414,
                    "inst": "GBPUSD",
                    "time": 1681288435062
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24141,
                    "inst": "GBPUSD",
                    "time": 1681288435074
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24141,
                    "inst": "GBPUSD",
                    "time": 1681288435107
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24142,
                    "inst": "GBPUSD",
                    "time": 1681288435135
                },
                {
                    "ask": 1.24143,
                    "bid": 1.24143,
                    "inst": "GBPUSD",
                    "time": 1681288435181
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288435198
                },
                {
                    "ask": 1.24146,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288435221
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288435292
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288435396
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288436510
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288437184
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288437242
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288437264
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288438372
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288438393
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288438492
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288439908
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288439951
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288440100
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288440292
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288440623
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288440773
                },
                {
                    "ask": 1.24145,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288440777
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288440782
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288440814
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288441281
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288441302
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288442388
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288443245
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288443267
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288443294
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288443408
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288444399
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288444503
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288445701
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288445901
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288446787
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288446903
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288447071
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288447106
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288447741
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288447799
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288447808
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288447877
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288447907
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288448977
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288449786
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288449826
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288450464
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288450512
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288450710
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288451311
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288451711
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288452715
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288452744
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288453212
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288454541
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288454617
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288454684
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288454689
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288455869
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288456535
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288457247
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288459220
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288459789
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288459921
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288460432
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288460525
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288461105
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288461121
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288464540
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288464927
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288465127
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288465178
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288465629
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288465637
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288465669
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288465744
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24143,
                    "inst": "GBPUSD",
                    "time": 1681288465798
                },
                {
                    "ask": 1.24146,
                    "bid": 1.24143,
                    "inst": "GBPUSD",
                    "time": 1681288465826
                },
                {
                    "ask": 1.24146,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288466603
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288466731
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24143,
                    "inst": "GBPUSD",
                    "time": 1681288466879
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288466901
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288466955
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288467244
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288467256
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288467274
                },
                {
                    "ask": 1.24152,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288467280
                },
                {
                    "ask": 1.24151,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288467300
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288467311
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288467364
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288467374
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288467378
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288467436
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288467441
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288468532
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288469014
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288469061
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288469085
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288469142
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288469266
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288469333
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288470018
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288470639
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288470735
                },
                {
                    "ask": 1.24146,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288472597
                },
                {
                    "ask": 1.24146,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288472600
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288472615
                },
                {
                    "ask": 1.24143,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288473241
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288473343
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288473540
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288474942
                },
                {
                    "ask": 1.24142,
                    "bid": 1.2414,
                    "inst": "GBPUSD",
                    "time": 1681288476986
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288477117
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288477125
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288477184
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288477308
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288477334
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288477358
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288477547
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288477646
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288478447
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288478950
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288479651
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288479800
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288479849
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288482585
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288482653
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288485054
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288486155
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288487135
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288488221
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288491207
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288491276
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288491391
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288491471
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288492234
                },
                {
                    "ask": 1.24138,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288492306
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288492662
                },
                {
                    "ask": 1.24139,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288493287
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288493364
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288493541
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24136,
                    "inst": "GBPUSD",
                    "time": 1681288493782
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24137,
                    "inst": "GBPUSD",
                    "time": 1681288494207
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24138,
                    "inst": "GBPUSD",
                    "time": 1681288494280
                },
                {
                    "ask": 1.2414,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288494312
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24139,
                    "inst": "GBPUSD",
                    "time": 1681288494335
                },
                {
                    "ask": 1.24141,
                    "bid": 1.24141,
                    "inst": "GBPUSD",
                    "time": 1681288494339
                },
                {
                    "ask": 1.24142,
                    "bid": 1.24142,
                    "inst": "GBPUSD",
                    "time": 1681288494364
                },
                {
                    "ask": 1.24143,
                    "bid": 1.24142,
                    "inst": "GBPUSD",
                    "time": 1681288494375
                },
                {
                    "ask": 1.24144,
                    "bid": 1.24143,
                    "inst": "GBPUSD",
                    "time": 1681288494416
                },
                {
                    "ask": 1.24144,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288494424
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288496077
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288497419
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288497572
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288497831
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288497974
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288498680
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288498755
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288498974
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288498996
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288499475
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288500128
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288500269
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288500553
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288500826
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288501075
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288501180
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288501263
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288501281
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288501505
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288501624
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288502246
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288503564
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288503747
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288504560
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288504623
                },
                {
                    "ask": 1.2415,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288505049
                },
                {
                    "ask": 1.24152,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288505081
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288505376
                },
                {
                    "ask": 1.24152,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288505902
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288505965
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288505983
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288506583
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288507073
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288507183
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288507277
                },
                {
                    "ask": 1.2415,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288507314
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288507342
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288507376
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288507392
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288510650
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288510675
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288510680
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288510691
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288510891
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288511486
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288511517
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288511594
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288511791
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288511836
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288511891
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288511982
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288512030
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288512696
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288512992
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288513049
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288514995
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288515898
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288517032
                },
                {
                    "ask": 1.24149,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288517328
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288517416
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288519002
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288519401
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288519918
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288519961
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288520000
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288520179
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288520300
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288520501
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288520976
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288521101
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288521217
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288521602
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288522135
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288522140
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288522175
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288524614
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288524716
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288525390
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288530504
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288530530
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288530741
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288531758
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288532722
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288533855
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288535003
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288535610
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288537367
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288537761
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288540237
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288540363
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288540561
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288541213
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288541292
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288541302
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288541336
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288541636
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288541639
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288542448
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288543003
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288543285
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288543451
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288543500
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288543572
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288544308
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288544367
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288544790
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288546456
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288547583
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288547592
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288547604
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288547610
                },
                {
                    "ask": 1.24151,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288547626
                },
                {
                    "ask": 1.2415,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288547644
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288547651
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288547670
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288547681
                },
                {
                    "ask": 1.2415,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288547702
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288547718
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288547729
                },
                {
                    "ask": 1.24146,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288548339
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24143,
                    "inst": "GBPUSD",
                    "time": 1681288549161
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24144,
                    "inst": "GBPUSD",
                    "time": 1681288549205
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24145,
                    "inst": "GBPUSD",
                    "time": 1681288549248
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24146,
                    "inst": "GBPUSD",
                    "time": 1681288549315
                },
                {
                    "ask": 1.24147,
                    "bid": 1.24147,
                    "inst": "GBPUSD",
                    "time": 1681288549347
                },
                {
                    "ask": 1.24148,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288549350
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288549444
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24148,
                    "inst": "GBPUSD",
                    "time": 1681288549546
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288550742
                },
                {
                    "ask": 1.24153,
                    "bid": 1.2415,
                    "inst": "GBPUSD",
                    "time": 1681288550917
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288551565
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288551590
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288551594
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288551626
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288551650
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288551682
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288552319
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288552348
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288552477
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288552966
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288554591
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288554651
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288554833
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288555148
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288555505
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288555510
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288555577
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288555605
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288555651
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288555790
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288556092
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288556449
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288556749
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288556752
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288556850
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288558001
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288558221
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288558504
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288558556
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288558767
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288559682
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288559921
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288561980
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288562012
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288562055
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288562067
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288562637
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288562991
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288563663
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288563736
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288563905
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288564383
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288565396
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288565596
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288566568
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288568602
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288568633
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288569049
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288569555
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288570153
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288570188
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288570503
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288570573
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288570599
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288572421
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288572466
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288572527
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288572546
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288572572
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288572599
                },
                {
                    "ask": 1.24151,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288572673
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288572732
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288573535
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288574057
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288574471
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288574573
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288575131
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288576699
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288576846
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288576882
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288576901
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288577193
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288577204
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288577249
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288577260
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288577353
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288577378
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288577434
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288577478
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288577645
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288578379
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288578535
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288580285
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288580803
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288580840
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288584082
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288584412
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288584431
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288584464
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288586379
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288586500
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288587247
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288587760
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288587842
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288588484
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288590126
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288590894
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288591014
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288591225
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288591794
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288591842
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288592065
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288592192
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288592601
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288592734
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288593143
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288593576
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288593589
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288595078
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288595127
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288595171
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288595202
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288595210
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288595230
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288595298
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288595360
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288595400
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288595608
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288595899
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288596299
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288596362
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288596437
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288597378
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288597852
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288597911
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288598003
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288598286
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288598579
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288599056
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288599087
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288599225
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288599258
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288601405
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288601610
                },
                {
                    "ask": 1.2417,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288603359
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288603369
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288603496
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288603518
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288603666
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288603765
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288607237
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288607916
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288608726
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288608747
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288608802
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288608833
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288608852
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288609556
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288609742
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288610219
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288610484
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288612637
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288612664
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288612728
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288612828
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288613704
                },
                {
                    "ask": 1.24173,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288613944
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288614423
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288615100
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288615324
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288615928
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288616119
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288616126
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288617070
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288617127
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288617214
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288617462
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288618128
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288618931
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288619173
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288620846
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288622160
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288622687
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288622729
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288622834
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288623099
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288624429
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288624614
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288625798
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288626102
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288626263
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288626324
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288626614
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288626840
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288628244
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288628640
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288628942
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288629031
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288629720
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288629879
                },
                {
                    "ask": 1.2417,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288631082
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288631091
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288631151
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288631155
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288631762
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288632671
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288633400
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288634165
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288634267
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288634272
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288634281
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288634308
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288634338
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288634382
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288634457
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288634495
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288635451
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288635460
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288635567
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288635949
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288636363
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288639246
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288643158
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288643291
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288643435
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288643759
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288644144
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288644204
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288644269
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288644317
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288644362
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288645988
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288646288
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288646661
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288646684
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288647005
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288647863
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288648566
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288649165
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288649335
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288649948
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288650164
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288651139
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288651163
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288651193
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288651198
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288651242
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288651264
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288651374
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288651954
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288652380
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288652399
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288652482
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288653454
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288653472
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288653743
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288654062
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288654163
                },
                {
                    "ask": 1.24173,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288656696
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288656722
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288656759
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288656801
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288656820
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288656867
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288656884
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288657513
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288657677
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288657877
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288659867
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288659901
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288660079
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288660557
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288660781
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288661881
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288663409
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288663554
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288663575
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288663603
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288663664
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288663670
                },
                {
                    "ask": 1.24161,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288663688
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288664551
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288665311
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288667052
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288667936
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288668446
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288669070
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288669244
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288673894
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288674259
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288674270
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288674301
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288674405
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288674419
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288674498
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288675729
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288675959
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288675985
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288676568
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288677152
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288677503
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288677866
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288677931
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288678501
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288678521
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288678601
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288679135
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288679485
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288680186
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288680381
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288680621
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288681594
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288682013
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288682205
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288682253
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288682807
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288683009
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288683773
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288683794
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288683872
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288684014
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288684226
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288686260
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288686354
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288686515
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288686523
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288686683
                },
                {
                    "ask": 1.24175,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288686715
                },
                {
                    "ask": 1.24174,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288686791
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288686925
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288688652
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288688722
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288688973
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288689703
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288689983
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288690119
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288691420
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288691512
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288692066
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288692944
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288692976
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288693045
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288693081
                },
                {
                    "ask": 1.24173,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288693291
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288693421
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288693753
                },
                {
                    "ask": 1.24173,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288693886
                },
                {
                    "ask": 1.24172,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288693967
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288694022
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288694049
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288694190
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288694305
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288694624
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288694787
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288694811
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288694924
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288698599
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288698726
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288698779
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288699127
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288699240
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288701231
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288701345
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288701406
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288702060
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288703597
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288703662
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288703734
                },
                {
                    "ask": 1.24173,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288703741
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288705708
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288706006
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288706614
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288706932
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288707070
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288707115
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288707139
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288707169
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288707329
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288707843
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288710543
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288711943
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288712154
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288712819
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288713236
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288714204
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288714958
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288716487
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288716753
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288717264
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288717292
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288717332
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288717355
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288717365
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288717455
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288717550
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288718250
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288718654
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288718689
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288719054
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288719701
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288719820
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288719867
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288719915
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288720665
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288721097
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288722004
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288723073
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288723225
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288723523
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288723559
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288724859
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288724919
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288724959
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288725359
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288725796
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288725836
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288725931
                },
                {
                    "ask": 1.24163,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288725962
                },
                {
                    "ask": 1.24162,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288725997
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288726085
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288726266
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288726306
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288726464
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288726561
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288726643
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288727048
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288728231
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288729763
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288729766
                },
                {
                    "ask": 1.24163,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288730021
                },
                {
                    "ask": 1.24162,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288730066
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288731364
                },
                {
                    "ask": 1.24162,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288731410
                },
                {
                    "ask": 1.24161,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288731668
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288731680
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288732246
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288732667
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288732883
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288734333
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288734511
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288734586
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288734798
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288734846
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288734883
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288734930
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288735032
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288735783
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288736070
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288736258
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288736433
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288736636
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288737174
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288739949
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288739999
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288740023
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288740800
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288740851
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288741802
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288741853
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288742055
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288742111
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288742134
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288742618
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288742711
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288742785
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288742981
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288743753
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288743818
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288744200
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288744580
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288744623
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288744690
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288744794
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288745486
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288745687
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288746822
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288746975
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288747111
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288747377
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288747687
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288748016
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288748590
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288749028
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288749184
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288749258
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288749481
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288750004
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288750304
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288751000
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288751022
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288753895
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288754000
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288754395
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288755001
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288755599
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288756236
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288756536
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288758014
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288759730
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288759805
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288760715
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288760989
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288761078
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288761718
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288761741
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288762010
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288762669
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288762967
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288763807
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288764310
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288764902
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288765240
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288765711
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288765717
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288765760
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288765826
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288768295
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288768299
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288768435
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288768468
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288768581
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288769420
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288769720
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288769796
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288769897
                },
                {
                    "ask": 1.24152,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288769920
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24149,
                    "inst": "GBPUSD",
                    "time": 1681288770016
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24151,
                    "inst": "GBPUSD",
                    "time": 1681288770027
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288770112
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288770117
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288770318
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288771097
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288771323
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288771538
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288771819
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288771919
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288772320
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288773031
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288773441
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288774563
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288775997
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288776972
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288777019
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288777329
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288778628
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288781028
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288781344
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24152,
                    "inst": "GBPUSD",
                    "time": 1681288781553
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288782795
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288783333
                },
                {
                    "ask": 1.24153,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288785433
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288785836
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288786532
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288786641
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288789613
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288789616
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288789894
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288790053
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288792985
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288793286
                },
                {
                    "ask": 1.24154,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288794960
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288795482
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288796766
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288796812
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288796853
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288796951
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288797950
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288798381
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288798541
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288799970
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288800006
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288800488
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288800753
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288800805
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288801011
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288801107
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288801609
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288801619
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288801835
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288801964
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288801998
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288802198
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288802262
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288802587
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288802664
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288802689
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288802735
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288802762
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288802777
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288802918
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288804230
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288804459
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288804660
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288804678
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288804960
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288806765
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288806962
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288808113
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288808168
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288808365
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288808470
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288808925
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288809245
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288809767
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288810465
                },
                {
                    "ask": 1.2416,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288810654
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288811759
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288811904
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288811970
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288812170
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288812366
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288812737
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288812846
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288813459
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288813631
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288821479
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288821881
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288822539
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288822957
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288825731
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288825887
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288826274
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288827106
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288829830
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288832800
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288832811
                },
                {
                    "ask": 1.2416,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288832856
                },
                {
                    "ask": 1.24161,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288832871
                },
                {
                    "ask": 1.24162,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288832902
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288834028
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288834190
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288835191
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288835334
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288835363
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288835375
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288835397
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288835505
                },
                {
                    "ask": 1.24164,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288835599
                },
                {
                    "ask": 1.24163,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288835691
                },
                {
                    "ask": 1.24164,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288835714
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288835759
                },
                {
                    "ask": 1.24165,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288835794
                },
                {
                    "ask": 1.24164,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288835804
                },
                {
                    "ask": 1.24163,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288835839
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288837097
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288837198
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288837262
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288837398
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288837491
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288837753
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288837882
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288837950
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288838019
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288838133
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288838900
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288839961
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288840483
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288840622
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288840681
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288840713
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288841706
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288842206
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288842437
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288842468
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288843041
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288843109
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288844487
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288844528
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288844534
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288844563
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288844717
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288844744
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288844811
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288847435
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288847487
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288847562
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288847596
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288847622
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288847816
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288847849
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288847881
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288847912
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288847914
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288848086
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288848096
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288848160
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288848915
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288849518
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288849618
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288849620
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288851216
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288851260
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288851521
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288852481
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288852804
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288852883
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288853087
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288854632
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288854722
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288854823
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288854920
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288858824
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288859227
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288859329
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288859343
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288859564
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288860130
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288860207
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288860281
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288861330
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288862191
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288862294
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288862533
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288864063
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288864233
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288864533
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288865033
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288865225
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288865253
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288865436
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288865509
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288867617
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288867633
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288867640
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288867672
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288867715
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288867742
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288867840
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288867849
                },
                {
                    "ask": 1.24163,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288867862
                },
                {
                    "ask": 1.2416,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288867917
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288869042
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288869074
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288869092
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288869167
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288869830
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288870080
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288870169
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288870195
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288870272
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288870332
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288870342
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24153,
                    "inst": "GBPUSD",
                    "time": 1681288870541
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288871406
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288871446
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288871481
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288871549
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24156,
                    "inst": "GBPUSD",
                    "time": 1681288871997
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288872166
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288872314
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288872470
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288872544
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288873144
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288873172
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288873207
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288874144
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288874153
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288874367
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288874399
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288874847
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288875136
                },
                {
                    "ask": 1.24159,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288875250
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288875619
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288876028
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288876525
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288877087
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288877150
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288877451
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288877726
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288878654
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288879024
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288879537
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288879590
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288880275
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288880578
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288884314
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288884437
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288884720
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288885835
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288885883
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288886110
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288886114
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288886136
                },
                {
                    "ask": 1.24156,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288886188
                },
                {
                    "ask": 1.24155,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288886311
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24154,
                    "inst": "GBPUSD",
                    "time": 1681288886341
                },
                {
                    "ask": 1.24157,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288886379
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24155,
                    "inst": "GBPUSD",
                    "time": 1681288886564
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288886576
                },
                {
                    "ask": 1.24158,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288886611
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288886665
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24157,
                    "inst": "GBPUSD",
                    "time": 1681288886704
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288886709
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24159,
                    "inst": "GBPUSD",
                    "time": 1681288886720
                },
                {
                    "ask": 1.24161,
                    "bid": 1.24158,
                    "inst": "GBPUSD",
                    "time": 1681288886774
                },
                {
                    "ask": 1.24161,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288886810
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288887967
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288888064
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288888100
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288888174
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288888531
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288888570
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288889165
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288889315
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288891637
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288893003
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288893036
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288893074
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288893170
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288893971
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288894373
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288894472
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288894526
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288895172
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288896635
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288896689
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288897636
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288897737
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288897944
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288898068
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288898280
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288898427
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288898501
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288898564
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288899128
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288899753
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288900053
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288900168
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288900179
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288900304
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288900379
                },
                {
                    "ask": 1.24163,
                    "bid": 1.2416,
                    "inst": "GBPUSD",
                    "time": 1681288900584
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24161,
                    "inst": "GBPUSD",
                    "time": 1681288900890
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24162,
                    "inst": "GBPUSD",
                    "time": 1681288901485
                },
                {
                    "ask": 1.24163,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288901551
                },
                {
                    "ask": 1.24164,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288901580
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288901694
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288901705
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288901731
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288901785
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288901868
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288903546
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288903933
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288909924
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288909992
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288910614
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288911796
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288911943
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288912195
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288912216
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288913142
                },
                {
                    "ask": 1.24171,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288915217
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288915927
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288915943
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288915945
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288915974
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288916004
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288916007
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288916044
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288917096
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288917565
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288917596
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288917602
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288917631
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288917651
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288917709
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288917827
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288917877
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288917903
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288918604
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288918706
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288919592
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288919645
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288919671
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288919806
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288919846
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288919850
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288919966
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288920006
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288920085
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288920108
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288920159
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288920208
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288921106
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288922085
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288922157
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288922162
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288922190
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288922943
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288922995
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288923005
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288923010
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288923024
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288923115
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288924612
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288924719
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288925012
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288925411
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288926512
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288927914
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681288930008
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288930618
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681288930717
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288930935
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288931418
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288931539
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288931729
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288931922
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288932119
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288939629
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288940500
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288940520
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288940533
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288940541
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288940572
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288940589
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24171,
                    "inst": "GBPUSD",
                    "time": 1681288940633
                },
                {
                    "ask": 1.24171,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288940637
                },
                {
                    "ask": 1.2417,
                    "bid": 1.2417,
                    "inst": "GBPUSD",
                    "time": 1681288940645
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288940664
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288940681
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288940689
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288940694
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288940716
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288941626
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288941652
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288942037
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288942653
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288943333
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288944296
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288944332
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288944422
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288945737
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288945829
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288946115
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24163,
                    "inst": "GBPUSD",
                    "time": 1681288946175
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288946297
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288947412
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288947662
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288947767
                },
                {
                    "ask": 1.24165,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288947910
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24164,
                    "inst": "GBPUSD",
                    "time": 1681288948239
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288949032
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288950047
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288950437
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24165,
                    "inst": "GBPUSD",
                    "time": 1681288950940
                },
                {
                    "ask": 1.24166,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288951043
                },
                {
                    "ask": 1.24167,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288951146
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288951152
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288951243
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288952131
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288956447
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288957449
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288958063
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288959408
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288959463
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288959730
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288959786
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288959974
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288960203
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288961186
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24166,
                    "inst": "GBPUSD",
                    "time": 1681288961883
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288961906
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288961956
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288962153
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288964086
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288972407
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288973904
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288974117
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288976640
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288976804
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24167,
                    "inst": "GBPUSD",
                    "time": 1681288976956
                },
                {
                    "ask": 1.24168,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288977010
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288977048
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288977176
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288981077
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288983724
                },
                {
                    "ask": 1.24169,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288984631
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24169,
                    "inst": "GBPUSD",
                    "time": 1681288986730
                },
                {
                    "ask": 1.2417,
                    "bid": 1.24168,
                    "inst": "GBPUSD",
                    "time": 1681288986774
                },
                {
                    "ask": 1.24172,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288986781
                },
                {
                    "ask": 1.24173,
                    "bid": 1.24172,
                    "inst": "GBPUSD",
                    "time": 1681288986784
                },
                {
                    "ask": 1.24174,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288986806
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24173,
                    "inst": "GBPUSD",
                    "time": 1681288986858
                },
                {
                    "ask": 1.24175,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288986879
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288986885
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288986920
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288986926
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681288986986
                },
                {
                    "ask": 1.2418,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681288987600
                },
                {
                    "ask": 1.2418,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288988003
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288988981
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288988985
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24181,
                    "inst": "GBPUSD",
                    "time": 1681288989036
                },
                {
                    "ask": 1.24182,
                    "bid": 1.24181,
                    "inst": "GBPUSD",
                    "time": 1681288989203
                },
                {
                    "ask": 1.24182,
                    "bid": 1.24182,
                    "inst": "GBPUSD",
                    "time": 1681288989441
                },
                {
                    "ask": 1.24182,
                    "bid": 1.24181,
                    "inst": "GBPUSD",
                    "time": 1681288990322
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24181,
                    "inst": "GBPUSD",
                    "time": 1681288990413
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288992803
                },
                {
                    "ask": 1.2418,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288992935
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288993009
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288993207
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288995188
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288995824
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288995906
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288996638
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681288997015
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288997399
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681288998131
                },
                {
                    "ask": 1.24181,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288998372
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24179,
                    "inst": "GBPUSD",
                    "time": 1681288998394
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288998396
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288998403
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288998419
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288998422
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288998498
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288998638
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24174,
                    "inst": "GBPUSD",
                    "time": 1681288998662
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288998669
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24175,
                    "inst": "GBPUSD",
                    "time": 1681288998693
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288998857
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288998931
                },
                {
                    "ask": 1.24176,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288998953
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24176,
                    "inst": "GBPUSD",
                    "time": 1681288998996
                },
                {
                    "ask": 1.24177,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681288999030
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24177,
                    "inst": "GBPUSD",
                    "time": 1681289000795
                },
                {
                    "ask": 1.24178,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681289000851
                },
                {
                    "ask": 1.24179,
                    "bid": 1.24178,
                    "inst": "GBPUSD",
                    "time": 1681289000863
                },
                {
                    "ask": 1.24181,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681289000897
                },
                {
                    "ask": 1.24182,
                    "bid": 1.2418,
                    "inst": "GBPUSD",
                    "time": 1681289001142
                },
                {
                    "ask": 1.24182,
                    "bid": 1.24181,
                    "inst": "GBPUSD",
                    "time": 1681289001150
                },
                {
                    "ask": 1.24184,
                    "bid": 1.24182,
                    "inst": "GBPUSD",
                    "time": 1681289001201
                },
                {
                    "ask": 1.24184,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289001245
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289002300
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289002337
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289002400
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289002406
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289002434
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24182,
                    "inst": "GBPUSD",
                    "time": 1681289002600
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24182,
                    "inst": "GBPUSD",
                    "time": 1681289002702
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289004441
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289004487
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289004511
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289004621
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289006898
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289006917
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289006930
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289006936
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289006960
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289006981
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289006987
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24189,
                    "inst": "GBPUSD",
                    "time": 1681289006992
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289007017
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289007060
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289007705
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289008053
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289008190
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289008329
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289008436
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289008589
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289008644
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289010096
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289010147
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289010707
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289011914
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289012014
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289013013
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289013318
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289013674
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289015498
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289017020
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289017115
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289017124
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289017499
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289017630
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289017690
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289018505
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289020910
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289021020
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289021133
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289021175
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289022311
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289022563
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289024204
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289024338
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289026054
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289026572
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289027293
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289027692
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289028511
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289029141
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289029329
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289029533
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289029540
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289029684
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289029784
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289029932
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289032164
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289032237
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289032294
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289032374
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289032433
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289032437
                },
                {
                    "ask": 1.24198,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289034191
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289034241
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289034252
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289039876
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289039900
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289039991
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289040030
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289040148
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289040161
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289040835
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289041117
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289042668
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289042751
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289042929
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289046552
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289046739
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289046754
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289046855
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289047254
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289047369
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289047420
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289047426
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24197,
                    "inst": "GBPUSD",
                    "time": 1681289047455
                },
                {
                    "ask": 1.24197,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289048149
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289048156
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289048189
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289048308
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289048592
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289049458
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289050163
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289050347
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24196,
                    "inst": "GBPUSD",
                    "time": 1681289051397
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289052227
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289053198
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289053285
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289055790
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24195,
                    "inst": "GBPUSD",
                    "time": 1681289056580
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289056759
                },
                {
                    "ask": 1.24196,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289056816
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289056965
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289057078
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289057948
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289058066
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24192,
                    "inst": "GBPUSD",
                    "time": 1681289058613
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289059374
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289061078
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289061103
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24193,
                    "inst": "GBPUSD",
                    "time": 1681289061270
                },
                {
                    "ask": 1.24195,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289061340
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24194,
                    "inst": "GBPUSD",
                    "time": 1681289061471
                },
                {
                    "ask": 1.24194,
                    "bid": 1.24192,
                    "inst": "GBPUSD",
                    "time": 1681289061721
                },
                {
                    "ask": 1.24193,
                    "bid": 1.24192,
                    "inst": "GBPUSD",
                    "time": 1681289061975
                },
                {
                    "ask": 1.24193,
                    "bid": 1.2419,
                    "inst": "GBPUSD",
                    "time": 1681289065308
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24189,
                    "inst": "GBPUSD",
                    "time": 1681289069783
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289069789
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289069794
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289069797
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289069801
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289069857
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289069888
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289069900
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289069910
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289069935
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289069960
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289069986
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289070051
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289070063
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289070081
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289070083
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24182,
                    "inst": "GBPUSD",
                    "time": 1681289070193
                },
                {
                    "ask": 1.24185,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289070745
                },
                {
                    "ask": 1.24185,
                    "bid": 1.24182,
                    "inst": "GBPUSD",
                    "time": 1681289071198
                },
                {
                    "ask": 1.24185,
                    "bid": 1.24183,
                    "inst": "GBPUSD",
                    "time": 1681289072185
                },
                {
                    "ask": 1.24185,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289076613
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289076692
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289076790
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289076956
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289077455
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289077588
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289077688
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289078925
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289079432
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289079514
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289079592
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289083726
                },
                {
                    "ask": 1.24186,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289083776
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289083794
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289083894
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289083926
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289084373
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289084393
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289084693
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289084795
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289085119
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24189,
                    "inst": "GBPUSD",
                    "time": 1681289085142
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289085192
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289085197
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289085215
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289085267
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289085395
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289085599
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289085657
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289085745
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289085959
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289086291
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289086395
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289087005
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24186,
                    "inst": "GBPUSD",
                    "time": 1681289087306
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289091810
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289092507
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289092703
                },
                {
                    "ask": 1.24187,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289094223
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24185,
                    "inst": "GBPUSD",
                    "time": 1681289094309
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24184,
                    "inst": "GBPUSD",
                    "time": 1681289094328
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289094374
                },
                {
                    "ask": 1.24188,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289094455
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289094507
                },
                {
                    "ask": 1.24189,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289095038
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289095106
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289095184
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289095369
                },
                {
                    "ask": 1.2419,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289096410
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289097108
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24188,
                    "inst": "GBPUSD",
                    "time": 1681289098259
                },
                {
                    "ask": 1.24191,
                    "bid": 1.24187,
                    "inst": "GBPUSD",
                    "time": 1681289098498
                }
            ]
        }

        function FlatNumber(data: any[], time: number = 3) {
            const dados = [] as any[]
            dados.push(data[ 0 ])
            data.forEach((valor) => {
                const minute = valor.time - dados[ dados.length - 1 ].time
                if ((new Date(minute)).getMinutes() >= time) {
                    dados.push(valor)
                }
            })
            return dados
        }
        const data = getData()
        const dados = FlatNumber(data)
        new Chart(
            document.getElementById('forex-chart') as HTMLCanvasElement,
            {
                type: 'line',
                data: {
                    labels: dados.map((row: { time: string | number | Date }) => new Date(row.time).getHours() + ':' + new Date(row.time).getMinutes()),
                    datasets: [
                        {
                            label: 'GBPUSD',
                            data: data.map(row => row.ask)
                        }
                    ]
                },
                options: {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    fill: true,
                    hoverBackgroundColor: 'green',
                    drawActiveElementsOnTop: true,
                    scales: {
                        y: {
                            stacked: true

                        }
                    }
                }

            }
        )

    })
        ()
}
