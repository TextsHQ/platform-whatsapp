var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mexGetTextStatusList = function () {
  return c.apply(this, arguments);
};
var i;
var a = r(require("../vendor/348926.js"));
var o = require("./550866.js");
var s = require("./258269.js");
var l = require("./574892.js");
var u = r(require("./124928.js"));
function c() {
  return (c = (0, a.default)(function* (e, t) {
    if (!u.default.isWid(e) || !e.isUser()) {
      __LOG__(2)`[MEX][TEXT-STATUS] this method should only take user wid, instead it received: ${e}`;
      return Promise.resolve({
        id: e
      });
    }
    const r = i !== undefined ? i : i = require("./840091.js");
    const a = (0, l.createTextStatusObjectForGetRequest)({
      id: e,
      textStatusLastUpdateTime: t
    });
    const c = {
      input: [{
        jid: a.jid,
        last_update_time: a.last_update_time
      }]
    };
    try {
      const e = yield (0, s.fetchQuery)(r, c);
      const t = e.data.xwa2_text_status_list;
      const n = e.getError(t);
      if (n != null) {
        throw new o.GraphQLServerError({
          errors: [{
            code: n.extensions.error_code,
            message: n.message,
            isIQError: false
          }]
        });
      }
      {
        const e = t[0];
        if (!(e == null)) {
          e.text;
        }
        __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][TEXT-STATUS] fetched text status for ${e.jid}`;
        const n = (0, l.parseTextStatusServerResponse)(e);
        return {
          id: n.id,
          text: n.textStatusString,
          emoji: n.textStatusEmoji,
          lastUpdateTime: n.textStatusLastUpdateTime,
          ephemeralDurationSeconds: n.textStatusEphemeralDuration
        };
      }
    } catch (t) {
      if (t instanceof o.GraphQLServerError) {
        var d;
        const n = t.source.errors[0];
        if (n.code !== 401) {
          __LOG__(4, undefined, new Error(), undefined, ["GQL", "MEX"])`[MEX][TEXT-STATUS] text status error for ${e}`;
        } else {
          __LOG__(2, undefined, undefined, undefined, ["GQL", "MEX"])`[MEX][TEXT-STATUS] status fetch not allowed for ${e}`;
        }
        return {
          id: e,
          error: {
            errorCode: n.code,
            errorText: (d = n.message) !== null && d !== undefined ? d : "Unknown MEX error"
          },
          isIQError: n.isIQError
        };
      }
      throw t;
    }
  })).apply(this, arguments);
}