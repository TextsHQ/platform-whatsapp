var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    parsedVcard: t,
    thumbnail: n
  } = e;
  const a = e.parsedVcard;
  const l = (0, r.default)(a.TEL, e => e.properties.waid);
  const u = (0, r.default)(a.TEL, e => !e.properties.waid);
  const s = (0, o.default)(l, e => {
    const t = e.properties.waid[0];
    const n = w.default.createElement(y.default, {
      onClick: () => I(t)
    }, w.default.createElement(i.ChatIcon, {
      className: (0, A.default)(O)
    }));
    const a = w.default.createElement(c.SelectableSpan, {
      selectable: true
    }, (0, S.widToFormattedUser)(t));
    return w.default.createElement(f.default, {
      title: a,
      icon: n,
      key: `vCard-${String(e.index)}`
    }, (0, b.vcardGetType)(e));
  });
  const d = (0, o.default)(a.EMAIL, e => w.default.createElement(f.default, {
    title: g.default.forceLTR(e.value),
    onClick: () => {
      t = e.value;
      return void (0, m.openExternalLink)(`mailto:${t}`);
      var t;
    },
    key: `vCard-${String(e.index)}`
  }, (0, b.vcardGetType)(e)));
  const p = (0, o.default)(a.ADR, e => {
    const t = e.value.join(" ");
    return w.default.createElement(f.default, {
      title: t,
      onClick: () => (e => {
        const t = `https://maps.google.com/maps/search/${(0, o.default)((0, r.default)(e), encodeURIComponent).join(", ")}?hl=${g.default.getLocale()}`;
        (0, m.openExternalLink)(t);
      })(e.value),
      key: `vCard-${String(e.index)}`
    }, (0, b.vcardGetType)(e));
  });
  const h = (0, o.default)(u, e => w.default.createElement(f.default, {
    title: g.default.forceLTR(e.value),
    key: `vCard-${String(e.index)}`
  }, (0, b.vcardGetType)(e)));
  let E;
  const v = (0, o.default)(a.SERVICE, e => {
    if (e.type !== "WA-LID") {
      if (e.type === "WA-LID-DISPLAY-NAME" && E != null) {
        const t = () => I(E);
        const n = w.default.createElement(y.default, {
          onClick: t
        }, w.default.createElement(i.ChatIcon, {
          className: (0, A.default)(O)
        }));
        return w.default.createElement(f.default, {
          testid: "vcard-service-wa-lid",
          title: e.value,
          key: `vCard-${String(e.index)}`,
          icon: n,
          onClick: t
        });
      }
      return w.default.createElement(f.default, {
        testid: `vcard-service-${e.type}`,
        title: e.value,
        key: `vCard-${String(e.index)}`
      }, (0, b.vcardGetType)(e));
    }
    E = e.value + "@lid";
  });
  const _ = (0, o.default)(a.BDAY, e => w.default.createElement(f.default, {
    title: (0, C.vcardGetDate)(e.value),
    key: `vCard-${String(e.index)}`
  }, T.fbt._("Birthday", null, {
    hk: "ULBWf"
  })));
  const M = (0, o.default)(a.NICKNAME, e => w.default.createElement(f.default, {
    title: e.value,
    key: `vCard-${String(e.index)}`
  }, T.fbt._("Nickname", null, {
    hk: "1dSiK9"
  })));
  const P = w.default.createElement(D, {
    parsedVcard: t,
    thumbnail: n
  });
  const R = [...s, ...d, ...p, ...h, ..._, ...M, ...v];
  const N = R[R.length - 1];
  if (N != null) {
    R[R.length - 1] = (0, w.cloneElement)(N, {
      isLastItem: true
    });
  }
  return w.default.createElement("div", null, P, w.default.createElement("div", {
    className: (0, A.default)(k)
  }, R));
};
var r = a(require("../vendor/763105.js"));
var o = a(require("../vendor/435161.js"));
var l = a(require("../main-chunk/170206.js"));
var i = require("./404378.js");
var u = require("../app/780549.js");
var s = require("../app/877171.js");
var c = require("../app/306703.js");
var d = require("../app/23641.js");
var f = a(require("./674905.js"));
var p = require("../app/305521.js");
var m = require("../app/753233.js");
var h = require("../app/581354.js");
var g = a(require("../app/932325.js"));
var E = require("../app/114850.js");
var v = a(require("../app/145632.js"));
var _ = require("../app/446474.js");
var y = a(require("../app/625903.js"));
var C = require("../app/517660.js");
var b = require("../app/105284.js");
var M = require("../app/669050.js");
var S = require("../app/931019.js");
var T = require("../vendor/548360.js");
var w = function (e, t) {
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
var A = a(require("../app/156720.js"));
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
  color: "svlsagor"
};
const k = {
  paddingTop: "i5tg98hk",
  paddingEnd: "h5uqwbaf",
  paddingBottom: "przvwfww",
  paddingStart: "kjjye8e3",
  marginTop: "tt8xd2xn",
  backgroundColor: "ihvf49ua"
};
function D(e) {
  let {
    parsedVcard: t,
    thumbnail: n
  } = e;
  const a = (0, C.vcardWids)(t);
  const r = w.default.createElement(p.EmojiText, {
    text: (0, C.vcardGetNameFromParsed)(t),
    direction: "auto",
    titlify: true,
    ellipsify: true,
    selectable: true
  });
  const o = (0, b.vcardGetOrganizationString)(t);
  const i = w.default.createElement(v.default, {
    thumb: n,
    size: d.DetailImageSize.Small,
    wid: _.ProfilePicThumbCollection.findThumbnailWid(a)
  });
  return w.default.createElement(l.default, {
    image: i,
    theme: "plain",
    primary: r,
    secondary: o
  });
}
const I = e => {
  E.ModalManager.close();
  const t = (0, M.createUserWid)(e);
  (0, h.findChat)(t, "vCardModalDetails").then(e => {
    u.Cmd.openChatFromUnread(e).then(t => {
      if (t) {
        s.ComposeBoxActions.focus(e);
      }
    });
  });
};