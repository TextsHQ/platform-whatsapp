var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chat: t,
    groupMetadata: n
  } = e;
  const [a, v] = (0, h.default)(t);
  const [_, y] = (0, g.default)(t);
  const [C, b] = (0, l.useMembershipApprovalRequestsBanner)(t);
  const [M, S] = (0, c.useReportToAdminNewReportBanner)(t);
  const T = (0, u.useWAWebPinnedMessagesBanner)(t);
  const [w, A] = (0, i.useNewsletterChannelAlertsBanner)(t);
  const [P, O, k] = (0, d.useSubgroupSuggestionsBanner)(t);
  let D;
  if (_) {
    D = p.default.createElement(s.default, {
      onClose: () => y(false)
    });
  } else if (C) {
    D = p.default.createElement(l.MembershipApprovalRequestsBanner, {
      onClose: b,
      chat: t
    });
  } else if (M) {
    D = p.default.createElement(c.ReportToAdminNewReportBanner, {
      onClose: S,
      chat: t
    });
  } else if (P) {
    D = p.default.createElement(d.SubgroupSuggestionsBanner, {
      onClose: O,
      chat: t,
      subgroupSuggestionsCount: k
    });
  } else if (a && (n == null ? undefined : n.displayedDesc)) {
    D = p.default.createElement(o.default, {
      onClose: v,
      chat: t,
      groupMetadata: n
    });
  } else if (T) {
    D = p.default.createElement(u.PinnedMessagesBanner, {
      chat: t
    });
  } else if (t.isNewsletter && w) {
    D = p.default.createElement(i.NewsletterChannelAlertsBanner, {
      newsletter: t,
      onClose: A
    });
  }
  return p.default.createElement(f.default, {
    transitionName: "butterbar",
    className: (0, m.default)(E)
  }, D, p.default.createElement(r.ChangeNumberNotificationBanner, {
    chat: t
  }));
};
var r = require("./560677.js");
var o = a(require("./58165.js"));
var l = require("./629881.js");
var i = require("./558173.js");
var u = require("./936630.js");
var s = a(require("./477118.js"));
var c = require("./784163.js");
var d = require("./310516.js");
var f = a(require("../app/844453.js"));
var p = a(require("../vendor/667294.js"));
var m = a(require("../app/156720.js"));
var h = a(require("./133016.js"));
var g = a(require("./954154.js"));
const E = {
  zIndex: "nfki698u",
  flexGrow: "tvf2evcx",
  flexShrink: "oq44ahr5",
  flexBasis: "lb5m6g5c",
  borderBottom: "n8n2xqzm"
};