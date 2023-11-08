var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.msgFindQuery = function (e, t) {
  if (t.label != null) {
    return Promise.resolve([]);
  }
  if (e === "before") {
    return function () {
      return y.apply(this, arguments);
    }(t, t.count).catch((0, o.filteredCatch)(g, () => ({
      status: 404
    })));
  }
  if (e === "after") {
    return function (e) {
      let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _;
      if (e instanceof d.default) {
        const n = e.remote.toString();
        return (0, p.getMessageTable)().equals(["id"], e.toString()).then(r => {
          if (r.length === 0) {
            __LOG__(3)`Anchor message ${e.toString()} does not exist in message table`;
            throw new g();
          }
          const i = r[0];
          const a = (0, c.getInChatMsgId)(i.internalId || "");
          const o = (0, c.craftInternalId)(n, a);
          let s = (0, c.craftInternalId)(n, a + t);
          s = (0, c.endOfChat)(e.remote);
          return (0, u.queryChatVisibleMessageHelper)(o, s, {
            lowerInclusive: false,
            upperInclusive: true
          }, t).then(e => e.map(e => (0, l.messageFromDbRow)(e)));
        });
      }
      return Promise.resolve([]);
    }(t, t.count).catch((0, o.filteredCatch)(g, () => ({
      status: 404
    })));
  }
  if (e === "star") {
    const e = t.id == null ? undefined : new d.default(t);
    if (t.chat != null) {
      return (0, s.getStarredMessagesForChat)(t.chat, t.count, e);
    } else {
      r = t.count;
      i = e;
      return Promise.resolve().then(() => {
        if (i != null) {
          return (0, p.getMessageTable)().get(i.toString());
        }
      }).then(e => {
        const t = e == null ? 1 / 0 : e.isStarred;
        return (0, p.getMessageTable)().between(["isStarred"], 0, t, {
          lowerInclusive: false,
          upperInclusive: false,
          reverse: true,
          limit: r
        }).then(e => e.map(e => (0, l.messageFromDbRow)(e)));
      });
    }
  }
  if (e === "search") {
    const e = {};
    if (t.remote) {
      e.remote = t.remote.toString();
    }
    if (t.count && t.page >= 0) {
      e.limit = t.count;
      e.page = t.page;
    }
    return require("./110567.js").ftsClient.search(t.searchTerm, e);
  }
  if (e === "media") {
    const e = t.remote;
    const n = t.id == null ? undefined : new d.default(t);
    if (t.media === "document") {
      return h(e, t.count, t.direction, "isDocMsg", n).then(e => e.map(e => (0, l.messageFromDbRow)(e)));
    } else if (t.media === "url") {
      return h(e, t.count, t.direction, "hasLink", n).then(e => e.map(e => (0, l.messageFromDbRow)(e)));
    } else {
      return Promise.all(["isMediaMsg", "isDocMsg", "hasLink"].map(r => h(e, t.count, t.direction, r, n).then(e => e.map(e => (0, l.messageFromDbRow)(e))))).then(e => {
        let [t, n, r] = e;
        const i = [t, r, n].flat();
        return {
          docCount: n.length,
          linkCount: r.length,
          mediaCount: t.length,
          messages: i
        };
      });
    }
  }
  var r;
  var i;
  __LOG__(3)`Message query type ${e} not implemented.`;
  return Promise.reject((0, f.default)(`Message query type ${e} not implemented.`));
};
exports.queryMessageType = h;
exports.queryVcard = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./122583.js");
var s = require("./644034.js");
var l = require("./907539.js");
var u = require("./702018.js");
var c = require("./878685.js");
var d = r(require("./565754.js"));
var p = require("./851698.js");
var f = r(require("./556869.js"));
const _ = 20;
class g extends Error {
  constructor() {
    super(...arguments);
    this.name = "NoAnchorMessageError";
  }
}
function m() {
  return (m = (0, a.default)(function* (e) {
    return (0, p.getMessageTable)().equals(["vcardWAids"], e.toString()).then(e => e.map(e => (0, l.messageFromDbRow)(e)));
  })).apply(this, arguments);
}
function h(e, t, n, r, i) {
  return (i == null ? Promise.resolve(undefined) : (0, p.getMessageTable)().equals(["id"], i.toString())).then(a => {
    if (i && a != null && a.length === 0) {
      __LOG__(3)`Anchor message ${i && i.toString()} does not exist in message table`;
      throw new g();
    }
    const o = a == null ? undefined : a[0];
    let s;
    let l;
    let u = false;
    if (n === "before") {
      s = (0, c.beginningOfChat)(e);
      l = o == null ? (0, c.endOfChat)(e) : (0, c.craftInternalId)(e.toString(), (0, c.getInChatMsgId)(o.internalId || ""));
      u = true;
    } else {
      s = o == null ? (0, c.beginningOfChat)(e) : (0, c.craftInternalId)(e.toString(), (0, c.getInChatMsgId)(o.internalId || ""));
      l = (0, c.endOfChat)(e);
    }
    return (0, p.getMessageTable)().between(["internalId", r], [s, 0], [l, 1 / 0], {
      lowerInclusive: false,
      upperInclusive: false,
      limit: t,
      reverse: u
    });
  });
}
function y() {
  return (y = (0, a.default)(function* (e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _;
    if (!e.remote) {
      return Promise.resolve([]);
    }
    const n = e.remote.toString();
    let r;
    if (e instanceof d.default) {
      const t = yield (0, p.getMessageTable)().equals(["id"], e.toString());
      if (t.length === 0) {
        __LOG__(3)`Anchor message ${e.toString()} does not exist in message table`;
        throw new g();
      }
      r = t[0];
    }
    let a = (0, c.beginningOfChat)(e.remote);
    let o = (0, c.endOfChat)(e.remote);
    if (r) {
      const e = (0, c.getInChatMsgId)(r.internalId || "");
      const i = Math.max(0, e - t);
      o = (0, c.craftInternalId)(n, e);
      a = (0, c.craftInternalId)(n, i);
    }
    a = (0, c.beginningOfChat)(e.remote);
    const s = yield (0, u.queryChatVisibleMessageHelper)(a, o, (0, i.default)((0, i.default)({}, {
      lowerInclusive: true,
      upperInclusive: false
    }), {}, {
      reverse: true
    }), t);
    return s.reverse().map(e => (0, l.messageFromDbRow)(e));
  })).apply(this, arguments);
}