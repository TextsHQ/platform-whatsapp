var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreChatsAndMessages = function () {
  return B.apply(this, arguments);
};
exports.restoreChatsAndMessagesChunked = F;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/81109.js"));
var l = require("../app/775593.js");
var i = require("../app/652204.js");
var u = require("../app/632157.js");
var s = require("../app/287461.js");
var c = require("../app/35234.js");
var d = require("../app/147793.js");
var f = require("../app/359987.js");
var p = require("../app/351053.js");
var m = a(require("../app/345371.js"));
var h = require("../app/557491.js");
var g = require("../app/944749.js");
var E = require("../app/659102.js");
var v = require("../app/907539.js");
var _ = require("../app/702018.js");
var y = require("../app/878685.js");
var C = require("../app/177594.js");
var b = a(require("../app/797137.js"));
var M = require("../app/535157.js");
var S = require("../app/61113.js");
var T = a(require("../app/565754.js"));
var w = a(require("../app/358533.js"));
var A = require("../app/73225.js");
var P = require("../app/899137.js");
var O = require("../app/316348.js");
var k = require("../app/555622.js");
var D = require("./362999.js");
var I = require("../app/61229.js");
var R = require("../app/851698.js");
var N = require("../app/724745.js");
var x = require("../app/209983.js");
var L = require("../app/669050.js");
function j(e, t) {
  return e.reduce((e, n) => {
    var a;
    const r = (0, d.hydrateWids)((0, o.default)((0, o.default)({}, n), {}, {
      pendingInitialLoading: true,
      isReadOnly: (a = n.isReadOnly) !== null && a !== undefined && a
    }));
    const l = t == null ? undefined : t[r.id.toString({
      legacy: true
    })];
    if (l != null) {
      r.previewT = l;
    }
    if (r.id.isNewsletter()) {
      e.newsletters.push(r);
    } else {
      e.chats.push(r);
    }
    return e;
  }, {
    chats: [],
    newsletters: []
  });
}
function B() {
  return (B = (0, r.default)(function* (e) {
    k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RestoreChatsAndMessages_start");
    yield E.DbEncKeyStore.waitForFinalDbMsgEncKey();
    return (0, M.initializeWithoutGKs)().then((0, r.default)(function* () {
      let t;
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RestoreChats_start");
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMGetChats_start");
      t = (0, C.draftMessageEnabled)() ? yield (0, c.getAllChatsDeserialized)() : yield (0, I.getChatTable)().all();
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMGetChats_end");
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMPopulateMatCache_start");
      (0, c.populateMatCacheBulk)(t);
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMPopulateMatCache_end");
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMFilterChats_start");
      const {
        chats: n,
        newsletters: a
      } = j(t, e);
      x.OfflineResumeReporter.logOfflineChatThreadCount(t.length);
      n.sort(m.default);
      p.ChatCollection.add(n, {
        merge: true
      });
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMFilterChats_end");
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RestoreChats_end");
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RestoreChatsAndMessagesFirstChunk_start");
      const r = (0, s.getABPropConfigValue)("web_init_chat_batch_size") || 100;
      k.QPL.markerAnnotate(O.QuickLogMarkerId.OFFLINE_RESUME, {
        int: {
          web_init_chat_batch_size: r
        }
      });
      if ((0, A.isNewsletterEnabled)()) {
        a.sort(m.default);
        if (!(w.default === null || w.default === undefined)) {
          w.default.add(a, {
            merge: true
          });
        }
        F(a, r);
      }
      const o = yield F(n, r);
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RestoreChatsAndMessagesFirstChunk_end");
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMUpdateDuplicatedLidThread_start");
      yield (0, N.updateDuplicatedLidThreadBulk)(t);
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMUpdateDuplicatedLidThread_end");
      return o;
    })).then(D.restoreBusinessInfo).then(() => {
      k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RestoreChatsAndMessages_end");
    }).catch(e => {
      __LOG__(4, undefined, new Error())`restoreChatsAndMessages: failed with error: ${e}`;
      throw e;
    });
  })).apply(this, arguments);
}
function F(e, t) {
  let n = Promise.resolve();
  const a = new i.PromiseQueue();
  for (let o = 0; o < e.length; o += t) {
    const i = e.slice(o, o + t);
    const u = function () {
      var e = (0, r.default)(function* () {
        self.performance.now();
        if (o === 0) {
          k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMChatMetadata_start");
        }
        const e = yield G(i);
        if (o === 0) {
          k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMChatMetadata_end");
        }
        if (o === 0) {
          k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMRestoreMessages_start");
        }
        yield U(e);
        if (o === 0) {
          k.QPL.markerPoint(O.QuickLogMarkerId.OFFLINE_RESUME, "RCMRestoreMessages_end");
        }
        const t = [];
        e.forEach(e => {
          var n;
          let {
            chat: a
          } = e;
          const r = (A.isNewsletterEnabled === null || A.isNewsletterEnabled === undefined ? undefined : (0, A.isNewsletterEnabled)()) ? (n = p.ChatCollection.get(a.id)) !== null && n !== undefined ? n : w.default === null || w.default === undefined ? undefined : w.default.get(a.id) : p.ChatCollection.get(a.id);
          if (r) {
            r.set({
              pendingInitialLoading: false
            });
            if (r.isGroup) {
              t.push(String(a.id));
            }
          }
        });
        yield (0, f.frontendSendAndReceive)("restoreGroupParticipantsForChats", {
          chatIds: t
        });
      });
      return function () {
        return e.apply(this, arguments);
      };
    }();
    if (o === 0) {
      n = a.enqueue(() => (0, P.createNonPersistedJob)("initialChatLoad", u, {
        priority: l.JOB_PRIORITY.SKIP
      }).waitUntilCompleted());
    } else {
      a.enqueue((0, r.default)(function* () {
        yield (0, b.default)();
        return (0, P.createNonPersistedJob)("initialChatLoad", u).waitUntilCompleted();
      }));
    }
  }
  return n;
}
function G(e) {
  return Promise.all(e.map(e => {
    const t = W(e);
    return (0, _.getKeyMsgsFromChatHistory)(e, t).then(n => {
      let {
        anchor: a,
        previewMsg: r,
        lastReceivedKey: l
      } = n;
      return {
        chat: (0, o.default)((0, o.default)({}, e), {}, {
          unreadMsgAnchorId: t ? a : undefined
        }),
        previewMsg: r,
        lastReceivedKey: l
      };
    });
  }));
}
function U(e) {
  const {
    tasks: t,
    lastMessageKeys: n
  } = function (e) {
    const t = [];
    const n = [];
    e.forEach(e => {
      let {
        chat: a,
        previewMsg: r,
        lastReceivedKey: o
      } = e;
      if (W(a) || r && r.id !== o) {
        self.performance.now();
        t.push(function () {
          return H.apply(this, arguments);
        }(a, r).then(() => {
          if (a.unreadMsgAnchorId) {
            const e = T.default.fromString(a.unreadMsgAnchorId);
            const t = S.MsgCollection.get(e);
            if (!t) {
              return void __LOG__(3)`Unread anchor message is not in message collection.`;
            }
            const n = p.ChatCollection.get((0, L.createWidFromWidLike)(a.id));
            if (n) {
              n.unreadMsgAnchor = t;
            }
          }
        }));
      } else {
        n.push(String(o));
      }
    });
    return {
      tasks: t,
      lastMessageKeys: n
    };
  }(e);
  t.push(function (e) {
    self.performance.now();
    return (0, R.getMessageTable)().bulkGet(e).then(function () {
      var e = (0, r.default)(function* (e) {
        yield Promise.all(e.map(e => {
          if (!e) {
            return Promise.resolve();
          }
          const t = (0, v.messageFromDbRow)(e, e => {
            e.invis = true;
          });
          return S.MsgCollection.processMultipleMessages(t.id.remote, [t], {
            pendingMsgsDone: false,
            resume: false,
            add: "last",
            isHistory: true
          }, "loadLastMessagesFromDb");
        }));
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()).catch(e => {
      __LOG__(4, undefined, new Error())`loadLastMessagesFromDB: failed with error: ${e}`;
      throw e;
    });
  }(n));
  return Promise.all(t);
}
function W(e) {
  return e.t != null && (0, u.happenedWithin)((0, u.castToUnixTime)(e.t), u.DAY_SECONDS) || e.pin != null && e.pin > 0;
}
function H() {
  return (H = (0, r.default)(function* (e, t) {
    if (!W(e) || e.unreadCount === 0) {
      return V(e, t);
    }
    if (e.unreadCount >= 20) {
      yield V(e, t);
      return Y(e);
    }
    __LOG__(2)`restoreMessagesForChat: restoring last ${e.unreadCount + 5} messages.`;
    const n = [];
    if (t) {
      const e = (0, v.messageFromDbRow)(t);
      const a = (0, g.getAddOnProviderForFutureproofMsg)(e);
      if (a == null ? undefined : a.canRenderInUi(e)) {
        n.push(t.id.toString());
      }
    }
    const a = yield (0, _.queryChatVisibleMessageHelper)(`${e.id}_/`, `${e.id}_g`, {
      reverse: true
    }, e.unreadCount + 5, n);
    yield S.MsgCollection.processMultipleMessages((0, L.createWidFromWidLike)(e.id), a.map(e => (0, v.messageFromDbRow)(e)).reverse(), {
      pendingMsgsDone: true,
      resume: false,
      add: "last",
      isHistory: true
    }, "restoreMessagesForChat");
  })).apply(this, arguments);
}
function V() {
  return q.apply(this, arguments);
}
function q() {
  return (q = (0, r.default)(function* (e, t) {
    let n;
    const a = [];
    if (t != null && t.internalId != null) {
      const r = t.internalId;
      const o = (0, v.messageFromDbRow)(t);
      const l = (0, g.getAddOnProviderForFutureproofMsg)(o);
      if (t && (l == null ? undefined : l.canRenderInUi(o))) {
        a.push(t.id.toString());
      }
      n = yield (0, _.queryChatVisibleMessageHelper)(r, `${e.id}_g`, {
        lowerInclusive: true
      }, undefined, a);
    } else {
      n = yield (0, _.queryChatVisibleMessageHelper)(`${e.id}_/`, `${e.id}_g`, {
        reverse: true
      }, 1);
    }
    __LOG__(2)`processPreviewMessageInChat: restoring ${n.length} message.`;
    S.MsgCollection.processMultipleMessages((0, L.createWidFromWidLike)(e.id), n.map(e => (0, v.messageFromDbRow)(e, e => {
      e.invis = true;
    })), {
      pendingMsgsDone: false,
      resume: false,
      add: "last",
      isHistory: true
    }, "processPreviewMessageInChat");
  })).apply(this, arguments);
}
function Y() {
  return z.apply(this, arguments);
}
function z() {
  return (z = (0, r.default)(function* (e) {
    if (!e.unreadMsgAnchorId) {
      __LOG__(3)`unreadMsgAnchorId is not defined`;
      return Promise.resolve();
    }
    yield (0, R.getMessageTable)().equals(["id"], e.unreadMsgAnchorId).then(t => {
      if (t.length === 0) {
        return void __LOG__(3)`Unread anchor message does not exist in message table`;
      }
      const n = (0, y.getInChatMsgId)(t[0].internalId || "");
      const a = K(e, n);
      const r = Q(e, n);
      return Promise.all([a, r]).then(e => {
        let [t, n] = e;
        return [...t, ...n];
      }).then(t => {
        if (t.length - 5 < 0) {
          return;
        }
        const n = t[t.length - 5].id;
        const a = t.map(e => (0, v.messageFromDbRow)(e, e => {
          e.invis = true;
        }));
        return S.MsgCollection.processMultipleMessages((0, L.createWidFromWidLike)(e.id), a, {
          pendingMsgsDone: true,
          resume: false,
          add: "unread",
          isHistory: true,
          firstUnreadKey: T.default.fromString(n)
        }, "processUnreadMessage", new h.ChatMsgsCollection());
      });
    });
  })).apply(this, arguments);
}
function K(e, t) {
  const n = (0, y.beginningOfChat)((0, L.createWid)(e.id));
  const a = (0, y.craftInternalId)(e.id, t);
  return (0, _.queryChatVisibleMessageHelper)(n, a, (0, o.default)((0, o.default)({}, {
    lowerInclusive: true,
    upperInclusive: false
  }), {}, {
    reverse: true
  }), 5).then(e => e.reverse());
}
function Q(e, t) {
  return (0, _.queryChatVisibleMessageHelper)((0, y.craftInternalId)(e.id, t), (0, y.endOfChat)((0, L.createWid)(e.id)), {
    lowerInclusive: true,
    upperInclusive: false
  }, 5);
}