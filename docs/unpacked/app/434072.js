var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatThreadLoggingEventStoreImpl = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./685639.js");
var s = require("./35234.js");
var l = require("./517164.js");
var u = require("./12643.js");
var c = require("./37237.js");
var d = require("./742988.js");
var p = require("./244612.js");
var f = require("./257147.js");
var _ = require("./658233.js");
var g = require("./644034.js");
var m = require("./185212.js");
var h = require("./862159.js");
var y = require("./153194.js");
var E = require("./918475.js");
var S = require("./459857.js");
var v = r(require("./124928.js"));
var T = require("./669050.js");
exports.ChatThreadLoggingEventStoreImpl = class {
  constructor(e, t) {
    this.metadataStore = e;
    this._cachedChanges = new Map();
    this._updateIntervalSeconds = t != null ? t : 5;
    this._shiftTimer = new o.ShiftTimer(() => {
      this._flush();
    });
  }
  handleMessages(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield t.metadataStore.getOffset();
      if (n == null) {
        return void __LOG__(2)`ChatThreadLoggingEventStoreImpl: handleMessages: offset unset.`;
      }
      const r = yield t.metadataStore.getLastUploadedStartTs();
      __LOG__(2)`ChatThreadLoggingEventStoreImpl: lastUploadedStartTs=${r}`;
      e.forEach(e => {
        if (!(0, f.shouldUpdateChatEvent)(n, e.ts, r)) {
          return;
        }
        const a = (0, f.computeStartTs)(n, e.ts);
        const o = e.chatId.toString({
          legacy: true
        });
        const s = o + "_" + String(a);
        const l = t._cachedChanges.get(s);
        const u = l != null ? l : (0, i.default)((0, i.default)((0, i.default)({}, p.COUNT_FIELDS), d.FLAG_FIELDS), {}, {
          startTs: a,
          chatId: o,
          addMsgsSent: 0,
          addMsgsReceived: 0,
          addMsgsRead: 0,
          addViewOnceMsgsSent: 0,
          addViewOnceMsgsReceived: 0,
          addViewOnceMsgsOpened: 0,
          addCallOffersSent: 0,
          addCallOffersReceived: 0,
          addTotalCallDuration: 0,
          addCommerceMsgsSent: 0,
          addCommerceMsgsReceived: 0,
          addPdpInquiriesSent: 0,
          addReactionsSent: 0,
          addReactionsReceived: 0,
          addForwardMessagesSent: 0,
          addForwardMessagesReceived: 0,
          addEditedMsgsSent: 0,
          addBotMessagesSent: 0,
          addBotMessagesReceived: 0,
          addBotMessagesEdited: 0
        });
        if (l == null) {
          t._cachedChanges.set(s, u);
        }
        const c = (0, p.toMaybeCountActionType)(e.activityType);
        const _ = (0, d.toMaybeBoolFlagActionType)(e.activityType);
        if (c != null) {
          u[c] += 1;
        } else if (_ != null) {
          u[_] = e.boolValue === undefined || e.boolValue;
        } else {
          switch (e.activityType) {
            case "msgSend":
              u.addMsgsSent += 1;
              if (e.isViewOnce) {
                u.addViewOnceMsgsSent += 1;
              }
              if (e.isCommerceMessage === true) {
                u.addCommerceMsgsSent += 1;
              }
              if (e.isPdpInquiry === true) {
                u.addPdpInquiriesSent += 1;
              }
              if (e.isReply) {
                u.repliesSent += 1;
              }
              if (e.isReaction) {
                u.addReactionsSent += 1;
              }
              if (e.isForwarded) {
                u.addForwardMessagesSent += 1;
              }
              if (e.isEdit) {
                u.addEditedMsgsSent += 1;
              }
              if (e.isBot) {
                u.addBotMessagesSent += 1;
              }
              break;
            case "msgReceive":
              u.addMsgsReceived += 1;
              if (e.isViewOnce) {
                u.addViewOnceMsgsReceived += 1;
              }
              if (e.isCommerceMessage === true) {
                u.addCommerceMsgsReceived += 1;
              }
              if (e.isReaction) {
                u.addReactionsReceived += 1;
              }
              if (e.isForwarded) {
                u.addForwardMessagesReceived += 1;
              }
              if (e.isBot) {
                if (e.isEdit) {
                  u.addBotMessagesEdited += 1;
                } else {
                  u.addBotMessagesReceived += 1;
                }
              }
              break;
            case "msgRead":
              u.addMsgsRead += e.readCount;
              break;
            case "viewOnceOpen":
              u.addViewOnceMsgsOpened += 1;
              break;
            case "voipCall":
              if (e.outgoing) {
                u.addCallOffersSent += 1;
              } else {
                u.addCallOffersReceived += 1;
              }
              u.addTotalCallDuration += e.durationInSeconds;
              break;
            default:
              __LOG__(3)`Passed event store info type not valid: ${e.activityType}`;
          }
        }
      });
      yield t._setFlushIfNecessary();
    })();
  }
  _setFlushIfNecessary() {
    this._shiftTimer.onOrBefore(this._updateIntervalSeconds * 1000);
  }
  _flush() {
    var e = this;
    return (0, a.default)(function* () {
      const t = Array.from(e._cachedChanges.values());
      e._cachedChanges.clear();
      yield (0, l.createOrUpdateChatEvents)(t);
    })();
  }
  _populateEvents(e) {
    return (0, a.default)(function* () {
      const t = (0, s.bulkGetChats)(e.map(e => (0, T.createWid)(e.chatId)));
      const n = t.then(e => function (e) {
        return Promise.all(e.map(function () {
          var e = (0, a.default)(function* (e) {
            if (e == null) {
              return 0;
            } else {
              return (yield (0, g.getStarredMessagesForChat)((0, T.createWid)(e.id), Number.MAX_SAFE_INTEGER)).length;
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        }()));
      }(e));
      const r = t.then(e => function (e) {
        return (0, _.bulkGetIsContactABusiness)(e.map(e => e == null ? null : (0, T.createWid)(e.id)));
      }(e));
      const o = t.then(e => function (e) {
        return (0, m.bulkGetGroupMetadata)(e.map(e => e == null ? null : (0, T.createWid)(e.id)));
      }(e));
      const l = t.then(e => function (e) {
        return (0, y.getBusinessProfileTable)().bulkGet(e.map(e => e == null ? "" : (0, T.createWid)(e.id).toString()));
      }(e));
      const d = t.then(function (e) {
        return (0, E.getParticipantTable)().bulkGet(e.map(e => e == null ? "" : (0, T.createWid)(e.id).toString()));
      });
      const [p, M, A, b, C, P] = yield Promise.all([t, n, r, o, d, l]);
      return Promise.all(e.map(function () {
        var e = (0, a.default)(function* (e, t) {
          var n;
          var r;
          var a;
          var o;
          var s;
          var l;
          var d;
          var _;
          const g = p[t];
          const m = v.default.isGroup(e.chatId);
          const y = b[t];
          const E = c.BizBotAutomatedType.cast((n = P[t]) === null || n === undefined ? undefined : n.automatedType);
          const O = m ? {
            isAGroup: m,
            groupSize: (r = (a = C[t]) === null || a === undefined || (o = a.participants) === null || o === undefined ? undefined : o.length) !== null && r !== undefined ? r : 1,
            groupType: y == null ? h.GroupType.DEFAULT : (0, h.getGroupTypeFromGroupMetadata)(y)
          } : {
            isAGroup: m,
            isAContact: yield (0, u.isAddressBookContact)(e.chatId),
            automatedType: E
          };
          const I = (0, T.createWid)(e.chatId);
          const R = ((s = g == null ? undefined : g.pin) !== null && s !== undefined ? s : 0) > 0;
          const N = (l = g == null ? undefined : g.archive) !== null && l !== undefined && l;
          const D = M[t];
          const w = (d = g == null ? undefined : g.unreadCount) !== null && d !== undefined ? d : 0;
          const L = ((_ = g == null ? undefined : g.muteExpiration) !== null && _ !== undefined ? _ : 0) !== 0;
          const k = A[t] ? yield (0, f.getBizCatalogType)(I) : null;
          const G = v.default.isLid(e.chatId) || (y == null ? undefined : y.defaultSubgroup) === true && (y == null ? undefined : y.incognito) === true;
          const U = (0, S.isMeAccount)(I);
          const x = I.isBot();
          const B = (0, f.getWamDisappearingModeInitiatedByMe)(g == null ? undefined : g.disappearingModeInitiatedByMe);
          const F = (0, f.getWamDisappearingModeTrigger)(g == null ? undefined : g.disappearingModeTrigger);
          return (0, i.default)((0, i.default)({}, e), {}, {
            isPinned: R,
            isArchived: N,
            contactInfo: O,
            messagesStarred: D,
            messagesUnread: w,
            isMuted: L,
            bizCatalogType: k,
            isPnhEnabledChat: G,
            isMessageYourself: U,
            isUserAgent: x,
            ephemeralityInitiator: B,
            ephemeralityTriggerAction: F
          });
        });
        return function () {
          return e.apply(this, arguments);
        };
      }()));
    })();
  }
  getEvent(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      if (n._cachedChanges.size > 0) {
        yield n._flush();
      }
      const r = yield (0, l.getChatEvent)(e, t);
      if (r == null) {
        return null;
      } else {
        return (yield n._populateEvents([r]))[0];
      }
    })();
  }
  getBeforeInclusive(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (t._cachedChanges.size > 0) {
        yield t._flush();
      }
      return t._populateEvents(yield (0, l.getBeforeInclusive)(e));
    })();
  }
  deleteBeforeInclusive(e) {
    var t = this;
    return (0, a.default)(function* () {
      if (t._cachedChanges.size > 0) {
        yield t._flush();
      }
      return (0, l.deleteBeforeInclusive)(e);
    })();
  }
};