var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/907539.js");
var l = require("../app/817690.js");
var i = require("../app/356097.js");
var u = require("./811720.js");
var s = require("../app/854379.js");
var c = a(require("./75531.js"));
var d = require("../app/772358.js");
var f = require("./427096.js");
var p = require("./626163.js");
var m = require("./490141.js");
var h = require("./176514.js");
var g = require("./328340.js");
var E = require("../vendor/548360.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = y(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("../vendor/667294.js"));
var _ = require("../app/808446.js");
function y(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (y = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function C(e, t) {
  const {
    onClose: n,
    chat: a,
    onMsgFooterClick: y
  } = e;
  const [C, b] = (0, v.useState)([]);
  (0, v.useEffect)(() => {
    function e() {
      return (e = (0, r.default)(function* () {
        const e = yield (0, m.getReportedMsgs)(a.id);
        const t = new Map();
        if (e) {
          e.reportsReport.forEach((e, n) => {
            t.set(e.messageId, {
              reporters: e.reporter.map(e => (0, s.userJidToUserWid)(e.jid)),
              order: n
            });
          });
          const n = (yield (0, l.getMsgsByMsgIdsAndChatId)(e.reportsReport.map(e => e.messageId), a.id)).map(e => {
            const n = new d.Msg((0, o.messageFromDbRow)(e));
            n.waitForPrep().then(() => {
              var e;
              n.reporterJidList = (e = t.get(n.id.id)) === null || e === undefined ? undefined : e.reporters;
            });
            return n;
          }).sort((e, n) => {
            var a;
            var r;
            var o;
            var l;
            return ((a = (r = t.get(e.id.id)) === null || r === undefined ? undefined : r.order) !== null && a !== undefined ? a : 0) - ((o = (l = t.get(n.id.id)) === null || l === undefined ? undefined : l.order) !== null && o !== undefined ? o : 0);
          });
          b(n);
        }
      })).apply(this, arguments);
    }
    (0, h.clearLastReportTimestamp)(a);
    (0, p.logRTAReportingEvent)({
      reportToAdminInteraction: g.REPORT_TO_ADMIN_INTERACTION.CLICK_OPEN_ADMIN_DASHBOARD,
      groupId: a.id.user
    });
    (function () {
      e.apply(this, arguments);
    })();
  }, [a]);
  const M = new f.ReportedMsgCollection();
  (0, _.useListener)(a.msgs, "change:msgKey", e => {
    let {
      oldKey: t
    } = e;
    var n;
    n = t;
    b(C.filter(e => e.id.toString() !== n.toString()));
  });
  const S = E.fbt._("Sent for admin review", null, {
    hk: "20UoUM"
  });
  const T = v.default.createElement(u.SentForAdminReview, null);
  M.add(C, {
    sort: false
  });
  return v.default.createElement(c.default, {
    testid: "sent-for-admin-review-drawer",
    ref: t,
    msgCollection: M,
    onClose: n,
    chat: a,
    title: S,
    displayType: i.DISPLAY_TYPE.REPORTED_MSG,
    emptyListText: T,
    onMsgFooterClick: y,
    footerText: E.fbt._("Use WhatsApp on your phone to see older messages.", null, {
      hk: "4njD7D"
    })
  });
}
var b = (0, v.forwardRef)(C);
exports.default = b;