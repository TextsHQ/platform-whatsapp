var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t,
    chat: n
  } = e;
  const a = (0, _.default)();
  const [E, T, w] = (0, C.useMsgValues)(e.msg.id, [c.getButtons, c.getIsQuickReply, p.getFrom]);
  (0, y.useListeners)((E != null ? E : []).map(e => ({
    source: e,
    eventOrEvents: "change:selected",
    callback: a
  })));
  let A;
  if (E) {
    A = E.map(e => {
      let a;
      switch (e.subtype) {
        case S:
          a = v.default.createElement(d.HsmCallIcon, {
            className: o.default.icon
          });
          break;
        case M:
          a = (0, m.isOTPCopyCodeButton)(e) || (0, u.isCouponCodeButton)(e) ? v.default.createElement(i.CopyIcon, {
            className: o.default.icon
          }) : v.default.createElement(f.HsmLinkIcon, {
            className: o.default.icon
          });
      }
      const c = e.selected ? undefined : () => (e => {
        const {
          subtype: a,
          url: o,
          displayText: l,
          selectionId: i,
          id: c
        } = e;
        if (a === S) {
          (0, r.default)();
        } else if (a === M && o) {
          if ((0, m.isOTPCopyCodeButton)(e)) {
            (0, m.copyOTPCode)(e, t);
          } else if ((0, u.isCouponCodeButton)(e)) {
            (0, u.copyCouponCode)(e);
          } else {
            (0, s.openExternalLink)(o);
          }
        } else if (a === b) {
          (0, h.sendTextMsgToChat)(n, l, {
            quotedMsg: (0, g.unproxy)(t),
            selectedIndex: parseInt(c, 10),
            selectedId: i
          }).then(() => {
            e.selected = true;
          });
        }
      })(e);
      return v.default.createElement("button", {
        key: e.id,
        className: (0, l.classnamesConvertMeToStylexPlease)({
          [o.default.firstButton]: parseInt(e.id, 10) === 0 && e.subtype !== b,
          [o.default.disabled]: e.selected,
          [o.default.actionButton]: true
        }),
        onClick: c
      }, a, v.default.createElement("span", {
        className: o.default.actionText
      }, e.displayText));
    });
  }
  return v.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [o.default.quickReply]: T,
      [o.default.callUrl]: !T
    })
  }, v.default.createElement("div", {
    className: o.default.buttonContainer
  }, A));
};
var r = a(require("./824877.js"));
var o = a(require("./636611.js"));
var l = require("../app/396574.js");
var i = require("./528259.js");
var u = require("./561330.js");
var s = require("../app/753233.js");
var c = require("../app/163755.js");
var d = require("./759211.js");
var f = require("./479935.js");
var p = require("../app/787742.js");
var m = require("../app/634730.js");
var h = require("../app/498703.js");
var g = require("../app/163139.js");
var E = require("../app/517286.js");
var v = a(require("../vendor/667294.js"));
var _ = a(require("../app/969651.js"));
var y = require("../app/808446.js");
var C = require("./871210.js");
const {
  QUICK_REPLY: b,
  URL: M,
  CALL: S
} = E.TEMPLATE_BUTTON_SUBTYPE;