var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ptt = undefined;
var r = require("../app/402994.js");
var o = require("../app/23641.js");
var l = require("../app/163755.js");
var i = a(require("./599664.js"));
var u = require("../app/97858.js");
var s = require("../app/787742.js");
var c = require("./263494.js");
var d = require("./860653.js");
var f = require("./695417.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var m = require("./476845.js");
var h = require("./871210.js");
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = (e, t) => {
  const {
    msg: n
  } = e;
  const [a, g, E, v, _] = (0, h.useMsgValues)(e.msg.id, [s.getAck, s.getIsSentByMe, l.getSenderObj, s.getId, l.getMsgSenderId]);
  const y = (0, p.useRef)(null);
  (0, m.useMsgDownloadMedia)(n);
  (0, p.useImperativeHandle)(t, () => ({
    handleKeyActivation: e => {
      var t;
      if (!(0, u.messageListA11yRedesignEnabled)()) {
        if (!((t = y.current) === null || t === undefined)) {
          t.handleKeyActivation(e);
        }
      }
    }
  }));
  const C = e.displayAuthor ? p.default.createElement(i.default, {
    msg: n,
    contact: E,
    displayType: e.displayType
  }) : null;
  return p.default.createElement(c.AudioBubble, {
    msg: n,
    quotedMsg: e.quotedMsg,
    author: C,
    status: p.default.createElement(f.PttStatus, {
      played: a === r.ACK.PLAYED,
      isOutgoingMsg: g
    }),
    player: p.default.createElement(d.AudioMediaState, {
      ref: y,
      msg: e.msg,
      mediaData: e.mediaData,
      displayType: e.displayType,
      getSequentialMsg: e.getSequentialMsg
    }),
    avatar: p.default.createElement(o.DetailImage, {
      id: _,
      size: 55
    }),
    displayType: e.displayType
  });
};
const v = (0, p.forwardRef)(E);
exports.Ptt = v;
v.displayName = "Ptt";