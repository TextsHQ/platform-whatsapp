var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissNux = function (e) {
  return s(e, true);
};
exports.resetNux = function (e) {
  (0, o.removeNUX)(e);
  const t = (0, i.getNuxSyncKey)(e);
  if (t != null) {
    return a.default.unAcknowledgeNux(t);
  }
  return Promise.resolve();
};
exports.viewNux = s;
var i = require("./95589.js");
var a = r(require("./183981.js"));
var o = require("./377773.js");
function s(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  const n = (0, o.getNUX)(e);
  const r = n != null ? n : {
    views: 0
  };
  const s = (0, o.getNuxMaxViews)(e);
  const l = t ? s : r.views + 1;
  (0, o.setNUX)(e, {
    views: l
  });
  if (l >= s) {
    const t = (0, i.getNuxSyncKey)(e);
    if (t != null) {
      return a.default.acknowledgeNux(t);
    }
  }
  return Promise.resolve();
}