var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    msg: t
  } = e;
  const [n, a, v, _] = (0, g.useMsgValues)(t.id, [c.getIsSentByMe, c.getIsGroupMsg, i.getSenderObj, c.getSubtype]);
  let y;
  let C;
  let b;
  if (_ === "fanout") {
    y = p.fbt._("Waiting for this message. Check your phone.", null, {
      hk: "3bM8te"
    });
    C = (0, l.getFanoutPlaceholderFaqUrl)();
    b = r.CiphertextIcon;
  } else if (_ === "bot_unavailable_fanout") {
    y = p.fbt._("This message can't be displayed here. Please open WhatsApp on your phone to view the message.", null, {
      hk: "2jZa3c"
    });
    b = f.UnknownIcon;
  } else {
    y = p.fbt._("Waiting for this message. This may take a while.", null, {
      hk: "16kp4Z"
    });
    C = (0, l.getCiphertextFaqUrl)();
    b = r.CiphertextIcon;
  }
  const M = m.default.createElement("span", {
    className: (0, h.default)(E),
    role: "button",
    onClick: () => {
      (e => {
        (0, o.openExternalLink)(e);
      })(C);
    }
  }, p.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }));
  return m.default.createElement(s.default, {
    msg: (0, d.unproxy)(t),
    displayAuthor: e.displayAuthor
  }, m.default.createElement(u.default, {
    Icon: b,
    msg: t.unsafe()
  }, y, " ", C != null && M));
};
var r = require("./784121.js");
var o = require("../app/753233.js");
var l = require("../app/258105.js");
var i = require("../app/163755.js");
var u = a(require("./530404.js"));
var s = a(require("./398685.js"));
var c = require("../app/787742.js");
var d = require("../app/163139.js");
var f = require("./199777.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));
var g = require("./871210.js");
const E = {
  color: "seuajalt"
};