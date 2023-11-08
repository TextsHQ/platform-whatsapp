var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  const e = (0, f.default)();
  (0, d.useListener)(o.Cmd, "open_created_newsletter", t => {
    const n = u.default.get(t);
    if (n != null) {
      l.DrawerManager.openDrawerLeft(c.default.createElement(s.NewsletterTabFlowLoadable, null), {
        focusType: i.FocusType.TABBABLE,
        transition: "slide-left",
        uim: e
      });
      o.Cmd.openChatBottom(n, r.ChatEntryPoint.NewsletterCreationFlow);
    }
  });
};
var r = require("../app/338042.js");
var o = require("../app/780549.js");
var l = require("../app/900316.js");
var i = require("../app/299950.js");
var u = a(require("../app/358533.js"));
var s = require("./163441.js");
var c = a(require("../vendor/667294.js"));
var d = require("../app/808446.js");
var f = a(require("../app/321201.js"));