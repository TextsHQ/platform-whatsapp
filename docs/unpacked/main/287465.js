var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t,
    quotedMsg: n,
    displayAuthor: a,
    displayType: h
  } = e;
  const g = (0, m.default)();
  const [E] = (0, p.useMsgValues)(t.id, [s.getNativeFlowName]);
  const v = (0, r.getChat)(t.unsafe());
  const [_] = (0, f.default)(v);
  const y = (0, o.default)({
    msg: t,
    uimContext: g,
    canCompose: _
  });
  const C = y == null ? undefined : y.map(e => {
    var t;
    return {
      label: e.label,
      disabled: e.disabled,
      onClick: (t = e.onClick) !== null && t !== undefined ? t : () => (0, c.default)(),
      Icon: e.Icon
    };
  });
  return d.default.createElement(l.default, {
    msg: t,
    displayAuthor: a,
    displayType: h,
    displayFooter: E !== u.default.ORDER_STATUS,
    header: d.default.createElement(i.default, {
      msg: t,
      quotedMsg: n,
      displayType: h
    }),
    actions: C
  });
};
var r = require("../app/163755.js");
var o = a(require("./191612.js"));
var l = a(require("./346167.js"));
var i = a(require("./690294.js"));
var u = a(require("../app/753110.js"));
var s = require("../app/787742.js");
var c = a(require("./655210.js"));
var d = a(require("../vendor/667294.js"));
var f = a(require("./144903.js"));
var p = require("./871210.js");
var m = a(require("../app/321201.js"));