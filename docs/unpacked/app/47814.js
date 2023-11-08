Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAndRepair = function (e, t) {
  const n = new i.WebcMediaAnalyzedWamEvent();
  let a = false;
  return (0, r.sendMessageToMediaWorker)({
    type: "prep",
    file: e,
    asGif: t
  }).then(e => {
    let {
      type: t,
      result: n,
      error: r,
      filename: i,
      file: o
    } = e;
    switch (t) {
      case "result":
        __LOG__(2)`MediaAnalyzer:checkAndRepair approved file`;
        a = !!n;
        return n;
      case "parsingError":
        __LOG__(2)`trouble parsing file ${o} (fossil ${i}) ${String(r)}`;
        if (o) {
          __LOG__(4, undefined, new Error(), true)`MediaAnalyzer:checkAndRepair got parsing error! ${String(r)}`;
          SEND_LOGS("media-parsing-error");
        }
        return void __LOG__(2)`MediaAnalyzer:checkAndRepair rejected file (${String(r)})`;
    }
  }).catch(e => {
    __LOG__(4, undefined, new Error(), true)`MediaAnalyzer:checkAndRepair got error! ${String(e)}`;
    SEND_LOGS("media-detection-error");
  }).finally(() => {
    if (n) {
      let t;
      if (e.name) {
        const n = e.name.split(".");
        if (n.length > 1) {
          t = n[n.length - 1];
        }
      }
      n.set({
        webcMediaSupported: a,
        webcMediaExtensions: t
      });
      n.markWebcMediaAnalyzeT();
      n.commit();
    }
  });
};
var r = require("./173093.js");
var i = require("./107221.js");