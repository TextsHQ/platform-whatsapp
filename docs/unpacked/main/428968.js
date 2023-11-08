var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showCommunityHomeError = function (e) {
  if (e.status === 403) {
    o.ToastManager.open(i.default.createElement(r.Toast, {
      msg: l.fbt._("You are no longer a member of this community", null, {
        hk: "jel76"
      })
    }));
  } else if (e.status === 404) {
    o.ToastManager.open(i.default.createElement(r.Toast, {
      msg: l.fbt._("This community no longer exists", null, {
        hk: "L0S46"
      })
    }));
  }
};
var r = require("../app/625786.js");
var o = require("../app/390737.js");
var l = require("../vendor/548360.js");
var i = a(require("../vendor/667294.js"));