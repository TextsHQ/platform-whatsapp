var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexFetchNewsletterSubscribers = function () {
  return f.apply(this, arguments);
};
var r;
var o = a(require("../vendor/348926.js"));
var l = require("../app/632157.js");
var i = require("../app/123982.js");
var u = require("../app/716652.js");
var s = require("../app/73225.js");
var c = require("../app/669050.js");
const d = r !== undefined ? r : r = require("./94540.js");
function f() {
  return (f = (0, o.default)(function* (e, t) {
    var n;
    var a;
    const r = {
      input: {
        newsletter_id: e,
        count: Math.min((0, s.getMaxSubscriberNumber)(), t)
      }
    };
    if (!(0, s.isNewsletterSubscriberListEnabled)()) {
      __LOG__(4, undefined, new Error(), undefined, ["newsletter"])`[isNewsletterSubscriberListEnabled] ABProp not enabled for fetching newsletter subscribers`;
      return null;
    }
    const o = (yield (0, i.fetchQuery)(d, r)).xwa2_newsletter_subscribers;
    if (o == null) {
      return null;
    }
    if (((n = o.subscribers) === null || n === undefined ? undefined : n.edges) == null) {
      return {
        subscribers: []
      };
    }
    return {
      subscribers: (a = p(o.subscribers.edges).map(e => {
        let {
          node: t,
          role: n,
          subscribe_time: a
        } = e;
        const {
          id: r,
          pn: o
        } = t;
        if (r == null) {
          return null;
        }
        const i = a != null ? (0, l.castToUnixTime)(Number.parseInt(a, 10)) : null;
        const s = o != null ? (0, c.createWid)(o) : undefined;
        return {
          displayName: t.display_name,
          id: (0, c.createWid)(r),
          role: (0, u.mapRoleToMembership)(n),
          phoneNumber: s,
          subscribeTime: i
        };
      }).filter(Boolean)) !== null && a !== undefined ? a : []
    };
  })).apply(this, arguments);
}
function p(e) {
  const t = e.filter(e => e.role === "ADMIN" || e.role === "OWNER");
  const n = new Set(t.map(e => e.node.id));
  const a = e.filter(e => !n.has(e.node.id));
  return [...t, ...a];
}