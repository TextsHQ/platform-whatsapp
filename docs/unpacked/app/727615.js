var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEMPORARY_SERVER_ID_LOWER_BOUND = undefined;
exports.bulkGetMessagesByServerIds = function () {
  return v.apply(this, arguments);
};
exports.craftNewsletterMsgKeyFromServerId = function (e, t) {
  const n = t instanceof f.default ? t : (0, _.createWid)(t);
  return new u.default({
    remote: n,
    fromMe: true,
    id: e.toString(10)
  });
};
exports.doesNewsletterExistInStorage = function () {
  return g.apply(this, arguments);
};
exports.getMessageByServerId = function () {
  return S.apply(this, arguments);
};
exports.getTemporaryServerId = function () {
  return T.apply(this, arguments);
};
exports.isPreviewNewsletter = m;
exports.isSubscribedNewsletter = function () {
  return y.apply(this, arguments);
};
exports.updateMsgViewReceipt = function () {
  return M.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./907539.js");
var s = require("./878685.js");
var l = require("./854379.js");
var u = r(require("./565754.js"));
var c = require("./126392.js");
var d = require("./851698.js");
var p = require("./876358.js");
var f = r(require("./124928.js"));
var _ = require("./669050.js");
function g() {
  return (g = (0, i.default)(function* (e) {
    return (yield (0, a.getChatRecord)((0, l.newsletterJidToWid)(e))) != null;
  })).apply(this, arguments);
}
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e) {
    const t = yield (0, p.getNewsletterMetadataTable)().get(e);
    return t == null || t.membershipType === c.NewsletterDBMembership.Guest;
  })).apply(this, arguments);
}
function y() {
  return (y = (0, i.default)(function* (e) {
    return !(yield m(e));
  })).apply(this, arguments);
}
const E = Number.MAX_SAFE_INTEGER - 10000;
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const n = (0, s.craftInternalId)(t, e);
    const [r] = yield (0, d.getMessageTable)().anyOf(["internalId"], [n]);
    if (r == null) {
      return null;
    } else {
      return (0, o.messageFromDbRow)(r);
    }
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e, t) {
    const n = new Map();
    const r = new Map(e.map(e => [(0, s.craftInternalId)(t, e), e]));
    (yield (0, d.getMessageTable)().anyOf(["internalId"], Array.from(r.keys()))).forEach(e => {
      if (e.internalId == null) {
        return;
      }
      const t = r.get(e.internalId);
      if (t != null) {
        n.set(t, (0, o.messageFromDbRow)(e));
      }
    });
    return n;
  })).apply(this, arguments);
}
function T() {
  return (T = (0, i.default)(function* (e) {
    const t = (0, s.craftInternalId)(e.toJid(), E);
    const n = (0, s.endOfChat)(e);
    const r = yield (0, d.getMessageTable)().between(["internalId"], t, n, {
      lowerInclusive: true,
      upperInclusive: false,
      limit: 1,
      reverse: true
    });
    if (r.length === 0) {
      return E;
    }
    if (r[0].internalId == null) {
      return E;
    }
    const i = (0, s.getInChatMsgId)(r[0].internalId);
    return Math.min(i + 1, Number.MAX_SAFE_INTEGER);
  })).apply(this, arguments);
}
function M() {
  return (M = (0, i.default)(function* (e) {
    const t = (yield (0, d.getMessageTable)().bulkGet(e.map(String))).filter(Boolean).map(e => ({
      id: e.id,
      viewed: true
    }));
    yield (0, d.getMessageTable)().bulkCreateOrMerge(t);
  })).apply(this, arguments);
}
exports.TEMPORARY_SERVER_ID_LOWER_BOUND = E;