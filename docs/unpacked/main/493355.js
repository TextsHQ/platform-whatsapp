var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const {
    replyButtons: n
  } = t;
  if (n == null || n.length === 0) {
    return null;
  }
  const a = n.some(e => e.displayText.length > 10);
  return p.default.createElement("div", {
    className: (0, o.classnamesConvertMeToStylexPlease)({
      [u.default.stacked]: n.length >= 3 || a,
      [u.default.withLargeButtonsSpace]: a,
      [u.default.buttonContainer]: true
    })
  }, n.map((e, n) => p.default.createElement(v, {
    key: n,
    msg: t,
    replyButton: e
  })));
};
var r = a(require("../vendor/967154.js"));
var o = require("../app/396574.js");
var l = require("../app/163755.js");
var i = require("./776078.js");
var u = a(require("./853251.js"));
var s = require("../app/97858.js");
var c = require("../app/787742.js");
var d = a(require("./126767.js"));
var f = require("../app/693741.js");
var p = a(require("../vendor/667294.js"));
var m = require("../app/655241.js");
var h = require("./871210.js");
var g = require("./636729.js");
var E = a(require("../app/83233.js"));
function v(e) {
  let {
    msg: t,
    replyButton: n
  } = e;
  const [a] = (0, h.useMsgValues)(t.id, [c.getIsSentByMe]);
  const v = (0, m.useModelValues)(n, ["selected", "displayText", "id"]);
  const _ = (0, l.getChat)(t);
  const y = (0, g.useSetModelValue)(n, "selected");
  const {
    selected: C,
    displayText: b
  } = n;
  const [M, S] = (0, E.default)(() => {
    y(true);
    (0, d.default)(t, v, _).then(e => {
      if (e.messageSendResult !== f.SendMsgResult.OK) {
        y(false);
      }
    }).catch(() => {
      y(false);
    });
  }, {
    disabled: C
  });
  if (b) {
    return p.default.createElement("div", (0, r.default)({
      ref: M,
      className: (0, o.classnamesConvertMeToStylexPlease)({
        [u.default.disabled]: C,
        [i.LIST_FOCUSABLE_ITEM_CLASS_NAME]: !C && !(0, s.messageListA11yRedesignEnabled)(),
        [u.default.buttonWrapper]: true
      })
    }, S), p.default.createElement("div", {
      className: (0, o.classnamesConvertMeToStylexPlease)({
        [u.default.sentByMe]: a,
        [u.default.buttonLabel]: true
      })
    }, p.default.createElement("span", null, b)));
  } else {
    return null;
  }
}