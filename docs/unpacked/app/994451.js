var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestMediaReuploadManagerImpl = exports.RequestMediaReuploadManager = undefined;
var i = r(require("../vendor/348926.js"));
var a = r(require("./670983.js"));
var o = require("./288057.js");
var s = require("./708761.js");
var l = require("./787742.js");
var u = r(require("./808279.js"));
class c {
  constructor() {
    var e = this;
    this._rmrRequests = new Map();
    this.requestMediaReupload = function () {
      var t = (0, i.default)(function* (t) {
        const n = t.id.id;
        if ((0, l.getIsNewsletterMsg)(t)) {
          throw new o.RMRNotSupportedOnNewsletterMessagesError((0, s.getMsgMediaType)(t));
        }
        const r = e._rmrRequests.get(n);
        if (r) {
          return (0, a.default)(r.request, "existingRequest.request");
        }
        const i = new Promise((r, i) => {
          e._rmrRequests.set(n, {
            resolve: r,
            reject: i,
            msg: t
          });
        });
        (0, a.default)(e._rmrRequests.get(n), "_this._rmrRequests.get(msgId)").request = i;
        yield (0, u.default)(t);
        return i;
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    this.resolveMediaReupload = e => {
      let {
        msgId: t,
        result: n,
        directPath: r
      } = e;
      const i = this._rmrRequests.get(t);
      if (i != null) {
        i.resolve({
          result: n,
          directPath: r
        });
        this._rmrRequests.delete(t);
      } else {
        __LOG__(3)`resolveMediaReupload: msgId (${t}) is not found in _rmrRequests`;
      }
    };
    this.getMediaKey = e => {
      var t;
      if ((t = this._rmrRequests.get(e)) === null || t === undefined) {
        return undefined;
      } else {
        return t.msg.mediaKey;
      }
    };
  }
}
exports.RequestMediaReuploadManagerImpl = c;
const d = new c();
exports.RequestMediaReuploadManager = d;