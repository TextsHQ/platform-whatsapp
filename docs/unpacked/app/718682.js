Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WapJid = exports.WAP_JID_SUBTYPE = exports.DomainType = undefined;
var r = require("./418987.js");
const i = {
  JID: 0,
  JID_U: 1,
  JID_AD: 1,
  JID_FB: 3,
  JID_INTEROP: 4
};
exports.WAP_JID_SUBTYPE = i;
const a = require("../vendor/654302.js")({
  WHATSAPP: 0,
  LID: 1,
  HOSTED: 128
});
exports.DomainType = a;
class o {
  constructor(e) {
    this._jid = e;
  }
  static createAD(e, t, n) {
    return new o({
      type: i.JID_AD,
      user: e,
      device: n == null ? 0 : n,
      agent: t == null ? 0 : t,
      domainType: a.WHATSAPP
    });
  }
  static createJidU(e, t, n) {
    return new o({
      type: i.JID_U,
      user: e,
      device: n == null ? 0 : n,
      domainType: t == null ? a.WHATSAPP : t
    });
  }
  static createFbJid(e, t) {
    return new o({
      type: i.JID_FB,
      user: e,
      device: t == null ? 0 : t
    });
  }
  static createInteropJid(e, t, n) {
    return new o({
      type: i.JID_INTEROP,
      user: e,
      device: t == null ? 0 : t,
      integrator: n
    });
  }
  static create(e, t) {
    return new o({
      type: i.JID,
      user: e,
      server: t
    });
  }
  toString() {
    if (this._jid.type === i.JID_AD || this._jid.type === i.JID_U) {
      const {
        user: e,
        device: t,
        domainType: n
      } = this._jid;
      let i = "";
      i = n === a.WHATSAPP ? r.WA_USER_JID_SUFFIX : n === a.HOSTED ? r.HOSTED_SUFFIX : r.LID_SUFFIX;
      if (t === 0) {
        return `${e}@${i}`;
      } else {
        return `${e}:${t}@${i}`;
      }
    }
    if (this._jid.type === i.JID_FB) {
      const {
        user: e,
        device: t
      } = this._jid;
      return `${e}:${t}@${r.MSGR_USER_JID_SUFFIX}`;
    }
    if (this._jid.type === i.JID_INTEROP) {
      const {
        user: e,
        device: t,
        integrator: n
      } = this._jid;
      return `${n}-${e}:${t}@${r.INTEROP_USER_JID_SUFFIX}`;
    }
    {
      this._jid.type;
      const {
        user: e,
        server: t
      } = this._jid;
      if (e != null) {
        return `${e}@${t}`;
      } else {
        return t;
      }
    }
  }
  getInnerJid() {
    return this._jid;
  }
}
exports.WapJid = o;