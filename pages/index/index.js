import api from '../../api/api.js'

Page({
  data: {
    carousel: [],
    articles: {},
    current: 0
  },
  onLoad: function () {
    api.getCarousel({
      success: (res) => {
        res = {data:{
  "res": 0,
  "data": [
    {
      "id": "128",
      "title": "潜能Skinner",
      "cover": "http://image.wufazhuce.com/FqFj7Sk0JvJSVMzbc0JFgu0BrBaa",
      "bottom_text": "世界上到底有没有成功的催眠大师？",
      "bgcolor": "#d7560f",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/128"
    },
    {
      "id": "127",
      "title": "这一年过的如何？",
      "cover": "http://image.wufazhuce.com/Fr_r7e50MifiPsyWbFhsvcY3mfk_",
      "bottom_text": "“梦短梦长俱是梦，年来年去是何年。”",
      "bgcolor": "#24423A",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/127"
    },
    {
      "id": "126",
      "title": "我们生来就是孤独",
      "cover": "http://image.wufazhuce.com/FgUR18YWpOjS1p9t0ey_RxDSKzR3",
      "bottom_text": "“不管你拥有什么，我们生来就是孤独。”",
      "bgcolor": "#1c2454",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/126"
    },
    {
      "id": "125",
      "title": "这一切并没有那么糟",
      "cover": "http://image.wufazhuce.com/Fj_ePRtSc7yyPL3tf9kcQlhKdm0y",
      "bottom_text": "“以前觉得，勇敢就是粗暴地面对恐惧。后来发现，温柔也是勇敢。”",
      "bgcolor": "#124fa2",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/125"
    },
    {
      "id": "124",
      "title": "七堇年专题",
      "cover": "http://image.wufazhuce.com/FgDYdRk3BWNtbCtjkKIU5vo-ZWFP",
      "bottom_text": "“就让我们继续与生命的慷慨与繁华相爱；即使岁月以刻薄与荒芜相欺。”",
      "bgcolor": "#393135",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/124"
    },
    {
      "id": "123",
      "title": "你再不来，我要下雪了",
      "cover": "http://image.wufazhuce.com/Ftgg6J7j3qldjC_qDirU4x-OYFLp",
      "bottom_text": "拥抱着就能取暖，依偎着便能生存。",
      "bgcolor": "#f7bfbb",
      "pv_url": "http://v3.wufazhuce.com:8000/api/reading/carousel/pv/123"
    }
  ]
        }}
        if (res.data.res === 0) {
          
          let carousel = res.data.data
          this.setData({ carousel })
        }
      }
    })
    
    api.getLastArticles({
      success: (res) => {
        res = {data:{
  "res": 0,
  "data": {
    "essay": [
      {
        "content_id": "1737",
        "hp_title": "时间流逝之殇",
        "hp_makettime": "2017-01-13 06:00:00",
        "guide_word": "我觉得长大是一件很恐怖的事情，需要满足更多人，更宏大的期待。",
        "start_video": "",
        "author": [
          {
            "user_id": "4814676",
            "user_name": "刘文",
            "desc": "审计师，青年写作者。@刘文tracy",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "审计师，青年写作者。@刘文tracy",
            "fans_total": "83",
            "web_url": "http://image.wufazhuce.com/Fgs5kZ36FmPNRo7BqSBisRvcSodM"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "4814676",
            "user_name": "刘文",
            "desc": "审计师，青年写作者。@刘文tracy",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "审计师，青年写作者。@刘文tracy",
            "fans_total": "83",
            "web_url": "http://image.wufazhuce.com/Fgs5kZ36FmPNRo7BqSBisRvcSodM"
          }
        ]
      },
      {
        "content_id": "1731",
        "hp_title": "坏护士",
        "hp_makettime": "2017-01-12 06:00:00",
        "guide_word": "在病人身上小小的恶作剧也罢，和他上床也罢，都是因为寂寞。",
        "start_video": "",
        "author": [
          {
            "user_id": "7533146",
            "user_name": "魏庆",
            "desc": "自由写作者，已出版《二十八岁，我有点累》。@魏庆DD",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "魏庆，自由写作者。",
            "fans_total": "136",
            "web_url": "http://image.wufazhuce.com/FrMmd6u8REYQO0wPkX6p8OHF5ff6"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "7533146",
            "user_name": "魏庆",
            "desc": "自由写作者，已出版《二十八岁，我有点累》。@魏庆DD",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "魏庆，自由写作者。",
            "fans_total": "136",
            "web_url": "http://image.wufazhuce.com/FrMmd6u8REYQO0wPkX6p8OHF5ff6"
          }
        ]
      },
      {
        "content_id": "1718",
        "hp_title": "最后一个夜晚",
        "hp_makettime": "2017-01-11 06:00:00",
        "guide_word": "哪怕她觉得自己像一个色情狂，再见到他，他还是那个她想找的人。",
        "start_video": "",
        "author": [
          {
            "user_id": "7381968",
            "user_name": "程姬",
            "desc": "电影从业者。",
            "wb_name": "@程姬_",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "电影从业者。",
            "fans_total": "376",
            "web_url": "http://image.wufazhuce.com/FuppaH0wjw--gmhDoi0I69c7bGP7"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7381968",
            "user_name": "程姬",
            "desc": "电影从业者。",
            "wb_name": "@程姬_",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "电影从业者。",
            "fans_total": "376",
            "web_url": "http://image.wufazhuce.com/FuppaH0wjw--gmhDoi0I69c7bGP7"
          }
        ]
      },
      {
        "content_id": "1717",
        "hp_title": "两次捐精之间",
        "hp_makettime": "2017-01-10 06:00:00",
        "guide_word": "无论理想多伟大，我们现在都需要帮别人繁衍后代来挣钱，这就是现实干爆理想。",
        "start_video": "",
        "author": [
          {
            "user_id": "4813510",
            "user_name": "王若虚",
            "desc": "作家，「一个」常驻作者。",
            "wb_name": "王若虚1104",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家，「一个」常驻作者。",
            "fans_total": "925",
            "web_url": "http://image.wufazhuce.com/FqHv13MMStvCgEz6AuGMZe6TfKCq"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "4813510",
            "user_name": "王若虚",
            "desc": "作家，「一个」常驻作者。",
            "wb_name": "王若虚1104",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家，「一个」常驻作者。",
            "fans_total": "925",
            "web_url": "http://image.wufazhuce.com/FqHv13MMStvCgEz6AuGMZe6TfKCq"
          }
        ]
      },
      {
        "content_id": "1716",
        "hp_title": "16mm的青春",
        "hp_makettime": "2017-01-09 06:00:00",
        "guide_word": "我始终觉得人生中再没有遇到像Diana一样完美的女生。",
        "start_video": "",
        "author": [
          {
            "user_id": "4814711",
            "user_name": "姚瑶",
            "desc": "作家，翻译，独立摄影师。",
            "wb_name": "@姚瑶vagrancy",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家，翻译，独立摄影师。",
            "fans_total": "522",
            "web_url": "http://image.wufazhuce.com/FhI80VqsWwmShzCwX2r6KD88ymOZ"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814711",
            "user_name": "姚瑶",
            "desc": "作家，翻译，独立摄影师。",
            "wb_name": "@姚瑶vagrancy",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "作家，翻译，独立摄影师。",
            "fans_total": "522",
            "web_url": "http://image.wufazhuce.com/FhI80VqsWwmShzCwX2r6KD88ymOZ"
          }
        ]
      },
      {
        "content_id": "1700",
        "hp_title": "在北极",
        "hp_makettime": "2017-01-08 06:00:00",
        "guide_word": "极光是没有声音的。但它出现的时候，膨胀迅速。",
        "start_video": "",
        "author": [
          {
            "user_id": "4814933",
            "user_name": "锦",
            "desc": "锦，作家、媒体人。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "锦，作家、媒体人。",
            "fans_total": "82",
            "web_url": "http://image.wufazhuce.com/Fof207PD_faG5PcSCsXZW_8SK-qa"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "4814933",
            "user_name": "锦",
            "desc": "锦，作家、媒体人。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "锦，作家、媒体人。",
            "fans_total": "82",
            "web_url": "http://image.wufazhuce.com/Fof207PD_faG5PcSCsXZW_8SK-qa"
          }
        ]
      },
      {
        "content_id": "1699",
        "hp_title": "硬币的两面",
        "hp_makettime": "2017-01-07 06:00:00",
        "guide_word": "24岁了，有时感觉已经过了大半辈子，有时又感觉生活还没真正开始。",
        "start_video": "",
        "author": [
          {
            "user_id": "7258805",
            "user_name": "瞿瑞",
            "desc": "写作者。",
            "wb_name": "@牧羊的水鬼",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "写作者。",
            "fans_total": "66",
            "web_url": "http://image.wufazhuce.com/FjCzzKxy1q1aoAtfEMdLwPk-fFWc"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "7258805",
            "user_name": "瞿瑞",
            "desc": "写作者。",
            "wb_name": "@牧羊的水鬼",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "写作者。",
            "fans_total": "66",
            "web_url": "http://image.wufazhuce.com/FjCzzKxy1q1aoAtfEMdLwPk-fFWc"
          }
        ]
      },
      {
        "content_id": "1690",
        "hp_title": "一定会下雨的星期五",
        "hp_makettime": "2017-01-06 06:00:00",
        "guide_word": "就算天会再次放晴，可是雨下过了，这个世界就不一样了。",
        "start_video": "",
        "author": [
          {
            "user_id": "4813757",
            "user_name": "苏更生",
            "desc": "「一个」App常驻作家，微信公众号：hulizhai",
            "wb_name": "@假苏更生",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "「一个」App常驻作家，微信公众号：hulizhai",
            "fans_total": "495",
            "web_url": "http://image.wufazhuce.com/Fg_e6teZsb3lZ1QStYtdnAkh6bO8"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "4813757",
            "user_name": "苏更生",
            "desc": "「一个」App常驻作家，微信公众号：hulizhai",
            "wb_name": "@假苏更生",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "「一个」App常驻作家，微信公众号：hulizhai",
            "fans_total": "495",
            "web_url": "http://image.wufazhuce.com/Fg_e6teZsb3lZ1QStYtdnAkh6bO8"
          }
        ]
      },
      {
        "content_id": "1682",
        "hp_title": "飞越十三号室",
        "hp_makettime": "2017-01-05 06:00:00",
        "guide_word": "即便在临沂市第四人民医院网络成瘾戒治中心，反叛行为也生生不息。",
        "start_video": "http://music.wufazhuce.com/Fkss_qHT0DLqdoaLsWNndDtMAcFn",
        "author": [
          {
            "user_id": "7624952",
            "user_name": "钱杨",
            "desc": "ONE实验室作者。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "ONE实验室作者。",
            "fans_total": "169",
            "web_url": "http://image.wufazhuce.com/FgQjc1eHiRxXhXxasxD_BTtzPkQP"
          }
        ],
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7624952",
            "user_name": "钱杨",
            "desc": "ONE实验室作者。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "ONE实验室作者。",
            "fans_total": "169",
            "web_url": "http://image.wufazhuce.com/FgQjc1eHiRxXhXxasxD_BTtzPkQP"
          }
        ]
      },
      {
        "content_id": "1684",
        "hp_title": "迷踪记  ",
        "hp_makettime": "2017-01-04 06:00:00",
        "guide_word": "喜欢音乐的，不会是太坏的人。",
        "start_video": "",
        "author": [
          {
            "user_id": "7432465",
            "user_name": "葛亮",
            "desc": "最会说故事的小说家。《北鸢》《朱雀》热销中。",
            "wb_name": "@葛亮。",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "最会说故事的小说家《北鸢》《朱雀》热销中",
            "fans_total": "235",
            "web_url": "http://image.wufazhuce.com/FnYU1C_xIe6c5LfF6SlXd6hFk41L"
          }
        ],
        "has_audio": true,
        "author_list": [
          {
            "user_id": "7432465",
            "user_name": "葛亮",
            "desc": "最会说故事的小说家。《北鸢》《朱雀》热销中。",
            "wb_name": "@葛亮。",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "最会说故事的小说家《北鸢》《朱雀》热销中",
            "fans_total": "235",
            "web_url": "http://image.wufazhuce.com/FnYU1C_xIe6c5LfF6SlXd6hFk41L"
          }
        ]
      }
    ],
    "serial": [
      {
        "id": "229",
        "serial_id": "36",
        "number": "6",
        "title": "潜能Skinner·Party 3",
        "excerpt": "谢星星在心里“喔”了一声，原来父亲本身就是礼物。",
        "read_num": "9800",
        "maketime": "2017-01-12 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "281",
          "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "281",
            "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
          }
        ],
        "serial_list": [
          "222",
          "223",
          "225",
          "226",
          "227",
          "229"
        ]
      },
      {
        "id": "227",
        "serial_id": "36",
        "number": "5",
        "title": "潜能Skinner·Party 2",
        "excerpt": "SM爱好者一般会通过痛感获得性快感，可以采用行为疗法中的系统脱敏法。",
        "read_num": "27200",
        "maketime": "2017-01-10 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "281",
          "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "281",
            "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
          }
        ],
        "serial_list": [
          "222",
          "223",
          "225",
          "226",
          "227",
          "229"
        ]
      },
      {
        "id": "226",
        "serial_id": "36",
        "number": "4",
        "title": "潜能Skinner·Party 2",
        "excerpt": "你认为‘坠入爱河’是什么感觉？也许是一种意乱情迷的感觉吧。",
        "read_num": "42800",
        "maketime": "2017-01-07 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "281",
          "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "281",
            "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
          }
        ],
        "serial_list": [
          "222",
          "223",
          "225",
          "226",
          "227",
          "229"
        ]
      },
      {
        "id": "225",
        "serial_id": "36",
        "number": "3",
        "title": "潜能Skinner·Party 1",
        "excerpt": "“我觉得你长得很像我喜欢的一个人，能跟你合个影吗？”",
        "read_num": "71900",
        "maketime": "2017-01-05 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "281",
          "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "281",
            "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
          }
        ],
        "serial_list": [
          "222",
          "223",
          "225",
          "226",
          "227",
          "229"
        ]
      },
      {
        "id": "223",
        "serial_id": "36",
        "number": "2",
        "title": "潜能Skinner·Party 1",
        "excerpt": "现代科学证据表明，人的大脑只有不足10%被开发利用……",
        "read_num": "84200",
        "maketime": "2017-01-03 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "281",
          "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "281",
            "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
          }
        ],
        "serial_list": [
          "222",
          "223",
          "225",
          "226",
          "227",
          "229"
        ]
      },
      {
        "id": "222",
        "serial_id": "36",
        "number": "1",
        "title": "潜能Skinner·楔子",
        "excerpt": "世界上到底有没有成功的催眠大师？",
        "read_num": "102300",
        "maketime": "2016-12-31 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "4814706",
          "user_name": "大头马",
          "desc": "编剧，小说作者。公众号：prophetdatouma",
          "wb_name": "@大头马",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "编剧，小说作者。",
          "fans_total": "281",
          "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "4814706",
            "user_name": "大头马",
            "desc": "编剧，小说作者。公众号：prophetdatouma",
            "wb_name": "@大头马",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "编剧，小说作者。",
            "fans_total": "281",
            "web_url": "http://image.wufazhuce.com/FmkVejKk4x451FQDRgfNTUl4qqW9"
          }
        ],
        "serial_list": [
          "222",
          "223",
          "225",
          "226",
          "227",
          "229"
        ]
      },
      {
        "id": "221",
        "serial_id": "35",
        "number": "14",
        "title": "灰猫奇异事务所·坚果大劫案（六）",
        "excerpt": "“你少年的时候，有没有做过什么梦？像许小五想要闯荡江湖这种。”",
        "read_num": "39700",
        "maketime": "2016-12-29 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7288305",
          "user_name": "康夫",
          "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "fans_total": "301",
          "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7288305",
            "user_name": "康夫",
            "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "fans_total": "301",
            "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
          }
        ],
        "serial_list": [
          "208",
          "209",
          "210",
          "211",
          "212",
          "213",
          "214",
          "215",
          "216",
          "217",
          "218",
          "219",
          "220",
          "221"
        ]
      },
      {
        "id": "220",
        "serial_id": "35",
        "number": "13",
        "title": "灰猫奇异事务所·坚果大劫案（五）",
        "excerpt": "真没想到，动物们的世界里也有这种害人不浅的东西。",
        "read_num": "36600",
        "maketime": "2016-12-27 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7288305",
          "user_name": "康夫",
          "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "fans_total": "301",
          "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7288305",
            "user_name": "康夫",
            "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "fans_total": "301",
            "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
          }
        ],
        "serial_list": [
          "208",
          "209",
          "210",
          "211",
          "212",
          "213",
          "214",
          "215",
          "216",
          "217",
          "218",
          "219",
          "220",
          "221"
        ]
      },
      {
        "id": "219",
        "serial_id": "35",
        "number": "12",
        "title": "灰猫奇异事务所·坚果大劫案（四）",
        "excerpt": "一把栗子换一杯酒，即使腰缠万贯的人也不会这么干。",
        "read_num": "42900",
        "maketime": "2016-12-24 06:00:00",
        "start_video": "",
        "author": {
          "user_id": "7288305",
          "user_name": "康夫",
          "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "fans_total": "301",
          "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7288305",
            "user_name": "康夫",
            "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "fans_total": "301",
            "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
          }
        ],
        "serial_list": [
          "208",
          "209",
          "210",
          "211",
          "212",
          "213",
          "214",
          "215",
          "216",
          "217",
          "218",
          "219",
          "220",
          "221"
        ]
      },
      {
        "id": "218",
        "serial_id": "35",
        "number": "11",
        "title": "灰猫奇异事务所·坚果大劫案（三）",
        "excerpt": "我觉得眼前这些坚果们散发出一种模糊的光芒，这让它们看起来好像金山银山。",
        "read_num": "34300",
        "maketime": "2016-12-22 21:00:00",
        "start_video": "",
        "author": {
          "user_id": "7288305",
          "user_name": "康夫",
          "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "wb_name": "",
          "is_settled": "0",
          "settled_type": "0",
          "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
          "fans_total": "301",
          "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
        },
        "has_audio": false,
        "author_list": [
          {
            "user_id": "7288305",
            "user_name": "康夫",
            "desc": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "滞销书作者，不知名编剧。@请叫我康夫同学",
            "fans_total": "301",
            "web_url": "http://image.wufazhuce.com/FjeGV_ZCnP7ttQxbCrMZvrRVchsF"
          }
        ],
        "serial_list": [
          "208",
          "209",
          "210",
          "211",
          "212",
          "213",
          "214",
          "215",
          "216",
          "217",
          "218",
          "219",
          "220",
          "221"
        ]
      }
    ],
    "question": [
      {
        "question_id": "1598",
        "question_title": "为什么“多喝热水”遭到女生的普遍反感？",
        "answer_title": "",
        "answer_content": "我们真正难过的是，期待落空，亟待填补的空虚感却不断地膨胀着。",
        "question_makettime": "2017-01-13 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "弥谎",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "淼兜兜",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1596",
        "question_title": "在大学期间学到过最特别的课程是什么？",
        "answer_title": "",
        "answer_content": "一次是讲ED的时候，主讲老师带来了从美国引进的一种叫“勃起测量器”。",
        "question_makettime": "2017-01-12 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "Lasia",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "正直稻草人",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1595",
        "question_title": "冬天做什么事会有幸福感？",
        "answer_title": "",
        "answer_content": "冬天一无所有，于是一点点温柔都珍贵。  ",
        "question_makettime": "2017-01-11 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "所有人",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "一个APP工作室",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1591",
        "question_title": "某些场景似曾相识，好像梦中或前世发生过，这种感觉到底是什么？",
        "answer_title": "@负二_Negative_2 答河马：",
        "answer_content": "令神秘主义者失望的是，它并非是什么“前世留存的记忆”。",
        "question_makettime": "2017-01-10 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "负二_Negative_2",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "河马问",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1594",
        "question_title": "能否接受自己的另一半打电话给电台诉苦？",
        "answer_title": "达达令答星星元：",
        "answer_content": "这个世界，我不知道从什么时候开始，很多人都在找虐，找骂，找抽。",
        "question_makettime": "2017-01-09 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "4814911",
            "user_name": "达达令",
            "desc": "达达令，电影策划，互联网民工，副业码字。微博上的小清新，知乎上的女神经。",
            "wb_name": "彭小玲达达令",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "达达令，电影策划，互联网民工，副业码字。微博上的小清新，知乎上的女神经。",
            "fans_total": "74",
            "web_url": "http://image.wufazhuce.com/Fk0N5BicKDNKkeoPtFuucObnMPpf"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "星星元",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1592",
        "question_title": "真的朋友之间存在“添麻烦”吗？",
        "answer_title": "",
        "answer_content": "真的朋友，不会把索取当成理所当然，而是会彼此谅解。",
        "question_makettime": "2017-01-08 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "陈以二",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "阿西",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1593",
        "question_title": "美国队长的盾是钢铁侠的爸爸送的，那么钢铁侠有权利要回来吗？",
        "answer_title": "",
        "answer_content": "这个盾反复殴打赠与人的亲儿子钢铁侠，深深地伤害了妮妮的肉体和感情。",
        "question_makettime": "2017-01-07 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "7566818",
            "user_name": "温义飞",
            "desc": "one热门回答者。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "回答者。",
            "fans_total": "8",
            "web_url": "http://image.wufazhuce.com/FjN55lHN2vK5VgA5c1c8opFeUrG1"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "lilizhou",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1590",
        "question_title": "“怎么样才能好好沟通而不被人讨厌？”",
        "answer_title": "@大将军郭 答Flico：",
        "answer_content": "语言也有拳头的力量，用暴力的方式对话，就像是在挥拳相向。",
        "question_makettime": "2017-01-06 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "5541601",
            "user_name": "大将军郭",
            "desc": "大将军郭，国家二级心理咨询师，性感长腿女青年。新书《对于自己，你还是个陌生人》。微信公众号：我们心里都有病（ID：staynormal）",
            "wb_name": "@大将军郭",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "国家二级心理咨询师，性感长腿女青年。",
            "fans_total": "434",
            "web_url": "http://image.wufazhuce.com/Fk5FGFq5cICtxVG8qI1NbUmAVkWp"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "Flico",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1589",
        "question_title": "“清宫剧中戴在皇后指甲上那长长的东西是什么？”",
        "answer_title": "lasia答正直稻草人：",
        "answer_content": "蓄甲之风，源远流长。",
        "question_makettime": "2017-01-05 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "0",
            "user_name": "lasia",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "正直稻草人",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      },
      {
        "question_id": "1588",
        "question_title": "“女生追男生应该抱有什么心态？”",
        "answer_title": "菠菜答西塔：",
        "answer_content": "有时候追男人吧，就和逗小狗差不多，你走过去几步，他可能退几步。",
        "question_makettime": "2017-01-04 06:00:00",
        "start_video": "",
        "author_list": [
          {
            "user_id": "7521733",
            "user_name": "菠菜",
            "desc": "回答者。",
            "wb_name": "",
            "is_settled": "0",
            "settled_type": "0",
            "summary": "回答者。",
            "fans_total": "151",
            "web_url": "http://image.wufazhuce.com/Fqv_ItuVfZPVywvC6Af-Jzz7FZZD"
          }
        ],
        "asker_list": [
          {
            "user_id": "0",
            "user_name": "西塔",
            "web_url": "",
            "summary": "",
            "desc": "",
            "is_settled": "",
            "settled_type": "",
            "fans_total": "",
            "wb_name": ""
          }
        ]
      }
    ]
  }
}}
        if (res.data.res === 0) {
          let articles = res.data.data
          this.setData({ articles })
        }
      }
    })
  },

  tapEssay: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'essay/essay?id=' + id
    })
  },
  tapSerial: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'serial/serial?id=' + id
    })
  },
  tapQuestion: function (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'question/question?id=' + id
    })
  },
  handleChange: function (e) {
    let current = e.detail.current
    let length = this.data.articles.essay.length

    if (current === length) {
      this.setData({
        current: length
      })
      wx.navigateTo({
        url: '../history/history?page=reading',
        success: () => {
          this.setData({
            current: length - 1
          })
        }
      })
    }
  }
})