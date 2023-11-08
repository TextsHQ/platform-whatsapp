var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const t = (0, u.useRef)(null);
  const n = (0, l.useIsDarkTheme)();
  return u.default.createElement("div", {
    className: (0, s.default)(d, e.isBotMsgStreaming === true ? [i.uiMargin.top8, i.uiMargin.bottom4] : [i.uiMargin.all9])
  }, u.default.createElement(o.LottieAnimation, {
    ref: t,
    autoplay: true,
    direction: r.default.isRTL() ? -1 : 1,
    loop: true,
    data: f(n)
  }));
};
var r = a(require("../app/932325.js"));
var o = require("./617267.js");
var l = require("../app/667738.js");
var i = require("../app/676345.js");
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var s = a(require("../app/156720.js"));
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = {
  width: "hgg0ttet",
  height: "ilf8vifs"
};
function f(e) {
  if (e) {
    return {
      v: "5.10.2",
      fr: 60,
      ip: 0,
      op: 100,
      w: 22,
      h: 16,
      nm: "Wave 2",
      ddd: 0,
      assets: [{
        id: "comp_0",
        nm: "Dot_Wave",
        fr: 60,
        layers: [{
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Shape Layer 1",
          sr: 1,
          ks: {
            o: {
              a: 1,
              k: [{
                i: {
                  x: [0.868],
                  y: [1]
                },
                o: {
                  x: [0.61],
                  y: [0]
                },
                t: 0,
                s: [40]
              }, {
                i: {
                  x: [0.667],
                  y: [1]
                },
                o: {
                  x: [0.125],
                  y: [0]
                },
                t: 25,
                s: [100]
              }, {
                t: 50,
                s: [40]
              }],
              ix: 11
            },
            r: {
              a: 0,
              k: 0,
              ix: 10
            },
            p: {
              a: 0,
              k: [16, 16, 0],
              ix: 2,
              l: 2
            },
            a: {
              a: 0,
              k: [0, 0, 0],
              ix: 1,
              l: 2
            },
            s: {
              a: 1,
              k: [{
                i: {
                  x: [0.926, 0.926, 0.667],
                  y: [1, 1, 1]
                },
                o: {
                  x: [0.772, 0.772, 0.333],
                  y: [0, 0, 0]
                },
                t: 0,
                s: [100, 100, 100]
              }, {
                i: {
                  x: [0.515, 0.515, 0.667],
                  y: [1, 1, 1]
                },
                o: {
                  x: [0.096, 0.096, 0.167],
                  y: [0, 0, 0]
                },
                t: 25,
                s: [140, 140, 100]
              }, {
                t: 50,
                s: [100, 100, 100]
              }],
              ix: 6,
              l: 2
            }
          },
          ao: 0,
          shapes: [{
            ty: "gr",
            it: [{
              d: 1,
              ty: "el",
              s: {
                a: 0,
                k: [16, 16],
                ix: 2
              },
              p: {
                a: 0,
                k: [0, 0],
                ix: 3
              },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            }, {
              ty: "st",
              c: {
                a: 0,
                k: [0.403899996888, 0.270568997252, 0.035277998681, 1],
                ix: 3
              },
              o: {
                a: 0,
                k: 100,
                ix: 4
              },
              w: {
                a: 0,
                k: 0,
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            }, {
              ty: "fl",
              c: {
                a: 0,
                k: [0.525490224361, 0.588235318661, 0.627451002598, 1],
                ix: 4
              },
              o: {
                a: 0,
                k: 100,
                ix: 5
              },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            }, {
              ty: "tr",
              p: {
                a: 0,
                k: [0, 0],
                ix: 2
              },
              a: {
                a: 0,
                k: [0, 0],
                ix: 1
              },
              s: {
                a: 0,
                k: [100, 100],
                ix: 3
              },
              r: {
                a: 0,
                k: 0,
                ix: 6
              },
              o: {
                a: 0,
                k: 100,
                ix: 7
              },
              sk: {
                a: 0,
                k: 0,
                ix: 4
              },
              sa: {
                a: 0,
                k: 0,
                ix: 5
              },
              nm: "Transform"
            }],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }],
          ip: 0,
          op: 101,
          st: 0,
          ct: 1,
          bm: 0
        }]
      }],
      layers: [{
        ddd: 0,
        ind: 1,
        ty: 0,
        nm: "Right 2",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [18, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 0,
        op: 20,
        st: -80,
        bm: 0
      }, {
        ddd: 0,
        ind: 2,
        ty: 0,
        nm: "Right",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [18, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 20,
        op: 100,
        st: 20,
        bm: 0
      }, {
        ddd: 0,
        ind: 3,
        ty: 0,
        nm: "Middle 3",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [11, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 0,
        op: 10,
        st: -90,
        bm: 0
      }, {
        ddd: 0,
        ind: 4,
        ty: 0,
        nm: "Middle",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [11, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 10,
        op: 100,
        st: 10,
        bm: 0
      }, {
        ddd: 0,
        ind: 5,
        ty: 0,
        nm: "LEft 2",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [4, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 0,
        op: 100,
        st: 0,
        bm: 0
      }, {
        ddd: 0,
        ind: 6,
        ty: 0,
        nm: "LEft",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [4, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 100,
        op: 100.606060606061,
        st: 100,
        bm: 0
      }],
      markers: []
    };
  } else {
    return {
      v: "5.10.2",
      fr: 60,
      ip: 0,
      op: 100,
      w: 22,
      h: 16,
      nm: "Wave 2",
      ddd: 0,
      assets: [{
        id: "comp_0",
        nm: "Dot_Wave",
        fr: 60,
        layers: [{
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Shape Layer 1",
          sr: 1,
          ks: {
            o: {
              a: 1,
              k: [{
                i: {
                  x: [0.868],
                  y: [1]
                },
                o: {
                  x: [0.61],
                  y: [0]
                },
                t: 0,
                s: [40]
              }, {
                i: {
                  x: [0.667],
                  y: [1]
                },
                o: {
                  x: [0.125],
                  y: [0]
                },
                t: 25,
                s: [100]
              }, {
                t: 50,
                s: [40]
              }],
              ix: 11
            },
            r: {
              a: 0,
              k: 0,
              ix: 10
            },
            p: {
              a: 0,
              k: [16, 16, 0],
              ix: 2,
              l: 2
            },
            a: {
              a: 0,
              k: [0, 0, 0],
              ix: 1,
              l: 2
            },
            s: {
              a: 1,
              k: [{
                i: {
                  x: [0.926, 0.926, 0.667],
                  y: [1, 1, 1]
                },
                o: {
                  x: [0.772, 0.772, 0.333],
                  y: [0, 0, 0]
                },
                t: 0,
                s: [100, 100, 100]
              }, {
                i: {
                  x: [0.515, 0.515, 0.667],
                  y: [1, 1, 1]
                },
                o: {
                  x: [0.096, 0.096, 0.167],
                  y: [0, 0, 0]
                },
                t: 25,
                s: [140, 140, 100]
              }, {
                t: 50,
                s: [100, 100, 100]
              }],
              ix: 6,
              l: 2
            }
          },
          ao: 0,
          shapes: [{
            ty: "gr",
            it: [{
              d: 1,
              ty: "el",
              s: {
                a: 0,
                k: [16, 16],
                ix: 2
              },
              p: {
                a: 0,
                k: [0, 0],
                ix: 3
              },
              nm: "Ellipse Path 1",
              mn: "ADBE Vector Shape - Ellipse",
              hd: false
            }, {
              ty: "st",
              c: {
                a: 0,
                k: [0.403899996888, 0.270568997252, 0.035277998681, 1],
                ix: 3
              },
              o: {
                a: 0,
                k: 100,
                ix: 4
              },
              w: {
                a: 0,
                k: 0,
                ix: 5
              },
              lc: 1,
              lj: 1,
              ml: 4,
              bm: 0,
              nm: "Stroke 1",
              mn: "ADBE Vector Graphic - Stroke",
              hd: false
            }, {
              ty: "fl",
              c: {
                a: 0,
                k: [0.40000000596, 0.466666668653, 0.505882382393, 1],
                ix: 4
              },
              o: {
                a: 0,
                k: 100,
                ix: 5
              },
              r: 1,
              bm: 0,
              nm: "Fill 1",
              mn: "ADBE Vector Graphic - Fill",
              hd: false
            }, {
              ty: "tr",
              p: {
                a: 0,
                k: [0, 0],
                ix: 2
              },
              a: {
                a: 0,
                k: [0, 0],
                ix: 1
              },
              s: {
                a: 0,
                k: [100, 100],
                ix: 3
              },
              r: {
                a: 0,
                k: 0,
                ix: 6
              },
              o: {
                a: 0,
                k: 100,
                ix: 7
              },
              sk: {
                a: 0,
                k: 0,
                ix: 4
              },
              sa: {
                a: 0,
                k: 0,
                ix: 5
              },
              nm: "Transform"
            }],
            nm: "Ellipse 1",
            np: 3,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          }],
          ip: 0,
          op: 101,
          st: 0,
          ct: 1,
          bm: 0
        }]
      }],
      layers: [{
        ddd: 0,
        ind: 1,
        ty: 0,
        nm: "Right 2",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [18, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 0,
        op: 20,
        st: -80,
        bm: 0
      }, {
        ddd: 0,
        ind: 2,
        ty: 0,
        nm: "Right",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [18, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 20,
        op: 100,
        st: 20,
        bm: 0
      }, {
        ddd: 0,
        ind: 3,
        ty: 0,
        nm: "Middle 3",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [11, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 0,
        op: 10,
        st: -90,
        bm: 0
      }, {
        ddd: 0,
        ind: 4,
        ty: 0,
        nm: "Middle",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [11, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 10,
        op: 100,
        st: 10,
        bm: 0
      }, {
        ddd: 0,
        ind: 5,
        ty: 0,
        nm: "LEft 2",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [4, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 0,
        op: 100,
        st: 0,
        bm: 0
      }, {
        ddd: 0,
        ind: 6,
        ty: 0,
        nm: "LEft",
        refId: "comp_0",
        sr: 1,
        ks: {
          o: {
            a: 0,
            k: 100,
            ix: 11
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          p: {
            a: 0,
            k: [4, 8, 0],
            ix: 2,
            l: 2
          },
          a: {
            a: 0,
            k: [16, 16, 0],
            ix: 1,
            l: 2
          },
          s: {
            a: 0,
            k: [25, 25, 100],
            ix: 6,
            l: 2
          }
        },
        ao: 0,
        w: 32,
        h: 32,
        ip: 100,
        op: 100.606060606061,
        st: 100,
        bm: 0
      }],
      markers: []
    };
  }
}