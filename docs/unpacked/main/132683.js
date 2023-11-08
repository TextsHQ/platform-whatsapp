var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = require("../app/513592.js");
var l = require("../app/35234.js");
var i = a(require("./582789.js"));
var u = a(require("../app/247665.js"));
var s = require("../app/351053.js");
var c = require("../app/374660.js");
var d = require("../app/445729.js");
var f = require("../app/177938.js");
var p = require("../app/660666.js");
var m = a(require("../app/797137.js"));
var h = require("../app/714574.js");
var g = a(require("../app/932325.js"));
var E = require("../app/700846.js");
var v = a(require("../app/565754.js"));
var _ = require("../app/373070.js");
var y = require("../app/525119.js");
var C = require("../app/973981.js");
var b = require("../app/625786.js");
var M = require("../app/390737.js");
var S = require("../app/459857.js");
var T = a(require("../app/571256.js"));
var w = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = I(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var a = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e) {
    if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(a, o, l);
      } else {
        a[o] = e[o];
      }
    }
  }
  a.default = e;
  if (n) {
    n.set(e, a);
  }
  return a;
}(require("./218734.js"));
var A = require("../app/416371.js");
var P = require("../app/669050.js");
var O = require("../app/931019.js");
var k = require("../vendor/548360.js");
var D = a(require("../vendor/667294.js"));
function I(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (I = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function R(e) {
  return {
    callId: e.call_id,
    peerJid: e.peer_jid,
    initialPeerJid: e.initial_peer_jid,
    creatorJid: e.creator_jid,
    callerStatus: Boolean(e.caller_status),
    callActiveTime: {
      sec: e.call_active_time.sec,
      msec: e.call_active_time.msec
    },
    callDuration: e.call_duration,
    audioDuration: e.audio_duration,
    videoDuration: e.video_duration,
    canInviteNewParticipant: T.default.isGroupCallEnabled() && Boolean(e.can_invite_new_participant),
    canSwitchAudioVideo: Boolean(e.can_switch_audio_video),
    isGroupCall: Boolean(e.is_group_call),
    participantCount: e.participant_count,
    participants: e.participants.filter(e => e.jid != null).map(e => {
      const t = (0, P.createUserWid)(e.jid.user, e.jid.server);
      return {
        wid: t.toString(),
        userJid: t.toString({
          legacy: true
        }),
        deviceRawJid: e.device_raw_jid,
        isMuted: Boolean(e.is_muted),
        isSelf: Boolean(e.is_self),
        isInterrupted: Boolean(e.is_interrupted),
        isBackgrounded: Boolean(e.is_backgrounded),
        orderId: e.order_id,
        videoOrientation: e.video_orientation,
        videoRenderStarted: Boolean(e.video_render_started),
        videoState: e.video_state,
        state: e.state
      };
    }),
    videoCaptureStarted: Boolean(e.video_capture_started),
    videoPreviewStarted: Boolean(e.video_preview_started),
    videoEnabled: Boolean(e.video_enabled),
    videoEnabledAtCallStart: Boolean(e.video_enabled_at_call_start),
    rotateVideo: Boolean(e.rotate_video)
  };
}
function N(e) {
  const t = s.ChatCollection.get(e.id);
  return !u.default.activeCall && !e.isContactBlocked && !(0, c.isSuspendedGroup)(t) && C.Stream.displayInfo === C.StreamInfo.NORMAL;
}
function x(e) {
  if (e) {
    return u.default.get(e);
  }
}
function L() {
  return (L = (0, r.default)(function* (e, t, n, a, r) {
    let o;
    let i = (0, P.toUserWid)(e);
    yield (0, m.default)();
    if ((0, y.isMatFullyEnabled)() && !a) {
      i = (0, P.toUserWid)(yield (0, l.getMatChatIncomingMessage)(e));
    }
    o = r ? "silence" : a ? n ? "miss_group_video" : "miss_group" : n ? "miss_video" : "miss";
    const u = {
      id: new v.default({
        remote: i,
        fromMe: false,
        id: yield v.default.newId()
      }),
      type: _.MSG_TYPE.CALL_LOG,
      subtype: o,
      from: i,
      t: t != null ? t : Date.now() / 1000,
      to: (0, S.assertGetMe)()
    };
    (0, E.handleSingleMsg)(i, u, "missedCallLog");
  })).apply(this, arguments);
}
var j = {
  parseCallInfo: R,
  canStartCall: N,
  canStartVideoCall: function (e) {
    return N(e) && i.default.isVideoAvailable;
  },
  checkIfCanStartCall: function (e) {
    var t;
    if (!e.isGroup && !e.contact) {
      __LOG__(4, undefined, new Error())`voip:checkIfCanStartCall expected contact to be provided`;
      return false;
    }
    let n = true;
    if (C.Stream.displayInfo !== C.StreamInfo.NORMAL) {
      n = false;
      switch (C.Stream.displayInfo) {
        case C.StreamInfo.RESUMING:
        case C.StreamInfo.TIMEOUT:
          w.openModal(k.fbt._("Make sure your phone has an active Internet connection and try again.", null, {
            hk: "10CAgz"
          }), k.fbt._("Phone not connected to the Internet", null, {
            hk: "2P4wVF"
          }));
          break;
        case C.StreamInfo.OFFLINE:
        case C.StreamInfo.OPENING:
        case C.StreamInfo.CONNECTING:
        default:
          w.openModal(k.fbt._("Make sure your computer has an active Internet connection and try again.", null, {
            hk: "4vFCGY"
          }), k.fbt._("Computer not connected to the Internet", null, {
            hk: "1qVij3"
          }));
      }
    } else if (!e.isGroup && ((t = e.contact) === null || t === undefined ? undefined : t.isContactBlocked)) {
      n = false;
      w.openUnblockModal(e.contact);
    } else if (u.default.activeCall) {
      n = false;
      w.openModal(k.fbt._("You are already on a WhatsApp call", null, {
        hk: "UhTPZ"
      }));
    } else if (i.default.isMicrophoneAvailable) {
      if (i.default.isSpeakerAvailable) {
        if (e.isVideo && !i.default.isVideoAvailable) {
          __LOG__(2)`voip:checkIfCanStartCall false due to camera not available`;
          n = false;
          w.openModal(k.fbt._("WhatsApp needs a camera for video calls. Connect one to your computer.", null, {
            hk: "3SrC82"
          }), k.fbt._("WhatsApp could not find a connected camera", null, {
            hk: "roFZC"
          }));
        }
      } else {
        __LOG__(2)`voip:checkIfCanStartCall false due to speaker not available`;
        n = false;
        w.openModal(k.fbt._("WhatsApp needs an audio output device for calls. Connect one to your computer.", null, {
          hk: "1SpOZO"
        }), k.fbt._("WhatsApp could not find a connected audio device", null, {
          hk: "3OFX0i"
        }));
      }
    } else {
      __LOG__(2)`voip:checkIfCanStartCall false due to microphone not available`;
      n = false;
      w.openModal(k.fbt._("WhatsApp needs a microphone for calls. Connect one to your computer.", null, {
        hk: "3IJBYo"
      }), k.fbt._("WhatsApp could not find a connected microphone", null, {
        hk: "2BAjeQ"
      }));
    }
    return n;
  },
  getGroupCallParticipantNameString: function (e, t) {
    let n;
    n = e.length <= 2 ? e.map(e => t ? e.shortName : e.name).join(g.default.t(54)) : e[0].name + " " + g.default.t(52) + k.fbt._({
      "*": "{count} others",
      _1: "1 others"
    }, [k.fbt._plural(e.length - 1, "count")], {
      hk: "3Dq8bO"
    }).toString();
    return n;
  },
  callOfferNackToast: function (e, t, n, a) {
    const r = t.map(e => {
      const t = f.ContactCollection.get(e);
      if (t) {
        return t.shortName || t.name || (0, h.getDisplayName)(t);
      } else {
        return (0, O.widToFormattedUser)(e);
      }
    }).join(g.default.t(54));
    let o = null;
    switch (e) {
      case 401:
        o = k.fbt._("WhatsApp Calling is unavailable in your country.", null, {
          hk: "1yYZyr"
        });
        break;
      case 404:
        o = k.fbt._("Couldn't place call: {callee} is not registered on WhatsApp", [k.fbt._param("callee", r)], {
          hk: "1EIEFF"
        });
        break;
      case 405:
        o = k.fbt._("{callee} is in a country where WhatsApp Calling is unavailable", [k.fbt._param("callee", r)], {
          hk: "4DeWOO"
        });
        break;
      case 460:
      case 406:
        o = n ? k.fbt._("Couldn't place call: {callee} is unable to receive WhatsApp video calls at this time.", [k.fbt._param("callee", r)], {
          hk: "um6CR"
        }) : k.fbt._("Couldn't place call: {callee} is unable to receive WhatsApp calls.", [k.fbt._param("callee", r)], {
          hk: "2g9xUj"
        });
        break;
      case 426:
        o = n ? k.fbt._("Couldn't place call: {callee} is unable to receive WhatsApp video calls at this time.", [k.fbt._param("callee", r)], {
          hk: "um6CR"
        }) : k.fbt._("Couldn't place call: {callee} is unable to receive WhatsApp calls at this time.", [k.fbt._param("callee", r)], {
          hk: "4d5ZIN"
        });
        break;
      case 427:
        o = T.default.isGroupCallEnabled() ? k.fbt._({
          "*": "{callee} couldn't be added to the call, because they are using an old version of WhatsApp or an incompatible device.",
          _1: "{callee} couldn't be added to the call, because they are using an old version of WhatsApp or an incompatible device."
        }, [k.fbt._plural(t.length), k.fbt._param("callee", r)], {
          hk: "1OLCL5"
        }) : n ? k.fbt._("Call could not connect", null, {
          hk: "bfxCB"
        }) : k.fbt._("Call could not connect", null, {
          hk: "1PiAbN"
        });
        break;
      case 461:
        o = a ? k.fbt._("Couldn't place call: all recipients are using old versions of WhatsApp or incompatible devices.", null, {
          hk: "2WNZQK"
        }) : k.fbt._("Couldn't place call: {callee} is unable to receive WhatsApp calls.", [k.fbt._param("callee", r)], {
          hk: "1xPCKL"
        });
        break;
      default:
        o = n ? k.fbt._("Call could not connect", null, {
          hk: "bfxCB"
        }) : k.fbt._("Call could not connect", null, {
          hk: "1PiAbN"
        });
    }
    if (o) {
      M.ToastManager.open(D.default.createElement(b.Toast, {
        msg: o
      }));
    }
  },
  getCallFromCallId: x,
  updateCallWithCallInfo: function (e) {
    const t = e && x(e.call_id);
    if (e && t) {
      t.callInfo = R(e);
    }
  },
  isParticipantRequestingVideoUpgrade: function (e, t) {
    const n = x(e);
    return !!(n && n.callInfo && n.callInfo.participants.length) && !!n.callInfo.participants.find(e => e.isSelf === t && e.videoState === A.VideoState.VideoStateUpgradeRequest);
  },
  generateMissedCallLog: function () {
    return L.apply(this, arguments);
  },
  isVoiceCallEnabledForContactOrChat: function (e, t) {
    return !!d.Conn.isVoipInitialized && (t == null || !(t.isUser && !T.default.isVoiceCallEnabled() || t.isGroup && !T.default.isGroupCallEnabled())) && (e == null || !e.isEnterprise && !(0, o.getIsInternalNumber)(e.id.user));
  },
  isVideoCallEnabledForContact: function (e) {
    return !!d.Conn.isVoipInitialized && !!e && !e.isEnterprise && !(0, o.getIsInternalNumber)(e.id.user) && ((0, p.getIsUser)(e) && T.default.isVideoCallEnabled() || (0, p.getIsGroup)(e) && T.default.isGroupCallEnabled());
  }
};
exports.default = j;