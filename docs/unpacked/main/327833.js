var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    chat: t
  } = e;
  const [n, a] = (0, A.useState)(false);
  const [O, D] = (0, A.useState)(false);
  const [I, R] = (0, A.useState)(() => {
    const {
      user: e
    } = (0, M.getMeUser)();
    const t = (0, l.findCC)(e);
    return r.default[parseInt(t, 10)];
  });
  const [N, x] = (0, A.useState)("");
  const L = (0, P.useModelValues)(t, ["name"]);
  const j = (0, A.useRef)(null);
  const B = (0, A.useCallback)(() => {
    const e = (0, i.genId)();
    C.ToastManager.open(A.default.createElement(y.Toast, {
      msg: w.fbt._("You deleted your channel \"{channel-name}\"", [w.fbt._param("channel-name", A.default.createElement(c.EmojiText, {
        text: L.name
      }))], {
        hk: "1HMVCS"
      }),
      id: e
    }));
  }, [L]);
  const F = (0, A.useCallback)(() => {
    const e = (0, i.genId)();
    C.ToastManager.open(A.default.createElement(y.Toast, {
      msg: w.fbt._("The channel couldn't be deleted. Please try again.", null, {
        hk: "46o9Al"
      }),
      id: e
    }));
  }, []);
  const G = (0, A.useCallback)(() => {
    a(true);
    (0, E.deleteNewsletterAction)(t).then(() => {
      B();
      s.DrawerManager.closeDrawerRight();
    }).catch(() => {
      F();
    }).finally(() => {
      a(false);
      g.ModalManager.close();
    });
  }, [t, B, F]);
  const U = (0, A.useCallback)((e, t) => {
    D(false);
    R(e);
    x(t);
  }, []);
  const W = (0, A.useCallback)(() => {
    var e;
    if (I == null || !(0, p.isPhoneNumberValid)(o.default[I], N)) {
      D(true);
      return void ((e = j.current) === null || e === undefined || e.focus());
    }
    if (`${o.default[I]}${N}` === (0, M.getMeUser)().user) {
      G();
    }
  }, [G, N, I]);
  const H = (0, A.useCallback)(() => {
    g.ModalManager.close();
  }, []);
  const V = A.default.createElement(u.default, {
    type: "secondary",
    onClick: H,
    disabled: n
  }, (0, d.default)("Cancel"));
  const q = A.default.createElement(u.default, {
    type: "solidWarning",
    onClick: W,
    disabled: N === "" || n,
    spinner: n
  }, n ? w.fbt._("Deleting", null, {
    hk: "4soDez"
  }) : w.fbt._("Delete", null, {
    hk: "1OdIJt"
  }));
  const Y = A.default.createElement(T.ButtonGroup, {
    direction: "horizontal"
  }, V, q);
  return A.default.createElement(h.Modal, {
    type: h.ModalTheme.DeleteNewsletter,
    actions: Y,
    overflow: "visible",
    tsNavigationData: (0, v.isNewsletterTSLEnabled)() ? {
      surface: "channel-delete-page",
      extras: {
        channelWid: t.id,
        threadType: S.THREAD_TYPE.CHANNEL
      }
    } : undefined
  }, A.default.createElement(f.FlexRow, {
    xstyle: b.uiMargin.bottom10
  }, A.default.createElement(_.WDSTextLarge, null, w.fbt._("To delete, confirm your country code and enter your phone number", null, {
    hk: "4sjbEx"
  }))), A.default.createElement(m.PhoneNumberSection, {
    shouldDisplayError: O,
    phoneNumberWithoutCountryCode: N,
    selectedCountryId: I,
    onSubmit: W,
    onChangePhoneNumber: U,
    onChangeSelectedCountry: R,
    isInsideModal: true
  }), O && A.default.createElement(f.FlexRow, {
    xstyle: [b.uiMargin.top10, k.error]
  }, w.fbt._("The phone number you entered doesn't match your account.", null, {
    hk: "3XMjig"
  })));
};
var r = a(require("../app/647628.js"));
var o = a(require("../app/144202.js"));
var l = require("../app/986120.js");
var i = require("../app/328620.js");
var u = a(require("../app/692629.js"));
var s = require("../app/900316.js");
var c = require("../app/305521.js");
var d = a(require("../app/395767.js"));
var f = require("../app/690495.js");
var p = require("../app/936327.js");
var m = require("../app/678193.js");
var h = require("../app/118612.js");
var g = require("../app/114850.js");
var E = require("./567070.js");
var v = require("../app/73225.js");
var _ = require("../app/180519.js");
var y = require("../app/625786.js");
var C = require("../app/390737.js");
var b = require("../app/676345.js");
var M = require("../app/459857.js");
var S = require("../app/460416.js");
var T = require("../app/617425.js");
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
  var n = O(t);
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
var P = require("../app/655241.js");
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const k = {
  error: {
    color: "mvxzr2tb",
    fontSize: "ovllcyds"
  }
};