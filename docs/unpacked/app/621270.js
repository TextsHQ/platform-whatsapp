var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mute = exports.GLOBAL_REACTIONS_MUTE = exports.GLOBAL_MUTE = undefined;
var i = require("./724976.js");
var a = require("./328620.js");
var o = r(require("./164325.js"));
var s = require("./481173.js");
var l = require("./245722.js");
var u = r(require("./97359.js"));
var c = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = S(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("./288057.js"));
var d = require("./73225.js");
var p = require("./390737.js");
var f = require("./459857.js");
var _ = require("./874806.js");
var g = r(require("./124928.js"));
var m = r(require("./556869.js"));
var h = require("../vendor/548360.js");
var y = r(require("../vendor/730381.js"));
var E = r(require("../vendor/667294.js"));
function S(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (S = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const v = "global_mute";
exports.GLOBAL_MUTE = v;
const T = "global_reactions_mute";
function M(e, t) {
  if (g.default.isGroup(e) && !t) {
    return "group";
  } else if (g.default.isNewsletter(e) && !t) {
    return "newsletter";
  } else {
    return "chat";
  }
}
exports.GLOBAL_REACTIONS_MUTE = T;
class A extends s.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, s.prop)();
    this.expiration = (0, s.prop)(0);
    this.callExpiration = (0, s.prop)(0);
    this.isAutoMuted = (0, s.prop)(false);
    this._unmuteTimer = (0, s.session)();
    this._unmuteCallTimer = (0, s.session)();
    this.promises = (0, s.session)(() => ({
      mute: null,
      unmute: null
    }));
    this.isMuted = (0, s.derived)(function () {
      return !!this.expiration;
    }, ["expiration"]);
    this.isCallMuted = (0, s.derived)(function () {
      return !!this.callExpiration;
    }, ["callExpiration"]);
  }
  initialize() {
    super.initialize();
    if (this.expiration != null && this.expiration !== 0) {
      this.mute({
        expiration: this.expiration,
        isAutoMuted: this.isAutoMuted
      });
    }
    if (this.callExpiration != null && this.callExpiration !== 0) {
      this.muteCall(this.callExpiration);
    }
  }
  setMute(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
    let n = arguments.length > 2 ? arguments[2] : undefined;
    if ((e || this.expiration) && e !== this.expiration) {
      if (e) {
        this.mute({
          expiration: e,
          isAutoMuted: t,
          sendDevice: n
        });
      } else {
        this.unmute({
          sendDevice: n
        });
      }
    }
  }
  setAutoMuted(e) {
    this.set({
      isAutoMuted: e
    });
  }
  mute(e) {
    let {
      expiration: t,
      sendDevice: r,
      toastId: s,
      fromMultiselect: u = false,
      isAutoMuted: d = false
    } = e;
    let f = t;
    if (!(0, i.isNumber)(f)) {
      __LOG__(2)`models:Mute:mute called with invalid expiration ${f}`;
      return Promise.reject(new c.ActionError());
    }
    f = Math.round(f);
    if (f > 2000000000) {
      __LOG__(2)`models:Mute:mute called with wrong units?${this.id.toString()} exp:${f}`;
    }
    const S = () => {
      if (this.isMuted) {
        o.default.clearTimeout(this._unmuteTimer);
        this.unset("_unmuteTimer");
      }
      if (f === -1) {
        __LOG__(2)`models:Mute:mute ${this.id.toString()} muted, no expiration`;
      } else {
        const e = f - (0, y.default)().unix();
        __LOG__(2)`models:Mute:mute ${this.id.toString()} duration:${e}`;
        this._unmuteTimer = o.default.setGlobalTimeout(() => this.unmute(), f * 1000);
      }
      this.set({
        expiration: f,
        isAutoMuted: d
      });
    };
    const v = M(this.id, u);
    if (r === true) {
      var T;
      if (!g.default.isNewsletter(this.id) && this.promises.mute != null) {
        return this.promises.mute;
      }
      const e = g.default.isNewsletter(this.id) ? (T = this.promises.mute) !== null && T !== undefined ? T : Promise.reject((0, m.default)("No promise for newsletter mute")) : this.promises.mute = (0, l.sendConversationMute)(this.id, f, this.expiration, d);
      let t = new a.ActionType(h.fbt._("Muting chat", null, {
        hk: "y3gKR"
      }));
      if (v === "group") {
        t = new a.ActionType(h.fbt._("Muting group", null, {
          hk: "4dQhjO"
        }));
      } else if (v === "newsletter") {
        t = null;
      }
      const i = s || (0, a.genId)();
      const o = this.promises.mute.catch(() => {
        __LOG__(3)`models:Mute:mute dropped`;
        let e = h.fbt._("Couldn't mute chat.", null, {
          hk: "3pkMDM"
        });
        if (v === "group") {
          e = h.fbt._("Couldn't mute group.", null, {
            hk: "9xtvq"
          });
        } else if (v === "newsletter") {
          t = new a.ActionType(h.fbt._("Couldn't mute channel", null, {
            hk: "s3Xfg"
          }));
        }
        if (!g.default.isNewsletter(this.id)) {
          throw new a.ActionType(e, {
            actionText: h.fbt._("Try again.", null, {
              hk: "262nZi"
            }),
            actionHandler: () => this.mute({
              expiration: f,
              isAutoMuted: d,
              sendDevice: r,
              toastId: i
            })
          });
        }
      }).then(e => {
        if (e.status === 200) {
          let e = h.fbt._("Chat muted", null, {
            hk: "4AcU7H"
          });
          if (v === "group") {
            e = h.fbt._("Group muted", null, {
              hk: "534dz"
            });
          } else if (v === "newsletter") {
            e = h.fbt._("Notifications turned off", null, {
              hk: "imi3e"
            });
          }
          if (u) {
            return new a.ActionType(e);
          } else {
            return new a.ActionType(e, {
              actionText: h.fbt._("Undo", null, {
                hk: "4sCkfZ"
              }),
              actionHandler: () => g.default.isNewsletter(this.id) ? require("./602940.js").unmuteNewsletterAction(this.id, {
                eventSurface: _.CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE
              }) : this.unmute({
                sendDevice: r,
                toastId: i
              })
            });
          }
        }
        if (e.status >= 400) {
          if (v === "newsletter") {
            throw new a.ActionType(h.fbt._("Failed to mute channel", null, {
              hk: "dyeFp"
            }));
          }
          if (v === "group") {
            throw new a.ActionType(h.fbt._("Couldn't mute group.", null, {
              hk: "9xtvq"
            }));
          }
          throw new a.ActionType(h.fbt._("Couldn't mute chat.", null, {
            hk: "3pkMDM"
          }));
        }
      });
      p.ToastManager.open(E.default.createElement(a.ActionToast, {
        id: i,
        initialAction: t,
        pendingAction: o
      }));
      return e.then(e => {
        if (e.status === 200) {
          S();
        }
      }).finally(() => {
        this.promises.mute = null;
      });
    }
    S();
    return Promise.resolve();
  }
  muteCall(e) {
    let t = e;
    if (!(0, i.isNumber)(t)) {
      __LOG__(2)`models:Mute:muteCall called with invalid expiration ${t}`;
      return Promise.reject(new c.ActionError());
    }
    t = Math.round(t);
    if (t > 2000000000) {
      __LOG__(2)`models:Mute:muteCall called with wrong units?${this.id.toString()} exp:${t}`;
    }
    if (this.isCallMuted) {
      o.default.clearTimeout(this._unmuteCallTimer);
      this.unset("_unmuteCallTimer");
    }
    if (t === -1) {
      __LOG__(2)`models:Mute:muteCall ${this.id.toString()} muted, no expiration`;
    } else {
      const e = t - (0, y.default)().unix();
      __LOG__(2)`models:Mute:muteCall ${this.id.toString()} duration:${e}`;
      this._unmuteCallTimer = o.default.setGlobalTimeout(() => this.unmuteCall(), t * 1000);
    }
    this.set({
      callExpiration: t
    });
    return Promise.resolve();
  }
  canMute() {
    let e = false;
    if ((0, f.isMeAccount)(this.id)) {
      return false;
    }
    if (g.default.isGroup(this.id)) {
      const t = (0, u.default)(require("./667845.js")).get(this.id);
      if (t) {
        e = t.participants.iAmMember();
      }
    }
    if ((0, d.isNewsletterEnabled)() && g.default.isNewsletter(this.id)) {
      const t = (0, u.default)(require("./876319.js")).get(this.id);
      if (t != null) {
        e = t.canBeMuted;
      }
    }
    return e || g.default.isUser(this.id);
  }
  _clearUnmuteTimer() {
    o.default.clearTimeout(this._unmuteTimer);
    this.unset("_unmuteTimer");
    this.expiration = 0;
  }
  _clearUnmuteCallTimer() {
    o.default.clearTimeout(this._unmuteCallTimer);
    this.unset("_unmuteCallTimer");
    this.callExpiration = 0;
  }
  unmute() {
    let {
      sendDevice: e,
      toastId: t,
      fromMultiselect: r = false
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const i = () => {
      __LOG__(2)`models:Mute:unmute ${this.id.toString()}`;
      this._clearUnmuteTimer();
      this.set({
        isAutoMuted: false
      });
    };
    const o = M(this.id, r);
    if (e === true) {
      var s;
      if (!g.default.isNewsletter(this.id) && this.promises.unmute) {
        return this.promises.unmute;
      }
      const r = g.default.isNewsletter(this.id) ? (s = this.promises.unmute) !== null && s !== undefined ? s : Promise.reject((0, m.default)("No promise for newsletter mute")) : this.promises.unmute = (0, l.sendConversationMute)(this.id, 0, this.expiration, false);
      let u = new a.ActionType(h.fbt._("Unmuting chat", null, {
        hk: "27U19X"
      }));
      if (o === "group") {
        u = new a.ActionType(h.fbt._("Unmuting group", null, {
          hk: "4ARUr0"
        }));
      } else if (o === "newsletter") {
        u = new a.ActionType(h.fbt._("Unmuting channel", null, {
          hk: "3AzdBc"
        }));
      }
      const c = t || (0, a.genId)();
      const d = this.promises.unmute.catch(() => {
        __LOG__(3)`models:Mute:unmute dropped`;
        let t = h.fbt._("Couldn't unmute chat.", null, {
          hk: "2txw5B"
        });
        if (o === "group") {
          t = h.fbt._("Couldn't unmute group.", null, {
            hk: "3KkBfW"
          });
        } else if (o === "newsletter") {
          t = h.fbt._("Couldn't unmute channel.", null, {
            hk: "22tPcO"
          });
        }
        if (!g.default.isNewsletter(this.id)) {
          throw new a.ActionType(t, {
            actionText: h.fbt._("Try again.", null, {
              hk: "262nZi"
            }),
            actionHandler: () => this.unmute({
              sendDevice: e,
              toastId: c
            })
          });
        }
      }).then(e => {
        if (e.status === 200) {
          if (o === "group") {
            return new a.ActionType(h.fbt._("Group unmuted", null, {
              hk: "2J5d7l"
            }));
          } else if (o === "newsletter") {
            return new a.ActionType(h.fbt._("Notifications turned on", null, {
              hk: "4smmdc"
            }), {
              actionText: h.fbt._("Undo", null, {
                hk: "4sCkfZ"
              }),
              actionHandler: () => require("./53680.js").muteNewsletterAction(this.id, {
                eventSurface: _.CHANNEL_EVENT_SURFACE.CHANNEL_THREAD
              })
            });
          } else {
            return new a.ActionType(h.fbt._("Chat unmuted", null, {
              hk: "1dx0Qm"
            }));
          }
        }
        if (e.status >= 400) {
          if (o === "newsletter") {
            throw new a.ActionType(h.fbt._("Failed to unmute channel", null, {
              hk: "3aV45Y"
            }));
          }
          if (o === "group") {
            throw new a.ActionType(h.fbt._("Couldn't unmute group.", null, {
              hk: "3KkBfW"
            }));
          }
          throw new a.ActionType(h.fbt._("Couldn't unmute chat.", null, {
            hk: "2txw5B"
          }));
        }
      });
      p.ToastManager.open(E.default.createElement(a.ActionToast, {
        id: c,
        initialAction: u,
        pendingAction: d
      }));
      return r.then(e => {
        if (e.status === 200) {
          i();
        }
      }).finally(() => {
        this.promises.unmute = null;
      });
    }
    i();
    return Promise.resolve();
  }
  unmuteCall() {
    __LOG__(2)`models:Mute:unmuteCall ${this.id.toString()}`;
    this._clearUnmuteCallTimer();
    return Promise.resolve();
  }
  delete() {
    super.delete();
    this.getCollection().remove(this.id);
    this._clearUnmuteTimer();
  }
  getCollection() {
    return require("./971804.js").MuteCollection;
  }
}
A.Proxy = "mute";
A.idClass = g.default;
A.allowedIds = [v, T];
const b = (0, s.defineModel)(A);
exports.Mute = b;