var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    messageText: t
  } = e;
  const n = () => {
    s.ModalManager.close();
  };
  if (!c.default.online) {
    return p.default.createElement(o.ConfirmPopup, {
      okText: (0, i.default)("OK"),
      onOK: n
    }, f.fbt._("Couldn't search the web. Check your computer's internet connection and try again.", null, {
      hk: "1OAOT8"
    }));
  }
  return p.default.createElement(o.ConfirmPopup, {
    cancelText: f.fbt._("Cancel", null, {
      hk: "H0gNq"
    }),
    onCancel: n,
    okText: f.fbt._("Search Web", null, {
      hk: "3SErVr"
    }),
    onOK: () => {
      const e = (0, r.firstNEncodedBytes)(t, 2000);
      const n = d.default.build("https://www.google.com/search", {
        ctx: "wa",
        q: e
      });
      (0, l.openExternalLink)(n);
      new u.HfmTextSearchCompleteWamEvent().commit();
      s.ModalManager.close();
    }
  }, f.fbt._("Would you like to search this on the web? This will upload the message to Google.", null, {
    hk: "3auzZo"
  }));
};
var r = require("../app/370257.js");
var o = require("../app/103440.js");
var l = require("../app/753233.js");
var i = a(require("../app/395767.js"));
var u = require("./833407.js");
var s = require("../app/114850.js");
var c = a(require("../app/99398.js"));
var d = a(require("../app/79291.js"));
var f = require("../vendor/548360.js");
var p = a(require("../vendor/667294.js"));