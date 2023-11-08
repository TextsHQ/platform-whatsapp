var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._online = undefined;
exports.handleMessage = function () {
  return _.apply(this, arguments);
};
exports.waitForOfflineMsgThread = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  if (e) {
    return f.chatQueue.wait(e);
  }
  return f.allChatQueue.wait();
};
exports.waitForOnlineMsgThread = function () {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  if (e) {
    return p.chatQueue.wait(e);
  }
  return p.allChatQueue.wait();
};
var i = r(require("../vendor/348926.js"));
var a = require("./477689.js");
var o = require("./652204.js");
var s = require("./434517.js");
var l = r(require("./797137.js"));
var u = r(require("./254028.js"));
var c = require("./359484.js");
const d = 20000;
const p = {
  allChatQueue: new o.PromiseQueue(),
  chatQueue: new o.PromiseQueueMap()
};
exports._online = p;
const f = {
  allChatQueue: new o.PromiseQueue(),
  chatQueue: new o.PromiseQueueMap()
};
function _() {
  return (_ = (0, i.default)(function* (e, t, n) {
    if (t && !c.OfflineMessageHandler.isResumeFromRestartComplete()) {
      return f.allChatQueue.enqueue(() => f.chatQueue.enqueue(e, (0, i.default)(function* () {
        yield (0, u.default)();
        return (0, s.promiseTimeout)(n(), d).catch(e => {
          if (!(e instanceof a.TimeoutError)) {
            throw e;
          }
          __LOG__(2, undefined, undefined, undefined, ["messaging"])`Offline chat queue MAX_MESSAGE_DELAY exceeded`;
        });
      })));
    } else {
      yield (0, l.default)();
      return p.allChatQueue.enqueue(() => p.chatQueue.enqueue(e, () => (0, s.promiseTimeout)(n(), d).catch(e => {
        if (!(e instanceof a.TimeoutError)) {
          throw e;
        }
        __LOG__(2, undefined, undefined, undefined, ["messaging"])`Online chat queue MAX_MESSAGE_DELAY exceeded`;
      })));
    }
  })).apply(this, arguments);
}