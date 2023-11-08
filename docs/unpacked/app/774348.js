var r = require("../vendor/595318.js");
exports.r$ = function () {
  return _.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./317851.js");
var s = require("./907539.js");
var l = require("./143130.js");
var u = require("./787742.js");
var c = require("./373070.js");
var d = require("./50987.js");
function p() {
  return f.apply(this, arguments);
}
function f() {
  return (f = (0, a.default)(function* (e) {
    try {
      const {
        futureproofBuffer: t,
        futureproofParams: n
      } = e;
      if ((0, u.getIsNewsletterMsg)(e)) {
        return yield (0, d.reparseNewsletterMsg)(e);
      } else if (t != null) {
        if (n) {
          yield (0, l.processDecryptedMessageProto)((0, i.default)((0, i.default)({}, n), {}, {
            decrypted: t,
            reparsing: true
          }));
        }
        return e;
      } else {
        return null;
      }
    } catch (e) {
      __LOG__(4, undefined, new Error())`reparseFutureproof: reparse error: ${e}`;
      return null;
    }
  })).apply(this, arguments);
}
function _() {
  return (_ = (0, a.default)(function* (e) {
    try {
      const {
        getAddOnProviderForFutureproofMsg: t
      } = require("./944749.js");
      const r = [];
      const i = [];
      e.forEach(e => {
        const n = (0, s.messageFromDbRow)(e);
        if ((0, o.isUnifiedInfraEnabledForType)(e.type) || Boolean(t(n))) {
          r.push(n);
        } else if (e.type === c.MSG_TYPE.UNKNOWN) {
          i.push(n);
        }
      });
      yield Promise.all(i.map(e => p(e)));
      yield Promise.all(r.map(e => p(e)));
    } catch (e) {
      __LOG__(4, undefined, new Error())`reparseFutureproof: processFutureproof error`;
    }
  })).apply(this, arguments);
}