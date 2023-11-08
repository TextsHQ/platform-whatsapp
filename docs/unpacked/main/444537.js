var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = require("../app/887341.js");
var o = require("./935719.js");
var l = require("./419359.js");
var i = a(require("../app/883891.js"));
var u = require("../app/103440.js");
var s = require("../app/287738.js");
var c = require("../app/753233.js");
var d = require("../app/690495.js");
var f = require("../app/118612.js");
var p = require("../app/114850.js");
var m = require("./150103.js");
var h = require("./786161.js");
var g = require("./64123.js");
var E = require("../app/956113.js");
var v = require("../app/180519.js");
var _ = require("../app/667738.js");
var y = require("../app/625786.js");
var C = require("../app/390737.js");
var b = require("./569056.js");
var M = require("../app/676345.js");
var S = require("../app/54052.js");
var T = require("./848122.js");
var w = require("../vendor/548360.js");
var A = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
a(require("../app/156720.js"));
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const O = {
  illustration: {
    width: "ln8gz9je"
  },
  title: {
    lineHeight: "tkq7s68q"
  },
  paragraph: {
    lineHeight: "n5p9w1es"
  },
  iconDescription: {
    maxWidth: "srly5o7x"
  },
  iconColor: {
    color: "s4recxw2"
  },
  spinnerWrapper: {
    height: "i2rx9fq8"
  }
};
const k = () => {
  const e = w.fbt._("OK", null, {
    hk: "35fNGc"
  });
  C.ToastManager.open(A.default.createElement(y.Toast, {
    action: {
      dismiss: true,
      actionText: e
    },
    msg: w.fbt._("Error updating Data Sharing setting.", null, {
      hk: "3hlCxD"
    }),
    id: (0, y.genId)()
  }));
};
const D = (e, t) => {
  const n = new h.SmbDataSharingConsentScreenWamEvent();
  n.smbDataSharingConsentScreenVersion = 0;
  n.smbDataSharingConsentScreenType = e;
  n.smbDataSharingConsentScreenEntryPoint = t;
  n.commitAndWaitForFlush().catch(() => {
    __LOG__(4, undefined, new Error())`logDataSharingOptInInteraction: metric failed`;
  });
};
const I = () => {
  const e = (0, _.useIsDarkTheme)();
  return A.default.createElement(d.FlexColumn, null, A.default.createElement(d.FlexRow, {
    xstyle: [M.uiPadding.top24, M.uiPadding.bottom24, O.illustration],
    justify: "center"
  }, e ? A.default.createElement(o.BusinessDataSharingIllustrationDarkIcon, null) : A.default.createElement(l.BusinessDataSharingIllustrationLightIcon, null)), A.default.createElement(d.FlexRow, null, A.default.createElement(v.TextDiv, {
    size: "20",
    color: "dark",
    weight: "medium",
    xstyle: [M.uiMargin.bottom12, O.title]
  }, w.fbt._("Share events to help you connect with customers", null, {
    hk: "1VSMCT"
  }))), A.default.createElement(d.FlexColumn, {
    xstyle: M.uiMargin.bottom12
  }, A.default.createElement(v.TextDiv, {
    size: "16",
    color: "dark",
    weight: "normal",
    xstyle: O.paragraph
  }, w.fbt._("To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.", null, {
    hk: "kDV4r"
  }), " ", A.default.createElement(c.ExternalLink, {
    href: (0, b.getBizDataSharingHcaUrl)()
  }, w.fbt._("Learn more", null, {
    hk: "3tybk4"
  })))), A.default.createElement(d.FlexRow, {
    align: "center",
    xstyle: M.uiMargin.bottom12
  }, A.default.createElement(S.VisibilityOffIcon, {
    height: 22,
    width: 22,
    xstyle: O.iconColor
  }), A.default.createElement(v.TextSpan, {
    size: "16",
    color: "dark",
    xstyle: [M.uiMargin.start24, O.paragraph, O.iconDescription]
  }, w.fbt._("Message and call content is not shared", null, {
    hk: "1Ta3H2"
  }))), A.default.createElement(d.FlexRow, {
    align: "center",
    xstyle: M.uiMargin.bottom12
  }, A.default.createElement(m.SettingsIcon, {
    height: 20,
    width: 20,
    xstyle: O.iconColor
  }), A.default.createElement(v.TextSpan, {
    size: "16",
    color: "dark",
    xstyle: [M.uiMargin.start24, O.paragraph, O.iconDescription]
  }, w.fbt._("You can always change this in the Ads Data Sharing Settings", null, {
    hk: "1sf1JN"
  }))), A.default.createElement(d.FlexRow, null, A.default.createElement(v.TextDiv, {
    theme: "muted"
  }, w.fbt._("Per Meta's {=m1}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.", [w.fbt._implicitParam("=m1", A.default.createElement(c.ExternalLink, {
    href: (0, b.getMetaBizTosUrl)()
  }, w.fbt._("Business Tools Terms", null, {
    hk: "2vRji7"
  })))], {
    hk: "2yLptV"
  }))));
};
const R = () => A.default.createElement(d.FlexColumn, {
  align: "center",
  justify: "center",
  xstyle: O.spinnerWrapper
}, A.default.createElement(E.Spinner, {
  color: "default",
  size: 48,
  stroke: 6
}));
function N(e) {
  let {
    callback: t,
    entrypoint: n
  } = e;
  const [a, o] = (0, A.useState)(false);
  (0, A.useEffect)(() => {
    (e => {
      const t = new h.SmbDataSharingConsentScreenWamEvent();
      t.smbDataSharingConsentScreenVersion = 0;
      t.smbDataSharingConsentScreenType = T.SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW;
      t.smbDataSharingConsentScreenEntryPoint = e;
      t.commitAndWaitForFlush().catch(() => {
        __LOG__(4, undefined, new Error())`logModalDialogView: metric failed`;
      });
    })(n);
  }, [n]);
  const l = e => () => {
    o(true);
    ((e, t) => {
      const n = e === r.ENUM_FALSE_TRUE.true ? T.SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_AGREE : T.SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE;
      return (0, g.setSMBDataSharingSettingAction)(e).then(() => D(n, t)).catch(k);
    })(e, n).finally(() => {
      p.ModalManager.close();
      t();
    });
  };
  const i = l(r.ENUM_FALSE_TRUE.true);
  const c = l(r.ENUM_FALSE_TRUE.false);
  const d = ((e, t) => () => {
    D(T.SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_CANCEL, t);
    s.DataSharingOptInCoolOffModel.startCoolOff();
    p.ModalManager.close();
    e();
  })(t, n);
  return A.default.createElement(u.ConfirmPopup, {
    buttonsDirection: "horizontal",
    type: f.ModalTheme.DataSharing,
    onOK: i,
    okDisabled: a,
    cancelDisabled: a,
    okText: w.fbt._("Allow", null, {
      hk: "7vZxt"
    }),
    onCancel: c,
    onOverlayClick: d,
    cancelText: w.fbt._("Don't allow", null, {
      hk: "2toswh"
    })
  }, a ? A.default.createElement(R, null) : A.default.createElement(I, null));
}
var x = {
  maybeShowOrderDataSharingDialog: function (e, t, n) {
    if (!i.default.shouldShowOrderDataSharingDialog(e)) {
      return t();
    }
    p.ModalManager.open(A.default.createElement(N, {
      entrypoint: n,
      callback: t
    }));
  },
  maybeShowLabelDataSharingDialog: function (e, t, n, a) {
    if (!e.some(e => i.default.shouldShowLabelDataSharingDialog(e, t))) {
      return n();
    }
    p.ModalManager.open(A.default.createElement(N, {
      entrypoint: a,
      callback: n
    }));
  },
  SmbDataSharingOptInModalDialog: N
};
exports.default = x;