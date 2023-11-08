var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = require("./418987.js");
var a = require("./724976.js");
var o = r(require("./492839.js"));
var s = r(require("./143589.js"));
var l = require("./323389.js");
var u = r(require("./556869.js"));
const c = "16505361212@c.us";
const d = /^1313555\d{4}$|^131655500\d{2}$/;
const p = ["name", "short", "notify"];
class f {
  constructor(e, t) {
    let {
      intentionallyUsePrivateConstructor: n
    } = t;
    if (!n) {
      throw (0, u.default)("You should use WidFactory.createWid() instead of the Wid constructor. If you absolutely must use the constructor, pass {intentionallyUsePrivateConstructor: true} as a second parameter.");
    }
    const r = (0, l.validateAndGetParts)(e);
    if (r == null) {
      __LOG__(2)`Invalid wid: ${e}`;
      throw (0, u.default)("wid error: invalid wid");
    }
    const i = [];
    const a = r.userPart;
    const o = r.devicePart;
    const s = r.serverPart.toLowerCase();
    let c;
    switch (s) {
      case "s.whatsapp.net":
        c = "c.us";
        break;
      default:
        c = s;
    }
    this.server = c;
    if (a == null) {
      __LOG__(2)`wid represents server and should not be used: ${e}`;
      throw (0, u.default)("wid error: wid represents server and should not be used");
    }
    this.user = a;
    i.push(this.user);
    if (o != null) {
      if (this.server !== "c.us" && this.server !== "lid" && this.server !== "hosted") {
        __LOG__(2)`wrong server for wid with device present: ${e}`;
        throw (0, u.default)("wid error: wrong server for wid with device present");
      }
      const t = parseInt(o, 10);
      if (t) {
        i.push(":");
        i.push(t);
        this.device = t;
      }
    }
    i.push("@");
    i.push(this.server);
    this._serialized = i.join("");
  }
  getUserPartForLog() {
    if (this.isGroup()) {
      const e = this.user.split("-");
      if (e.length === 2) {
        const [t, n] = e;
        return `${t.slice(-4)}-${n}`;
      }
    }
    return this.user.slice(-4);
  }
  toString(e) {
    if (e) {
      let t;
      let n;
      const r = e.legacy && this.server === "c.us" ? "s.whatsapp.net" : this.server;
      if (e.formatFull) {
        n = `:${this.device || 0}`;
        t = ".0";
      } else {
        n = this.device != null && this.device !== 0 ? `:${this.device}` : "";
      }
      const i = e.forLog ? this.getUserPartForLog() : this.user;
      if (e.formatFull || e.legacy && this.server === "c.us" || e.forLog) {
        return [i, t, n, "@", r].join("");
      }
    }
    return this._serialized;
  }
  toLogString() {
    return this.toString({
      forLog: true,
      legacy: false
    });
  }
  toJid() {
    return this.toString({
      legacy: true
    });
  }
  getJidServer() {
    if (this.server === "c.us") {
      return i.WA_USER_JID_SUFFIX;
    } else {
      return this.server;
    }
  }
  getSignalAddress() {
    const e = this.device != null && this.device !== 0 ? `:${this.device}` : "";
    let t = "";
    if (this.isLid()) {
      t = "@lid";
    }
    return [this.user, e, t].join("");
  }
  getDeviceId() {
    const e = this.device;
    if (e == null) {
      return 0;
    } else {
      return e;
    }
  }
  equals(e) {
    return e instanceof f && this.toString() === e.toString();
  }
  isLessThan(e) {
    return e instanceof f && this.toString() < e.toString();
  }
  isGreaterThan(e) {
    return e instanceof f && this.toString() > e.toString();
  }
  isCompanion() {
    return this.device != null && this.device !== i.DEFAULT_DEVICE_ID;
  }
  isSameAccount(e) {
    return this.server === e.server && this.user === e.user;
  }
  isUser() {
    return this.server === "c.us" || this.server === "lid";
  }
  isLid() {
    return this.server === "lid";
  }
  isUserNotPSA() {
    return this.isUser() && !this.isPSA();
  }
  isBroadcast() {
    return this.server === "broadcast";
  }
  isOfficialBizAccount() {
    return this.toString() === c;
  }
  isEligibleForUSync() {
    return this.isUser() && !this.isPSA();
  }
  isGroup() {
    return this.server === "g.us";
  }
  isGroupCall() {
    return this.server === "call";
  }
  isServer() {
    return this.user.toLowerCase() === "server" && this.server === "c.us";
  }
  isPSA() {
    return this.user === "0" && this.server === "c.us";
  }
  isIAS() {
    return this.user === "16508638904" && this.server === "c.us";
  }
  isStatusV3() {
    return this.user.toLowerCase() === "status" && this.server === "broadcast";
  }
  isSupportAccount() {
    return (0, s.default)(this.user);
  }
  isCAPISupportAccount() {
    return (0, o.default)(this.user);
  }
  isNewsletter() {
    return this.server === "newsletter";
  }
  isBot() {
    return this.server === "c.us" && d.test(this.user) && (this.device == null || this.device === 0);
  }
  toJSON() {
    return this.toString();
  }
  isHosted() {
    return false;
  }
  static isXWid(e, t) {
    if ((0, a.isString)(t)) {
      return t.split("@")[1] === e;
    } else if (t instanceof f) {
      return t.server === e;
    } else {
      if (t !== undefined) {
        __LOG__(2)`wid:isXWid called on nonstring: + ${String(t)}`;
      }
      return false;
    }
  }
  static isHostedDeviceId(e) {
    return e === 99;
  }
  static isUser(e) {
    return f.isXWid("c.us", e) || f.isXWid("lid", e);
  }
  static isLid(e) {
    return f.isXWid("lid", e);
  }
  static isBroadcast(e) {
    return f.isXWid("broadcast", e);
  }
  static isGroup(e) {
    return f.isXWid("g.us", e);
  }
  static isNewsletter(e) {
    return f.isXWid("newsletter", e);
  }
  static isHosted() {
    return false;
  }
  static isGroupCall(e) {
    return f.isXWid("call", e);
  }
  static isWid(e) {
    if ((0, a.isString)(e)) {
      return (0, l.validateWid)(e);
    } else {
      return e instanceof f;
    }
  }
  static canBeWid(e) {
    return !e || !p.includes(e);
  }
  static isServer(e) {
    if ((0, a.isString)(e)) {
      return e.toLowerCase() === "server@c.us";
    } else {
      return e instanceof f && e.isServer();
    }
  }
  static isPSA(e) {
    if ((0, a.isString)(e)) {
      return e.toLowerCase() === "0@c.us";
    } else {
      return e instanceof f && e.isPSA();
    }
  }
  static isIAS(e) {
    if ((0, a.isString)(e)) {
      return e.toLowerCase() === "16508638904@c.us";
    } else {
      return e instanceof f && e.isIAS();
    }
  }
  static isStatusV3(e) {
    if ((0, a.isString)(e)) {
      return e.toLowerCase() === i.STATUS_JID;
    } else {
      return e instanceof f && e.isStatusV3();
    }
  }
  static isSupportAccount(e) {
    if ((0, a.isString)(e)) {
      return (0, s.default)(e.split("@")[0]);
    } else {
      return e instanceof f && e.isSupportAccount();
    }
  }
  static isCAPISupportAccount(e) {
    if ((0, a.isString)(e)) {
      return (0, o.default)(e.split("@")[0]);
    } else {
      return e instanceof f && e.isCAPISupportAccount();
    }
  }
  static isOfficialBizAccount(e) {
    if ((0, a.isString)(e)) {
      return e.toLowerCase() === c;
    } else {
      return e instanceof f && e.isOfficialBizAccount();
    }
  }
  static isEligibleForUSync(e) {
    return this.isUser(e) && !this.isPSA(e);
  }
  static user(e) {
    if ((0, a.isString)(e)) {
      return e.split("@")[0];
    } else if (e instanceof f) {
      return e.user;
    } else {
      return undefined;
    }
  }
  static equals(e, t) {
    if (e instanceof f || t instanceof f) {
      return e instanceof f && e.equals(t);
    } else {
      return e === t;
    }
  }
  static isLessThan(e, t) {
    return e instanceof f && t instanceof f && e.toString() < t.toString();
  }
  static isGreaterThan(e, t) {
    return e instanceof f && t instanceof f && e.toString() > t.toString();
  }
}
exports.default = f;