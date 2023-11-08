var r;
var i;
/*! VelocityJS.org (1.5.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function (e) {
  "use strict";

  if (!e.jQuery) {
    var t = function (e, n) {
      return new t.fn.init(e, n);
    };
    t.isWindow = function (e) {
      return e && e === e.window;
    };
    t.type = function (e) {
      if (e) {
        if (typeof e == "object" || typeof e == "function") {
          return r[a.call(e)] || "object";
        } else {
          return typeof e;
        }
      } else {
        return e + "";
      }
    };
    t.isArray = Array.isArray || function (e) {
      return t.type(e) === "array";
    };
    t.isPlainObject = function (e) {
      var n;
      if (!e || t.type(e) !== "object" || e.nodeType || t.isWindow(e)) {
        return false;
      }
      try {
        if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        return false;
      }
      for (n in e);
      return n === undefined || i.call(e, n);
    };
    t.each = function (e, t, n) {
      var r = 0;
      var i = e.length;
      var a = u(e);
      if (n) {
        if (a) {
          for (; r < i && t.apply(e[r], n) !== false; r++);
        } else {
          for (r in e) {
            if (e.hasOwnProperty(r) && t.apply(e[r], n) === false) {
              break;
            }
          }
        }
      } else if (a) {
        for (; r < i && t.call(e[r], r, e[r]) !== false; r++);
      } else {
        for (r in e) {
          if (e.hasOwnProperty(r) && t.call(e[r], r, e[r]) === false) {
            break;
          }
        }
      }
      return e;
    };
    t.data = function (e, r, i) {
      if (i === undefined) {
        var a = e[t.expando];
        var o = a && n[a];
        if (r === undefined) {
          return o;
        }
        if (o && r in o) {
          return o[r];
        }
      } else if (r !== undefined) {
        var s = e[t.expando] || (e[t.expando] = ++t.uuid);
        n[s] = n[s] || {};
        n[s][r] = i;
        return i;
      }
    };
    t.removeData = function (e, r) {
      var i = e[t.expando];
      var a = i && n[i];
      if (a) {
        if (r) {
          t.each(r, function (e, t) {
            delete a[t];
          });
        } else {
          delete n[i];
        }
      }
    };
    t.extend = function () {
      var e;
      var n;
      var r;
      var i;
      var a;
      var o;
      var s = arguments[0] || {};
      var u = 1;
      var l = arguments.length;
      var c = false;
      if (typeof s == "boolean") {
        c = s;
        s = arguments[u] || {};
        u++;
      }
      if (typeof s != "object" && t.type(s) !== "function") {
        s = {};
      }
      if (u === l) {
        s = this;
        u--;
      }
      for (; u < l; u++) {
        if (a = arguments[u]) {
          for (i in a) {
            if (a.hasOwnProperty(i)) {
              e = s[i];
              if (s !== (r = a[i])) {
                if (c && r && (t.isPlainObject(r) || (n = t.isArray(r)))) {
                  if (n) {
                    n = false;
                    o = e && t.isArray(e) ? e : [];
                  } else {
                    o = e && t.isPlainObject(e) ? e : {};
                  }
                  s[i] = t.extend(c, o, r);
                } else if (r !== undefined) {
                  s[i] = r;
                }
              }
            }
          }
        }
      }
      return s;
    };
    t.queue = function (e, n, r) {
      if (e) {
        n = (n || "fx") + "queue";
        var i;
        var a;
        var o;
        var s = t.data(e, n);
        if (r) {
          if (!s || t.isArray(r)) {
            s = t.data(e, n, (o = a || [], (i = r) && (u(Object(i)) ? function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n;) {
                e[i++] = t[r++];
              }
              if (n != n) {
                for (; t[r] !== undefined;) {
                  e[i++] = t[r++];
                }
              }
              e.length = i;
            }(o, typeof i == "string" ? [i] : i) : [].push.call(o, i)), o));
          } else {
            s.push(r);
          }
          return s;
        } else {
          return s || [];
        }
      }
    };
    t.dequeue = function (e, n) {
      t.each(e.nodeType ? [e] : e, function (e, r) {
        n = n || "fx";
        var i = t.queue(r, n);
        var a = i.shift();
        if (a === "inprogress") {
          a = i.shift();
        }
        if (a) {
          if (n === "fx") {
            i.unshift("inprogress");
          }
          a.call(r, function () {
            t.dequeue(r, n);
          });
        }
      });
    };
    t.fn = t.prototype = {
      init: function (e) {
        if (e.nodeType) {
          this[0] = e;
          return this;
        }
        throw new Error("Not a DOM node.");
      },
      offset: function () {
        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
          top: 0,
          left: 0
        };
        return {
          top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
          left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
        };
      },
      position: function () {
        var e = this[0];
        var n = function (e) {
          for (var t = e.offsetParent; t && t.nodeName.toLowerCase() !== "html" && t.style && t.style.position.toLowerCase() === "static";) {
            t = t.offsetParent;
          }
          return t || document;
        }(e);
        var r = this.offset();
        var i = /^(?:body|html)$/i.test(n.nodeName) ? {
          top: 0,
          left: 0
        } : t(n).offset();
        r.top -= parseFloat(e.style.marginTop) || 0;
        r.left -= parseFloat(e.style.marginLeft) || 0;
        if (n.style) {
          i.top += parseFloat(n.style.borderTopWidth) || 0;
          i.left += parseFloat(n.style.borderLeftWidth) || 0;
        }
        return {
          top: r.top - i.top,
          left: r.left - i.left
        };
      }
    };
    var n = {};
    t.expando = "velocity" + new Date().getTime();
    t.uuid = 0;
    for (var r = {}, i = r.hasOwnProperty, a = r.toString, o = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < o.length; s++) {
      r["[object " + o[s] + "]"] = o[s].toLowerCase();
    }
    t.fn.init.prototype = t.fn;
    e.Velocity = {
      Utilities: t
    };
  }
  function u(e) {
    var n = e.length;
    var r = t.type(e);
    return r !== "function" && !t.isWindow(e) && (!(e.nodeType !== 1 || !n) || r === "array" || n === 0 || typeof n == "number" && n > 0 && n - 1 in e);
  }
}(window);
(function (a) {
  "use strict";

  if (typeof module.exports == "object") {
    module.exports = a();
  } else if (!((i = typeof (r = a) == "function" ? r.call(exports, require, exports, module) : r) === undefined)) {
    module.exports = i;
  }
})(function () {
  "use strict";

  return function (e, t, n, r) {
    var i;
    var a = function () {
      if (n.documentMode) {
        return n.documentMode;
      }
      for (var e = 7; e > 4; e--) {
        var t = n.createElement("div");
        t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->";
        if (t.getElementsByTagName("span").length) {
          t = null;
          return e;
        }
      }
      return r;
    }();
    i = 0;
    var o = t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (e) {
      var t;
      var n = new Date().getTime();
      t = Math.max(0, 16 - (n - i));
      i = n + t;
      return setTimeout(function () {
        e(n + t);
      }, t);
    };
    var s = function () {
      var e = t.performance || {};
      if (typeof e.now != "function") {
        var n = e.timing && e.timing.navigationStart ? e.timing.navigationStart : new Date().getTime();
        e.now = function () {
          return new Date().getTime() - n;
        };
      }
      return e;
    }();
    var u = function () {
      var e = Array.prototype.slice;
      try {
        e.call(n.documentElement);
        return e;
      } catch (t) {
        return function (t, n) {
          var r = this.length;
          if (typeof t != "number") {
            t = 0;
          }
          if (typeof n != "number") {
            n = r;
          }
          if (this.slice) {
            return e.call(this, t, n);
          }
          var i;
          var a = [];
          var o = t >= 0 ? t : Math.max(0, r + t);
          var s = (n < 0 ? r + n : Math.min(n, r)) - o;
          if (s > 0) {
            a = new Array(s);
            if (this.charAt) {
              for (i = 0; i < s; i++) {
                a[i] = this.charAt(o + i);
              }
            } else {
              for (i = 0; i < s; i++) {
                a[i] = this[o + i];
              }
            }
          }
          return a;
        };
      }
    }();
    var l = function () {
      if (Array.prototype.includes) {
        return function (e, t) {
          return e.includes(t);
        };
      } else if (Array.prototype.indexOf) {
        return function (e, t) {
          return e.indexOf(t) >= 0;
        };
      } else {
        return function (e, t) {
          for (var n = 0; n < e.length; n++) {
            if (e[n] === t) {
              return true;
            }
          }
          return false;
        };
      }
    };
    function c(e) {
      if (d.isWrapped(e)) {
        e = u.call(e);
      } else if (d.isNode(e)) {
        e = [e];
      }
      return e;
    }
    var f;
    var d = {
      isNumber: function (e) {
        return typeof e == "number";
      },
      isString: function (e) {
        return typeof e == "string";
      },
      isArray: Array.isArray || function (e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      },
      isFunction: function (e) {
        return Object.prototype.toString.call(e) === "[object Function]";
      },
      isNode: function (e) {
        return e && e.nodeType;
      },
      isWrapped: function (e) {
        return e && e !== t && d.isNumber(e.length) && !d.isString(e) && !d.isFunction(e) && !d.isNode(e) && (e.length === 0 || d.isNode(e[0]));
      },
      isSVG: function (e) {
        return t.SVGElement && e instanceof t.SVGElement;
      },
      isEmptyObject: function (e) {
        for (var t in e) {
          if (e.hasOwnProperty(t)) {
            return false;
          }
        }
        return true;
      }
    };
    var h = false;
    if (e.fn && e.fn.jquery) {
      f = e;
      h = true;
    } else {
      f = t.Velocity.Utilities;
    }
    if (a <= 8 && !h) {
      throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    }
    if (!(a <= 7)) {
      var p = 400;
      var m = "swing";
      var v = {
        State: {
          isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t.navigator.userAgent),
          isAndroid: /Android/i.test(t.navigator.userAgent),
          isGingerbread: /Android 2\.3\.[3-7]/i.test(t.navigator.userAgent),
          isChrome: t.chrome,
          isFirefox: /Firefox/i.test(t.navigator.userAgent),
          prefixElement: n.createElement("div"),
          prefixMatches: {},
          scrollAnchor: null,
          scrollPropertyLeft: null,
          scrollPropertyTop: null,
          isTicking: false,
          calls: [],
          delayedElements: {
            count: 0
          }
        },
        CSS: {},
        Utilities: f,
        Redirects: {},
        Easings: {},
        Promise: t.Promise,
        defaults: {
          queue: "",
          duration: p,
          easing: m,
          begin: r,
          complete: r,
          progress: r,
          display: r,
          visibility: r,
          loop: false,
          delay: false,
          mobileHA: true,
          _cacheValues: true,
          promiseRejectEmpty: true
        },
        init: function (e) {
          f.data(e, "velocity", {
            isSVG: d.isSVG(e),
            isAnimating: false,
            computedStyle: null,
            tweensContainer: null,
            rootPropertyValueCache: {},
            transformCache: {}
          });
        },
        hook: null,
        mock: false,
        version: {
          major: 1,
          minor: 5,
          patch: 2
        },
        debug: false,
        timestamp: true,
        pauseAll: function (e) {
          var t = new Date().getTime();
          f.each(v.State.calls, function (t, n) {
            if (n) {
              if (e !== r && (n[2].queue !== e || n[2].queue === false)) {
                return true;
              }
              n[5] = {
                resume: false
              };
            }
          });
          f.each(v.State.delayedElements, function (e, n) {
            if (n) {
              S(n, t);
            }
          });
        },
        resumeAll: function (e) {
          var t = new Date().getTime();
          f.each(v.State.calls, function (t, n) {
            if (n) {
              if (e !== r && (n[2].queue !== e || n[2].queue === false)) {
                return true;
              }
              if (n[5]) {
                n[5].resume = true;
              }
            }
          });
          f.each(v.State.delayedElements, function (e, n) {
            if (n) {
              E(n, t);
            }
          });
        }
      };
      if (t.pageYOffset !== r) {
        v.State.scrollAnchor = t;
        v.State.scrollPropertyLeft = "pageXOffset";
        v.State.scrollPropertyTop = "pageYOffset";
      } else {
        v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body;
        v.State.scrollPropertyLeft = "scrollLeft";
        v.State.scrollPropertyTop = "scrollTop";
      }
      var g = function () {
        function e(e) {
          return -e.tension * e.x - e.friction * e.v;
        }
        function t(t, n, r) {
          var i = {
            x: t.x + r.dx * n,
            v: t.v + r.dv * n,
            tension: t.tension,
            friction: t.friction
          };
          return {
            dx: i.v,
            dv: e(i)
          };
        }
        function n(n, r) {
          var i = {
            dx: n.v,
            dv: e(n)
          };
          var a = t(n, r * 0.5, i);
          var o = t(n, r * 0.5, a);
          var s = t(n, r, o);
          var u = 1 / 6 * (i.dx + (a.dx + o.dx) * 2 + s.dx);
          var l = 1 / 6 * (i.dv + (a.dv + o.dv) * 2 + s.dv);
          n.x = n.x + u * r;
          n.v = n.v + l * r;
          return n;
        }
        return function e(t, r, i) {
          var a;
          var o;
          var s;
          var u = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
          };
          var l = [0];
          var c = 0;
          var f = 0.0001;
          t = parseFloat(t) || 500;
          r = parseFloat(r) || 20;
          i = i || null;
          u.tension = t;
          u.friction = r;
          o = (a = i !== null) ? (c = e(t, r)) / i * 0.016 : 0.016;
          for (; s = n(s || u, o), l.push(1 + s.x), c += 16, Math.abs(s.x) > f && Math.abs(s.v) > f;);
          if (a) {
            return function (e) {
              return l[e * (l.length - 1) | 0];
            };
          } else {
            return c;
          }
        };
      }();
      v.Easings = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        spring: function (e) {
          return 1 - Math.cos(e * 4.5 * Math.PI) * Math.exp(-e * 6);
        }
      };
      f.each([["ease", [0.25, 0.1, 0.25, 1]], ["ease-in", [0.42, 0, 1, 1]], ["ease-out", [0, 0, 0.58, 1]], ["ease-in-out", [0.42, 0, 0.58, 1]], ["easeInSine", [0.47, 0, 0.745, 0.715]], ["easeOutSine", [0.39, 0.575, 0.565, 1]], ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]], ["easeInQuad", [0.55, 0.085, 0.68, 0.53]], ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]], ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]], ["easeInCubic", [0.55, 0.055, 0.675, 0.19]], ["easeOutCubic", [0.215, 0.61, 0.355, 1]], ["easeInOutCubic", [0.645, 0.045, 0.355, 1]], ["easeInQuart", [0.895, 0.03, 0.685, 0.22]], ["easeOutQuart", [0.165, 0.84, 0.44, 1]], ["easeInOutQuart", [0.77, 0, 0.175, 1]], ["easeInQuint", [0.755, 0.05, 0.855, 0.06]], ["easeOutQuint", [0.23, 1, 0.32, 1]], ["easeInOutQuint", [0.86, 0, 0.07, 1]], ["easeInExpo", [0.95, 0.05, 0.795, 0.035]], ["easeOutExpo", [0.19, 1, 0.22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [0.6, 0.04, 0.98, 0.335]], ["easeOutCirc", [0.075, 0.82, 0.165, 1]], ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]], function (e, t) {
        v.Easings[t[0]] = O.apply(null, t[1]);
      });
      var y = v.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
          units: ["%", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "cm", "mm", "Q", "in", "pc", "pt", "px", "deg", "grad", "rad", "turn", "s", "ms"],
          colorNames: {
            aliceblue: "240,248,255",
            antiquewhite: "250,235,215",
            aquamarine: "127,255,212",
            aqua: "0,255,255",
            azure: "240,255,255",
            beige: "245,245,220",
            bisque: "255,228,196",
            black: "0,0,0",
            blanchedalmond: "255,235,205",
            blueviolet: "138,43,226",
            blue: "0,0,255",
            brown: "165,42,42",
            burlywood: "222,184,135",
            cadetblue: "95,158,160",
            chartreuse: "127,255,0",
            chocolate: "210,105,30",
            coral: "255,127,80",
            cornflowerblue: "100,149,237",
            cornsilk: "255,248,220",
            crimson: "220,20,60",
            cyan: "0,255,255",
            darkblue: "0,0,139",
            darkcyan: "0,139,139",
            darkgoldenrod: "184,134,11",
            darkgray: "169,169,169",
            darkgrey: "169,169,169",
            darkgreen: "0,100,0",
            darkkhaki: "189,183,107",
            darkmagenta: "139,0,139",
            darkolivegreen: "85,107,47",
            darkorange: "255,140,0",
            darkorchid: "153,50,204",
            darkred: "139,0,0",
            darksalmon: "233,150,122",
            darkseagreen: "143,188,143",
            darkslateblue: "72,61,139",
            darkslategray: "47,79,79",
            darkturquoise: "0,206,209",
            darkviolet: "148,0,211",
            deeppink: "255,20,147",
            deepskyblue: "0,191,255",
            dimgray: "105,105,105",
            dimgrey: "105,105,105",
            dodgerblue: "30,144,255",
            firebrick: "178,34,34",
            floralwhite: "255,250,240",
            forestgreen: "34,139,34",
            fuchsia: "255,0,255",
            gainsboro: "220,220,220",
            ghostwhite: "248,248,255",
            gold: "255,215,0",
            goldenrod: "218,165,32",
            gray: "128,128,128",
            grey: "128,128,128",
            greenyellow: "173,255,47",
            green: "0,128,0",
            honeydew: "240,255,240",
            hotpink: "255,105,180",
            indianred: "205,92,92",
            indigo: "75,0,130",
            ivory: "255,255,240",
            khaki: "240,230,140",
            lavenderblush: "255,240,245",
            lavender: "230,230,250",
            lawngreen: "124,252,0",
            lemonchiffon: "255,250,205",
            lightblue: "173,216,230",
            lightcoral: "240,128,128",
            lightcyan: "224,255,255",
            lightgoldenrodyellow: "250,250,210",
            lightgray: "211,211,211",
            lightgrey: "211,211,211",
            lightgreen: "144,238,144",
            lightpink: "255,182,193",
            lightsalmon: "255,160,122",
            lightseagreen: "32,178,170",
            lightskyblue: "135,206,250",
            lightslategray: "119,136,153",
            lightsteelblue: "176,196,222",
            lightyellow: "255,255,224",
            limegreen: "50,205,50",
            lime: "0,255,0",
            linen: "250,240,230",
            magenta: "255,0,255",
            maroon: "128,0,0",
            mediumaquamarine: "102,205,170",
            mediumblue: "0,0,205",
            mediumorchid: "186,85,211",
            mediumpurple: "147,112,219",
            mediumseagreen: "60,179,113",
            mediumslateblue: "123,104,238",
            mediumspringgreen: "0,250,154",
            mediumturquoise: "72,209,204",
            mediumvioletred: "199,21,133",
            midnightblue: "25,25,112",
            mintcream: "245,255,250",
            mistyrose: "255,228,225",
            moccasin: "255,228,181",
            navajowhite: "255,222,173",
            navy: "0,0,128",
            oldlace: "253,245,230",
            olivedrab: "107,142,35",
            olive: "128,128,0",
            orangered: "255,69,0",
            orange: "255,165,0",
            orchid: "218,112,214",
            palegoldenrod: "238,232,170",
            palegreen: "152,251,152",
            paleturquoise: "175,238,238",
            palevioletred: "219,112,147",
            papayawhip: "255,239,213",
            peachpuff: "255,218,185",
            peru: "205,133,63",
            pink: "255,192,203",
            plum: "221,160,221",
            powderblue: "176,224,230",
            purple: "128,0,128",
            red: "255,0,0",
            rosybrown: "188,143,143",
            royalblue: "65,105,225",
            saddlebrown: "139,69,19",
            salmon: "250,128,114",
            sandybrown: "244,164,96",
            seagreen: "46,139,87",
            seashell: "255,245,238",
            sienna: "160,82,45",
            silver: "192,192,192",
            skyblue: "135,206,235",
            slateblue: "106,90,205",
            slategray: "112,128,144",
            snow: "255,250,250",
            springgreen: "0,255,127",
            steelblue: "70,130,180",
            tan: "210,180,140",
            teal: "0,128,128",
            thistle: "216,191,216",
            tomato: "255,99,71",
            turquoise: "64,224,208",
            violet: "238,130,238",
            wheat: "245,222,179",
            whitesmoke: "245,245,245",
            white: "255,255,255",
            yellowgreen: "154,205,50",
            yellow: "255,255,0"
          }
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function () {
            for (var e = 0; e < y.Lists.colors.length; e++) {
              var t = y.Lists.colors[e] === "color" ? "0 0 0 1" : "255 255 255 1";
              y.Hooks.templates[y.Lists.colors[e]] = ["Red Green Blue Alpha", t];
            }
            var n;
            var r;
            var i;
            if (a) {
              for (n in y.Hooks.templates) {
                if (y.Hooks.templates.hasOwnProperty(n)) {
                  i = (r = y.Hooks.templates[n])[0].split(" ");
                  var o = r[1].match(y.RegEx.valueSplit);
                  if (i[0] === "Color") {
                    i.push(i.shift());
                    o.push(o.shift());
                    y.Hooks.templates[n] = [i.join(" "), o.join(" ")];
                  }
                }
              }
            }
            for (n in y.Hooks.templates) {
              if (y.Hooks.templates.hasOwnProperty(n)) {
                for (var s in i = (r = y.Hooks.templates[n])[0].split(" ")) {
                  if (i.hasOwnProperty(s)) {
                    var u = n + i[s];
                    var l = s;
                    y.Hooks.registered[u] = [n, l];
                  }
                }
              }
            }
          },
          getRoot: function (e) {
            var t = y.Hooks.registered[e];
            if (t) {
              return t[0];
            } else {
              return e;
            }
          },
          getUnit: function (e, t) {
            var n = (e.substr(t || 0, 5).match(/^[a-z%]+/) || [])[0] || "";
            if (n && l(y.Lists.units)) {
              return n;
            } else {
              return "";
            }
          },
          fixColors: function (e) {
            return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function (e, t, n) {
              if (y.Lists.colorNames.hasOwnProperty(n)) {
                return (t || "rgba(") + y.Lists.colorNames[n] + (t ? "" : ",1)");
              } else {
                return t + n;
              }
            });
          },
          cleanRootPropertyValue: function (e, t) {
            if (y.RegEx.valueUnwrap.test(t)) {
              t = t.match(y.RegEx.valueUnwrap)[1];
            }
            if (y.Values.isCSSNullValue(t)) {
              t = y.Hooks.templates[e][1];
            }
            return t;
          },
          extractValue: function (e, t) {
            var n = y.Hooks.registered[e];
            if (n) {
              var r = n[0];
              var i = n[1];
              return (t = y.Hooks.cleanRootPropertyValue(r, t)).toString().match(y.RegEx.valueSplit)[i];
            }
            return t;
          },
          injectValue: function (e, t, n) {
            var r = y.Hooks.registered[e];
            if (r) {
              var i;
              var a = r[0];
              var o = r[1];
              (i = (n = y.Hooks.cleanRootPropertyValue(a, n)).toString().match(y.RegEx.valueSplit))[o] = t;
              return i.join(" ");
            }
            return n;
          }
        },
        Normalizations: {
          registered: {
            clip: function (e, t, n) {
              switch (e) {
                case "name":
                  return "clip";
                case "extract":
                  var r;
                  return r = y.RegEx.wrappedValueAlreadyExtracted.test(n) ? n : (r = n.toString().match(y.RegEx.valueUnwrap)) ? r[1].replace(/,(\s+)?/g, " ") : n;
                case "inject":
                  return "rect(" + n + ")";
              }
            },
            blur: function (e, t, n) {
              switch (e) {
                case "name":
                  if (v.State.isFirefox) {
                    return "filter";
                  } else {
                    return "-webkit-filter";
                  }
                case "extract":
                  var r = parseFloat(n);
                  if (!r && r !== 0) {
                    var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    r = i ? i[1] : 0;
                  }
                  return r;
                case "inject":
                  if (parseFloat(n)) {
                    return "blur(" + n + ")";
                  } else {
                    return "none";
                  }
              }
            },
            opacity: function (e, t, n) {
              if (a <= 8) {
                switch (e) {
                  case "name":
                    return "filter";
                  case "extract":
                    var r = n.toString().match(/alpha\(opacity=(.*)\)/i);
                    return n = r ? r[1] / 100 : 1;
                  case "inject":
                    t.style.zoom = 1;
                    if (parseFloat(n) >= 1) {
                      return "";
                    } else {
                      return "alpha(opacity=" + parseInt(parseFloat(n) * 100, 10) + ")";
                    }
                }
              } else {
                switch (e) {
                  case "name":
                    return "opacity";
                  case "extract":
                  case "inject":
                    return n;
                }
              }
            }
          },
          register: function () {
            if (!(a && !(a > 9) || v.State.isGingerbread)) {
              y.Lists.transformsBase = y.Lists.transformsBase.concat(y.Lists.transforms3D);
            }
            for (var e = 0; e < y.Lists.transformsBase.length; e++) {
              !function () {
                var t = y.Lists.transformsBase[e];
                y.Normalizations.registered[t] = function (e, n, i) {
                  switch (e) {
                    case "name":
                      return "transform";
                    case "extract":
                      if (x(n) === r || x(n).transformCache[t] === r) {
                        if (/^scale/i.test(t)) {
                          return 1;
                        } else {
                          return 0;
                        }
                      } else {
                        return x(n).transformCache[t].replace(/[()]/g, "");
                      }
                    case "inject":
                      var a = false;
                      switch (t.substr(0, t.length - 1)) {
                        case "translate":
                          a = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);
                          break;
                        case "scal":
                        case "scale":
                          if (v.State.isAndroid && x(n).transformCache[t] === r && i < 1) {
                            i = 1;
                          }
                          a = !/(\d)$/i.test(i);
                          break;
                        case "skew":
                        case "rotate":
                          a = !/(deg|\d)$/i.test(i);
                      }
                      if (!a) {
                        x(n).transformCache[t] = "(" + i + ")";
                      }
                      return x(n).transformCache[t];
                  }
                };
              }();
            }
            for (var t = 0; t < y.Lists.colors.length; t++) {
              !function () {
                var e = y.Lists.colors[t];
                y.Normalizations.registered[e] = function (t, n, i) {
                  switch (t) {
                    case "name":
                      return e;
                    case "extract":
                      var o;
                      if (y.RegEx.wrappedValueAlreadyExtracted.test(i)) {
                        o = i;
                      } else {
                        var s;
                        var u = {
                          black: "rgb(0, 0, 0)",
                          blue: "rgb(0, 0, 255)",
                          gray: "rgb(128, 128, 128)",
                          green: "rgb(0, 128, 0)",
                          red: "rgb(255, 0, 0)",
                          white: "rgb(255, 255, 255)"
                        };
                        if (/^[A-z]+$/i.test(i)) {
                          s = u[i] !== r ? u[i] : u.black;
                        } else if (y.RegEx.isHex.test(i)) {
                          s = "rgb(" + y.Values.hexToRgb(i).join(" ") + ")";
                        } else if (!/^rgba?\(/i.test(i)) {
                          s = u.black;
                        }
                        o = (s || i).toString().match(y.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                      }
                      if ((!a || a > 8) && o.split(" ").length === 3) {
                        o += " 1";
                      }
                      return o;
                    case "inject":
                      if (/^rgb/.test(i)) {
                        return i;
                      } else {
                        if (a <= 8) {
                          if (i.split(" ").length === 4) {
                            i = i.split(/\s+/).slice(0, 3).join(" ");
                          }
                        } else if (i.split(" ").length === 3) {
                          i += " 1";
                        }
                        return (a <= 8 ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                      }
                  }
                };
              }();
            }
            function n(e, t, n) {
              if (y.getPropertyValue(t, "boxSizing").toString().toLowerCase() === "border-box" === (n || false)) {
                var r;
                var i;
                var a = 0;
                var o = e === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
                var s = ["padding" + o[0], "padding" + o[1], "border" + o[0] + "Width", "border" + o[1] + "Width"];
                for (r = 0; r < s.length; r++) {
                  i = parseFloat(y.getPropertyValue(t, s[r]));
                  if (!isNaN(i)) {
                    a += i;
                  }
                }
                if (n) {
                  return -a;
                } else {
                  return a;
                }
              }
              return 0;
            }
            function i(e, t) {
              return function (r, i, a) {
                switch (r) {
                  case "name":
                    return e;
                  case "extract":
                    return parseFloat(a) + n(e, i, t);
                  case "inject":
                    return parseFloat(a) - n(e, i, t) + "px";
                }
              };
            }
            y.Normalizations.registered.innerWidth = i("width", true);
            y.Normalizations.registered.innerHeight = i("height", true);
            y.Normalizations.registered.outerWidth = i("width");
            y.Normalizations.registered.outerHeight = i("height");
          }
        },
        Names: {
          camelCase: function (e) {
            return e.replace(/-(\w)/g, function (e, t) {
              return t.toUpperCase();
            });
          },
          SVGAttribute: function (e) {
            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            if (a || v.State.isAndroid && !v.State.isChrome) {
              t += "|transform";
            }
            return new RegExp("^(" + t + ")$", "i").test(e);
          },
          prefixCheck: function (e) {
            if (v.State.prefixMatches[e]) {
              return [v.State.prefixMatches[e], true];
            }
            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; n < r; n++) {
              var i;
              i = n === 0 ? e : t[n] + e.replace(/^\w/, function (e) {
                return e.toUpperCase();
              });
              if (d.isString(v.State.prefixElement.style[i])) {
                v.State.prefixMatches[e] = i;
                return [i, true];
              }
            }
            return [e, false];
          }
        },
        Values: {
          hexToRgb: function (e) {
            var t;
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, n, r) {
              return t + t + n + n + r + r;
            });
            if (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) {
              return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
            } else {
              return [0, 0, 0];
            }
          },
          isCSSNullValue: function (e) {
            return !e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
          },
          getUnitType: function (e) {
            if (/^(rotate|skew)/i.test(e)) {
              return "deg";
            } else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)) {
              return "";
            } else {
              return "px";
            }
          },
          getDisplayType: function (e) {
            var t = e && e.tagName.toString().toLowerCase();
            if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)) {
              return "inline";
            } else if (/^(li)$/i.test(t)) {
              return "list-item";
            } else if (/^(tr)$/i.test(t)) {
              return "table-row";
            } else if (/^(table)$/i.test(t)) {
              return "table";
            } else if (/^(tbody)$/i.test(t)) {
              return "table-row-group";
            } else {
              return "block";
            }
          },
          addClass: function (e, t) {
            if (e) {
              if (e.classList) {
                e.classList.add(t);
              } else if (d.isString(e.className)) {
                e.className += (e.className.length ? " " : "") + t;
              } else {
                var n = e.getAttribute(a <= 7 ? "className" : "class") || "";
                e.setAttribute("class", n + (n ? " " : "") + t);
              }
            }
          },
          removeClass: function (e, t) {
            if (e) {
              if (e.classList) {
                e.classList.remove(t);
              } else if (d.isString(e.className)) {
                e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
              } else {
                var n = e.getAttribute(a <= 7 ? "className" : "class") || "";
                e.setAttribute("class", n.replace(new RegExp("(^|s)" + t.split(" ").join("|") + "(s|$)", "gi"), " "));
              }
            }
          }
        },
        getPropertyValue: function (e, n, i, o) {
          function s(e, n) {
            var i = 0;
            if (a <= 8) {
              i = f.css(e, n);
            } else {
              var u = false;
              if (/^(width|height)$/.test(n) && y.getPropertyValue(e, "display") === 0) {
                u = true;
                y.setPropertyValue(e, "display", y.Values.getDisplayType(e));
              }
              var l;
              var c = function () {
                if (u) {
                  y.setPropertyValue(e, "display", "none");
                }
              };
              if (!o) {
                if (n === "height" && y.getPropertyValue(e, "boxSizing").toString().toLowerCase() !== "border-box") {
                  var d = e.offsetHeight - (parseFloat(y.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingBottom")) || 0);
                  c();
                  return d;
                }
                if (n === "width" && y.getPropertyValue(e, "boxSizing").toString().toLowerCase() !== "border-box") {
                  var h = e.offsetWidth - (parseFloat(y.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(y.getPropertyValue(e, "paddingRight")) || 0);
                  c();
                  return h;
                }
              }
              l = x(e) === r ? t.getComputedStyle(e, null) : x(e).computedStyle ? x(e).computedStyle : x(e).computedStyle = t.getComputedStyle(e, null);
              if (n === "borderColor") {
                n = "borderTopColor";
              }
              if (!((i = a === 9 && n === "filter" ? l.getPropertyValue(n) : l[n]) !== "" && i !== null)) {
                i = e.style[n];
              }
              c();
            }
            if (i === "auto" && /^(top|right|bottom|left)$/i.test(n)) {
              var p = s(e, "position");
              if (p === "fixed" || p === "absolute" && /top|left/i.test(n)) {
                i = f(e).position()[n] + "px";
              }
            }
            return i;
          }
          var u;
          if (y.Hooks.registered[n]) {
            var l = n;
            var c = y.Hooks.getRoot(l);
            if (i === r) {
              i = y.getPropertyValue(e, y.Names.prefixCheck(c)[0]);
            }
            if (y.Normalizations.registered[c]) {
              i = y.Normalizations.registered[c]("extract", e, i);
            }
            u = y.Hooks.extractValue(l, i);
          } else if (y.Normalizations.registered[n]) {
            var d;
            var h;
            if ((d = y.Normalizations.registered[n]("name", e)) !== "transform") {
              h = s(e, y.Names.prefixCheck(d)[0]);
              if (y.Values.isCSSNullValue(h) && y.Hooks.templates[n]) {
                h = y.Hooks.templates[n][1];
              }
            }
            u = y.Normalizations.registered[n]("extract", e, h);
          }
          if (!/^[\d-]/.test(u)) {
            var p = x(e);
            if (p && p.isSVG && y.Names.SVGAttribute(n)) {
              if (/^(height|width)$/i.test(n)) {
                try {
                  u = e.getBBox()[n];
                } catch (e) {
                  u = 0;
                }
              } else {
                u = e.getAttribute(n);
              }
            } else {
              u = s(e, y.Names.prefixCheck(n)[0]);
            }
          }
          if (y.Values.isCSSNullValue(u)) {
            u = 0;
          }
          if (v.debug >= 2) {
            console.log("Get " + n + ": " + u);
          }
          return u;
        },
        setPropertyValue: function (e, n, r, i, o) {
          var s = n;
          if (n === "scroll") {
            if (o.container) {
              o.container["scroll" + o.direction] = r;
            } else if (o.direction === "Left") {
              t.scrollTo(r, o.alternateValue);
            } else {
              t.scrollTo(o.alternateValue, r);
            }
          } else if (y.Normalizations.registered[n] && y.Normalizations.registered[n]("name", e) === "transform") {
            y.Normalizations.registered[n]("inject", e, r);
            s = "transform";
            r = x(e).transformCache[n];
          } else {
            if (y.Hooks.registered[n]) {
              var u = n;
              var l = y.Hooks.getRoot(n);
              i = i || y.getPropertyValue(e, l);
              r = y.Hooks.injectValue(u, r, i);
              n = l;
            }
            if (y.Normalizations.registered[n]) {
              r = y.Normalizations.registered[n]("inject", e, r);
              n = y.Normalizations.registered[n]("name", e);
            }
            s = y.Names.prefixCheck(n)[0];
            if (a <= 8) {
              try {
                e.style[s] = r;
              } catch (e) {
                if (v.debug) {
                  console.log("Browser does not support [" + r + "] for [" + s + "]");
                }
              }
            } else {
              var c = x(e);
              if (c && c.isSVG && y.Names.SVGAttribute(n)) {
                e.setAttribute(n, r);
              } else {
                e.style[s] = r;
              }
            }
            if (v.debug >= 2) {
              console.log("Set " + n + " (" + s + "): " + r);
            }
          }
          return [s, r];
        },
        flushTransformCache: function (e) {
          var t = "";
          var n = x(e);
          if ((a || v.State.isAndroid && !v.State.isChrome) && n && n.isSVG) {
            var r = function (t) {
              return parseFloat(y.getPropertyValue(e, t));
            };
            var i = {
              translate: [r("translateX"), r("translateY")],
              skewX: [r("skewX")],
              skewY: [r("skewY")],
              scale: r("scale") !== 1 ? [r("scale"), r("scale")] : [r("scaleX"), r("scaleY")],
              rotate: [r("rotateZ"), 0, 0]
            };
            f.each(x(e).transformCache, function (e) {
              if (/^translate/i.test(e)) {
                e = "translate";
              } else if (/^scale/i.test(e)) {
                e = "scale";
              } else if (/^rotate/i.test(e)) {
                e = "rotate";
              }
              if (i[e]) {
                t += e + "(" + i[e].join(" ") + ") ";
                delete i[e];
              }
            });
          } else {
            var o;
            var s;
            f.each(x(e).transformCache, function (n) {
              o = x(e).transformCache[n];
              if (n === "transformPerspective") {
                s = o;
                return true;
              }
              if (a === 9 && n === "rotateZ") {
                n = "rotate";
              }
              t += n + o + " ";
            });
            if (s) {
              t = "perspective" + s + " " + t;
            }
          }
          y.setPropertyValue(e, "transform", t);
        }
      };
      y.Hooks.register();
      y.Normalizations.register();
      v.hook = function (e, t, n) {
        var i;
        e = c(e);
        f.each(e, function (e, a) {
          if (x(a) === r) {
            v.init(a);
          }
          if (n === r) {
            if (i === r) {
              i = y.getPropertyValue(a, t);
            }
          } else {
            var o = y.setPropertyValue(a, t, n);
            if (o[0] === "transform") {
              v.CSS.flushTransformCache(a);
            }
            i = o;
          }
        });
        return i;
      };
      var b = function () {
        var e;
        function i() {
          if (a) {
            return w.promise || null;
          } else {
            return o;
          }
        }
        var a;
        var o;
        var s;
        var u;
        var h;
        var m;
        var g = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || d.isString(arguments[0].properties));
        if (d.isWrapped(this)) {
          a = false;
          s = 0;
          u = this;
          o = this;
        } else {
          a = true;
          s = 1;
          u = g ? arguments[0].elements || arguments[0].e : arguments[0];
        }
        var w = {
          promise: null,
          resolver: null,
          rejecter: null
        };
        if (a && v.Promise) {
          w.promise = new v.Promise(function (e, t) {
            w.resolver = e;
            w.rejecter = t;
          });
        }
        if (g) {
          h = arguments[0].properties || arguments[0].p;
          m = arguments[0].options || arguments[0].o;
        } else {
          h = arguments[s];
          m = arguments[s + 1];
        }
        if (u = c(u)) {
          var _;
          var k = u.length;
          var O = 0;
          if (!/^(stop|finish|finishAll|pause|resume)$/i.test(h) && !f.isPlainObject(m)) {
            var R = s + 1;
            m = {};
            for (var A = R; A < arguments.length; A++) {
              if (d.isArray(arguments[A]) || !/^(fast|normal|slow)$/i.test(arguments[A]) && !/^\d/.test(arguments[A])) {
                if (d.isString(arguments[A]) || d.isArray(arguments[A])) {
                  m.easing = arguments[A];
                } else if (d.isFunction(arguments[A])) {
                  m.complete = arguments[A];
                }
              } else {
                m.duration = arguments[A];
              }
            }
          }
          switch (h) {
            case "scroll":
              _ = "scroll";
              break;
            case "reverse":
              _ = "reverse";
              break;
            case "pause":
              var P = new Date().getTime();
              f.each(u, function (e, t) {
                S(t, P);
              });
              f.each(v.State.calls, function (e, t) {
                var n = false;
                if (t) {
                  f.each(t[1], function (e, i) {
                    var a = m === r ? "" : m;
                    return a !== true && t[2].queue !== a && (m !== r || t[2].queue !== false) || (f.each(u, function (e, r) {
                      if (r === i) {
                        t[5] = {
                          resume: false
                        };
                        n = true;
                        return false;
                      }
                    }), !n && undefined);
                  });
                }
              });
              return i();
            case "resume":
              f.each(u, function (e, t) {
                E(t);
              });
              f.each(v.State.calls, function (e, t) {
                var n = false;
                if (t) {
                  f.each(t[1], function (e, i) {
                    var a = m === r ? "" : m;
                    return a !== true && t[2].queue !== a && (m !== r || t[2].queue !== false) || !t[5] || (f.each(u, function (e, r) {
                      if (r === i) {
                        t[5].resume = true;
                        n = true;
                        return false;
                      }
                    }), !n && undefined);
                  });
                }
              });
              return i();
            case "finish":
            case "finishAll":
            case "stop":
              f.each(u, function (e, t) {
                if (x(t) && x(t).delayTimer) {
                  clearTimeout(x(t).delayTimer.setTimeout);
                  if (x(t).delayTimer.next) {
                    x(t).delayTimer.next();
                  }
                  delete x(t).delayTimer;
                }
                if (!(h !== "finishAll" || m !== true && !d.isString(m))) {
                  f.each(f.queue(t, d.isString(m) ? m : ""), function (e, t) {
                    if (d.isFunction(t)) {
                      t();
                    }
                  });
                  f.queue(t, d.isString(m) ? m : "", []);
                }
              });
              var C = [];
              f.each(v.State.calls, function (e, t) {
                if (t) {
                  f.each(t[1], function (n, i) {
                    var a = m === r ? "" : m;
                    if (a !== true && t[2].queue !== a && (m !== r || t[2].queue !== false)) {
                      return true;
                    }
                    f.each(u, function (n, r) {
                      if (r === i) {
                        if (m === true || d.isString(m)) {
                          f.each(f.queue(r, d.isString(m) ? m : ""), function (e, t) {
                            if (d.isFunction(t)) {
                              t(null, true);
                            }
                          });
                          f.queue(r, d.isString(m) ? m : "", []);
                        }
                        if (h === "stop") {
                          var o = x(r);
                          if (o && o.tweensContainer && (a === true || a === "")) {
                            f.each(o.tweensContainer, function (e, t) {
                              t.endValue = t.currentValue;
                            });
                          }
                          C.push(e);
                        } else if (!(h !== "finish" && h !== "finishAll")) {
                          t[2].duration = 1;
                        }
                      }
                    });
                  });
                }
              });
              if (h === "stop") {
                f.each(C, function (e, t) {
                  M(t, true);
                });
                if (w.promise) {
                  w.resolver(u);
                }
              }
              return i();
            default:
              if (!f.isPlainObject(h) || d.isEmptyObject(h)) {
                if (d.isString(h) && v.Redirects[h]) {
                  var D = (e = f.extend({}, m)).duration;
                  var U = e.delay || 0;
                  if (e.backwards === true) {
                    u = f.extend(true, [], u).reverse();
                  }
                  f.each(u, function (t, n) {
                    if (parseFloat(e.stagger)) {
                      e.delay = U + parseFloat(e.stagger) * t;
                    } else if (d.isFunction(e.stagger)) {
                      e.delay = U + e.stagger.call(n, t, k);
                    }
                    if (e.drag) {
                      e.duration = parseFloat(D) || (/^(callout|transition)/.test(h) ? 1000 : p);
                      e.duration = Math.max(e.duration * (e.backwards ? 1 - t / k : (t + 1) / k), e.duration * 0.75, 200);
                    }
                    v.Redirects[h].call(n, n, e || {}, t, k, u, w.promise ? w : r);
                  });
                  return i();
                }
                var I = "Velocity: First argument (" + h + ") was not a property map, a known action, or a registered redirect. Aborting.";
                if (w.promise) {
                  w.rejecter(new Error(I));
                } else if (t.console) {
                  console.log(I);
                }
                return i();
              }
              _ = "start";
          }
          var L = {
            lastParent: null,
            lastPosition: null,
            lastFontSize: null,
            lastPercentToPxWidth: null,
            lastPercentToPxHeight: null,
            lastEmToPx: null,
            remToPx: null,
            vwToPx: null,
            vhToPx: null
          };
          var j = [];
          f.each(u, function (e, t) {
            if (d.isNode(t)) {
              V(t, e);
            }
          });
          (e = f.extend({}, v.defaults, m)).loop = parseInt(e.loop, 10);
          var F = e.loop * 2 - 1;
          if (e.loop) {
            for (var z = 0; z < F; z++) {
              var B = {
                delay: e.delay,
                progress: e.progress
              };
              if (z === F - 1) {
                B.display = e.display;
                B.visibility = e.visibility;
                B.complete = e.complete;
              }
              b(u, "reverse", B);
            }
          }
          return i();
        }
        function V(e, i) {
          var a;
          var o;
          var s = f.extend({}, v.defaults, m);
          var c = {};
          if (x(e) === r) {
            v.init(e);
          }
          if (parseFloat(s.delay) && s.queue !== false) {
            f.queue(e, s.queue, function (t, n) {
              if (n === true) {
                return true;
              }
              v.velocityQueueEntryFlag = true;
              var r = v.State.delayedElements.count++;
              v.State.delayedElements[r] = e;
              var i;
              i = r;
              var a = function () {
                v.State.delayedElements[i] = false;
                t();
              };
              x(e).delayBegin = new Date().getTime();
              x(e).delay = parseFloat(s.delay);
              x(e).delayTimer = {
                setTimeout: setTimeout(t, parseFloat(s.delay)),
                next: a
              };
            });
          }
          switch (s.duration.toString().toLowerCase()) {
            case "fast":
              s.duration = 200;
              break;
            case "normal":
              s.duration = p;
              break;
            case "slow":
              s.duration = 600;
              break;
            default:
              s.duration = parseFloat(s.duration) || 1;
          }
          function g(o) {
            var p;
            var g;
            if (s.begin && O === 0) {
              try {
                s.begin.call(u, u);
              } catch (e) {
                setTimeout(function () {
                  throw e;
                }, 1);
              }
            }
            if (_ === "scroll") {
              var b;
              var S;
              var E;
              var M = /^x$/i.test(s.axis) ? "Left" : "Top";
              var R = parseFloat(s.offset) || 0;
              if (s.container) {
                if (d.isWrapped(s.container) || d.isNode(s.container)) {
                  s.container = s.container[0] || s.container;
                  E = (b = s.container["scroll" + M]) + f(e).position()[M.toLowerCase()] + R;
                } else {
                  s.container = null;
                }
              } else {
                b = v.State.scrollAnchor[v.State["scrollProperty" + M]];
                S = v.State.scrollAnchor[v.State["scrollProperty" + (M === "Left" ? "Top" : "Left")]];
                E = f(e).offset()[M.toLowerCase()] + R;
              }
              c = {
                scroll: {
                  rootPropertyValue: false,
                  startValue: b,
                  currentValue: b,
                  endValue: E,
                  unitType: "",
                  easing: s.easing,
                  scrollData: {
                    container: s.container,
                    direction: M,
                    alternateValue: S
                  }
                },
                element: e
              };
              if (v.debug) {
                console.log("tweensContainer (scroll): ", c.scroll, e);
              }
            } else if (_ === "reverse") {
              if (!(p = x(e))) {
                return;
              }
              if (!p.tweensContainer) {
                return void f.dequeue(e, s.queue);
              }
              if (p.opts.display === "none") {
                p.opts.display = "auto";
              }
              if (p.opts.visibility === "hidden") {
                p.opts.visibility = "visible";
              }
              p.opts.loop = false;
              p.opts.begin = null;
              p.opts.complete = null;
              if (!m.easing) {
                delete s.easing;
              }
              if (!m.duration) {
                delete s.duration;
              }
              s = f.extend({}, p.opts, s);
              for (var A in g = f.extend(true, {}, p ? p.tweensContainer : null)) {
                if (g.hasOwnProperty(A) && A !== "element") {
                  var P = g[A].startValue;
                  g[A].startValue = g[A].currentValue = g[A].endValue;
                  g[A].endValue = P;
                  if (!d.isEmptyObject(m)) {
                    g[A].easing = s.easing;
                  }
                  if (v.debug) {
                    console.log("reverse tweensContainer (" + A + "): " + JSON.stringify(g[A]), e);
                  }
                }
              }
              c = g;
            } else if (_ === "start") {
              if ((p = x(e)) && p.tweensContainer && p.isAnimating === true) {
                g = p.tweensContainer;
              }
              var C = function (t, n) {
                var r;
                var a;
                var o;
                if (d.isFunction(t)) {
                  t = t.call(e, i, k);
                }
                if (d.isArray(t)) {
                  r = t[0];
                  if (!d.isArray(t[1]) && /^[\d-]/.test(t[1]) || d.isFunction(t[1]) || y.RegEx.isHex.test(t[1])) {
                    o = t[1];
                  } else if (d.isString(t[1]) && !y.RegEx.isHex.test(t[1]) && v.Easings[t[1]] || d.isArray(t[1])) {
                    a = n ? t[1] : N(t[1], s.duration);
                    o = t[2];
                  } else {
                    o = t[1] || t[2];
                  }
                } else {
                  r = t;
                }
                if (!n) {
                  a = a || s.easing;
                }
                if (d.isFunction(r)) {
                  r = r.call(e, i, k);
                }
                if (d.isFunction(o)) {
                  o = o.call(e, i, k);
                }
                return [r || 0, a, o];
              };
              var D = function (i, o) {
                var u;
                var l = y.Hooks.getRoot(i);
                var h = false;
                var m = o[0];
                var b = o[1];
                var w = o[2];
                if (p && p.isSVG || l === "tween" || y.Names.prefixCheck(l)[1] !== false || y.Normalizations.registered[l] !== r) {
                  if ((s.display !== r && s.display !== null && s.display !== "none" || s.visibility !== r && s.visibility !== "hidden") && /opacity|filter/.test(i) && !w && m !== 0) {
                    w = 0;
                  }
                  if (s._cacheValues && g && g[i]) {
                    if (w === r) {
                      w = g[i].endValue + g[i].unitType;
                    }
                    h = p.rootPropertyValueCache[l];
                  } else if (y.Hooks.registered[i]) {
                    if (w === r) {
                      h = y.getPropertyValue(e, l);
                      w = y.getPropertyValue(e, i, h);
                    } else {
                      h = y.Hooks.templates[l][1];
                    }
                  } else if (w === r) {
                    w = y.getPropertyValue(e, i);
                  }
                  var _;
                  var x;
                  var S;
                  var E = false;
                  var k = function (e, t) {
                    var n;
                    var r;
                    r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                      n = e;
                      return "";
                    });
                    if (!n) {
                      n = y.Values.getUnitType(e);
                    }
                    return [r, n];
                  };
                  if (w !== m && d.isString(w) && d.isString(m)) {
                    u = "";
                    var O = 0;
                    var N = 0;
                    var T = [];
                    var M = [];
                    var R = 0;
                    var A = 0;
                    var P = 0;
                    w = y.Hooks.fixColors(w);
                    m = y.Hooks.fixColors(m);
                    for (; O < w.length && N < m.length;) {
                      var C = w[O];
                      var D = m[N];
                      if (/[\d\.-]/.test(C) && /[\d\.-]/.test(D)) {
                        for (var U = C, I = D, j = ".", F = "."; ++O < w.length;) {
                          if ((C = w[O]) === j) {
                            j = "..";
                          } else if (!/\d/.test(C)) {
                            break;
                          }
                          U += C;
                        }
                        for (; ++N < m.length;) {
                          if ((D = m[N]) === F) {
                            F = "..";
                          } else if (!/\d/.test(D)) {
                            break;
                          }
                          I += D;
                        }
                        var z = y.Hooks.getUnit(w, O);
                        var B = y.Hooks.getUnit(m, N);
                        O += z.length;
                        N += B.length;
                        if (z === B) {
                          if (U === I) {
                            u += U + z;
                          } else {
                            u += "{" + T.length + (A ? "!" : "") + "}" + z;
                            T.push(parseFloat(U));
                            M.push(parseFloat(I));
                          }
                        } else {
                          var V = parseFloat(U);
                          var Y = parseFloat(I);
                          u += (R < 5 ? "calc" : "") + "(" + (V ? "{" + T.length + (A ? "!" : "") + "}" : "0") + z + " + " + (Y ? "{" + (T.length + (V ? 1 : 0)) + (A ? "!" : "") + "}" : "0") + B + ")";
                          if (V) {
                            T.push(V);
                            M.push(0);
                          }
                          if (Y) {
                            T.push(0);
                            M.push(Y);
                          }
                        }
                      } else {
                        if (C !== D) {
                          R = 0;
                          break;
                        }
                        u += C;
                        O++;
                        N++;
                        if (R === 0 && C === "c" || R === 1 && C === "a" || R === 2 && C === "l" || R === 3 && C === "c" || R >= 4 && C === "(") {
                          R++;
                        } else if (R && R < 5 || R >= 4 && C === ")" && --R < 5) {
                          R = 0;
                        }
                        if (A === 0 && C === "r" || A === 1 && C === "g" || A === 2 && C === "b" || A === 3 && C === "a" || A >= 3 && C === "(") {
                          if (A === 3 && C === "a") {
                            P = 1;
                          }
                          A++;
                        } else if (P && C === ",") {
                          if (++P > 3) {
                            A = P = 0;
                          }
                        } else if (P && A < (P ? 5 : 4) || A >= (P ? 4 : 3) && C === ")" && --A < (P ? 5 : 4)) {
                          A = P = 0;
                        }
                      }
                    }
                    if (!(O === w.length && N === m.length)) {
                      if (v.debug) {
                        console.error("Trying to pattern match mis-matched strings [\"" + m + "\", \"" + w + "\"]");
                      }
                      u = r;
                    }
                    if (u) {
                      if (T.length) {
                        if (v.debug) {
                          console.log("Pattern found \"" + u + "\" -> ", T, M, "[" + w + "," + m + "]");
                        }
                        w = T;
                        m = M;
                        x = S = "";
                      } else {
                        u = r;
                      }
                    }
                  }
                  if (!u) {
                    w = (_ = k(i, w))[0];
                    S = _[1];
                    m = (_ = k(i, m))[0].replace(/^([+-\/*])=/, function (e, t) {
                      E = t;
                      return "";
                    });
                    x = _[1];
                    w = parseFloat(w) || 0;
                    m = parseFloat(m) || 0;
                    if (x === "%") {
                      if (/^(fontSize|lineHeight)$/.test(i)) {
                        m /= 100;
                        x = "em";
                      } else if (/^scale/.test(i)) {
                        m /= 100;
                        x = "";
                      } else if (/(Red|Green|Blue)$/i.test(i)) {
                        m = m / 100 * 255;
                        x = "";
                      }
                    }
                  }
                  if (/[\/*]/.test(E)) {
                    x = S;
                  } else if (S !== x && w !== 0) {
                    if (m === 0) {
                      x = S;
                    } else {
                      a = a || function () {
                        var r = {
                          myParent: e.parentNode || n.body,
                          position: y.getPropertyValue(e, "position"),
                          fontSize: y.getPropertyValue(e, "fontSize")
                        };
                        var i = r.position === L.lastPosition && r.myParent === L.lastParent;
                        var a = r.fontSize === L.lastFontSize;
                        L.lastParent = r.myParent;
                        L.lastPosition = r.position;
                        L.lastFontSize = r.fontSize;
                        var o = 100;
                        var s = {};
                        if (a && i) {
                          s.emToPx = L.lastEmToPx;
                          s.percentToPxWidth = L.lastPercentToPxWidth;
                          s.percentToPxHeight = L.lastPercentToPxHeight;
                        } else {
                          var u = p && p.isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                          v.init(u);
                          r.myParent.appendChild(u);
                          f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                            v.CSS.setPropertyValue(u, t, "hidden");
                          });
                          v.CSS.setPropertyValue(u, "position", r.position);
                          v.CSS.setPropertyValue(u, "fontSize", r.fontSize);
                          v.CSS.setPropertyValue(u, "boxSizing", "content-box");
                          f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                            v.CSS.setPropertyValue(u, t, "100%");
                          });
                          v.CSS.setPropertyValue(u, "paddingLeft", "100em");
                          s.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(y.getPropertyValue(u, "width", null, true)) || 1) / o;
                          s.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(y.getPropertyValue(u, "height", null, true)) || 1) / o;
                          s.emToPx = L.lastEmToPx = (parseFloat(y.getPropertyValue(u, "paddingLeft")) || 1) / o;
                          r.myParent.removeChild(u);
                        }
                        if (L.remToPx === null) {
                          L.remToPx = parseFloat(y.getPropertyValue(n.body, "fontSize")) || 16;
                        }
                        if (L.vwToPx === null) {
                          L.vwToPx = parseFloat(t.innerWidth) / 100;
                          L.vhToPx = parseFloat(t.innerHeight) / 100;
                        }
                        s.remToPx = L.remToPx;
                        s.vwToPx = L.vwToPx;
                        s.vhToPx = L.vhToPx;
                        if (v.debug >= 1) {
                          console.log("Unit ratios: " + JSON.stringify(s), e);
                        }
                        return s;
                      }();
                      var H = /margin|padding|left|right|width|text|word|letter/i.test(i) || /X$/.test(i) || i === "x" ? "x" : "y";
                      switch (S) {
                        case "%":
                          w *= H === "x" ? a.percentToPxWidth : a.percentToPxHeight;
                          break;
                        case "px":
                          break;
                        default:
                          w *= a[S + "ToPx"];
                      }
                      switch (x) {
                        case "%":
                          w *= 1 / (H === "x" ? a.percentToPxWidth : a.percentToPxHeight);
                          break;
                        case "px":
                          break;
                        default:
                          w *= 1 / a[x + "ToPx"];
                      }
                    }
                  }
                  switch (E) {
                    case "+":
                      m = w + m;
                      break;
                    case "-":
                      m = w - m;
                      break;
                    case "*":
                      m *= w;
                      break;
                    case "/":
                      m = w / m;
                  }
                  c[i] = {
                    rootPropertyValue: h,
                    startValue: w,
                    currentValue: w,
                    endValue: m,
                    unitType: x,
                    easing: b
                  };
                  if (u) {
                    c[i].pattern = u;
                  }
                  if (v.debug) {
                    console.log("tweensContainer (" + i + "): " + JSON.stringify(c[i]), e);
                  }
                } else if (v.debug) {
                  console.log("Skipping [" + l + "] due to a lack of browser support.");
                }
              };
              for (var U in h) {
                if (h.hasOwnProperty(U)) {
                  var I = y.Names.camelCase(U);
                  var F = C(h[U]);
                  if (l(y.Lists.colors)) {
                    var z = F[0];
                    var B = F[1];
                    var V = F[2];
                    if (y.RegEx.isHex.test(z)) {
                      for (var Y = ["Red", "Green", "Blue"], H = y.Values.hexToRgb(z), $ = V ? y.Values.hexToRgb(V) : r, W = 0; W < Y.length; W++) {
                        var G = [H[W]];
                        if (B) {
                          G.push(B);
                        }
                        if ($ !== r) {
                          G.push($[W]);
                        }
                        D(I + Y[W], G);
                      }
                      continue;
                    }
                  }
                  D(I, F);
                }
              }
              c.element = e;
            }
            if (c.element) {
              y.Values.addClass(e, "velocity-animating");
              j.push(c);
              if (p = x(e)) {
                if (s.queue === "") {
                  p.tweensContainer = c;
                  p.opts = s;
                }
                p.isAnimating = true;
              }
              if (O === k - 1) {
                v.State.calls.push([j, u, s, null, w.resolver, null, 0]);
                if (v.State.isTicking === false) {
                  v.State.isTicking = true;
                  T();
                }
              } else {
                O++;
              }
            }
          }
          if (v.mock !== false) {
            if (v.mock === true) {
              s.duration = s.delay = 1;
            } else {
              s.duration *= parseFloat(v.mock) || 1;
              s.delay *= parseFloat(v.mock) || 1;
            }
          }
          s.easing = N(s.easing, s.duration);
          if (s.begin && !d.isFunction(s.begin)) {
            s.begin = null;
          }
          if (s.progress && !d.isFunction(s.progress)) {
            s.progress = null;
          }
          if (s.complete && !d.isFunction(s.complete)) {
            s.complete = null;
          }
          if (s.display !== r && s.display !== null) {
            s.display = s.display.toString().toLowerCase();
            if (s.display === "auto") {
              s.display = v.CSS.Values.getDisplayType(e);
            }
          }
          if (s.visibility !== r && s.visibility !== null) {
            s.visibility = s.visibility.toString().toLowerCase();
          }
          s.mobileHA = s.mobileHA && v.State.isMobile && !v.State.isGingerbread;
          if (s.queue === false) {
            if (s.delay) {
              var b = v.State.delayedElements.count++;
              v.State.delayedElements[b] = e;
              o = b;
              var S = function () {
                v.State.delayedElements[o] = false;
                g();
              };
              x(e).delayBegin = new Date().getTime();
              x(e).delay = parseFloat(s.delay);
              x(e).delayTimer = {
                setTimeout: setTimeout(g, parseFloat(s.delay)),
                next: S
              };
            } else {
              g();
            }
          } else {
            f.queue(e, s.queue, function (e, t) {
              if (t === true) {
                if (w.promise) {
                  w.resolver(u);
                }
                return true;
              }
              v.velocityQueueEntryFlag = true;
              g();
            });
          }
          if (!(s.queue !== "" && s.queue !== "fx" || f.queue(e)[0] === "inprogress")) {
            f.dequeue(e);
          }
        }
        if (w.promise) {
          if (h && m && m.promiseRejectEmpty === false) {
            w.resolver();
          } else {
            w.rejecter();
          }
        }
      };
      (v = f.extend(b, v)).animate = b;
      var w = t.requestAnimationFrame || o;
      if (!v.State.isMobile && n.hidden !== r) {
        var _ = function () {
          if (n.hidden) {
            w = function (e) {
              return setTimeout(function () {
                e(true);
              }, 16);
            };
            T();
          } else {
            w = t.requestAnimationFrame || o;
          }
        };
        _();
        n.addEventListener("visibilitychange", _);
      }
      e.Velocity = v;
      if (e !== t) {
        e.fn.velocity = b;
        e.fn.velocity.defaults = v.defaults;
      }
      f.each(["Down", "Up"], function (e, t) {
        v.Redirects["slide" + t] = function (e, n, i, a, o, s) {
          var u = f.extend({}, n);
          var l = u.begin;
          var c = u.complete;
          var d = {};
          var h = {
            height: "",
            marginTop: "",
            marginBottom: "",
            paddingTop: "",
            paddingBottom: ""
          };
          if (u.display === r) {
            u.display = t === "Down" ? v.CSS.Values.getDisplayType(e) === "inline" ? "inline-block" : "block" : "none";
          }
          u.begin = function () {
            if (i === 0 && l) {
              l.call(o, o);
            }
            for (var n in h) {
              if (h.hasOwnProperty(n)) {
                d[n] = e.style[n];
                var r = y.getPropertyValue(e, n);
                h[n] = t === "Down" ? [r, 0] : [0, r];
              }
            }
            d.overflow = e.style.overflow;
            e.style.overflow = "hidden";
          };
          u.complete = function () {
            for (var t in d) {
              if (d.hasOwnProperty(t)) {
                e.style[t] = d[t];
              }
            }
            if (i === a - 1) {
              if (c) {
                c.call(o, o);
              }
              if (s) {
                s.resolver(o);
              }
            }
          };
          v(e, h, u);
        };
      });
      f.each(["In", "Out"], function (e, t) {
        v.Redirects["fade" + t] = function (e, n, i, a, o, s) {
          var u = f.extend({}, n);
          var l = u.complete;
          var c = {
            opacity: t === "In" ? 1 : 0
          };
          if (i !== 0) {
            u.begin = null;
          }
          u.complete = i !== a - 1 ? null : function () {
            if (l) {
              l.call(o, o);
            }
            if (s) {
              s.resolver(o);
            }
          };
          if (u.display === r) {
            u.display = t === "In" ? "auto" : "none";
          }
          v(this, c, u);
        };
      });
      return v;
    }
    function x(e) {
      var t = f.data(e, "velocity");
      if (t === null) {
        return r;
      } else {
        return t;
      }
    }
    function S(e, t) {
      var n = x(e);
      if (n && n.delayTimer && !n.delayPaused) {
        n.delayRemaining = n.delay - t + n.delayBegin;
        n.delayPaused = true;
        clearTimeout(n.delayTimer.setTimeout);
      }
    }
    function E(e, t) {
      var n = x(e);
      if (n && n.delayTimer && n.delayPaused) {
        n.delayPaused = false;
        n.delayTimer.setTimeout = setTimeout(n.delayTimer.next, n.delayRemaining);
      }
    }
    function k(e) {
      return function (t) {
        return Math.round(t * e) * (1 / e);
      };
    }
    function O(e, n, r, i) {
      var a = 4;
      var o = 0.001;
      var s = 1e-7;
      var u = 10;
      var l = 11;
      var c = 1 / (l - 1);
      var f = ("Float32Array" in t);
      if (arguments.length !== 4) {
        return false;
      }
      for (var d = 0; d < 4; ++d) {
        if (typeof arguments[d] != "number" || isNaN(arguments[d]) || !isFinite(arguments[d])) {
          return false;
        }
      }
      e = Math.min(e, 1);
      r = Math.min(r, 1);
      e = Math.max(e, 0);
      r = Math.max(r, 0);
      var h = f ? new Float32Array(l) : new Array(l);
      function p(e, t) {
        return 1 - t * 3 + e * 3;
      }
      function m(e, t) {
        return t * 3 - e * 6;
      }
      function v(e) {
        return e * 3;
      }
      function g(e, t, n) {
        return ((p(t, n) * e + m(t, n)) * e + v(t)) * e;
      }
      function y(e, t, n) {
        return p(t, n) * 3 * e * e + m(t, n) * 2 * e + v(t);
      }
      function b(t, n) {
        for (var i = 0; i < a; ++i) {
          var o = y(n, e, r);
          if (o === 0) {
            return n;
          }
          n -= (g(n, e, r) - t) / o;
        }
        return n;
      }
      function w() {
        for (var t = 0; t < l; ++t) {
          h[t] = g(t * c, e, r);
        }
      }
      function _(t, n, i) {
        var a;
        var o;
        var l = 0;
        do {
          if ((a = g(o = n + (i - n) / 2, e, r) - t) > 0) {
            i = o;
          } else {
            n = o;
          }
        } while (Math.abs(a) > s && ++l < u);
        return o;
      }
      function x(t) {
        for (var n = 0, i = 1, a = l - 1; i !== a && h[i] <= t; ++i) {
          n += c;
        }
        --i;
        var s = n + (t - h[i]) / (h[i + 1] - h[i]) * c;
        var u = y(s, e, r);
        if (u >= o) {
          return b(t, s);
        } else if (u === 0) {
          return s;
        } else {
          return _(t, n, n + c);
        }
      }
      var S = false;
      function E() {
        S = true;
        if (!(e === n && r === i)) {
          w();
        }
      }
      var k = function (t) {
        if (!S) {
          E();
        }
        if (e === n && r === i) {
          return t;
        } else if (t === 0) {
          return 0;
        } else if (t === 1) {
          return 1;
        } else {
          return g(x(t), n, i);
        }
      };
      k.getControlPoints = function () {
        return [{
          x: e,
          y: n
        }, {
          x: r,
          y: i
        }];
      };
      var O = "generateBezier(" + [e, n, r, i] + ")";
      k.toString = function () {
        return O;
      };
      return k;
    }
    function N(e, t) {
      var n = e;
      if (d.isString(e)) {
        if (!v.Easings[e]) {
          n = false;
        }
      } else {
        n = d.isArray(e) && e.length === 1 ? k.apply(null, e) : d.isArray(e) && e.length === 2 ? g.apply(null, e.concat([t])) : !(!d.isArray(e) || e.length !== 4) && O.apply(null, e);
      }
      if (n === false) {
        n = v.Easings[v.defaults.easing] ? v.defaults.easing : m;
      }
      return n;
    }
    function T(e) {
      if (e) {
        var t = v.timestamp && e !== true ? e : s.now();
        var n = v.State.calls.length;
        if (n > 10000) {
          v.State.calls = function (e) {
            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
              var i = e[t];
              if (i) {
                r.push(i);
              }
            }
            return r;
          }(v.State.calls);
          n = v.State.calls.length;
        }
        for (var i = 0; i < n; i++) {
          if (v.State.calls[i]) {
            var o = v.State.calls[i];
            var u = o[0];
            var l = o[2];
            var c = o[3];
            var h = !c;
            var p = null;
            var m = o[5];
            var g = o[6];
            if (!c) {
              c = v.State.calls[i][3] = t - 16;
            }
            if (m) {
              if (m.resume !== true) {
                continue;
              }
              c = o[3] = Math.round(t - g - 16);
              o[5] = null;
            }
            g = o[6] = t - c;
            for (var b = Math.min(g / l.duration, 1), _ = 0, S = u.length; _ < S; _++) {
              var E = u[_];
              var k = E.element;
              if (x(k)) {
                var O = false;
                if (l.display !== r && l.display !== null && l.display !== "none") {
                  if (l.display === "flex") {
                    f.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function (e, t) {
                      y.setPropertyValue(k, "display", t);
                    });
                  }
                  y.setPropertyValue(k, "display", l.display);
                }
                if (l.visibility !== r && l.visibility !== "hidden") {
                  y.setPropertyValue(k, "visibility", l.visibility);
                }
                for (var N in E) {
                  if (E.hasOwnProperty(N) && N !== "element") {
                    var R;
                    var A = E[N];
                    var P = d.isString(A.easing) ? v.Easings[A.easing] : A.easing;
                    if (d.isString(A.pattern)) {
                      var C = b === 1 ? function (e, t, n) {
                        var r = A.endValue[t];
                        if (n) {
                          return Math.round(r);
                        } else {
                          return r;
                        }
                      } : function (e, t, n) {
                        var r = A.startValue[t];
                        var i = A.endValue[t] - r;
                        var a = r + i * P(b, l, i);
                        if (n) {
                          return Math.round(a);
                        } else {
                          return a;
                        }
                      };
                      R = A.pattern.replace(/{(\d+)(!)?}/g, C);
                    } else if (b === 1) {
                      R = A.endValue;
                    } else {
                      var D = A.endValue - A.startValue;
                      R = A.startValue + D * P(b, l, D);
                    }
                    if (!h && R === A.currentValue) {
                      continue;
                    }
                    A.currentValue = R;
                    if (N === "tween") {
                      p = R;
                    } else {
                      var U;
                      if (y.Hooks.registered[N]) {
                        U = y.Hooks.getRoot(N);
                        var I = x(k).rootPropertyValueCache[U];
                        if (I) {
                          A.rootPropertyValue = I;
                        }
                      }
                      var L = y.setPropertyValue(k, N, A.currentValue + (a < 9 && parseFloat(R) === 0 ? "" : A.unitType), A.rootPropertyValue, A.scrollData);
                      if (y.Hooks.registered[N]) {
                        if (y.Normalizations.registered[U]) {
                          x(k).rootPropertyValueCache[U] = y.Normalizations.registered[U]("extract", null, L[1]);
                        } else {
                          x(k).rootPropertyValueCache[U] = L[1];
                        }
                      }
                      if (L[0] === "transform") {
                        O = true;
                      }
                    }
                  }
                }
                if (l.mobileHA && x(k).transformCache.translate3d === r) {
                  x(k).transformCache.translate3d = "(0px, 0px, 0px)";
                  O = true;
                }
                if (O) {
                  y.flushTransformCache(k);
                }
              }
            }
            if (l.display !== r && l.display !== "none") {
              v.State.calls[i][2].display = false;
            }
            if (l.visibility !== r && l.visibility !== "hidden") {
              v.State.calls[i][2].visibility = false;
            }
            if (l.progress) {
              l.progress.call(o[1], o[1], b, Math.max(0, c + l.duration - t), c, p);
            }
            if (b === 1) {
              M(i);
            }
          }
        }
      }
      if (v.State.isTicking) {
        w(T);
      }
    }
    function M(e, t) {
      if (!v.State.calls[e]) {
        return false;
      }
      for (var n = v.State.calls[e][0], i = v.State.calls[e][1], a = v.State.calls[e][2], o = v.State.calls[e][4], s = false, u = 0, l = n.length; u < l; u++) {
        var c = n[u].element;
        if (!(t || a.loop)) {
          if (a.display === "none") {
            y.setPropertyValue(c, "display", a.display);
          }
          if (a.visibility === "hidden") {
            y.setPropertyValue(c, "visibility", a.visibility);
          }
        }
        var d = x(c);
        if (a.loop !== true && (f.queue(c)[1] === r || !/\.velocityQueueEntryFlag/i.test(f.queue(c)[1])) && d) {
          d.isAnimating = false;
          d.rootPropertyValueCache = {};
          var h = false;
          f.each(y.Lists.transforms3D, function (e, t) {
            var n = /^scale/.test(t) ? 1 : 0;
            var i = d.transformCache[t];
            if (d.transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i)) {
              h = true;
              delete d.transformCache[t];
            }
          });
          if (a.mobileHA) {
            h = true;
            delete d.transformCache.translate3d;
          }
          if (h) {
            y.flushTransformCache(c);
          }
          y.Values.removeClass(c, "velocity-animating");
        }
        if (!t && a.complete && !a.loop && u === l - 1) {
          try {
            a.complete.call(i, i);
          } catch (e) {
            setTimeout(function () {
              throw e;
            }, 1);
          }
        }
        if (o && a.loop !== true) {
          o(i);
        }
        if (d && a.loop === true && !t) {
          f.each(d.tweensContainer, function (e, t) {
            if (/^rotate/.test(e) && (parseFloat(t.startValue) - parseFloat(t.endValue)) % 360 == 0) {
              var n = t.startValue;
              t.startValue = t.endValue;
              t.endValue = n;
            }
            if (/^backgroundPosition/.test(e) && parseFloat(t.endValue) === 100 && t.unitType === "%") {
              t.endValue = 0;
              t.startValue = 100;
            }
          });
          v(c, "reverse", {
            loop: true,
            delay: a.delay
          });
        }
        if (a.queue !== false) {
          f.dequeue(c, a.queue);
        }
      }
      v.State.calls[e] = false;
      for (var p = 0, m = v.State.calls.length; p < m; p++) {
        if (v.State.calls[p] !== false) {
          s = true;
          break;
        }
      }
      if (s === false) {
        v.State.isTicking = false;
        delete v.State.calls;
        v.State.calls = [];
      }
    }
    jQuery.fn.velocity = jQuery.fn.animate;
  }(window.jQuery || window.Zepto || window, window, window ? window.document : undefined);
});