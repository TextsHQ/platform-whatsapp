var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Audio = undefined;
var r = require("./808068.js");
var o = require("../app/23641.js");
var l = require("../app/163755.js");
var i = a(require("./599664.js"));
var u = require("../app/787742.js");
var s = require("./263494.js");
var c = require("./860653.js");
var d = require("./905174.js");
var f = require("./525177.js");
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = E(t);
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
var m = a(require("../app/156720.js"));
var h = require("./476845.js");
var g = require("./871210.js");
function E(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (E = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = {
  width: "hxazv0ps",
  height: "mnqpe3xa",
  overflowX: "gfz4du6o",
  overflowY: "r7fjleex",
  borderTopStartRadius: "g9p5wyxn",
  borderTopEndRadius: "i0tg5vk9",
  borderBottomEndRadius: "aoogvgrq",
  borderBottomStartRadius: "o2zu3hjb"
};
const _ = (e, t) => {
  const {
    msg: n
  } = e;
  const [a, r, o, d, m] = (0, g.useMsgValues)(e.msg.id, [u.getAck, u.getIsForwarded, u.getIsSentByMe, l.getSenderObj, l.getAsPttLike]);
  const E = (0, p.useRef)(null);
  (0, h.useMsgDownloadMedia)(n);
  (0, p.useImperativeHandle)(t, () => ({
    handleKeyActivation: e => {
      var t;
      if (!((t = E.current) === null || t === undefined)) {
        t.handleKeyActivation(e);
      }
    }
  }));
  if (m != null && !r) {
    return p.default.createElement(f.Ptt, e);
  }
  const v = e.displayAuthor ? p.default.createElement(i.default, {
    msg: n,
    contact: d,
    displayType: e.displayType
  }) : null;
  return p.default.createElement(s.AudioBubble, {
    msg: n,
    quotedMsg: e.quotedMsg,
    author: v,
    player: p.default.createElement(c.AudioMediaState, {
      ref: E,
      msg: e.msg,
      mediaData: e.mediaData,
      displayType: e.displayType
    }),
    avatar: p.default.createElement(y, {
      msg: n
    }),
    displayType: e.displayType
  });
};
function y(e) {
  const [t, n, a, i] = (0, g.useMsgValues)(e.msg.id, [l.getAsPttLike, u.getIsForwarded, u.getHasOriginatedFromNewsletter, l.getMsgSenderId]);
  const s = p.default.createElement(o.DetailImage, {
    id: i,
    size: 55
  });
  if (a) {
    return s;
  } else if (t == null) {
    return p.default.createElement("div", {
      className: (0, m.default)(v)
    }, p.default.createElement(r.AudioFileIcon, null));
  } else if (n) {
    return p.default.createElement("div", {
      className: (0, m.default)(v)
    }, p.default.createElement(d.PttFileIcon, null));
  } else {
    return s;
  }
}
const C = (0, p.forwardRef)(_);
exports.Audio = C;
C.displayName = "Audio";