var r;
!function (i, a) {
  "use strict";

  var o = "function";
  var s = "undefined";
  var u = "object";
  var l = "string";
  var c = "model";
  var f = "name";
  var d = "type";
  var h = "vendor";
  var p = "version";
  var m = "architecture";
  var v = "console";
  var g = "mobile";
  var y = "tablet";
  var b = "smarttv";
  var w = "wearable";
  var _ = "embedded";
  var x = "Amazon";
  var S = "Apple";
  var E = "ASUS";
  var k = "BlackBerry";
  var O = "Firefox";
  var N = "Google";
  var T = "Huawei";
  var M = "LG";
  var R = "Microsoft";
  var A = "Motorola";
  var P = "Opera";
  var C = "Samsung";
  var D = "Sony";
  var U = "Xiaomi";
  var I = "Zebra";
  var L = "Facebook";
  var j = function (e) {
    for (var t = {}, n = 0; n < e.length; n++) {
      t[e[n].toUpperCase()] = e[n];
    }
    return t;
  };
  var F = function (e, t) {
    return typeof e === l && z(t).indexOf(z(e)) !== -1;
  };
  var z = function (e) {
    return e.toLowerCase();
  };
  var B = function (e, t) {
    if (typeof e === l) {
      e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      if (typeof t === s) {
        return e;
      } else {
        return e.substring(0, 255);
      }
    }
  };
  var V = function (e, t) {
    for (var n, r, i, s, l, c, f = 0; f < t.length && !l;) {
      var d = t[f];
      var h = t[f + 1];
      for (n = r = 0; n < d.length && !l;) {
        if (l = d[n++].exec(e)) {
          for (i = 0; i < h.length; i++) {
            c = l[++r];
            if (typeof (s = h[i]) === u && s.length > 0) {
              if (s.length === 2) {
                if (typeof s[1] == o) {
                  this[s[0]] = s[1].call(this, c);
                } else {
                  this[s[0]] = s[1];
                }
              } else if (s.length === 3) {
                if (typeof s[1] !== o || s[1].exec && s[1].test) {
                  this[s[0]] = c ? c.replace(s[1], s[2]) : a;
                } else {
                  this[s[0]] = c ? s[1].call(this, c, s[2]) : a;
                }
              } else if (s.length === 4) {
                this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : a;
              }
            } else {
              this[s] = c || a;
            }
          }
        }
      }
      f += 2;
    }
  };
  var Y = function (e, t) {
    for (var n in t) {
      if (typeof t[n] === u && t[n].length > 0) {
        for (var r = 0; r < t[n].length; r++) {
          if (F(t[n][r], e)) {
            if (n === "?") {
              return a;
            } else {
              return n;
            }
          }
        }
      } else if (F(t[n], e)) {
        if (n === "?") {
          return a;
        } else {
          return n;
        }
      }
    }
    return e;
  };
  var H = {
    ME: "4.90",
    "NT 3.11": "NT3.51",
    "NT 4.0": "NT4.0",
    2000: "NT 5.0",
    XP: ["NT 5.1", "NT 5.2"],
    Vista: "NT 6.0",
    7: "NT 6.1",
    8: "NT 6.2",
    8.1: "NT 6.3",
    10: ["NT 6.4", "NT 10.0"],
    RT: "ARM"
  };
  var $ = {
    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [p, [f, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [p, [f, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [f, p], [/opios[\/ ]+([\w\.]+)/i], [p, [f, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [p, [f, P]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [f, p], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [p, [f, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [p, [f, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [p, [f, "WeChat"]], [/konqueror\/([\w\.]+)/i], [p, [f, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [p, [f, "IE"]], [/yabrowser\/([\w\.]+)/i], [p, [f, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[f, /(.+)/, "$1 Secure Browser"], p], [/\bfocus\/([\w\.]+)/i], [p, [f, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [p, [f, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [p, [f, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [p, [f, "Dolphin"]], [/coast\/([\w\.]+)/i], [p, [f, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [p, [f, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [p, [f, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[f, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[f, /(.+)/, "$1 Browser"], p], [/(comodo_dragon)\/([\w\.]+)/i], [[f, /_/g, " "], p], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [f, p], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [f], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[f, L], p], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [f, p], [/\bgsa\/([\w\.]+) .*safari\//i], [p, [f, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [p, [f, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[f, "Chrome WebView"], p], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [p, [f, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [f, p], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [p, [f, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [p, f], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [f, [p, Y, {
      "1.0": "/8",
      1.2: "/1",
      1.3: "/3",
      "2.0": "/412",
      "2.0.2": "/416",
      "2.0.3": "/417",
      "2.0.4": "/419",
      "?": "/"
    }]], [/(webkit|khtml)\/([\w\.]+)/i], [f, p], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[f, "Netscape"], p], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [p, [f, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [f, p]],
    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[m, "amd64"]], [/(ia32(?=;))/i], [[m, z]], [/((?:i[346]|x)86)[;\)]/i], [[m, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[m, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[m, "armhf"]], [/windows (ce|mobile); ppc;/i], [[m, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[m, /ower/, "", z]], [/(sun4\w)[;\)]/i], [[m, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[m, z]]],
    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [h, C], [d, y]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [h, C], [d, g]], [/\((ip(?:hone|od)[\w ]*);/i], [c, [h, S], [d, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [h, S], [d, y]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [h, T], [d, y]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [c, [h, T], [d, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [h, U], [d, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [h, U], [d, y]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [h, "OPPO"], [d, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [h, "Vivo"], [d, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [c, [h, "Realme"], [d, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [h, A], [d, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [h, A], [d, y]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [h, M], [d, y]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [h, M], [d, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [h, "Lenovo"], [d, y]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [h, "Nokia"], [d, g]], [/(pixel c)\b/i], [c, [h, N], [d, y]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [h, N], [d, g]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [h, D], [d, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [h, D], [d, y]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [h, "OnePlus"], [d, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [h, x], [d, y]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [h, x], [d, g]], [/(playbook);[-\w\),; ]+(rim)/i], [c, h, [d, y]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [h, k], [d, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [h, E], [d, y]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [h, E], [d, g]], [/(nexus 9)/i], [c, [h, "HTC"], [d, y]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [h, [c, /_/g, " "], [d, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [h, "Acer"], [d, y]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [h, "Meizu"], [d, g]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [h, "Sharp"], [d, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [h, c, [d, g]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [h, c, [d, y]], [/(surface duo)/i], [c, [h, R], [d, y]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [h, "Fairphone"], [d, g]], [/(u304aa)/i], [c, [h, "AT&T"], [d, g]], [/\bsie-(\w*)/i], [c, [h, "Siemens"], [d, g]], [/\b(rct\w+) b/i], [c, [h, "RCA"], [d, y]], [/\b(venue[\d ]{2,7}) b/i], [c, [h, "Dell"], [d, y]], [/\b(q(?:mv|ta)\w+) b/i], [c, [h, "Verizon"], [d, y]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [h, "Barnes & Noble"], [d, y]], [/\b(tm\d{3}\w+) b/i], [c, [h, "NuVision"], [d, y]], [/\b(k88) b/i], [c, [h, "ZTE"], [d, y]], [/\b(nx\d{3}j) b/i], [c, [h, "ZTE"], [d, g]], [/\b(gen\d{3}) b.+49h/i], [c, [h, "Swiss"], [d, g]], [/\b(zur\d{3}) b/i], [c, [h, "Swiss"], [d, y]], [/\b((zeki)?tb.*\b) b/i], [c, [h, "Zeki"], [d, y]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[h, "Dragon Touch"], c, [d, y]], [/\b(ns-?\w{0,9}) b/i], [c, [h, "Insignia"], [d, y]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [h, "NextBook"], [d, y]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[h, "Voice"], c, [d, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[h, "LvTel"], c, [d, g]], [/\b(ph-1) /i], [c, [h, "Essential"], [d, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [h, "Envizen"], [d, y]], [/\b(trio[-\w\. ]+) b/i], [c, [h, "MachSpeed"], [d, y]], [/\btu_(1491) b/i], [c, [h, "Rotor"], [d, y]], [/(shield[\w ]+) b/i], [c, [h, "Nvidia"], [d, y]], [/(sprint) (\w+)/i], [h, c, [d, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [h, R], [d, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [h, I], [d, y]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [h, I], [d, g]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [h, c, [d, v]], [/droid.+; (shield) bui/i], [c, [h, "Nvidia"], [d, v]], [/(playstation [345portablevi]+)/i], [c, [h, D], [d, v]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [h, R], [d, v]], [/smart-tv.+(samsung)/i], [h, [d, b]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [h, C], [d, b]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[h, M], [d, b]], [/(apple) ?tv/i], [h, [c, "Apple TV"], [d, b]], [/crkey/i], [[c, "Chromecast"], [h, N], [d, b]], [/droid.+aft(\w)( bui|\))/i], [c, [h, x], [d, b]], [/\(dtv[\);].+(aquos)/i], [c, [h, "Sharp"], [d, b]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[h, B], [c, B], [d, b]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[d, b]], [/((pebble))app/i], [h, c, [d, w]], [/droid.+; (glass) \d/i], [c, [h, N], [d, w]], [/droid.+; (wt63?0{2,3})\)/i], [c, [h, I], [d, w]], [/(quest( 2)?)/i], [c, [h, L], [d, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [h, [d, _]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [c, [d, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [d, y]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[d, y]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[d, g]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [h, "Generic"]]],
    engine: [[/windows.+ edge\/([\w\.]+)/i], [p, [f, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [p, [f, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [f, p], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [p, f]],
    os: [[/microsoft (windows) (vista|xp)/i], [f, p], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [f, [p, Y, H]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[f, "Windows"], [p, Y, H]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[p, /_/g, "."], [f, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[f, "Mac OS"], [p, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [p, f], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [f, p], [/\(bb(10);/i], [p, [f, k]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [p, [f, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [p, [f, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [p, [f, "webOS"]], [/crkey\/([\d\.]+)/i], [p, [f, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[f, "Chromium OS"], p], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [f, p], [/(sunos) ?([\w\.\d]*)/i], [[f, "Solaris"], p], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [f, p]]
  };
  var W = function (e, t) {
    if (typeof e === u) {
      t = e;
      e = a;
    }
    if (!(this instanceof W)) {
      return new W(e, t).getResult();
    }
    var n = e || (typeof i !== s && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : "");
    var r = t ? function (e, t) {
      var n = {};
      for (var r in e) {
        if (t[r] && t[r].length % 2 == 0) {
          n[r] = t[r].concat(e[r]);
        } else {
          n[r] = e[r];
        }
      }
      return n;
    }($, t) : $;
    this.getBrowser = function () {
      var e;
      var t = {
        name: a,
        version: a
      };
      V.call(t, n, r.browser);
      t.major = typeof (e = t.version) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : a;
      return t;
    };
    this.getCPU = function () {
      var e = {
        architecture: a
      };
      V.call(e, n, r.cpu);
      return e;
    };
    this.getDevice = function () {
      var e = {
        vendor: a,
        model: a,
        type: a
      };
      V.call(e, n, r.device);
      return e;
    };
    this.getEngine = function () {
      var e = {
        name: a,
        version: a
      };
      V.call(e, n, r.engine);
      return e;
    };
    this.getOS = function () {
      var e = {
        name: a,
        version: a
      };
      V.call(e, n, r.os);
      return e;
    };
    this.getResult = function () {
      return {
        ua: this.getUA(),
        browser: this.getBrowser(),
        engine: this.getEngine(),
        os: this.getOS(),
        device: this.getDevice(),
        cpu: this.getCPU()
      };
    };
    this.getUA = function () {
      return n;
    };
    this.setUA = function (e) {
      n = typeof e === l && e.length > 255 ? B(e, 255) : e;
      return this;
    };
    this.setUA(n);
    return this;
  };
  W.VERSION = "0.7.31";
  W.BROWSER = j([f, p, "major"]);
  W.CPU = j([m]);
  W.DEVICE = j([c, h, d, v, g, b, y, w, _]);
  W.ENGINE = W.OS = j([f, p]);
  if (typeof exports !== s) {
    if (module.exports) {
      exports = module.exports = W;
    }
    exports.UAParser = W;
  } else if (require.amdO) {
    if (!((r = function () {
      return W;
    }.call(exports, require, exports, module)) === a)) {
      module.exports = r;
    }
  } else if (typeof i !== s) {
    i.UAParser = W;
  }
  var G = typeof i !== s && (i.jQuery || i.Zepto);
  if (G && !G.ua) {
    var q = new W();
    G.ua = q.getResult();
    G.ua.get = function () {
      return q.getUA();
    };
    G.ua.set = function (e) {
      q.setUA(e);
      var t = q.getResult();
      for (var n in t) {
        G.ua[n] = t[n];
      }
    };
  }
}(typeof window == "object" ? window : this);