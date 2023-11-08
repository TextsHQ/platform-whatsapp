Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearPresence = function (e) {
  if (e.presenceResendTimerId) {
    self.clearTimeout(e.presenceResendTimerId);
    e.unset("presenceResendTimerId");
  }
  if (e.pausedTimerId) {
    self.clearTimeout(e.pausedTimerId);
    e.unset("pausedTimerId");
  }
  e.typing = false;
};
exports.markComposing = function (e) {
  if (e.isNewsletter || e.id.isBot()) {
    return;
  }
  return function (e) {
    if (!e.typing) {
      const t = e.id;
      (0, a.sendChatStateComposing)(t).catch((0, r.filteredCatch)(i.ServerStatusCodeError, e => {
        if (e.status >= 400) {
          __LOG__(3)`models:chat send presence composing error ${t.toLogString()}`;
        }
      }));
      e.presenceResendTimerId = self.setTimeout(() => c(e), l);
    }
    e.typing = true;
    if (e.pausedTimerId) {
      self.clearTimeout(e.pausedTimerId);
    }
    e.pausedTimerId = self.setTimeout(() => u(e), 2500);
  }((0, s.unproxy)(e));
};
exports.markPaused = function (e) {
  if (e.isNewsletter || e.id.isBot()) {
    return;
  }
  return u((0, s.unproxy)(e));
};
exports.markRecording = function (e) {
  if (e.isNewsletter || e.id.isBot()) {
    return;
  }
  return function (e) {
    if (!e.recording) {
      const t = e.id;
      (0, a.sendChatStateRecording)(t).catch((0, r.filteredCatch)(i.ServerStatusCodeError, e => {
        if (e.status >= 400) {
          __LOG__(3)`models:chat send presence recording error ${t.toLogString()}`;
        }
      }));
      e.presenceResendTimerId = self.setTimeout(() => c(e), l);
    }
    if (e.pausedTimerId) {
      self.clearTimeout(e.pausedTimerId);
      e.unset("pausedTimerId");
    }
    e.recording = true;
    e.typing = false;
  }((0, s.unproxy)(e));
};
exports.presenceOnlineChanged = function (e) {
  if (e.presence.isOnline) {
    c(e);
  } else if (e.presenceResendTimerId) {
    self.clearTimeout(e.presenceResendTimerId);
    e.unset("presenceResendTimerId");
  }
};
exports.sendPresenceAvailable = function () {
  (0, o.setPresenceAvailable)();
};
exports.sendPresenceUnavailable = function () {
  (0, o.setPresenceUnavailable)();
};
var r = require("./122583.js");
var i = require("./984330.js");
var a = require("./441346.js");
var o = require("./516269.js");
var s = require("./163139.js");
const l = 10000;
function u(e) {
  if (e.typing || e.recording) {
    const t = e.id;
    (0, a.sendChatStatePaused)(t).catch((0, r.filteredCatch)(i.ServerStatusCodeError, e => {
      if (e.status >= 400) {
        __LOG__(3)`models:chat send presence paused error ${t.toLogString()}`;
      }
    }));
  }
  if (e.presenceResendTimerId) {
    self.clearTimeout(e.presenceResendTimerId);
    e.unset("presenceResendTimerId");
  }
  if (e.pausedTimerId) {
    self.clearTimeout(e.pausedTimerId);
    e.unset("pausedTimerId");
  }
  e.typing = e.recording = false;
}
function c(e) {
  const t = e.id;
  if (e.recording) {
    (0, a.sendChatStateRecording)(t).catch((0, r.filteredCatch)(i.ServerStatusCodeError, e => {
      if (e.status >= 400) {
        __LOG__(3)`models:chat send presence resend recording error ${t.toLogString()}`;
      }
    }));
  } else {
    if (!e.typing) {
      return void e.unset("presenceResendTimerId");
    }
    (0, a.sendChatStateComposing)(t).catch((0, r.filteredCatch)(i.ServerStatusCodeError, e => {
      if (e.status >= 400) {
        __LOG__(3)`models:chat send presence resend composing error ${t.toLogString()}`;
      }
    }));
  }
  e.presenceResendTimerId = self.setTimeout(() => c(e), l);
}