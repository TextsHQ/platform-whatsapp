var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    quotedMsg: n,
    displayType: a
  } = e;
  const _ = (0, E.default)();
  const {
    interactiveHeader: y
  } = t;
  let C;
  let b;
  if (y == null ? undefined : y.mediaType) {
    switch (y.mediaType) {
      case l.InteractiveMessageHeaderMediaType.IMAGE:
        b = h.default.createElement(o.default, {
          msg: t,
          displayType: a
        });
        break;
      case l.InteractiveMessageHeaderMediaType.DOCUMENT:
        b = h.default.createElement(f.default, {
          msg: t
        });
        break;
      case l.InteractiveMessageHeaderMediaType.VIDEO:
        b = h.default.createElement(m.default, {
          msg: t,
          mediaData: t.mediaData,
          displayType: a
        });
    }
  }
  if (t.nativeFlowName === i.default.ORDER_DETAILS || t.nativeFlowName === i.default.ORDER_STATUS || t.nativeFlowName === i.default.PAYMENT_STATUS || t.nativeFlowName === i.default.PAYMENT_METHOD) {
    C = h.default.createElement(s.default, {
      msg: t,
      quotedMsg: n,
      displayType: a
    });
  } else if (y) {
    if (t.interactiveType === u.default.SHOPS_STOREFRONT) {
      C = h.default.createElement(c.default, {
        msg: t
      });
    } else if (!(y.title == null && y.subtitle == null)) {
      C = b ? h.default.createElement(d.default, {
        msg: t
      }) : h.default.createElement("div", {
        className: (0, g.default)(p.uiMargin.top6)
      }, h.default.createElement(d.default, {
        msg: t
      }));
    }
  }
  if (C) {
    const e = (0, r.default)({
      msg: t,
      uimContext: _
    });
    if (e) {
      C = h.default.createElement("div", {
        role: "button",
        onClick: e.onClick
      }, C);
    }
  }
  if (C == null && b == null) {
    return null;
  }
  return h.default.createElement("div", {
    className: (0, g.default)(v)
  }, C && b ? h.default.createElement("div", {
    className: (0, g.default)(p.uiMargin.bottom6)
  }, b) : b, C);
};
var r = a(require("./620350.js"));
var o = a(require("./585417.js"));
var l = require("../app/943914.js");
var i = a(require("../app/753110.js"));
var u = a(require("../app/182394.js"));
var s = a(require("./941185.js"));
var c = a(require("./961275.js"));
var d = a(require("./761250.js"));
var f = a(require("./916163.js"));
var p = require("../app/676345.js");
var m = a(require("./955880.js"));
var h = a(require("../vendor/667294.js"));
var g = a(require("../app/156720.js"));
var E = a(require("../app/321201.js"));
const v = {
  marginTop: "if44n927",
  marginEnd: "isg5rw3j",
  marginBottom: "ngycyvoj",
  marginStart: "heai6z19"
};