var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n] = (0, f.useState)();
  const a = e.msg.type === u.MSG_TYPE.IMAGE;
  const p = e => {
    switch (e) {
      case o.BotFeedbackKind.NEGATIVE_HELPFUL:
        return d.fbt._("Not relevant", null, {
          hk: "Hv2Fr"
        });
      case o.BotFeedbackKind.NEGATIVE_INTERESTING:
        return d.fbt._("Too repetitive", null, {
          hk: "wYxcC"
        });
      case o.BotFeedbackKind.NEGATIVE_REFUSED:
        return d.fbt._("Refused to answer", null, {
          hk: "4mN9fj"
        });
      case o.BotFeedbackKind.NEGATIVE_ACCURATE:
        return d.fbt._("Not accurate", null, {
          hk: "4MjIb"
        });
      case o.BotFeedbackKind.NEGATIVE_SAFE:
        return d.fbt._("Harmful or offensive", null, {
          hk: "NC10"
        });
      case o.BotFeedbackKind.NEGATIVE_OTHER:
        return d.fbt._("Something else", null, {
          hk: "1erTaF"
        });
      case o.BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING:
        return d.fbt._("Not visually appealing", null, {
          hk: "4DdEYG"
        });
      case o.BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT:
        return d.fbt._("Not relevant to text", null, {
          hk: "2Ndvny"
        });
      default:
        return "";
    }
  };
  const m = function () {
    var n = (0, r.default)(function* () {
      if (t != null) {
        e.onSubmit(t);
      }
    });
    return function () {
      return n.apply(this, arguments);
    };
  }();
  return f.default.createElement(l.ConfirmPopup, {
    title: d.fbt._("Add a reason", null, {
      hk: "1UsaRW"
    }),
    okText: d.fbt._("Submit", null, {
      hk: "1D8UC6"
    }),
    onOK: m,
    okDisabled: t == null,
    onCancel: () => {
      i.ModalManager.close();
    },
    testid: "bot-feedback-modal"
  }, f.default.createElement(c.WDSTextSmall, {
    color: "secondaryLighter",
    paddingTop: 4,
    paddingBottom: 12
  }, a ? d.fbt._("Thanks for your feedback! Let us know what's wrong so we can train and improve AI images.", null, {
    hk: "31tJba"
  }) : d.fbt._("Thanks for your feedback! Let us know what's wrong so we can train and improve AI chats.", null, {
    hk: "234ReT"
  })), f.default.createElement(s.RadioGroup, {
    name: "feedback",
    checkedValue: t != null ? t : null,
    options: (a ? [o.BotFeedbackKind.NEGATIVE_NOT_VISUALLY_APPEALING, o.BotFeedbackKind.NEGATIVE_NOT_RELEVANT_TO_TEXT, o.BotFeedbackKind.NEGATIVE_SAFE, o.BotFeedbackKind.NEGATIVE_OTHER] : [o.BotFeedbackKind.NEGATIVE_HELPFUL, o.BotFeedbackKind.NEGATIVE_ACCURATE, o.BotFeedbackKind.NEGATIVE_INTERESTING, o.BotFeedbackKind.NEGATIVE_SAFE, o.BotFeedbackKind.NEGATIVE_OTHER]).map(e => ({
      value: e,
      label: p(e),
      onChange: () => n(e)
    }))
  }));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/37237.js");
var l = require("../app/103440.js");
var i = require("../app/114850.js");
var u = require("../app/373070.js");
var s = require("./695431.js");
var c = require("../app/851488.js");
var d = require("../vendor/548360.js");
var f = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = p(t);
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
function p(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (p = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}