var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningCannotKeepSenderSuperpower = function (e) {
  let {
    message: t
  } = e;
  (0, g.useEffect)(() => {
    (0, r.default)(function* () {
      const e = yield (0, l.getBaseErrorLog)(t, p.KeepType.KEEP_FOR_ALL);
      e.set({
        kicErrorCode: m.KIC_ERROR_CODE_TYPE.SENDER_DISABLED
      });
      e.commit();
    })();
  }, []);
  const n = g.default.createElement(s.FlexRow, {
    align: "center",
    justify: "center",
    className: (0, E.default)(_.header)
  }, g.default.createElement(c.KeepWarningIcon, {
    xstyle: _.icon
  }));
  const a = g.default.createElement("div", {
    className: (0, E.default)(_.title)
  }, h.fbt._("Message cannot be kept", null, {
    hk: "10xulk"
  }));
  return g.default.createElement(o.ConfirmPopup, {
    onOK: C,
    onCancel: y,
    cancelText: h.fbt._("Learn More", null, {
      hk: "3Rx68E"
    }),
    type: d.ModalTheme.Flex,
    buttonStyle: _.buttonMargin
  }, g.default.createElement("div", {
    className: (0, E.default)(_.wrapper)
  }, n, g.default.createElement("div", {
    className: (0, E.default)(_.container)
  }, a, h.fbt._("The author of this message has unkept it, so no one else can keep it again in the chat.", null, {
    hk: "3onX8x"
  }))));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/103440.js");
var l = require("./469151.js");
var i = require("../app/753233.js");
var u = require("../app/258105.js");
var s = require("../app/690495.js");
var c = require("./739101.js");
var d = require("../app/118612.js");
var f = require("../app/114850.js");
var p = require("../app/533494.js");
var m = require("./483618.js");
var h = require("../vendor/548360.js");
var g = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = v(t);
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
var E = a(require("../app/156720.js"));
function v(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (v = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const _ = {
  header: {
    backgroundColor: "inadp68n",
    textAlign: "qfejxiq4"
  },
  icon: {
    textAlign: "qfejxiq4",
    marginTop: "fgtikrv0",
    marginEnd: "gqi0zhd6",
    marginBottom: "dblt22a0",
    marginStart: "nzcjdldu"
  },
  title: {
    fontWeight: "hnx8ox4h",
    fontSize: "p9fp32ui",
    lineHeight: "tkq7s68q",
    marginBottom: "t4zgqcuo"
  },
  container: {
    marginTop: "dkeqio29",
    marginEnd: "poiibwu2",
    marginBottom: "t4z0zxz2",
    marginStart: "hqw9ulo5"
  },
  wrapper: {
    boxSizing: "cm280p3y",
    width: "tcisnlar"
  },
  buttonMargin: {
    paddingBottom: "aiput80m"
  }
};
const y = () => {
  (0, i.openExternalLink)((0, u.getEphemeralFaqUrl)());
  f.ModalManager.close();
};
const C = () => {
  f.ModalManager.close();
};