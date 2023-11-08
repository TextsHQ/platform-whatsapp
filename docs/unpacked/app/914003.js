var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Presence = exports.ChatstateCollection = exports.Chatstate = undefined;
exports.processStagesRecursively = M;
var i = r(require("../vendor/23279.js"));
var a = require("./392125.js");
var o = require("./481173.js");
var s = require("./412380.js");
var l = require("./560861.js");
var u = require("./642838.js");
var c = require("./63014.js");
var d = require("./177938.js");
var p = require("./660666.js");
var f = require("./235630.js");
var _ = require("./714574.js");
var g = require("./576965.js");
var m = require("./491805.js");
var h = r(require("./124928.js"));
var y = require("../vendor/548360.js");
class E extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, o.prop)();
    this.type = (0, o.prop)();
    this.t = (0, o.prop)();
    this.deny = (0, o.prop)();
    this.updateTime = (0, o.session)();
    this.expireTimerId = (0, o.session)();
  }
}
E.Proxy = "chatstate";
E.idClass = h.default;
const S = (0, o.defineModel)(E);
exports.Chatstate = S;
class v extends a.BaseCollection {}
exports.ChatstateCollection = v;
v.model = S;
class T extends o.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, o.prop)();
    this.isOnline = (0, o.session)(false);
    this.stale = (0, o.session)(true);
    this.hasData = (0, o.session)(false);
    this.isSubscribed = (0, o.session)(false);
    this.withholdDisplayStage = (0, o.session)(g.WithholdDisplayStage.None);
    this.forceDisplay = (0, o.session)(false);
    this.chatActive = (0, o.session)(false);
    this.withholdDisplayTimer = (0, o.session)();
    this.forceDisplayTimer = (0, o.session)();
    this.chatstate = (0, o.session)();
    this.chatstates = (0, o.collection)(v);
    this.isGroup = (0, o.derived)(function () {
      return h.default.isGroup(this.id);
    });
    this.isUser = (0, o.derived)(function () {
      return h.default.isUser(this.id);
    });
  }
  initialize() {
    super.initialize();
    const e = this.isGroup ? {
      id: "",
      type: "unavailable"
    } : {
      id: this.id
    };
    this.addChild("chatstate", new S(e));
    if (this.isGroup) {
      this.listenTo(this.chatstates, "add change", (0, i.default)(() => {
        let e;
        let t = false;
        this.chatstates.forEach(n => {
          if (!(n.type !== "typing" && n.type !== "recording_audio" || e && !(e.updateTime < n.updateTime))) {
            e = n;
          }
          t = t || n.type === "available";
        });
        this.set({
          isOnline: t
        });
        this.chatstate.set({
          id: e ? e.id : "",
          type: e ? e.type : "unavailable"
        });
      }));
    } else {
      this.listenTo(this.chatstate, "change:type", () => {
        if (this.chatstate.type === "available") {
          this.isOnline = true;
        } else if (this.chatstate.type === "unavailable") {
          this.isOnline = false;
        }
      });
    }
    this.listenTo(this, "change:chatActive", this._handleChatActiveChange);
  }
  delete() {
    super.delete();
    this.getCollection().remove(this.id);
    this.chatstate.delete();
    this.chatstates.forEach(e => e.delete());
  }
  reset() {
    this.hasData = false;
    if (this.isGroup) {
      this.chatstates.forEach(e => {
        e.type = "unavailable";
      });
    } else if (this.isUser) {
      this.chatstate.unset("t");
      this.chatstate.unset("deny");
    }
    this.chatstate.set({
      id: this.isGroup ? "" : this.id,
      type: "unavailable",
      t: undefined,
      deny: undefined
    });
  }
  isActive() {
    const e = this.chatstate.type;
    return this.hasData && (e === "typing" || e === "recording_audio");
  }
  getGroupSubtitleText(e) {
    var t;
    if (!this.hasData) {
      return null;
    }
    if (!this.isGroup) {
      __LOG__(4, undefined, new Error(), true)`getGroupSubtitleText is used when presence is not for a group`;
      SEND_LOGS("getGroupSubtitleText-not-group");
      return null;
    }
    const n = this._getActiveContact();
    if (n == null) {
      return null;
    }
    let r;
    const i = (t = e == null ? undefined : e.elevatedPushNamesEnabled) !== null && t !== undefined && t;
    let a;
    if ((0, f.pushNameCanBeUsed)(n) && i) {
      a = (0, u.getFormattedNotifyName)((0, p.getNotifyName)(n));
      const e = (0, u.getAccessibleNotifyName)((0, p.getNotifyName)(n));
      r = this.chatstate.type === "typing" ? y.fbt._("{participant} is typing…", [y.fbt._param("participant", e)], {
        hk: "Nm65B"
      }) : y.fbt._("{participant} is recording audio…", [y.fbt._param("participant", e)], {
        hk: "39ZeLt"
      });
    } else {
      a = (0, _.getFormattedShortName)(n);
    }
    return {
      text: this.chatstate.type === "typing" ? y.fbt._("{participant} is typing…", [y.fbt._param("participant", a)], {
        hk: "Nm65B"
      }) : y.fbt._("{participant} is recording audio…", [y.fbt._param("participant", a)], {
        hk: "39ZeLt"
      }),
      ariaLabel: r
    };
  }
  _getActiveContact() {
    const e = this.chatstate.id;
    if (e) {
      return d.ContactCollection.get(e);
    } else {
      return null;
    }
  }
  getUserSubtitleText() {
    if (!this.hasData) {
      return null;
    }
    if (!this.isUser) {
      __LOG__(4, undefined, new Error(), true)`getUserSubtitleText is used when presence is not for a user`;
      SEND_LOGS("getUserSubtitleText-not-user");
      return null;
    }
    const e = this.chatstate;
    switch (e.type) {
      case "available":
        return y.fbt._("online", null, {
          hk: "3RolVJ"
        });
      case "typing":
        return y.fbt._("typing…", null, {
          hk: "49dYir"
        });
      case "recording_audio":
        return y.fbt._("recording audio…", null, {
          hk: "21blv0"
        });
      case "unavailable":
        if (e.deny || e.t == null) {
          return null;
        } else {
          return c.Clock.lastSeenStr(e.t);
        }
    }
  }
  getFormattedString(e) {
    if (!this.hasData) {
      return null;
    }
    if (this.isGroup) {
      const t = this.getGroupSubtitleText(e);
      if (t != null) {
        return {
          text: t.text,
          ariaLabel: t.ariaLabel
        };
      }
    } else if (this.isUser) {
      return {
        text: this.getUserSubtitleText()
      };
    }
    return null;
  }
  _handleChatActiveChange() {
    if (this.chatActive) {
      const e = s.ChatAssignmentCollection.getAgentCollectionForChatId(this.id).length > 0;
      const t = this._getActiveContact();
      const n = [];
      if (this.hasData) {
        if ((0, l.canAssignChats)() && e) {
          n.push(g.WithholdDisplayStage.ChatAssignment);
        }
        if ((t == null ? undefined : t.isBusiness) === true) {
          n.push(g.WithholdDisplayStage.Business);
        }
        if ((0, m.receiveTextStatusForNewSurfacesEnabled)()) {
          n.push(g.WithholdDisplayStage.LastSeen);
        }
        if (n.length > 0) {
          M(this, [...n, g.WithholdDisplayStage.None]);
        } else if ((0, m.receiveTextStatusForNewSurfacesEnabled)()) {
          M(this, [g.WithholdDisplayStage.LastSeen, g.WithholdDisplayStage.None]);
        } else {
          this.withholdDisplayStage = g.WithholdDisplayStage.None;
        }
      } else {
        if ((0, l.canAssignChats)() && e) {
          n.push(g.WithholdDisplayStage.ChatAssignment);
        }
        if ((t == null ? undefined : t.isBusiness) === true) {
          n.push(g.WithholdDisplayStage.Business);
        }
        if ((0, m.receiveTextStatusForNewSurfacesEnabled)()) {
          M(this, [...n, g.WithholdDisplayStage.Info, g.WithholdDisplayStage.LastSeen, g.WithholdDisplayStage.None]);
        } else {
          M(this, [...n, g.WithholdDisplayStage.Info, g.WithholdDisplayStage.None]);
        }
      }
      this.forceDisplayTimer = self.setTimeout(() => {
        this.set({
          forceDisplay: true,
          forceDisplayTimer: undefined
        });
      }, 2000);
    } else {
      if (this.withholdDisplayTimer) {
        self.clearTimeout(this.withholdDisplayTimer);
        this.withholdDisplayTimer = undefined;
      }
      if (this.forceDisplayTimer) {
        self.clearTimeout(this.forceDisplayTimer);
        this.forceDisplayTimer = undefined;
      }
    }
  }
  subscribe() {
    return this.getCollection().find(this.id);
  }
  getCollection() {
    return require("./434989.js").PresenceCollection;
  }
}
function M(e, t) {
  if (t.length === 0) {
    return;
  }
  const [n, ...r] = t;
  e.set({
    withholdDisplayStage: n,
    withholdDisplayTimer: n === g.WithholdDisplayStage.None ? null : self.setTimeout(() => {
      M(e, r);
    }, n === g.WithholdDisplayStage.Business ? 5000 : 3000)
  });
}
T.Proxy = "presence";
T.idClass = h.default;
const A = (0, o.defineModel)(T);
exports.Presence = A;