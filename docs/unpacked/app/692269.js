var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USyncQuery = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./250281.js");
var o = require("./716358.js");
var s = require("./347387.js");
var l = require("./355813.js");
var u = require("./854379.js");
var c = require("./656859.js");
var d = require("./46854.js");
var p = require("./653176.js");
var f = require("./278421.js");
var _ = require("./513210.js");
var g = require("./802557.js");
var m = require("./737667.js");
var h = require("./291957.js");
var y = require("./127981.js");
var E = require("./349251.js");
var S = require("./340854.js");
var v = require("./974540.js");
var T = r(require("./124928.js"));
var M = r(require("./556869.js"));
const A = {
  FEATURE: "feature",
  DEVICE: "devices",
  CONTACT: "contact",
  PICTURE: "picture",
  STATUS: "status",
  BUSINESS: "business",
  DISAPPEARING_MODE: "disappearing_mode",
  LID: "lid",
  BOT: "bot",
  USERNAME: "username",
  TEXT_STATUS: "text_status"
};
const b = {
  feature: m.featureParser,
  devices: _.deviceParser,
  contact: f.contactParser,
  picture: y.pictureParser,
  status: E.statusParser,
  business: p.businessParser,
  disappearing_mode: g.disappearingModeParser,
  lid: h.lidParser,
  bot: d.botProfileParser,
  username: v.usernameParser,
  text_status: S.textStatusParser
};
function C(e) {
  const t = [];
  e.forEachChildWithTag("user", e => {
    const n = {};
    if (e.hasAttr("jid")) {
      Object.keys(A).forEach(t => {
        const r = A[t];
        const i = e.maybeChild(r);
        if (i && b[r]) {
          n[r] = b[r](i);
        }
      });
      n.id = (0, u.deviceJidToUserWid)(e.attrDeviceJid("jid"));
      t.push(n);
    }
  });
  return t;
}
const P = new s.WapParser("usyncParser", e => {
  e.assertAttr("type", "result");
  const t = {
    error: {},
    refresh: {},
    list: [],
    sideList: []
  };
  const n = e.child("usync");
  const r = n.child("result");
  const i = n.child("list");
  const a = n.maybeChild("side_list");
  Object.keys(A).forEach(e => {
    const n = A[e];
    const i = r.maybeChild(n);
    if (i) {
      const e = i.maybeChild("error");
      if (e) {
        t.error[n] = {
          errorCode: e.attrInt("code"),
          errorText: e.attrString("text"),
          errorBackoff: e.attrInt("backoff")
        };
      } else if (i.hasAttr("refresh")) {
        t.refresh[n] = i.attrInt("refresh", 0);
      }
    }
  });
  t.list = C(i);
  if (a) {
    t.sideList = C(a);
  }
  __LOG__(2)`usync query success!`;
  return t;
});
exports.USyncQuery = class {
  constructor() {
    this.context = "interactive";
    this.mode = "query";
    this.protocols = [];
    this.users = [];
  }
  withMode(e) {
    this.mode = e;
    return this;
  }
  withContext(e) {
    this.context = e;
    return this;
  }
  withContactProtocol() {
    this.protocols.push(new f.USyncContactProtocol());
    return this;
  }
  withBusinessProtocol() {
    this.protocols.push(new p.USyncBusinessProtocol());
    return this;
  }
  withDeviceProtocol() {
    this.protocols.push(new _.USyncDeviceProtocol());
    return this;
  }
  withDisappearingModeProtocol() {
    this.protocols.push(new g.USyncDisappearingModeProtocol());
    return this;
  }
  withPictureProtocol() {
    this.protocols.push(new y.USyncPictureProtocol());
    return this;
  }
  withStatusProtocol() {
    this.protocols.push(new E.USyncStatusProtocol());
    return this;
  }
  withTextStatusProtocol() {
    this.protocols.push(new S.USyncTextStatusProtocol());
    return this;
  }
  withFeaturesProtocol(e) {
    this.protocols.push(new m.USyncFeaturesProtocol(e));
    return this;
  }
  withLidProtocol() {
    this.protocols.push(new h.USyncLidProtocol());
    return this;
  }
  withBotProfileProtocol() {
    this.protocols.push(new d.USyncBotProfileProtocol());
    return this;
  }
  withUser(e) {
    this.users.push(e);
    return this;
  }
  withUsernameProtocol() {
    this.protocols.push(new v.USyncUsernameProtocol());
    return this;
  }
  _buildStanza() {
    if (this.protocols.length === 0) {
      throw (0, M.default)("a usync query must have at least one protocol");
    }
    const e = this.users.filter(e => {
      const t = e.getId();
      return (!t || !T.default.isServer(t)) && e.validate();
    });
    if (e.length === 0) {
      __LOG__(3)`Usync warning: a usync query must have at least one user`;
    }
    const t = (0, o.wap)("query", null, this.protocols.map(e => e.getQueryElement()));
    const n = e.map(e => {
      const t = e.getId();
      return (0, o.wap)("user", {
        jid: t ? (0, l.USER_JID)(t) : o.DROP_ATTR
      }, this.protocols.map(t => t.getUserElement(e)));
    });
    const r = (0, o.wap)("list", null, n);
    return (0, o.wap)("iq", {
      to: o.S_WHATSAPP_NET,
      xmlns: "usync",
      type: "get",
      id: (0, o.generateId)()
    }, (0, o.wap)("usync", {
      sid: (0, o.generateId)(),
      index: "0",
      last: "true",
      mode: (0, o.CUSTOM_STRING)(this.mode),
      context: (0, o.CUSTOM_STRING)(this.context)
    }, t, r));
  }
  execute() {
    var e = this;
    return (0, i.default)(function* () {
      const t = e._buildStanza();
      yield (0, c.waitForBackoff)(e);
      const n = yield (0, a.deprecatedSendIq)(t, P);
      if (n.success) {
        r = n.result;
        Object.values(A).forEach(e => {
          const t = r.error[e];
          if (t != null && t.errorBackoff != null) {
            (0, c.setProtocolBackoffMs)(e, t.errorBackoff * 1000);
          }
        });
        return n.result;
      } else {
        return {
          error: {
            all: {
              errorCode: n.errorCode,
              errorText: n.errorText,
              errorType: n.errorType
            }
          },
          refresh: {},
          list: []
        };
      }
      var r;
    })();
  }
};