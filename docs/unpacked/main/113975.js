var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const [t, n, a] = (0, g.useContactValues)(e.contact.id, [s.getId, c.getPhoneNumber, c.getShareOwnPn]);
  return m.default.createElement("span", {
    className: (0, h.default)(E)
  }, p.fbt._("Please go to {=m2} to continue the conversation", [p.fbt._implicitParam("=m2", m.default.createElement(l.default, {
    onClick: function () {
      if (n == null) {
        return;
      }
      if (o.ChatCollection.get(n)) {
        const e = o.ChatCollection.gadd(n);
        i.Cmd.openChatFromUnread(e).then(t => {
          if (t) {
            u.ComposeBoxActions.focus(e);
          }
        });
      } else {
        const e = (0, r.getCurrentLid)(n);
        if (e != null) {
          if (t.isSameAccount(e)) {
            return;
          }
          const n = o.ChatCollection.gadd(e);
          i.Cmd.openChatFromUnread(n).then(t => {
            if (t) {
              u.ComposeBoxActions.focus(n);
              (0, d.updateLidMetadataJob)([{
                lid: (0, f.toUserWid)(e),
                data: {
                  shareOwnPn: false
                }
              }]);
            }
          });
        }
      }
    }
  }, p.fbt._("this chat", null, {
    hk: "1XoSRG"
  })))], {
    hk: "3qZmoO"
  }));
};
var r = require("../app/12643.js");
var o = require("../app/351053.js");
var l = a(require("../app/196554.js"));
var i = require("../app/780549.js");
var u = require("../app/877171.js");
var s = require("../app/660666.js");
var c = require("../app/714574.js");
var d = require("../app/487837.js");
var f = require("../app/669050.js");
var p = require("../vendor/548360.js");
var m = a(require("../vendor/667294.js"));
var h = a(require("../app/156720.js"));
var g = require("../app/379811.js");
const E = {
  whiteSpace: "bbv8nyr4"
};