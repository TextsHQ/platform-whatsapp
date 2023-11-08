var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WINDOWS_STORE_URIS = exports.WHATSAPP_WEB_URI = exports.WHATSAPP_PROTOCOL_SEND_URI = exports.MAC_INTERNAL_SIDELOAD_URI = exports.MAC_INTERNAL_MSC_STORE_URI = exports.MAC_EXTERNAL_SIDELOAD_URI = exports.MAC_EXTERNAL_APP_STORE_URI = exports.ExternalLinkTarget = exports.ExternalLink = undefined;
exports.isOpeningDeeplinkInCurrentTab = function () {
  return M;
};
exports.openExternalLink = function (e, t) {
  if (!T.includes(e) && !l.default.hasValidUrlScheme(e)) {
    return void (e.toLowerCase().startsWith("javascript:") && (__LOG__(4, undefined, new Error(), true)`Bad url: ${e}`, SEND_LOGS("URL error")));
  }
  const {
    target: n = A.NEW_TAB
  } = t != null ? t : {};
  const r = document.createElement("a");
  r.href = e;
  if (n === A.NEW_TAB) {
    r.target = "_blank";
  } else if (n === A.DEEPLINK_IN_CURRENT_TAB) {
    M = true;
  }
  r.rel = "noopener noreferrer";
  r.style.display = "none";
  if (document.body) {
    document.body.appendChild(r);
  }
  r.click();
  if (document.body) {
    document.body.removeChild(r);
  }
  if (n === A.DEEPLINK_IN_CURRENT_TAB) {
    self.setTimeout(() => {
      M = false;
    }, 1000);
  }
};
var i = require("./370257.js");
var a = require("./396574.js");
var o = r(require("./846870.js"));
r(require("./249055.js"));
var s = r(require("./83162.js"));
var l = r(require("./79291.js"));
var u = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = d(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var c = r(require("./156720.js"));
function d(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (d = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const p = {
  ":hover": {
    textDecoration: "edeob0r2"
  }
};
function f(e) {
  const t = (0, u.useRef)();
  const n = e => {
    var n;
    if ((0, s.default)(e)) {
      if (!((n = t.current) === null || n === undefined)) {
        n.click();
      }
    }
  };
  const {
    children: r,
    className: d,
    href: f,
    isLongTemplateUrl: _,
    onClick: g,
    testid: m,
    "aria-label": h,
    xstyle: y
  } = e;
  if (!l.default.hasValidUrlScheme(f)) {
    if (f.toLowerCase().startsWith("javascript:")) {
      __LOG__(4, undefined, new Error(), true)`Bad url: ${f}`;
      SEND_LOGS("URL error");
    }
    return null;
  }
  const E = (0, a.classnamesConvertMeToStylexPlease)(d, (0, c.default)(y, p));
  if (_) {
    return u.default.createElement("a", {
      ref: t,
      rel: "noopener noreferrer",
      className: E,
      href: f,
      target: "_blank",
      onClick: g,
      onKeyDown: n,
      "aria-label": h
    }, (0, i.substring)(f, 0, o.default.TEMPLATE_URL_START), u.default.createElement("span", null, "…"), (0, i.substring)(f, f.length - o.default.TEMPLATE_URL_END, f.length));
  } else {
    return u.default.createElement("a", {
      ref: t,
      rel: "noopener noreferrer",
      className: E,
      href: f,
      target: "_blank",
      onClick: g,
      onKeyDown: n,
      "aria-label": h
    }, r);
  }
}
const _ = (0, u.memo)(f);
exports.ExternalLink = _;
_.displayName = "ExternalLink";
const g = {
  link_device_banner: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=1daca7",
  link_device_banner_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=a0269a",
  intro_panel: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=68a40a",
  chatlist_toastbar: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=dea681",
  search_results_toastbar: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=586f03",
  call_btn_modal: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=3926ea",
  call_btn_modal_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=1f9c76",
  chatlist_dropdown_menu: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=cc3981",
  missed_call_modal: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=c4d5cd",
  missed_call_modal_2: "ms-windows-store://pdp/?productid=9NKSQGP7F2NH&mode=mini&cid=5721b2"
};
exports.WINDOWS_STORE_URIS = g;
const m = "munki://detail-WhatsAppCatalyst.html";
exports.MAC_INTERNAL_MSC_STORE_URI = m;
const h = "https://dev-web.whatsapp.com/desktop/mac_native/release/";
exports.MAC_INTERNAL_SIDELOAD_URI = h;
const y = "itms-apps://apps.apple.com/app/id310633997";
exports.MAC_EXTERNAL_APP_STORE_URI = y;
const E = "https://whatsapp.com/download/?start_mac_download=1";
exports.MAC_EXTERNAL_SIDELOAD_URI = E;
const S = "https://web.whatsapp.com";
exports.WHATSAPP_WEB_URI = S;
const v = "whatsapp://send/";
exports.WHATSAPP_PROTOCOL_SEND_URI = v;
const T = [...Object.values(g), m, h, y, E, S, v];
let M = false;
const A = require("../vendor/76672.js").Mirrored(["NEW_TAB", "DEEPLINK_IN_CURRENT_TAB"]);
exports.ExternalLinkTarget = A;