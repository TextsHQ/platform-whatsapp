var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    onCancel: n,
    supportTag: a,
    onSend: v,
    entityId: M
  } = e;
  const [S, T] = (0, C.useState)("");
  const [w, A] = (0, C.useState)(undefined);
  const [P, O] = (0, C.useState)("");
  const [R, N] = (0, C.useState)(undefined);
  const [x, L] = (0, C.useState)(function () {
    if (i.Conn.isSMB) {
      return y.fbt._("Question about WhatsApp Business for Web", null, {
        hk: "zJ0HI"
      });
    }
    return y.fbt._("Question about WhatsApp for Web", null, {
      hk: "131jg2"
    });
  }().toString());
  const [j, B] = (0, C.useState)(undefined);
  const [F, G] = (0, C.useState)((t = e.description) !== null && t !== undefined ? t : "");
  const [U, W] = (0, C.useState)(undefined);
  const [H, V] = (0, C.useState)([]);
  const [q, Y] = (0, C.useState)(false);
  const z = (0, C.useRef)(null);
  const K = (0, C.useRef)(null);
  (0, C.useEffect)(() => {
    var e;
    if (!((e = z.current) === null || e === undefined)) {
      e.restoreFocus();
    }
    return () => {
      H.map(e => {
        let {
          url: t
        } = e;
        return t && URL.revokeObjectURL(t);
      });
    };
  }, []);
  const Q = e => e.length > 10;
  const X = e => c.validateEmail(e);
  const Z = e => S === e;
  const J = () => H.length >= 3;
  const $ = e => {
    e.stopPropagation();
  };
  const ee = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!J()) {
      (0, u.getFiles)(e, "image/*").then(e => {
        if (K.current) {
          K.current.value = "";
        }
        const t = e.filter(e => e.size <= 10485760);
        if (t.length < e.length) {
          m.ToastManager.open(C.default.createElement(p.Toast, {
            msg: y.fbt._("Please upload images 10 MB or smaller", null, {
              hk: "18OENQ"
            })
          }));
        }
        const n = H.concat(t).slice(0, 3);
        n.map(e => {
          if (!e.url) {
            e.url = URL.createObjectURL(e);
          }
        });
        V(n);
      });
    }
  };
  const te = function () {
    var e = (0, r.default)(function* () {
      let e = 0;
      const t = S.trim();
      const n = P.trim();
      T(t);
      O(n);
      if (!X(t)) {
        A(y.fbt._("Please enter a valid email address", null, {
          hk: "3rdSG6"
        }));
        e += 1;
      }
      if (!Z(n)) {
        N(y.fbt._("The email addresses do not match", null, {
          hk: "4EPy3f"
        }));
        e += 1;
      }
      if (!Q(F)) {
        W(y.fbt._("Please add more to your description", null, {
          hk: "ZQEOl"
        }));
        e += 1;
      }
      if (e === 0) {
        A(undefined);
        N(undefined);
        B(undefined);
        W(undefined);
        H.map(e => {
          if (e.url) {
            URL.revokeObjectURL(e.url);
            delete e.url;
          }
        });
        const e = (0, E.getMaybeMeUser)();
        const n = e ? (0, o.formatPhone)(e.user) : null;
        const r = x.trim() || _.default._("Feedback/Question about WhatsApp", null, {
          hk: "12SWWJ"
        }).toString();
        const l = (yield (0, g.getWhatsAppWebExternalBetaJoinedIdb)()) ? "[External Web Beta] " + F : F;
        (0, h.uploadUserReport)(n, t, r, l, H, a, M);
        if (v) {
          v({
            subject: r,
            description: l,
            numScreenshots: H.length
          });
        }
        d.ModalManager.close();
        m.ToastManager.open(C.default.createElement(p.Toast, {
          msg: y.fbt._("Feedback sent", null, {
            hk: "2b7JTM"
          })
        }));
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const ne = C.default.createElement("div", null, C.default.createElement(D, {
    screenshots: H,
    onDeleteScreenshot: e => {
      const t = H.slice();
      const [n] = t.splice(e, 1);
      if (n.url) {
        URL.revokeObjectURL(n.url);
      }
      V(t);
    }
  }), C.default.createElement(I, {
    reachedMaxScreenshots: J(),
    isDragging: q,
    onAttachClick: () => {
      var e;
      if (!J()) {
        if (!((e = K.current) === null || e === undefined)) {
          e.click();
        }
      }
    }
  }), C.default.createElement("input", {
    className: (0, b.default)(k),
    accept: "image/*",
    type: "file",
    multiple: true,
    onClick: $,
    onChange: ee,
    ref: K,
    disabled: J()
  }));
  return C.default.createElement(l.ConfirmPopup, {
    title: y.fbt._("Contact us", null, {
      hk: "115X9P"
    }),
    okText: y.fbt._("send", null, {
      hk: "zH055"
    }),
    onOK: te,
    onCancel: () => {
      if (n) {
        n();
      }
      d.ModalManager.close();
    },
    onDrop: ee,
    onDragChange: e => {
      Y(e);
    }
  }, C.default.createElement(s.HotKeys, {
    handlers: {
      enter: $
    }
  }, C.default.createElement(f.RichTextField, {
    testid: "send-logs-email-address",
    ref: z,
    value: S,
    error: w,
    maxLength: 320,
    onChange: e => {
      t = e.text;
      if (X(t)) {
        A(undefined);
      }
      return void T(t);
      var t;
    },
    onBlur: () => {
      const e = S.trim();
      if (S && !X(e)) {
        A(y.fbt._("Please enter a valid email address", null, {
          hk: "3rdSG6"
        }));
      }
      T(e);
    },
    placeholder: y.fbt._("Email address", null, {
      hk: "TolHi"
    })
  }), C.default.createElement(f.RichTextField, {
    testid: "send-logs-email-confirm",
    editable: true,
    value: P,
    error: R,
    maxLength: 320,
    onChange: e => {
      t = e.text;
      O(t);
      return void (Z(t) && N(undefined));
      var t;
    },
    onBlur: () => {
      const e = P.trim();
      if (P && !Z(e)) {
        N(y.fbt._("The email addresses do not match", null, {
          hk: "4EPy3f"
        }));
      }
      O(e);
    },
    placeholder: y.fbt._("Confirm email address", null, {
      hk: "M2iTL"
    })
  }), C.default.createElement(f.RichTextField, {
    testid: "send-logs-email-subject",
    value: x,
    error: j,
    maxLength: 50,
    onChange: e => {
      t = e.text;
      L(t);
      return void B(undefined);
      var t;
    },
    onBlur: () => {
      0;
    },
    placeholder: y.fbt._("Subject", null, {
      hk: "e070i"
    })
  }), C.default.createElement(f.RichTextField, {
    testid: "send-logs-description",
    value: F,
    error: U,
    maxLength: 500,
    onChange: e => {
      t = e.text;
      G(t);
      return void (Q(t) && W(undefined));
      var t;
    },
    onBlur: () => {
      if (F && !Q(F)) {
        W(y.fbt._("Please add more to your description", null, {
          hk: "ZQEOl"
        }));
      }
    },
    placeholder: y.fbt._("Tell us about your issue", null, {
      hk: "2gookn"
    }),
    multiline: true
  }), ne));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/986120.js");
var l = require("../app/103440.js");
var i = require("../app/445729.js");
var u = require("./488940.js");
var s = require("../app/81644.js");
var c = S(require("../app/446303.js"));
var d = require("../app/114850.js");
var f = require("./202391.js");
var p = require("../app/625786.js");
var m = require("../app/390737.js");
var h = require("./240486.js");
var g = require("../app/757453.js");
var E = require("../app/459857.js");
var v = require("../app/813133.js");
var _ = a(require("../app/286816.js"));
var y = require("../vendor/548360.js");
var C = S(require("../vendor/667294.js"));
var b = a(require("../app/156720.js"));
function M(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (M = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function S(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = M(t);
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
}
const T = {
  color: "aoclmdzt",
  cursor: "bx7g2weo"
};
const w = {
  boxSizing: "cm280p3y",
  display: "p357zi0d",
  flexDirection: "f8m0rgwh",
  alignItems: "gndfcl4n",
  justifyContent: "ac2vgrno",
  width: "ln8gz9je",
  height: "ilf8vifs",
  paddingTop: "i5tg98hk",
  paddingEnd: "f9ovudaz",
  paddingBottom: "przvwfww",
  paddingStart: "gx1rr48f",
  marginTop: "fgtikrv0",
  fontSize: "dsh4tgtl",
  color: "o2v2jkg7",
  textAlign: "qfejxiq4",
  textTransform: "ofejerhi",
  cursor: "ajgl1lbb",
  backgroundColor: "losjomng"
};
const A = {
  display: "p357zi0d",
  paddingTop: "eujn52yf",
  paddingEnd: "jfqm35v0",
  paddingBottom: "ckm995li",
  paddingStart: "bdbt56hn",
  backgroundColor: "qqs366u4"
};
const P = {
  position: "g0rxnol2",
  float: "kpdgp91a",
  width: "b6vz4lkg",
  height: "kgc6pkg6",
  marginTop: "qt60bha0",
  marginEnd: "mw4yctpw",
  marginBottom: "inww9tbj",
  marginStart: "qnz2jpws",
  backgroundPositionX: "kc4t2p4u",
  backgroundPositionY: "c8nijwnu",
  backgroundSize: "qnwaluaf",
  boxShadow: "d1nvxjvo"
};
const O = {
  position: "lhggkp7q",
  top: "hd6b059k",
  end: "e6ezto3k",
  color: "k17s6i4e"
};
const k = {
  display: "qibyn6m3"
};
function D(e) {
  let {
    screenshots: t,
    onDeleteScreenshot: n
  } = e;
  const a = t.map((e, t) => {
    if (e.url == null) {
      return null;
    }
    const a = `url(${e.url})`;
    const r = `${e.url}-${t}`;
    return C.default.createElement("div", {
      key: r,
      className: (0, b.default)(P),
      style: {
        backgroundImage: a
      }
    }, C.default.createElement("button", {
      className: (0, b.default)(O),
      onClick: () => {
        n(t);
      }
    }, C.default.createElement(v.XAltIcon, null)));
  }).filter(Boolean);
  if (a.length !== 0) {
    return C.default.createElement("div", {
      className: (0, b.default)(A)
    }, a);
  } else {
    return null;
  }
}
function I(e) {
  let {
    reachedMaxScreenshots: t,
    isDragging: n,
    onAttachClick: a
  } = e;
  if (t) {
    return C.default.createElement("div", {
      className: (0, b.default)(w, T)
    }, y.fbt._({
      "*": "{count} Screenshots Maximum",
      _1: "1 Screenshot Maximum"
    }, [y.fbt._plural(3, "count")], {
      hk: "23ZQB4"
    }));
  } else if (n) {
    return C.default.createElement("div", {
      className: (0, b.default)(w)
    }, y.fbt._("Release to add...", null, {
      hk: "TzQ08"
    }));
  } else {
    return C.default.createElement("div", {
      className: (0, b.default)(w),
      onClick: a
    }, y.fbt._("Add Screenshots", null, {
      hk: "2kJYoR"
    }));
  }
}