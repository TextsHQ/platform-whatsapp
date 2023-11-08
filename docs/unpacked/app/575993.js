var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    contact: t,
    theme: n,
    selectable: r,
    lastMessage: g
  } = e;
  const m = (0, _.useContext)(p.default);
  const h = () => {
    var e;
    const n = (e = i.BotProfileCollection.getDefaultBot()) === null || e === undefined ? undefined : e.id;
    if (!t.id.isBot() || t.id.equals(n) || a.ChatCollection.get(t.id)) {
      (0, u.findChat)(t.id, "textMentionWrapper").then(e => o.Cmd.openChatBottom(e));
    } else {
      c.ModalManager.open(_.default.createElement(s.ConfirmPopup, {
        onOK: () => {
          c.ModalManager.close();
        }
      }, f.fbt._("Starting a new chat with a bot is currently not supported on WhatsApp Web.", null, {
        hk: "1aaDcs"
      })));
    }
  };
  let y;
  if (m !== l.DISPLAY_TYPE.EDITING) {
    y = h;
  }
  return _.default.createElement(d.default, {
    contact: t,
    theme: n,
    selectable: r,
    onClick: y,
    lastMessage: g
  });
};
var i = require("./169437.js");
var a = require("./351053.js");
var o = require("./780549.js");
var s = require("./103440.js");
var l = require("./356097.js");
var u = require("./581354.js");
var c = require("./114850.js");
var d = r(require("./58684.js"));
var p = r(require("./328861.js"));
var f = require("../vendor/548360.js");
var _ = function (e, t) {
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
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
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