var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./685639.js");
var s = require("./716358.js");
var l = require("./347387.js");
var u = require("./678002.js");
var c = require("./445729.js");
var d = r(require("./99398.js"));
var p = require("./226562.js");
var f = require("./38878.js");
var _ = require("./673168.js");
let g = [];
let m = null;
const h = new l.WapParser("pairDeviceParser", e => {
  e.assertTag("iq");
  e.assertFromServer();
  const t = [];
  e.child("pair-device").forEachChild(e => {
    e.assertTag("ref");
    t.push(e.contentString());
  });
  return {
    refs: t,
    id: e.attrString("id")
  };
});
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = h.parse(e);
    if (t.error) {
      __LOG__(4, undefined, new Error())`Parsing Error: ${t.error.toString()}`;
      return Promise.reject(t.error);
    }
    const n = t.success;
    if (n && n.refs && Array.isArray(n.refs) && n.refs.length === 6) {
      const {
        refs: e,
        id: t
      } = n;
      (0, a.deprecatedCastStanza)((0, s.wap)("iq", {
        to: s.S_WHATSAPP_NET,
        type: "result",
        id: (0, s.CUSTOM_STRING)(t)
      }));
      yield (0, u.generateADVSecretKey)();
      g = e;
      if (!m) {
        m = new o.ShiftTimer(() => {
          if ((0, _.isRegistered)() || !d.default.online) {
            if (m) {
              m.cancel();
            }
            m = null;
          } else if (g && g.length) {
            const e = g.length === 6 ? 60000 : 20000;
            const t = g.shift();
            c.Conn.set({
              ref: t,
              refTTL: e
            });
            f.Socket.state = p.SOCKET_STATE.UNPAIRED;
            if (m) {
              m.onOrAfter(e);
            }
          } else {
            if (m) {
              m.cancel();
            }
            m = null;
            f.Socket.state = p.SOCKET_STATE.UNPAIRED_IDLE;
          }
        });
      }
      m.forceRunNow();
    } else {
      __LOG__(3)`handlePairDevice: wrong pair device result received from server`;
    }
  })).apply(this, arguments);
}