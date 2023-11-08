var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./140822.js");
var o = r(require("./670983.js"));
var s = require("./634951.js");
var l = require("./671953.js");
var u = require("./359987.js");
var c = require("./428261.js");
var d = require("./787742.js");
var p = require("./441425.js");
var f = require("./324720.js");
var _ = require("./509672.js");
var g = require("./533494.js");
var m = require("./669050.js");
const h = (0, l.createAddonMsgProcessor)({
  convert: {
    fromHistorySyncMsg: e => {
      const t = (0, f.parseWebMsgInfoPinInChat)(e.webMsgInfo, e.parsedWebMsgInfo).map(e => (0, _.deserializePinInChatMsgData)((0, _.serializePinInChat)(e)));
      return Promise.resolve(t);
    }
  },
  parentKey: "pinParentKey",
  updateCollection: e => (0, u.frontendFireAndForget)("updatePinCollection", {
    chatId: e[0].id.remote,
    msgs: e
  }),
  beforeUpsert: e => {
    h.updateCollection(e);
    return Promise.resolve({
      result: e,
      upsert: e
    });
  },
  afterUpsert: (y = (0, i.default)(function* (e, t) {
    if (t.mode === s.AddonProcessMode.HistorySync) {
      return;
    }
    const {
      markFutureproofMessagesReparsed: r
    } = require("./486193.js");
    const l = (0, a.groupBy)(e, e => e.id.remote.toString());
    const f = [r(e.map(e => e.id.toString()))].concat(l.map(function () {
      var e = (0, i.default)(function* (e) {
        let [t, n] = e;
        const r = (0, m.createWid)(t);
        const i = yield Promise.all(n.map(e => {
          const t = (0, d.getT)(e);
          if (e.pinMessageType === g.Message$PinInChatMessage$Type.PIN_FOR_ALL && t != null && !(0, d.getIsFailed)(e)) {
            return (0, p.genSystemMessage)(r, t, (0, o.default)((0, d.getSender)(e), "getSender(pin)"));
          }
        }).filter(Boolean));
        if (yield (0, u.frontendSendAndReceive)("processMultipleMessages", {
          chatId: r,
          msgObjs: i,
          meta: {
            add: "after",
            isHistory: false
          },
          processMessagesOrigin: "pinMessage"
        })) {
          yield (0, c.storeMessages)(i, r);
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()));
    yield Promise.all(f);
  }), function () {
    return y.apply(this, arguments);
  })
});
var y;
var E = h;
exports.default = E;