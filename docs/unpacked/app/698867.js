var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChatThreadID = function () {
  return S.apply(this, arguments);
};
exports.getChatThreadIDHMAC = function () {
  return v.apply(this, arguments);
};
exports.getChatThreadLoggingStateDebug = function () {};
exports.handleActivitiesForChatThreadLogging = function (e) {
  var t;
  __LOG__(2)`chat_thread_logging: handling ${e.length} message(s)`;
  if (!((t = f()) === null || t === undefined)) {
    t.eventStore.handleMessages(e).catch(() => {
      __LOG__(4, undefined, new Error())`chat_thread_logging: error handling activities`;
    });
  }
};
exports.initChatThreadLogging = function () {
  return _.apply(this, arguments);
};
exports.setThreadDsTimeframeOffset = function () {
  return g.apply(this, arguments);
};
exports.setThreadIdUserSecret = function (e) {
  var t;
  var n;
  __LOG__(2)`chat_thread_logging: setting thread_id_user_secret`;
  if ((t = (n = f()) === null || n === undefined ? undefined : n.metadataStore.setSecret(e)) !== null && t !== undefined) {
    return t;
  } else {
    return Promise.resolve(false);
  }
};
exports.uploadChatThreadLoggingEvents = function () {
  return m.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./632157.js");
var o = require("./287461.js");
var s = require("./434072.js");
var l = require("./648841.js");
var u = require("./245146.js");
var c = require("./257147.js");
var d = require("./673168.js");
let p = null;
function f() {
  if (p == null) {
    __LOG__(4, undefined, new Error())`getChatThreadLoggingState: init incomplete!`;
  }
  return p;
}
function _() {
  return (_ = (0, i.default)(function* () {
    let e = !(arguments.length > 0 && arguments[0] !== undefined) || arguments[0];
    const t = e && (0, o.getABPropConfigValue)("message_count_logging_md_enabled");
    if ((yield (0, d.getChatThreadLoggingLastUploadedStartTs)()) == null) {
      yield (0, d.setChatThreadLoggingLastUploadedStartTs)(0);
    }
    const n = new u.ChatThreadLoggingMetadataLocalStorage();
    const r = t ? new s.ChatThreadLoggingEventStoreImpl(n) : {
      handleMessages: () => Promise.resolve(),
      getEvent: () => Promise.resolve(),
      getBeforeInclusive: () => Promise.resolve([]),
      deleteBeforeInclusive: () => Promise.resolve(0)
    };
    const i = t ? new l.ChatThreadLoggingEventUploaderImpl(n, r) : {
      uploadEvents: () => Promise.resolve(0)
    };
    const a = yield n.getOffset();
    if (a != null) {
      h(a);
    }
    p = {
      metadataStore: n,
      eventStore: r,
      eventUploader: i
    };
    __LOG__(2)`chat thread logging initialized`;
  })).apply(this, arguments);
}
function g() {
  return (g = (0, i.default)(function* (e) {
    var t;
    var n;
    __LOG__(2)`chat_thread_logging: setting offset`;
    const r = (t = yield (n = f()) === null || n === undefined ? undefined : n.metadataStore.setOffset(e)) !== null && t !== undefined && t;
    if (r) {
      h(e);
    }
    return r;
  })).apply(this, arguments);
}
function m() {
  return (m = (0, i.default)(function* (e) {
    var t;
    var n;
    var r;
    if ((yield (t = f()) === null || t === undefined ? undefined : t.metadataStore.getOffset()) == null) {
      return void __LOG__(4, undefined, new Error())`chat_thread_logging: attempting to upload but offset is unset.`;
    }
    if ((yield (n = f()) === null || n === undefined ? undefined : n.metadataStore.getSecret()) != null) {
      yield (r = f()) === null || r === undefined ? undefined : r.eventUploader.uploadEvents(e);
    } else {
      __LOG__(4, undefined, new Error())`chat_thread_logging: attempting to upload but secret is unset.`;
    }
  })).apply(this, arguments);
}
function h(e) {
  const t = (0, a.unixTime)();
  let n = t - t % 86400 + e - t;
  if (n < 0) {
    n += a.DAY_SECONDS;
  }
  self.setTimeout((0, i.default)(function* () {
    var t;
    yield (t = f()) === null || t === undefined ? undefined : t.eventUploader.uploadEvents();
    h(e);
  }), n * 1000);
}
function y() {
  return E.apply(this, arguments);
}
function E() {
  return (E = (0, i.default)(function* () {
    const e = yield f();
    const t = yield e == null ? undefined : e.metadataStore.getSecret();
    if (t == null) {
      __LOG__(3, undefined, undefined, true)`chat_thread_logging: cannot get user secret from the thread logging metadata store`;
      SEND_LOGS("ctl-secret-unset");
      return null;
    } else {
      return t;
    }
  })).apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e, t) {
    const n = yield y();
    if (n == null) {
      return void __LOG__(3)`chat_thread_logging: cannot generate getChatThreadID because secret is unset.`;
    }
    const r = (0, c.getThreadDs)(t != null ? t : (0, a.unixTime)());
    return (0, c.generateThreadID)(n, e, r);
  })).apply(this, arguments);
}
function v() {
  return (v = (0, i.default)(function* (e) {
    const t = yield y();
    if (t == null) {
      __LOG__(3, undefined, undefined, true)`[ctwa] labels: cannot generate getChatThreadIDHMAC because secret is unset`;
      SEND_LOGS("ctwa-labels-thread-id-hmac-error");
      return null;
    } else {
      return (0, c.generateThreadIDHMAC)(t, e);
    }
  })).apply(this, arguments);
}