var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMexGetAllNewsletters = function () {
  return p.apply(this, arguments);
};
exports.mexFetchAllNewsletters = c;
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./984330.js");
var s = require("./123982.js");
var l = require("./849342.js");
var u = require("./716652.js");
function c() {
  return d.apply(this, arguments);
}
function d() {
  return (d = (0, a.default)(function* () {
    const e = i !== undefined ? i : i = require("./923995.js");
    const t = yield (0, s.fetchQuery)(e, {});
    __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][NEWSLETTER] fetched all newsletters job`;
    return t;
  })).apply(this, arguments);
}
function p() {
  return (p = (0, a.default)(function* () {
    try {
      const e = yield c();
      const t = e == null ? undefined : e.xwa2_newsletter_subscribed;
      if (e == null || t == null) {
        throw new o.ServerStatusCodeError(500, "Mex unexpected null response for fetching all metadata");
      }
      if (t.length === 0) {
        return {
          newsletters: []
        };
      }
      const n = [];
      const r = [];
      t.filter(e => e != null).map(e => {
        const t = (0, l.parseMexNewsletterResponse)(e);
        var i;
        if (t != null) {
          if ((e == null || (i = e.state) === null || i === undefined ? undefined : i.type) === "DELETED") {
            if (t != null) {
              r.push({
                jid: t.idJid
              });
            }
          } else {
            n.push(t);
          }
        }
      });
      if (n.length > 0 || r.length > 0) {
        return {
          newsletters: n,
          deletedNewsletters: r.length > 0 ? {
            id: r
          } : null
        };
      }
    } catch (e) {
      (0, u.handleMexNewsletterError)(e);
    }
    return {
      newsletters: []
    };
  })).apply(this, arguments);
}