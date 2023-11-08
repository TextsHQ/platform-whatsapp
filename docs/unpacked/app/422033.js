var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundsForChat = function () {
  return u.apply(this, arguments);
};
exports.queryAndRemoveMessageHistory = function () {
  return d.apply(this, arguments);
};
exports.queryAndRemoveMessagesInMessageRange = function () {
  return c.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./137460.js");
var o = require("./878685.js");
var s = require("./110567.js");
var l = require("./851698.js");
function u() {
  return (u = (0, i.default)(function* (e) {
    const t = (0, o.beginningOfChat)(e);
    const n = (0, o.endOfChat)(e);
    const r = yield (0, l.getMessageTable)().between(["internalId"], t, n, {
      lowerInclusive: false,
      upperInclusive: false,
      limit: 1
    });
    if (r.length === 0) {
      return null;
    }
    const i = r[0].rowId;
    const a = yield (0, l.getMessageTable)().between(["internalId"], t, n, {
      lowerInclusive: false,
      upperInclusive: false,
      limit: 1,
      reverse: true
    });
    if (a.length === 0) {
      return null;
    }
    const s = a[0].rowId;
    const u = a[0].t;
    if (i == null || s == null) {
      return null;
    } else {
      return {
        startRowId: i,
        endRowId: s,
        tsOfLastMessage: u
      };
    }
  })).apply(this, arguments);
}
function c() {
  return (c = (0, i.default)(function* (e, t, n) {
    const r = yield (0, a.deleteMessagesInMessageRange)(e, t, n);
    s.ftsClient.purge(r).catch(() => {});
    return r;
  })).apply(this, arguments);
}
function d() {
  return (d = (0, i.default)(function* (e) {
    const t = (0, o.beginningOfChat)(e);
    const n = (0, o.endOfChat)(e);
    const r = yield (0, l.getMessageTable)().between(["internalId"], t, n, {
      lowerInclusive: false,
      upperInclusive: false,
      returnKeyType: "primary_key"
    });
    yield (0, l.getMessageTable)().bulkRemove(r);
    return r;
  })).apply(this, arguments);
}