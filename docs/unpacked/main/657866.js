var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHONE_NUMBER_VALIDATION_REGEX = undefined;
exports.getErrorStr = function (e) {
  const t = p.fbt._("Retry", null, {
    hk: "2cuEQJ"
  });
  let n = p.fbt._("Something went wrong. Please try again.", null, {
    hk: "4fidhf"
  });
  if (e instanceof i.ServerStatusCodeError && e.status === 429) {
    return {
      text: p.fbt._("Something went wrong. Try again later.", null, {
        hk: "2GXqD7"
      }),
      retryStr: null
    };
  }
  if (e instanceof c.HttpNetworkError) {
    n = p.fbt._("Unable to connect to the internet.", null, {
      hk: "29LIKy"
    });
  }
  return {
    text: n,
    retryStr: t
  };
};
exports.queryExistsAndGetChat = m;
exports.queryExistsAndGetChatCached = function () {
  return new l.default(m, {
    maxCached: 100,
    maxAge: 1 / 0,
    shouldCache: e => !!e
  });
};
var r = a(require("../vendor/81109.js"));
var o = a(require("../vendor/348926.js"));
var l = a(require("../app/8490.js"));
var i = require("../app/984330.js");
var u = require("../app/206464.js");
var s = require("../app/581354.js");
var c = require("../app/791357.js");
var d = require("../app/803737.js");
var f = require("../app/459857.js");
var p = require("../vendor/548360.js");
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, o.default)(function* (e) {
    var t;
    var n;
    var a;
    var o;
    var l;
    var i;
    const c = yield (0, d.queryPhoneExists)(e);
    const p = c == null ? undefined : c.wid;
    if (!p) {
      return null;
    }
    const m = {
      wid: p,
      isBusiness: (t = c == null ? undefined : c.biz) !== null && t !== undefined && t,
      verifiedName: c == null || (n = c.bizInfo) === null || n === undefined || (a = n.verifiedName) === null || a === undefined ? undefined : a.name,
      verifiedLevel: c == null || (o = c.bizInfo) === null || o === undefined || (l = o.verifiedName) === null || l === undefined ? undefined : l.level
    };
    let h = yield (0, u.getExisting)(p);
    const g = Boolean(c == null ? undefined : c.biz);
    if (Boolean(g || ((i = h) === null || i === undefined ? undefined : i.msgs.some(e => e.isRealMessage() && !(0, f.isMeAccount)(e.senderObj.id))))) {
      if (!h && g) {
        h = yield (0, s.findChat)(p, "newChatFlow");
      }
      return (0, r.default)({
        chat: h
      }, m);
    } else {
      return (0, r.default)({
        chat: null
      }, m);
    }
  })).apply(this, arguments);
}
exports.PHONE_NUMBER_VALIDATION_REGEX = /^\+*[\d ()-]+$/;