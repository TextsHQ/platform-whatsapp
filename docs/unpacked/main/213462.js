var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSrcObjectInVideoElement = function () {
  if (p === undefined) {
    p = "srcObject" in document.createElement("video");
  }
  return p;
};
exports.start = function (e, t, n) {
  let a;
  let o = false;
  let p = null;
  let m = false;
  const h = n != null ? n : 1000;
  function g() {
    if (p != null) {
      self.clearTimeout(p);
    }
    p = self.setTimeout(() => {
      if (t) {
        t();
      } else {
        !function (e) {
          if (e === "camera") {
            u.ModalManager.open(c.default.createElement(l.GuidePopup, {
              messaging: l.Messaging.CAMERA,
              type: l.TYPE.GUIDE_ALLOW
            }));
          } else {
            u.ModalManager.open(c.default.createElement(l.GuidePopup, {
              messaging: l.Messaging.MIC,
              type: l.TYPE.GUIDE_ALLOW
            }));
          }
        }(e);
        m = true;
      }
    }, h);
  }
  return {
    asyncStream: (0, r.default)(t => {
      let {
        retry: n,
        failCount: r
      } = t;
      return new Promise((t, l) => {
        g();
        if (s.default) {
          (0, s.default)(d[e][r]).then(e => {
            if (!o) {
              a = e;
              return e;
            }
            f(e);
          }).then(t).catch(t => {
            if (t.name === "NotReadableError" && d[e][r + 1]) {
              n();
            } else {
              l(t);
            }
          });
        } else {
          __LOG__(2)`MediaCapture:start() no ability to capture media`;
          l(new i.GetUserMedia.GetUserMediaError());
        }
      });
    }).catch(e => {
      const t = e instanceof Error ? e == null ? undefined : e.name : e;
      throw new (i.GetUserMedia[t] || i.GetUserMedia.GetUserMediaError)();
    }).finally(() => {
      if (m) {
        u.ModalManager.close();
      }
      if (p) {
        self.clearTimeout(p);
      }
    }),
    disposeStream: () => {
      o = true;
      if (a) {
        f(a);
      }
    }
  };
};
exports.stop = f;
var r = a(require("../app/616144.js"));
var o = require("../app/287461.js");
var l = require("./858770.js");
var i = require("../app/288057.js");
var u = require("../app/114850.js");
var s = a(require("./65162.js"));
var c = a(require("../vendor/667294.js"));
const d = {
  camera: [{
    video: {
      width: (0, o.getABPropConfigValue)("web_image_max_edge"),
      height: (0, o.getABPropConfigValue)("web_image_max_edge")
    }
  }, {
    video: {
      width: Math.min(1280, (0, o.getABPropConfigValue)("web_image_max_edge")),
      height: Math.min(720, (0, o.getABPropConfigValue)("web_image_max_edge"))
    }
  }, {
    video: true
  }],
  microphone: [{
    audio: true
  }]
};
function f(e) {
  if (typeof e.stop == "function") {
    e.stop();
  } else {
    const t = e.getTracks();
    for (let e = 0; e < t.length; e++) {
      t[e].stop();
    }
  }
}
let p;