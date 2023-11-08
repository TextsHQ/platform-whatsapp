var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseQPSurfacesNotification = function (e) {
  const {
    parsedRequest: t,
    makeQPNotificationResponseAck: n
  } = (0, o.receiveQPNotificationRPC)(e);
  const {
    surfacesQPSurfacesMixin: r,
    t: p
  } = t;
  const {
    surface: f
  } = r;
  return {
    surfaces: f.map(e => {
      const t = e.promotion.reduce((e, t) => {
        const {
          qpConfigFilterRules: n
        } = t;
        if (n == null) {
          const {
            qpConfigFilterRules: n
          } = t;
          const r = (0, a.default)(t, c);
          e.push(r);
          return e;
        }
        try {
          const r = (0, u.decodeProtobuf)(l.QP$FilterClauseSpec, n.elementValue);
          const {
            qpConfigFilterRules: o
          } = t;
          const s = (0, a.default)(t, d);
          const c = (0, i.default)((0, i.default)({}, s), {}, {
            qpConfigFilterRules: r
          });
          e.push(c);
        } catch (e) {
          __LOG__(3)`loadQuickPromotions: Malformed filter rules node. Skipping the promotion`;
        }
        return e;
      }, []);
      return {
        id: e.id,
        promotions: t
      };
    }),
    ts: (0, s.castToUnixTime)(p),
    makeAck: n
  };
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/506479.js"));
var o = require("./214359.js");
var s = require("./632157.js");
var l = require("./853721.js");
var u = require("./394629.js");
const c = ["qpConfigFilterRules"];
const d = ["qpConfigFilterRules"];