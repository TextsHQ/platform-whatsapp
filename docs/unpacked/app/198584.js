var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.processWorkerWamData = function e(t) {
  __LOG__(2)`processWorkerWamData ${t ? "start" : "run"}`;
  new i.ShiftTimer(() => {
    a.default.processWorkerWamData().then(t => {
      if (t) {
        e(false);
      }
    }).catch(e => {
      __LOG__(4, true, new Error())`Failed to process worker wam data: ${e}`;
    });
  }).onOrAfter(t ? 20000 : 10000);
};
var i = require("./685639.js");
var a = r(require("./32223.js"));