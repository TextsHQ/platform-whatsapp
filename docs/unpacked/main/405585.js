var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateApp = function () {
  return d.apply(this, arguments);
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/625786.js");
var l = require("../app/390737.js");
var i = require("../app/366320.js");
var u = require("../app/956451.js");
var s = require("../vendor/548360.js");
var c = a(require("../vendor/667294.js"));
function d() {
  return (d = (0, r.default)(function* () {
    l.ToastManager.open(c.default.createElement(o.Toast, {
      msg: s.fbt._("Updating WhatsApp", null, {
        hk: "1SyEpq"
      })
    }));
    const e = yield i.Updater.update();
    if (e === u.DownloadState.UPDATE_NOT_AVAILABLE) {
      __LOG__(3)`Got unsupported message but no newer release found`;
      l.ToastManager.open(c.default.createElement(o.Toast, {
        msg: s.fbt._("No update found", null, {
          hk: "NiZO5"
        })
      }));
    } else if (e === u.DownloadState.UPDATE_DOWNLOADED) {
      yield i.Updater.restart();
    } else {
      __LOG__(3)`Got unsupported message but updater errored`;
    }
  })).apply(this, arguments);
}
window.updater = i.Updater;