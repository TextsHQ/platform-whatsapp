var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    contact: n,
    withReport: a,
    blockEntryPoint: A
  } = e;
  const [k, D] = (0, T.useState)(null);
  const [I, R] = (0, T.useState)(null);
  const [N, x] = (0, T.useState)(false);
  const [L, j] = (0, T.useState)(undefined);
  const [B, F] = (0, T.useState)(l.BizOptOutFirstMessage.None);
  const {
    isBizBot3p: G = false
  } = (t = (0, M.useBusinessProfile)(n.id, ["isBizBot3p"])) !== null && t !== undefined ? t : {};
  (0, T.useEffect)(() => {
    const e = u.ChatCollection.get(n.id);
    if (e != null) {
      j(e);
      F(e.senderMsgCount() === 1 ? l.BizOptOutFirstMessage.True : l.BizOptOutFirstMessage.False);
    }
  }, [n.id]);
  const U = e => {
    let {
      text: t
    } = e;
    R(t);
  };
  const W = function () {
    var e = (0, r.default)(function* () {
      if (k != null) {
        yield (0, o.blockContact)({
          contact: n,
          blockEntryPoint: A,
          bizOptOutArgs: {
            reason: k,
            reasonDescription: I,
            firstMessage: B,
            entryPoint: A
          }
        });
        if (N && L) {
          yield (0, y.sendReport)({
            chat: L,
            spamFlow: (0, i.getSpamFlowFromBlockEntryPoint)(A)
          });
          yield (0, d.sendDelete)(L);
        }
        g.ModalManager.close();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const H = T.default.createElement(f.ExternalLink, {
    href: (0, p.getControlsWhenMessagingBusinessFaqUrl)(),
    testid: "learn-more-link"
  }, S.fbt._("Learn more", null, {
    hk: "2GXQVh"
  }));
  const V = G ? S.fbt._("Block AI", null, {
    hk: "QKCli"
  }) : S.fbt._("Block Business", null, {
    hk: "4sZSqH"
  });
  const q = G ? S.fbt._("If you report this AI, the last 5 messages from them will be forwarded to WhatsApp. Your chat with this AI will also be deleted.", null, {
    hk: "1KDffT"
  }) : S.fbt._("If you report this business, the last 5 messages from them will be forwarded to WhatsApp. Your chat with this business will also be deleted.", null, {
    hk: "4qigGh"
  });
  const Y = G ? S.fbt._("Report AI", null, {
    hk: "1ghsC2"
  }) : S.fbt._("Report business", null, {
    hk: "4aOhHj"
  });
  const z = T.default.createElement(E.Name, {
    contact: n
  });
  const K = G ? S.fbt._("{contact} won't be able to message or call you anymore. This AI will not be notified.", [S.fbt._param("contact", z)], {
    hk: "3IyyIu"
  }) : S.fbt._("{contact} won't be able to message or call you anymore. This business will not be notified.", [S.fbt._param("contact", z)], {
    hk: "44QxYf"
  });
  return T.default.createElement(c.ConfirmPopup, {
    okDisabled: k == null,
    onOK: W,
    okText: (0, m.default)("Block"),
    onCancel: () => {
      g.ModalManager.close();
    },
    title: V,
    testid: "block-business-popup"
  }, T.default.createElement(C.TextParagraph, {
    xstyle: b.uiMargin.bottom20
  }, K, " ", H), T.default.createElement(h.FlexRow, {
    className: (0, w.default)(b.uiPadding.bottom6, P.border)
  }, T.default.createElement(C.TextSpan, {
    color: "muted"
  }, S.fbt._("Reason for blocking:", null, {
    hk: "2yA9eV"
  }))), O.map(e => {
    let {
      value: t,
      label: n
    } = e;
    return T.default.createElement(h.FlexColumn, {
      key: t,
      align: "stretch"
    }, T.default.createElement(h.FlexRow, {
      xstyle: P.border
    }, T.default.createElement(v.RadioWithLabel, {
      testid: `block-reason-${String(t)}`,
      name: "block-reason-radio",
      value: String(t),
      label: n,
      checked: k === t,
      onChange: () => {
        e = t;
        R(null);
        return void D(e);
        var e;
      }
    })), k != null && t === l.BizOptOutReason.Other && k === l.BizOptOutReason.Other && T.default.createElement(_.RichTextField, {
      testid: "block-reason-description",
      focusOnMount: true,
      hideFloatingLabel: true,
      showRemaining: true,
      value: I,
      maxLength: 30,
      onChange: U,
      placeholder: S.fbt._("Reason (optional)", null, {
        hk: "gnfil"
      })
    }));
  }), a && T.default.createElement(h.FlexRow, {
    xstyle: b.uiMargin.top20
  }, T.default.createElement(h.FlexColumn, null, T.default.createElement(C.TextLabel, {
    htmlFor: "menu-icon-block",
    color: "accent",
    weight: "medium"
  }, Y), T.default.createElement(C.TextParagraph, {
    xstyle: b.uiMargin.top6
  }, q)), T.default.createElement(h.FlexColumn, null, T.default.createElement(s.CheckBox, {
    onChange: () => x(e => !e),
    checked: N,
    id: "menu-icon-block",
    testid: "report-checkbox"
  })), T.default.createElement("div", {
    className: (0, w.default)(b.uiMargin.vert12)
  })));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/547979.js");
var l = require("../app/400436.js");
var i = require("../app/157550.js");
var u = require("../app/351053.js");
var s = require("./468926.js");
var c = require("../app/103440.js");
var d = require("./95049.js");
var f = require("../app/753233.js");
var p = require("../app/258105.js");
var m = a(require("../app/395767.js"));
var h = require("../app/690495.js");
var g = require("../app/114850.js");
var E = require("../app/21645.js");
var v = require("./695431.js");
var _ = require("./202391.js");
var y = require("../app/383296.js");
var C = require("../app/180519.js");
var b = require("../app/676345.js");
var M = require("./508228.js");
var S = require("../vendor/548360.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var w = a(require("../app/156720.js"));
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const P = {
  border: {
    borderBottom: "j4zbmt6h"
  }
};
const O = [{
  value: l.BizOptOutReason.NoLongerNeeded,
  label: S.fbt._("No longer needed", null, {
    hk: "h96ZB"
  })
}, {
  value: l.BizOptOutReason.NoSignUp,
  label: S.fbt._("Didn't sign up", null, {
    hk: "2Sy3f8"
  })
}, {
  value: l.BizOptOutReason.Spam,
  label: S.fbt._("Spam", null, {
    hk: "4xihET"
  })
}, {
  value: l.BizOptOutReason.OffensiveMessages,
  label: S.fbt._("Offensive messages", null, {
    hk: "1IWScX"
  })
}, {
  value: l.BizOptOutReason.Other,
  label: S.fbt._("Other", null, {
    hk: "1SJhwu"
  })
}];