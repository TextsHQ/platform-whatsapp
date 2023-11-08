Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deinitializeWAM = function () {
  s().deinitialize();
};
exports.enableDebugMode = function () {
  a = true;
};
exports.forceFlushBuffers = function () {
  s().forceFlushBuffers();
};
exports.initializeWAM = function (e, t, n, r, i) {
  s().initialize(n, e, t, r, i);
};
exports.log = function (e, t, n, r, a) {
  let o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  const l = Date.now();
  s().enqueueEvent(e, t, l, n, (0, i.appendRawFields)(r, a), o);
};
exports.logAsync = function (e, t, n, r, a) {
  let o = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  const l = Date.now();
  return new Promise(u => {
    s().enqueueEvent(e, t, l, n, (0, i.appendRawFields)(r, a), o, u);
  });
};
exports.logAttributes = function (e, t) {
  const n = (0, i.getDeltaFromAttributes)(e);
  if (n == null) {
    return;
  }
  const {
    deltaRegular: r,
    deltaPrivate: a
  } = n;
  if (r.size > 0) {
    s().enqueueAttributesUpdate("regular", r);
  }
  if (a.size > 0) {
    s().enqueueAttributesUpdate("private", a);
  }
};
exports.rotateBuffers = function () {
  s().rotateBuffers();
};
exports.updatePrivateStatsIds = function (e) {
  s().updatePrivateStatsIds(e);
};
var r = require("./878947.js");
var i = require("./463818.js");
let a = false;
let o = null;
function s() {
  if (!o) {
    o = new r.WamManager();
  }
  return o;
}