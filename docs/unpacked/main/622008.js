var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {
  return (0, s.useCallback)(function () {
    var e = (0, r.default)(function* (e) {
      const t = yield e;
      i.DrawerManager.closeDrawerLeft();
      if (t != null) {
        (0, u.findChat)(t, "handleNewGroupCreated").then(e => {
          o.Cmd.openChatBottom(e).then(t => {
            if (t) {
              l.ComposeBoxActions.focus(e);
            }
          });
        });
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(), []);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/780549.js");
var l = require("../app/877171.js");
var i = require("../app/900316.js");
var u = require("../app/581354.js");
var s = require("../vendor/667294.js");