var r = require("../vendor/595318.js");
var i = require("./780549.js");
var a = r(require("./478885.js"));
var o = require("./65889.js");
var s = require("./591547.js");
var l = require("./72732.js");
var u = require("./226562.js");
var c = require("./38878.js");
var d = require("./973981.js");
var p = r(require("./537152.js"));
var f = r(require("./647349.js"));
var _ = r(require("./556869.js"));
if (a.default.supported) {
  const e = function () {
    try {
      const e = navigator.serviceWorker;
      if (e == null ? undefined : e.controller) {
        e.controller.addEventListener("error", e => {
          if (c.Socket.state !== u.SOCKET_STATE.UNLAUNCHED) {
            __LOG__(3)`ServiceWorker controller error: ${e.error}`;
          }
        });
      }
    } catch (e) {
      __LOG__(3)`Unable to add "error" event listener to service worker, error: ${e}`;
    }
  };
  try {
    const t = navigator.serviceWorker;
    if (t) {
      t.addEventListener("controllerchange", () => {
        e();
        if (c.Socket.state === u.SOCKET_STATE.UNLAUNCHED) {
          d.Stream.needsUpdate = true;
        }
      });
    }
  } catch (e) {
    __LOG__(3)`Unable to add "controllerchange" event listener to service worker container, error: ${e}`;
  }
  try {
    const e = navigator.serviceWorker;
    if (e) {
      e.addEventListener("error", e => {
        if (c.Socket.state !== u.SOCKET_STATE.UNLAUNCHED) {
          __LOG__(3)`ServiceWorker container error: ${e.error}`;
        }
      });
    }
  } catch (e) {
    __LOG__(3)`Unable to add "error" event listener to service worker container, error: ${e}`;
  }
  e();
  const t = function (e, t) {
    e.buffer.forEach(e => {
      var n;
      const r = (n = e.message[0]) !== null && n !== undefined ? n : "";
      const i = function (e) {
        switch (e) {
          case "info":
            return 1;
          case "log":
            return 2;
          case "warn":
            return 3;
          case "error":
            return 4;
        }
        throw (0, _.default)(`Invalid level: ${e}`);
      }(e.level.match(/^(.*?)(?:Verbose)?$/i)[1]);
      s.Logger.logImpl(i, `ServiceWorker (${t}): ${r}`, e.error, e.attachedToSendLogs, e.extraTags);
    });
  };
  new p.default(e => {
    var r;
    let {
      action: i,
      message: a,
      version: s
    } = e;
    switch (i) {
      case f.default.REQUEST_STREAMING_INFO:
      case f.default.EXP_BACKOFF:
      case f.default.REQUEST_RMR:
      case f.default.SEND_STREAMING_CHUNK:
        if ((r = (0, o.requireHandleVideoStreamingRequest)()) === null || r === undefined) {
          return undefined;
        } else {
          return r.then(e => e == null ? undefined : e({
            action: i,
            message: a
          }));
        }
      case f.default.LOG:
        if (c.Socket.state === u.SOCKET_STATE.UNLAUNCHED) {
          return;
        }
        if (a) {
          t(a, s);
        }
        return {
          test: true
        };
      case f.default.UPLOAD_LOGS:
        if (a) {
          t(a, s);
        }
        return require("./996588.js").upload({
          reason: "Requested by Service Worker"
        }).then(() => {});
      case f.default.ACTIVE_TAB:
        return {
          isActive: (0, l.getIsTabActive)()
        };
      default:
        return Promise.reject((0, _.default)(`Invalid Action: ${i}`));
    }
  }).init();
  i.Cmd.on("logout", () => {
    const e = navigator.serviceWorker;
    if (e == null ? undefined : e.controller) {
      p.default.request(e.controller, f.default.LOGOUT).catch(() => {});
    }
  });
}