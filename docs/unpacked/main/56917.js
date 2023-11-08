var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  require("./374739.js").j();
  require("./960300.js").yj();
  require("./620522.js").Y();
  {
    const e = (0, o.default)(require("../app/478885.js"));
    const t = require("../app/446474.js").ProfilePicThumbCollection;
    const a = (0, o.default)(require("../app/647349.js"));
    const r = (0, o.default)(require("../app/537152.js"));
    if (e.supported) {
      t.on("change:tag", e => {
        const t = navigator.serviceWorker;
        if ((t == null ? undefined : t.controller) && !e.tag) {
          r.request(t.controller, a.REMOVE_PP, e.id).catch(() => {});
        }
      });
    }
  }
  require("../app/757453.js").initDailyStatsStartTime();
  (0, o.default)(require("../main-chunk/797163.js"))((0, r.getEmojiTypeFromPlatform)(e));
  (0, o.default)(require("./985044.js"))();
  const t = require("./767280.js");
  return {
    MainComponent: t.MainComponent,
    hasPending: t.hasPending,
    notificationBackend: require("../app/409244.js"),
    execApiCmd: (0, o.default)(require("./200715.js"))
  };
};
var r = require("../app/343168.js");
var o = a(require("../app/97359.js"));