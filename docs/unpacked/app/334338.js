var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeWamStore = function () {
  (0, l.closeWamStorage)();
};
exports.startWamStore = function () {
  (0, l.startWamStorage)(d);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./477689.js");
var s = require("./632157.js");
var l = require("./975276.js");
var u = require("./757453.js");
require("./359151.js");
var c = r(require("./32223.js"));
const d = {
  getStreamId: () => 1,
  saveBuffer: () => Promise.reject(new o.UnimplementedMethod("saveBuffer not implemented yet")),
  finishBuffer: () => Promise.reject(new o.UnimplementedMethod("finishBuffer not implemented yet")),
  getStartingSequenceRow: () => Promise.reject(new o.UnimplementedMethod("getStartingSequenceRow not implemented yet")),
  getBuffers: () => Promise.reject(new o.UnimplementedMethod("getBuffers not implemented yet")),
  removeBufferByKey: () => Promise.resolve(),
  nukeMetrics: () => Promise.reject(new o.UnimplementedMethod("nukeMetrics not implemented yet")),
  updatePrivateStatsIds: () => Promise.reject(new o.UnimplementedMethod("updatePrivateStatsIds not implemented yet")),
  redeemPrivateStatsToken: function () {
    var e = (0, a.default)(function* (e) {
      const t = yield c.default.getPsToken();
      if (t) {
        if (e({
          redeemCount: t.redeemCount,
          creationTs: t.creationTs
        }, {
          maxExpirySeconds: 86400
        })) {
          return c.default.savePsToken((0, i.default)((0, i.default)({}, t), {}, {
            redeemCount: t.redeemCount + 1
          })).then(() => t.token);
        } else {
          return Promise.resolve(null);
        }
      } else {
        return null;
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }(),
  savePrivateStatsToken: function (e) {
    return c.default.savePsToken({
      key: "token",
      token: e,
      creationTs: (0, s.unixTime)(),
      redeemCount: 1
    });
  },
  privateStatsKillSwitchGetBlockedToken: function () {
    return Promise.resolve((0, u.getPsKillSwitchToken)());
  },
  privateStatsKillSwitchSet: function (e) {
    (0, u.setPsKillSwitchToken)(e);
    return Promise.resolve();
  }
};