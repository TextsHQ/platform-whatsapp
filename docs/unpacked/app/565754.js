var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./390934.js");
var o = require("./287461.js");
var s = require("./189161.js");
var l = r(require("./24778.js"));
var u = r(require("./307394.js"));
var c = require("./459857.js");
var d = r(require("./124928.js"));
var p = require("./669050.js");
var f = r(require("./556869.js"));
class _ {
  constructor(e) {
    let t = e;
    if (!t) {
      throw (0, f.default)("MsgKey error: obj is null/undefined");
    }
    if (t.id instanceof _) {
      t = t.id;
      __LOG__(3)`MsgKey error: id is already a MsgKey`;
    }
    const n = t.from && t.to && t.id;
    const r = t.fromMe !== undefined && t.remote && t.id;
    let i;
    let a;
    let o;
    let s;
    let l;
    let p;
    let g;
    const m = (0, c.getMaybeMeUser)();
    if (!m) {
      throw (0, f.default)("MsgKey error: me is undefined. Running tests? Call setupGlobalsForTests first.");
    }
    if (n && r) {
      __LOG__(3)`Unclear constructor MsgKey: ${JSON.stringify(t)}`;
      throw (0, f.default)("MsgKey error: unclear which constructor to use");
    }
    if (!n && !r) {
      __LOG__(3)`No matching constructor MsgKey: ${JSON.stringify(t)}`;
      throw (0, f.default)("MsgKey error: don't have a matching constructor");
    }
    if (n) {
      ({
        from: i,
        to: a,
        id: o,
        participant: s,
        selfDir: l
      } = t);
      if (!(i instanceof d.default) || !(a instanceof d.default) || s && !(s instanceof d.default)) {
        __LOG__(3)`Incorrect Wid MsgKey: from:${String(i)} to:${String(a)} p:${String(s)}`;
        throw (0, f.default)("MsgKey error: something is not a wid");
      }
      const e = d.default.equals(i, a);
      l = e ? l : undefined;
      if (e && (0, c.isMePrimary)(i)) {
        p = l === "out";
        g = m;
      } else if ((0, c.isMePrimary)(i)) {
        p = true;
        g = a;
      } else if ((0, c.isMePrimary)(a)) {
        p = false;
        g = i;
      } else if (e && (d.default.isGroup(i) || d.default.isBroadcast(i))) {
        p = true;
        g = i;
      } else {
        __LOG__(3)`MsgKey case error: ${[i, a, o, m].join()}`;
      }
      if (p !== undefined) {
        this.fromMe = p;
      }
      if (g) {
        this.remote = g;
      }
      if (o) {
        this.id = o;
      }
    } else if (r) {
      ({
        fromMe: p,
        remote: g,
        id: o,
        participant: s
      } = t);
      if (!(g instanceof d.default) || s && !(s instanceof d.default)) {
        __LOG__(3)`Incorrect Wid MsgKey: remote:${String(g)} p:${String(s)}`;
        throw (0, f.default)("MsgKey error: something is not a wid");
      }
      if ((0, c.isMePrimary)(g)) {
        l = p === true ? "out" : "in";
      }
      if (p !== undefined) {
        this.fromMe = p;
      }
      if (g) {
        this.remote = g;
      }
      if (o) {
        this.id = o;
      }
    }
    const h = [this.fromMe, this.remote, this.id];
    if (l !== undefined) {
      this.self = l;
      h.push(this.self);
    }
    if ((0, u.default)() && s !== undefined) {
      this.participant = s;
      h.push(this.participant);
    }
    this._serialized = h.join("_");
  }
  toString() {
    return this._serialized;
  }
  clone() {
    return new _({
      fromMe: this.fromMe,
      remote: this.remote,
      id: this.id,
      participant: this.participant
    });
  }
  equals(e) {
    return e instanceof _ && this.toString() === e.toString();
  }
  static fromString(e) {
    if (e == null) {
      throw (0, f.default)("MsgKey.fromString error: str is null or not a string");
    }
    return _.from(e);
  }
  static from(e) {
    if (e instanceof _) {
      return e;
    }
    let t;
    t = typeof e == "string" ? (0, l.default)(e) : e;
    return new _({
      fromMe: t.fromMe,
      remote: (0, p.createWidFromWidLike)(t.remote),
      id: t.id,
      participant: t.participant ? (0, p.createWidFromWidLike)(t.participant) : undefined
    });
  }
  static newId() {
    return (0, i.default)(function* () {
      if ((0, o.getABPropConfigValue)("web_sha256_message_key")) {
        try {
          return yield (0, s.getMsgKeyNewSHA256Id)();
        } catch (e) {
          __LOG__(4, undefined, new Error(), true)`getMsgKeyNewId: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
          SEND_LOGS("msg_key: error generating sha256 message key");
        }
      }
      return _.newId_DEPRECATED();
    })();
  }
  static newId_DEPRECATED() {
    if ((0, o.getABPropConfigValue)("web_md5_message_key")) {
      try {
        return (0, s.getMsgKeyNewId)();
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`getMsgKeyNewId: ${e.name}, message: ${e.message}, stack: ${e.stack}`;
        SEND_LOGS("msg_key: error generating md5 message key");
      }
    }
    return "3EB0" + (0, a.randomHex)(8);
  }
}
exports.default = _;