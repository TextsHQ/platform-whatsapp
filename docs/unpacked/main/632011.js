var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  let {
    msg: t
  } = e;
  const n = (0, u.getChat)(t.unsafe());
  const [a, y] = (0, E.useFlow)(_.Edit);
  const [C, b] = (0, v.default)(p.NUX.MESSAGE_EDIT);
  if (y.step == null) {
    return null;
  }
  const M = () => {
    o.Cmd.openChatAt(n, (0, r.getSearchContext)(n, t.unsafe()));
    y.end();
  };
  let S;
  switch (y.step) {
    case _.Edit:
      S = g.default.createElement(c.default, {
        msg: t,
        onConfirm: (e, a) => {
          (0, m.sendMessageEdit)(t.unsafe(), e, a);
          const r = () => {
            b();
            f.ModalManager.close();
            M();
          };
          const o = () => {
            (0, l.openExternalLink)(n.isNewsletter ? (0, i.getNewsletterUpdateEditFaqUrl)() : (0, i.getMessageEditFaqUrl)());
          };
          if (C) {
            const e = g.default.createElement(s.default, {
              type: d.ModalTheme.MessageActionsModal,
              okText: h.fbt._("OK", null, {
                hk: "3bTiY0"
              }),
              onOk: r,
              cancelText: h.fbt._("LEARN MORE", null, {
                hk: "1W9Pl0"
              }),
              onCancel: o,
              modalText: n.isNewsletter ? h.fbt._("This update was edited for everyone in this channel on the latest version of WhatsApp.", null, {
                hk: "2zy6k2"
              }) : h.fbt._("This message was edited for everyone in this chat on the latest version of WhatsApp.", null, {
                hk: "1NupcK"
              })
            });
            f.ModalManager.open(e, {
              blockClose: true,
              transition: "pop-fast-chat"
            });
          } else {
            M();
          }
        },
        onCancel: () => y.end()
      });
  }
  return g.default.createElement(a, {
    flow: y
  }, S);
};
var r = require("../app/713105.js");
var o = require("../app/780549.js");
var l = require("../app/753233.js");
var i = require("../app/258105.js");
var u = require("../app/163755.js");
var s = a(require("./967087.js"));
var c = a(require("./539406.js"));
var d = require("../app/118612.js");
var f = require("../app/114850.js");
var p = require("../app/95589.js");
var m = require("../app/375399.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));
var E = require("./839062.js");
var v = a(require("./157558.js"));
const _ = require("../vendor/76672.js").Mirrored(["Edit"]);