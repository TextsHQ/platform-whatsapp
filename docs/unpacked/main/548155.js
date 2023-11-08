var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionsBubbleWrapper = function (e) {
  let {
    reactionBubbleVisible: t,
    numberOfSenderReactions: n,
    hasReaction: a,
    openDetailsPane: h,
    closeDetailsPane: g,
    handlers: E,
    detailsPane: v,
    isFirstData: _,
    reactionArrayEmojis: y
  } = e;
  if (n === 0 || !t) {
    if (a) {
      return f.default.createElement("div", {
        className: (0, p.default)(m.reactionBubbleContainer)
      });
    } else {
      return null;
    }
  }
  const C = (0, s.reactionBubbleAriaLabelString)(n, y);
  return f.default.createElement(f.default.Fragment, null, f.default.createElement(o.HotKeys, {
    onClick: h,
    onDoubleClick: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    handlers: E,
    component: "button",
    "aria-haspopup": true,
    tabIndex: (0, i.messageListA11yRedesignEnabled)() ? 0 : null,
    "aria-label": C,
    className: (0, r.classnamesConvertMeToStylexPlease)({
      [l.LIST_FOCUSABLE_ITEM_CLASS_NAME]: !(0, i.messageListA11yRedesignEnabled)()
    }, (0, p.default)([m.reactionBubbleContainer]))
  }, f.default.createElement(u.default, {
    reactions: y,
    reactionsAggregateCount: n,
    isFirstData: _
  })), v && f.default.createElement(c.UIE, {
    displayName: "DetailsPane",
    escapable: true,
    popable: true,
    dismissOnWindowResize: true,
    requestDismiss: g
  }, f.default.createElement(d.default, {
    contextMenu: v
  })));
};
var r = require("../app/396574.js");
var o = require("../app/81644.js");
var l = require("./776078.js");
var i = require("../app/97858.js");
var u = a(require("./65644.js"));
var s = require("./474474.js");
var c = require("../app/392632.js");
var d = a(require("../app/37875.js"));
var f = a(require("../vendor/667294.js"));
var p = a(require("../app/156720.js"));
const m = {
  reactionBubbleContainer: {
    height: "dhq51u3o"
  }
};