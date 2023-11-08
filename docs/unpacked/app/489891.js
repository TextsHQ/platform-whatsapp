var r = require("./530066.js").default;
var i = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenChatFlow = undefined;
exports.clearChatIdCorrectionCache = function () {
  G.clear();
};
var a = i(require("../vendor/348926.js"));
var o = require("./898817.js");
var s = require("./8304.js");
var l = require("./632157.js");
var u = require("./257484.js");
var c = require("./169437.js");
var d = require("./206464.js");
var p = require("./780549.js");
var f = require("./877171.js");
var _ = require("./103440.js");
var g = i(require("./395767.js"));
var m = require("./581354.js");
var h = require("./690495.js");
var y = i(require("./329982.js"));
var E = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = k(t);
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
}(require("./446303.js"));
var S = require("./543081.js");
var v = i(require("./524173.js"));
var T = require("./190274.js");
var M = require("./803737.js");
var A = require("./956113.js");
var b = require("./487837.js");
var C = require("./459857.js");
var P = require("./334724.js");
var O = require("./1373.js");
var I = require("./126246.js");
var R = require("./262553.js");
var N = require("./669050.js");
var D = i(require("./556869.js"));
var w = require("../vendor/548360.js");
var L = i(require("../vendor/667294.js"));
function k(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (k = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const G = new Map();
function U() {
  return (U = (0, a.default)(function* (e) {
    if (!e.isUser()) {
      return e;
    }
    const t = G.get(e.user);
    if (t) {
      return t;
    }
    const n = yield (0, M.queryWidExists)(e);
    const r = n == null ? e : n.wid;
    G.set(e.user, r);
    return r;
  })).apply(this, arguments);
}
class x extends y.default {
  constructor() {
    super(...arguments);
    this._cancel = () => {
      if (this._queryChat) {
        this._queryChat.controller.abort();
      }
      this._queryChat = undefined;
      this.end();
    };
    this.error = () => {
      this.push(L.default.createElement(_.ConfirmPopup, {
        onOK: () => this.end(),
        okText: (0, g.default)("OK")
      }, w.fbt._("Phone number shared via url is invalid.", null, {
        hk: "1LuGU3"
      })));
    };
  }
  componentDidMount() {
    var e = this;
    return (0, a.default)(function* () {
      let t = false;
      const n = new r();
      (0, s.delayMs)(250).then(() => {
        if (n.signal.aborted) {
          throw new o.AbortError();
        }
        t = true;
        e.push(L.default.createElement(_.ConfirmPopup, {
          title: w.fbt._("Starting chat", null, {
            hk: "NHBK3"
          }),
          onCancel: e._cancel,
          cancelText: w.fbt._("Cancel", null, {
            hk: "H0gNq"
          })
        }, L.default.createElement(h.FlexRow, {
          justify: "center",
          align: "center"
        }, L.default.createElement(A.Spinner, {
          stroke: 6,
          size: 24
        }))));
      }).catch((0, o.catchAbort)(() => {}));
      const i = Date.now();
      const l = new r();
      const u = l.signal;
      const {
        pnForLid: p
      } = e.props;
      const f = p ? yield (0, d.getExisting)(p) : null;
      const g = f ? p : yield e.getChatWid();
      if (g == null) {
        const {
          fallbackURL: t
        } = e.props;
        if (t != null) {
          v.default.open(t);
        }
        return void e.end();
      }
      const y = R.PNH_MESSAGE_CHAT_PARTY.BIZ;
      if (!f && g.isLid() && p != null && (0, T.testLidWaMeLinkEnabled)()) {
        (0, S.logPnhRequestRevealActionHelper)(O.PNH_CHAT_TYPE_TYPE.CTWA, y, P.PNH_ACTION_TYPE.SEE_MASKED_PN_AT_CHAT_CREATION, I.PNH_ENTRY_POINT_TYPE.CHAT_CREATION);
        yield (0, b.updateLidMetadataJob)([{
          lid: (0, N.toUserWid)(g),
          data: {
            shareOwnPn: false
          }
        }]);
        yield (0, b.createLidPnMappingsJob)([{
          lid: (0, N.toUserWid)(g),
          pn: (0, N.toUserWid)(p)
        }], true);
      }
      const E = function () {
        return U.apply(this, arguments);
      }(g).then(e => {
        var t;
        const n = (t = c.BotProfileCollection.getDefaultBot()) === null || t === undefined ? undefined : t.id;
        if (e.isBot() && (n == null || !n.equals(e))) {
          throw (0, D.default)("invalid bot chat");
        }
        return (0, m.findChat)(e, "debugOpenChatFlow", {
          forceUsync: true
        });
      }).then(function () {
        var r = (0, a.default)(function* (r) {
          if (u.aborted) {
            throw new o.AbortError();
          }
          if (!t) {
            n.abort();
          }
          const a = Date.now() - i;
          const l = t ? Math.max(750 - a, 0) : 0;
          e.openChat(r);
          yield (0, s.delayMs)(l);
          e.end();
          e.props.onSuccess(r);
        });
        return function () {
          return r.apply(this, arguments);
        };
      }()).catch((0, o.catchAbort)(() => {})).catch(() => {
        n.abort();
        e.error();
      });
      e._queryChat = {
        controller: l,
        promise: E
      };
    })();
  }
  getChatWid() {
    var e = this;
    return (0, a.default)(function* () {
      const {
        chatId: t,
        customURL: n
      } = e.props;
      if (t != null) {
        return t;
      }
      if (n != null) {
        return yield (0, u.getWidfromPath)(n);
      }
      __LOG__(4, undefined, new Error())`OpenChatFlow chatWid couldn't be created from provided props.`;
    })();
  }
  openChat(e) {
    let {
      msgText: t,
      ctwaContextLinkData: n
    } = this.props;
    if (n) {
      const e = E.findLink(n.sourceUrl || "", false, (0, C.getMaybeMeUser)());
      if ((e == null ? undefined : e.suspiciousCharacters) && e.suspiciousCharacters.size > 0) {
        n = null;
      }
    }
    if (n) {
      t = n.icebreaker;
    }
    if (e.active && t) {
      f.ComposeBoxActions.paste(e, t);
      if (n) {
        f.ComposeBoxActions.setCtwaContextLinkData(e, n);
      }
    } else {
      if (t) {
        e.setComposeContents({
          text: t,
          timestamp: (0, l.unixTime)()
        });
      }
      p.Cmd.openChatFromUnread(e).then(t => {
        if (t) {
          f.ComposeBoxActions.focus(e);
          if (n) {
            f.ComposeBoxActions.setCtwaContextLinkData(e, n);
          }
        }
      });
    }
    if (this.props.sendLogAttributes != null) {
      f.ComposeBoxActions.addMsgSendingLogAttributes(e, this.props.sendLogAttributes);
    }
  }
}
exports.OpenChatFlow = x;
x.defaultProps = {
  removeTopDrawer: true,
  pushTransition: "none",
  popTransition: "none",
  displayName: "OpenChatFlow"
};