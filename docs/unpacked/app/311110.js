Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maybePostPrekeysDepletionMetric = function (e) {
  let {
    count: t,
    prekeysFetchReason: n,
    messageType: i,
    deviceSizeBucket: a
  } = e;
  if (t == null || t === 0) {
    return;
  }
  const o = {};
  if (n != null) {
    o.prekeysFetchReason = n;
  }
  if (i != null) {
    o.messageType = i;
  }
  if (a != null) {
    o.deviceSizeBucket = a;
  }
  self.setTimeout(() => {
    for (let e = 0; e < t; e++) {
      new r.PrekeysDepletionWamEvent(o).commit();
    }
  }, 0);
};
var r = require("./586817.js");