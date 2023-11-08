var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIcon = p;
exports.setTitleAndIcon = function (e) {
  let t = l.default.t(215);
  if (e > 0) {
    t = "(" + l.default.n(e) + ") " + l.default.t(215);
  }
  (0, u.setDocumentTitle)(t);
  p(e);
  (0, u.setAppBadge)(e);
};
var i = require("./898817.js");
var a = r(require("./25385.js"));
var o = require("./135630.js");
var s = require("./789379.js");
var l = r(require("./932325.js"));
var u = require("./311057.js");
var c = require("./368170.js");
const d = new a.default();
function p(e) {
  if (c.UA.isSafari) {
    return;
  }
  let t;
  let r;
  if (e === -1) {
    t = "favicon-error2";
    r = {
      low: require("./819528.js"),
      high: require("./477238.js")
    };
  } else if (e === 0) {
    t = "favicon";
    r = {
      low: require("./429242.js"),
      high: require("./56216.js")
    };
  } else if (e < 10) {
    t = "f0" + e;
    r = {
      low: require("./363509.js")(`./${t}.png`),
      high: require("./276554.js")(`./${t}.png`)
    };
  } else if (e < 100) {
    t = "f" + e;
    r = {
      low: require("./363509.js")(`./${t}.png`),
      high: require("./276554.js")(`./${t}.png`)
    };
  } else {
    t = "f00";
    r = {
      low: require("./192256.js"),
      high: require("./211372.js")
    };
  }
  const a = {
    id: t,
    low: {
      default: r.low
    },
    high: {
      default: r.high
    }
  };
  d.enqueue(s.AssetLoader.loadAsset(a, o.LOAD_PRIORITY.NOTIFICATION_ICON, false)).then(e => e).then(e => {
    const n = document.getElementById("favicon");
    var r;
    if ((r = n) == null ? undefined : r.parentNode) {
      r.parentNode.removeChild(r);
    }
    const i = document.createElement("link");
    i.setAttribute("id", "favicon");
    i.setAttribute("rel", "shortcut icon");
    i.setAttribute("type", "image/png");
    i.setAttribute("href", e);
    i.setAttribute("src", e);
    const a = document.getElementsByTagName("head");
    if (a == null ? undefined : a[0]) {
      a[0].appendChild(i);
    }
    __LOG__(2)`Favicon updated: ${t}`;
  }).catch((0, i.catchAbort)(() => {}));
}