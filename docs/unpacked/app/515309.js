var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAbout = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./518059.js");
var o = require("./692269.js");
var s = require("./328606.js");
var l = r(require("./124928.js"));
var u = r(require("./556869.js"));
function c() {
  return (c = (0, i.default)(function* (e) {
    if (!e.isLid()) {
      var t;
      const n = yield (0, a.mexGetAbout)(e);
      if (((t = n.error) === null || t === undefined ? undefined : t.errorCode) === 401) {
        return {
          id: e,
          status: null
        };
      } else {
        return n;
      }
    }
    return d(e);
  })).apply(this, arguments);
}
function d() {
  return p.apply(this, arguments);
}
function p() {
  return (p = (0, i.default)(function* (e) {
    if (!l.default.isWid(e) || !e.isUser()) {
      __LOG__(3)`getAbout: this method should only take user wid, instead it received: ${e}`;
      return Promise.resolve({
        id: e
      });
    }
    const t = new o.USyncQuery().withContext("interactive").withMode("query").withStatusProtocol().withUser(new s.USyncUser().withId(e));
    const n = yield t.execute();
    if (n.error.all || n.error.status) {
      const t = n.error.all || n.error.status;
      __LOG__(3)`getAbout: failed ${t.errorCode} : ${t.errorText}`;
      return {
        id: e,
        error: t
      };
    }
    const r = n.list;
    if (r.length) {
      return {
        id: e,
        status: r[0].status
      };
    } else {
      return Promise.reject((0, u.default)("no status data returned for user"));
    }
  })).apply(this, arguments);
}