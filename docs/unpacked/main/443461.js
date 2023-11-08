var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/898817.js");
var l = require("../app/138291.js");
var i = a(require("./909097.js"));
var u = require("./454035.js");
exports.default = class {
  constructor(e) {
    this.getMsgText = e;
    this.tokenizer = new u.MultiLangTokenizer();
    this.msgKeyToTokens = new Map();
    this.newMsgsToTokenize = [];
  }
  filter(e, t, n) {
    var a = this;
    return (0, r.default)(function* () {
      if (t === "" || t == null) {
        return e.toArray();
      }
      const r = Array.from(a.tokenizer.tokenize(t)).filter(e => e.length > 1 || (0, i.default)(e)).sort((e, t) => t.length - e.length);
      if (r.length === 0) {
        return e.toArray();
      }
      let u = 0;
      let s = e.toArray();
      for (const e of r) {
        const t = [];
        for (const r of s) {
          if ((n == null ? undefined : n.aborted) === true) {
            throw new o.AbortError();
          }
          const i = r.id;
          let s = a.msgKeyToTokens.get(i);
          if (s == null) {
            s = a._getMsgTokens(r);
            a.msgKeyToTokens.set(r.id, s);
          }
          if (a._doMsgTokensIncludeTokenPrefix(s, e)) {
            t.push(r);
          }
          u += 1;
          yield (0, l.asyncSleepAfterGivenLoopIteration)(u, 100, 0);
        }
        s = t;
        if (s.length === 0) {
          break;
        }
      }
      a.newMsgsToTokenize = [];
      if ((n == null ? undefined : n.aborted) === true) {
        throw new o.AbortError();
      }
      return s;
    })();
  }
  cacheMessageTokens(e) {
    this.newMsgsToTokenize.push(e);
    if (this.newMsgsToTokenize.length === 100) {
      self.setTimeout(() => this._processMsgsToTokenize(), 0);
    }
  }
  removeMessageTokensFromCache(e) {
    this.msgKeyToTokens.delete(e.id);
  }
  clearTokensCache() {
    this.msgKeyToTokens.clear();
  }
  _processMsgsToTokenize() {
    var e = this;
    return (0, r.default)(function* () {
      const t = e.newMsgsToTokenize;
      e.newMsgsToTokenize = [];
      for (const [n, a] of t.entries()) {
        const t = a.id;
        if (e.msgKeyToTokens.has(t)) {
          continue;
        }
        const r = e._getMsgTokens(a);
        e.msgKeyToTokens.set(t, r);
        yield (0, l.asyncSleepAfterGivenLoopIteration)(n, 100, 40);
      }
    })();
  }
  _doMsgTokensIncludeTokenPrefix(e, t) {
    for (const n of e) {
      if (n.startsWith(t)) {
        return true;
      }
    }
    return false;
  }
  _getMsgTokens(e) {
    const t = this.getMsgText(e);
    if (t == null) {
      return [];
    }
    return Array.from(this.tokenizer.tokenize(t)).filter(e => e.length > 1 || (0, i.default)(e));
  }
};