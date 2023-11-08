var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./671953.js");
var o = require("./359987.js");
var s = require("./492892.js");
var l = require("./527109.js");
var u = require("./174834.js");
var c = require("./891831.js");
const d = (0, a.createAddonMsgProcessor)({
  convert: {
    fromHistorySyncMsg: e => {
      if ((0, u.isCommentMessageHistorySyncReceiverEnabled)()) {
        const t = (0, l.parseWebMsgInfoComment)(e.webMsgInfo, e.parsedWebMsgInfo, e.isFromCag);
        return Promise.resolve(t);
      }
      return Promise.resolve([]);
    }
  },
  parentKey: "targetMessageKey",
  updateCollection: e => {
    (0, o.frontendFireAndForget)("updateCommentCollection", {
      comments: e
    });
  },
  beforeUpsert: (p = (0, i.default)(function* (e) {
    const t = [];
    for (const n of e) {
      if (n.addonEncrypted) {
        const e = yield (0, c.processEncCommentMsg)(n);
        const r = (0, s.convertMessageToCommentMsgData)(e, n);
        t.push(r);
      } else {
        t.push(n);
      }
    }
    d.updateCollection(t);
    return {
      result: t,
      upsert: t
    };
  }), function () {
    return p.apply(this, arguments);
  }),
  afterUpsert: () => Promise.resolve()
});
var p;
var f = d;
exports.default = f;