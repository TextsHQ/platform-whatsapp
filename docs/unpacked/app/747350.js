var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKeyDistributionMsg = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./564065.js");
var s = require("./275909.js");
var l = require("./588733.js");
var u = require("./21838.js");
var c = require("./309029.js");
var d = require("./358891.js");
var p = require("./608182.js");
var f = require("./459857.js");
var _ = require("./669050.js");
var g = r(require("./556869.js"));
function m() {
  return (m = (0, a.default)(function* (e, t, n, r, o) {
    const s = {
      senderKeyDistributionMessage: {
        groupId: t.toString({
          legacy: true
        }),
        axolotlSenderKeyDistributionMessage: r
      }
    };
    __LOG__(2, undefined, undefined, undefined, ["messaging"])`getKeyDistributionMsg: precalculate ICDC for ${e == null ? undefined : e.id.toString()}`;
    const l = yield h(s, n, o, t);
    const u = n.map(function () {
      var e = (0, a.default)(function* (e) {
        try {
          var t;
          const n = (t = l.get((0, _.toUserWid)(e).toString())) !== null && t !== undefined ? t : (0, i.default)({}, s);
          const r = yield (0, c.encryptMsgProtobuf)(e, 0, n);
          return {
            type: r.type,
            ciphertext: r.ciphertext,
            participant: e
          };
        } catch (t) {
          __LOG__(2, undefined, undefined, undefined, ["messaging"])`encryptAndSendUserMsg: encryption fail for ${e.toString()}, ${t}`;
          if ((0, p.isPrimaryDevice)(e)) {
            return Promise.reject((0, g.default)(`[messaging] encryptAndSendUserMsg: encryption fail for primary device ${String(e)}`));
          }
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    return (yield Promise.all(u)).filter(Boolean);
  })).apply(this, arguments);
}
function h() {
  return y.apply(this, arguments);
}
function y() {
  return (y = (0, a.default)(function* (e, t, n, r) {
    const c = (0, f.getMeUser)();
    const p = [...Array.from(new Set(t.map(_.toUserWid)))];
    const [g, ...m] = yield (0, s.bulkGetDeviceRecord)([c, ...p]);
    let h = null;
    try {
      h = yield (0, d.getICDCMetaFromDeviceRecord)(c, g);
    } catch (e) {
      new o.AdvMetadataCreationFailureWamEvent({
        advMetadataIsMe: true
      }).commit();
      throw e;
    }
    const y = new Map();
    yield Promise.all(m.map(function () {
      var t = (0, a.default)(function* (t, a) {
        const s = p[a];
        let f = (0, i.default)({}, e);
        let _ = null;
        if (s.equals(c)) {
          if (n) {
            f = (0, l.wrapDeviceSentMessage)(f, r);
          }
        } else {
          try {
            _ = yield (0, d.getICDCMetaFromDeviceRecord)(s, t);
          } catch (e) {
            new o.AdvMetadataCreationFailureWamEvent({
              advMetadataIsMe: false
            }).commit();
            throw e;
          }
        }
        (0, u.populateMessageContextInfo)(f, h, _);
        y.set(s.toString(), f);
      });
      return function () {
        return t.apply(this, arguments);
      };
    }()));
    return y;
  })).apply(this, arguments);
}