var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgCollectionImpl = exports.MsgCollection = exports.MEDIA_QUERY_LIMIT = undefined;
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = r(require("./670983.js"));
var s = require("./423660.js");
var l = require("./632157.js");
var u = require("./724976.js");
var c = require("./402994.js");
var d = require("./984330.js");
var p = require("./392125.js");
var f = require("./169571.js");
var _ = require("./292220.js");
var g = r(require("./799132.js"));
var m = require("./163755.js");
var h = require("./969104.js");
var y = require("./420213.js");
var E = r(require("./382159.js"));
var S = require("./678794.js");
var v = require("./787742.js");
r(require("./565754.js"));
var T = require("./772358.js");
var M = require("./922931.js");
var A = require("./373070.js");
var b = require("./115861.js");
var C = require("./799663.js");
var P = require("./533494.js");
var O = require("./592978.js");
var I = r(require("./519742.js"));
var R = require("./459857.js");
var N = r(require("./124928.js"));
var D = r(require("./556869.js"));
exports.MEDIA_QUERY_LIMIT = 50;
class w extends p.BaseCollection {
  constructor() {
    var e;
    super();
    e = this;
    this.pendingAdd = {};
    this.ftsCache = {};
    this.productListMessagesPrefetchChain = Promise.resolve([]);
    this._editKeyByParentKey = new Map();
    this._parentKeyByEditKey = new Map();
    this._encryptedData = null;
    this.findQueryImpl = function () {
      var t = (0, a.default)(function* (t) {
        const r = e;
        let i;
        switch (t.direction) {
          case "before":
          case "after":
            i = t.direction;
            break;
          default:
            i = "before";
        }
        const a = {
          add: i,
          isHistory: true
        };
        let o = yield (0, y.msgFindQuery)(i, t);
        if (o.status >= 400) {
          __LOG__(3)`model:Msg:findQuery error ${o.status}`;
          return Promise.reject(o.status);
        }
        const s = r.get(t);
        if (N.default.isNewsletter(t.remote) && s != null) {
          o = yield (0, b.fillMsgHistoryGaps)(t.remote, i === "before" ? o.concat((0, S.msgDataFromMsgModel)(s)) : [(0, S.msgDataFromMsgModel)(s)].concat(o));
        }
        o.forEach(function (e) {
          e.invis = true;
        });
        __LOG__(2)`model:Msg:findQuery:got:${o.length}:${t.direction}`;
        return r.processMultipleMessages(t.remote, o, a, "msgCollectionFindQuery", function () {
          const e = r.get(t);
          if (e != null) {
            return e.msgChunk;
          }
          const i = require("./351053.js").ChatCollection.get(t.remote);
          if (i != null) {
            return i.msgs;
          } else {
            return undefined;
          }
        });
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
    this.listenTo(this, "remove", this.removeFromCollection);
  }
  removeFromCollection(e) {
    const t = (0, m.getMaybeChat)(e);
    if (!(t == null)) {
      t.removeFromCollection(e);
    }
  }
  add(e, t) {
    const n = (Array.isArray(e) ? e : [e]).filter(e => {
      if (e.ephemeralDuration == null || e.ephemeralDuration === 0) {
        return true;
      }
      return !new T.Msg(e).isExpiredAndNotKept();
    });
    this._maybeHandleCarouselCards(n, t);
    const r = super.add(n, t);
    this._syncTemplateButtonClickState(r);
    this._syncQuickReplyButtonClickState(r);
    this._prefetchProductListMessages(r);
    this.processEditedMessages(r);
    return r;
  }
  _prefetchProductListMessages(e) {
    const t = require("./466077.js").ProductMessageListCollection;
    this.productListMessagesPrefetchChain = e.filter(e => {
      var t;
      var n;
      return e != null && e.isNewMsg && e.type === A.MSG_TYPE.LIST && ((t = e.list) === null || t === undefined ? undefined : t.listType) === P.Message$ListMessage$ListType.PRODUCT_LIST && ((n = e.list) === null || n === undefined ? undefined : n.productListInfo) != null;
    }).reduce((e, n) => {
      var r;
      var i;
      if (n == null) {
        return e;
      }
      const a = n.requiresDirectConnection;
      const o = n.isForwarded ? n.businessOwnerJid : n.from.toString({
        legacy: true
      });
      const s = (r = n.list) === null || r === undefined ? undefined : r.productListInfo;
      if (o == null || s == null) {
        return e;
      }
      const l = t.getOrAdd(n.id, s, a, o, (i = n.list) === null || i === undefined ? undefined : i.title);
      if (l == null || l.productCollection.getModelsArray().length !== 0 || l.isFetching()) {
        return e;
      } else {
        return e.then(() => t.update(l.id));
      }
    }, this.productListMessagesPrefetchChain);
  }
  _syncTemplateButtonClickState(e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      if (n) {
        if (n.type === A.MSG_TYPE.TEMPLATE_BUTTON_REPLY && n.selectedIndex != null && (0, v.getSender)(n).equals((0, R.getMaybeMeUser)())) {
          const e = (0, m.getChat)(n);
          if (e.msgUnsyncedButtonReplyMsgs == null) {
            e.msgUnsyncedButtonReplyMsgs = new E.default();
          }
          const {
            msgUnsyncedButtonReplyMsgs: t
          } = e;
          const r = (0, O.getQuotedMsgObj)(n);
          if (!r) {
            continue;
          }
          let i = t.get(r.id);
          if (!i) {
            t.add({
              id: r.id,
              unsyncedButtonReplies: new I.default()
            });
            i = t.get(r.id);
          }
          const {
            unsyncedButtonReplies: a
          } = (0, o.default)(i, "buttonReplyMsg");
          a.add(n);
          const s = this.get(r.id);
          if (s == null ? undefined : s.buttons) {
            const e = s.buttons.get(`${(0, o.default)(n.selectedIndex, "msg.selectedIndex")}`);
            if (e) {
              e.selected = true;
            }
            a.remove(n);
          }
        } else if (n.isFromTemplate && n.buttons) {
          const e = (0, m.getChat)(n);
          const {
            msgUnsyncedButtonReplyMsgs: t
          } = e;
          if (t == null) {
            continue;
          }
          const r = t.get(n.id);
          if (r) {
            r.unsyncedButtonReplies.forEach(e => {
              const t = (0, o.default)(n.buttons, "msg.buttons").get(`${(0, o.default)(e.selectedIndex, "replyMsg.selectedIndex")}`);
              if (t) {
                t.selected = true;
              }
            });
            r.unsyncedButtonReplies.delete();
          }
        }
      }
    }
  }
  _syncQuickReplyButtonClickState(e) {
    for (let t = 0; t < e.length; t++) {
      const n = e[t];
      if (n) {
        if (n.type === A.MSG_TYPE.BUTTONS_RESPONSE && n.selectedButtonId != null && (0, v.getSender)(n).equals((0, R.getMaybeMeUser)())) {
          const e = (0, O.getQuotedMsgObj)(n);
          if (!e) {
            continue;
          }
          const t = this.get(e.id);
          if (t == null ? undefined : t.replyButtons) {
            const e = t.replyButtons.get(n.selectedButtonId);
            if (e) {
              e.selected = true;
            }
          }
        } else if (n.isDynamicReplyButtonsMsg && n.replyButtons && n.replyButtons.every(e => !e.selected) && (0, m.getChat)(n)) {
          const e = Math.max(0, (0, m.getChat)(n).msgs.length - 1000);
          (0, m.getChat)(n).msgs.getModelsArray().slice(e).filter(e => {
            var t;
            return e.type === A.MSG_TYPE.BUTTONS_RESPONSE && e.selectedButtonId != null && (0, v.getSender)(e).equals((0, R.getMaybeMeUser)()) && ((t = (0, O.getQuotedMsgObj)(e)) === null || t === undefined ? undefined : t.id.toString()) === n.id.toString();
          }).map(e => {
            let {
              selectedButtonId: t
            } = e;
            return t;
          }).forEach(e => {
            var t;
            const r = (t = n.replyButtons) === null || t === undefined ? undefined : t.get(e);
            if (r != null) {
              r.selected = true;
            }
          });
        }
      }
    }
  }
  _maybeHandleCarouselCards(e, t) {
    for (const n of e) {
      if (n instanceof T.Msg && n.carouselCards != null) {
        this.add(n.carouselCards.slice(), t);
      }
    }
  }
  getStarred(e, t, n) {
    var r = this;
    return (0, a.default)(function* () {
      const i = {
        count: typeof t != "number" || isNaN(t) ? _.PAGE_SIZE : t,
        chat: e || undefined,
        remote: n == null ? undefined : n.remote,
        id: n == null ? undefined : n.id,
        fromMe: n == null ? undefined : n.fromMe,
        participant: n == null ? undefined : n.participant
      };
      const a = yield (0, y.msgFindQuery)("star", i);
      const o = a.status;
      if (a.status >= 400) {
        if (o === 499) {
          __LOG__(2)`model:Msg:getStarred error 499 (unimplemented)`;
        } else {
          __LOG__(3)`model:Msg:getStarred error ${o}`;
        }
        return Promise.reject(o);
      } else {
        return r.processMultipleMessages(undefined, a, {
          add: "search"
        }, "msgCollectionGetStarred");
      }
    })();
  }
  getMessagesById(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield (0, y.getMsgsByMsgKey)(e);
      return (0, s.promiseProps)({
        messages: t.processMultipleMessages(undefined, n, {
          add: "search"
        }, "msgCollectionGetMessagesById"),
        eof: true,
        canceled: false
      });
    })();
  }
  hydrateOrGetMessages(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = e.filter(e => !t.get(e));
      if (n.length > 0) {
        const {
          messages: e
        } = yield t.getMessagesById(n);
        if (e.length !== n.length) {
          throw new p.CollectionSilentQueryError("No message found for one or more ids");
        }
      }
      return e.map(e => (0, o.default)(t.get(e), "_this4.get(id)"));
    })();
  }
  queryVcard(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = yield (0, y.queryVcard)(e);
      return t.processMultipleMessages(undefined, n, {
        add: "search"
      }, "msgCollectionQueryVCard");
    })();
  }
  incrementalStarredUpdate(e) {
    return this.processMultipleMessages(undefined, e, {
      add: "search"
    }, "msgCollectionIncrementalStarredUpdate");
  }
  search(e) {
    let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let n = arguments.length > 2 ? arguments[2] : undefined;
    let r = arguments.length > 3 ? arguments[3] : undefined;
    let i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    const a = `${e}__${i.label || i.kind && i.kind || ""}`;
    if (t === 1 && !r) {
      const o = this.ftsCache[a];
      if (o) {
        return o;
      }
      const s = this._search(e, t, n, r, i.label, i.kind);
      this.ftsCache[a] = s;
      const l = () => {
        this.ftsCache[a] = null;
      };
      self.setTimeout(l, h.FTS_TTL);
      s.catch(l);
      return s;
    }
    return this._search(e, t, n, r, i.label, i.kind);
  }
  _search(e, t, n, r, i, o) {
    var l = this;
    return (0, a.default)(function* () {
      const a = {
        searchTerm: e,
        page: (0, u.isNumber)(t) && t !== 0 ? t : 1,
        count: (0, u.isNumber)(n) && n !== 0 ? n : _.PAGE_SIZE,
        remote: r,
        tagToCancel: r ? l.pendingSearchTag : undefined,
        label: i,
        kind: o
      };
      const c = yield (0, y.msgFindQuery)("search", a);
      if (a.tagToCancel === l.pendingSearchTag) {
        l.pendingSearchTag = undefined;
      }
      if (c.status === 499) {
        return (0, s.promiseProps)({
          messages: Promise.resolve([]),
          eof: false,
          canceled: true
        });
      }
      if (c.status === 404) {
        return Promise.reject(new d.E404());
      }
      if (c.status >= 400) {
        __LOG__(3)`model:Msg:search error ${c.status}`;
        return Promise.reject(new d.ServerStatusCodeError(c.status, "failed to find a msg during fts"));
      }
      const p = Array.isArray(c) ? c : c.messages;
      const f = !!Array.isArray(c) || c.eof;
      return (0, s.promiseProps)({
        messages: l.processMultipleMessages(undefined, p, {
          add: "search"
        }, "msgCollectionSearch"),
        eof: f,
        canceled: false
      });
    })();
  }
  queryMedia(e, t, n, r, i) {
    var o = this;
    return (0, a.default)(function* () {
      const a = {
        remote: e,
        count: (0, u.isNumber)(t) && t !== 0 ? t : _.PAGE_SIZE,
        id: r == null ? undefined : r.id,
        fromMe: r == null ? undefined : r.fromMe,
        participant: r == null ? undefined : r.participant,
        direction: n || "before",
        media: i
      };
      const l = yield (0, y.msgFindQuery)("media", a);
      if (l.status >= 400) {
        __LOG__(3)`model:Msg:media error ${l.status}`;
        if (l.status === 404) {
          return Promise.reject(new d.E404());
        } else {
          return Promise.reject(new d.ServerStatusCodeError(l.status, "failed to find a msg during media query"));
        }
      } else if (i) {
        return o.processMultipleMessages(undefined, l, {
          add: "search"
        }, "msgCollectionQueryMedia");
      } else {
        return (0, s.promiseProps)({
          docCount: l.docCount,
          linkCount: l.linkCount,
          mediaCount: l.mediaCount,
          messages: o.processMultipleMessages(undefined, l.messages, {
            add: "search"
          }, "msgCollectionQueryMedia")
        });
      }
    })();
  }
  getContext(e, t) {
    var n = this;
    return (0, a.default)(function* () {
      const r = n.get(e);
      const i = N.default.isNewsletter(e.remote);
      if (r && !r.fromQuotedMsg) {
        return Promise.all([(0, y.msgFindQuery)("before", e), (0, y.msgFindQuery)("after", e)]).then(function () {
          var o = (0, a.default)(function* (a) {
            let [o, s] = a;
            if (!(Array.isArray(o) && Array.isArray(s) || i)) {
              __LOG__(3)`model:msg:getContext fetch error`;
              throw o.status || s.status;
            }
            const l = Array.isArray(o) ? o : [];
            const u = Array.isArray(s) ? s : [];
            const {
              serverId: c
            } = r;
            r.search = false;
            return Promise.all([n.processMultipleMessages(e.remote, i && c != null ? yield (0, b.fillMsgHistoryGaps)(e.remote, l.concat((0, S.msgDataFromMsgModel)(r)), {
              start: c - e.count,
              end: c
            }) : l, {
              add: "before",
              isHistory: true
            }, "msgCollectionGetContext", t), n.processMultipleMessages(e.remote, i && c != null ? yield (0, b.fillMsgHistoryGaps)(e.remote, [(0, S.msgDataFromMsgModel)(r)].concat(u), {
              start: c,
              end: c + e.count
            }) : u, {
              add: "after",
              isHistory: true
            }, "msgCollectionGetContext", t)]);
          });
          return function () {
            return o.apply(this, arguments);
          };
        }());
      }
      const s = {
        add: "after",
        isHistory: true
      };
      return (0, y.msgFindQuery)("after", e).then(function () {
        var r = (0, a.default)(function* (r) {
          if (!Array.isArray(r)) {
            __LOG__(3)`model:msg:getContext:after fetch error`;
            throw r.status;
          }
          if (N.default.isStatusV3(r[0].id.remote)) {
            throw (0, D.default)("statusV3, stop querying before the msg");
          }
          const {
            serverId: a
          } = e;
          return n.processMultipleMessages(e.remote, i && a != null ? yield (0, b.fillMsgHistoryGaps)(e.remote, r, {
            start: a,
            end: a + e.count
          }) : r, s, "msgCollectionFindQuery", t);
        });
        return function () {
          return r.apply(this, arguments);
        };
      }()).then(t => {
        const r = (0, o.default)(t[0], "after[0]");
        const s = r.id.clone();
        s.count = e.count + 1;
        const l = {
          add: "before",
          isHistory: true
        };
        return Promise.all([(0, y.msgFindQuery)("before", s).then(function () {
          var t = (0, a.default)(function* (t) {
            if (!Array.isArray(t)) {
              __LOG__(3)`model:msg:getContext:before fetch error`;
              throw t.status;
            }
            const a = t[t.length - 1];
            a.fromQuotedMsg = false;
            if (!a.id.equals(e)) {
              __LOG__(3)`model:msg:getContext:before ctx message mismatch`;
              throw 405;
            }
            const {
              serverId: o
            } = r;
            return n.processMultipleMessages(e.remote, i && o != null ? yield (0, b.fillMsgHistoryGaps)(e.remote, t, {
              start: o,
              end: o - e.count
            }) : t, l, "msgCollectionFindQuery", function () {
              return r.msgChunk;
            });
          });
          return function () {
            return t.apply(this, arguments);
          };
        }()), Promise.resolve(t)]);
      });
    })();
  }
  hasSynced() {
    return (0, g.default)(this, _.COLLECTION_HAS_SYNCED);
  }
  processMultipleMessages(e, t, n, r, i) {
    let a = !(arguments.length > 5 && arguments[5] !== undefined) || arguments[5];
    const o = () => (0, C._processMultipleMessages)(e, t, n, r, i);
    if (e) {
      let t;
      const n = this.pendingAdd[e];
      t = n && a ? n.then(o) : o();
      t.finally(() => {
        if (e && this.pendingAdd[e] === t) {
          this.pendingAdd[e] = null;
        }
      }).catch(() => {});
      return this.pendingAdd[e] = t;
    }
    return o();
  }
  hasUnsentMessages() {
    return this.some(e => e.ack === c.ACK.CLOCK && e.local && (0, v.getIsSentByMe)(e));
  }
  getByEditMsgKey(e) {
    const t = this._parentKeyByEditKey.get(e.toString());
    return t && this.get(t);
  }
  processEditedMessages(e) {
    e.forEach(e => {
      if (!e || !(0, v.getIsEdited)(e)) {
        return;
      }
      const t = this._editKeyByParentKey.get(e.id.toString());
      if (t != null) {
        this._parentKeyByEditKey.delete(t);
      }
      const n = e.latestEditMsgKey;
      if (n) {
        this._editKeyByParentKey.set(e.id.toString(), n.toString());
        this._parentKeyByEditKey.set(n.toString(), e.id);
      }
    });
  }
  addInitialBotTypingIndicatorToChat(e, t) {
    var r = this;
    return (0, a.default)(function* () {
      var a;
      const o = require("./351053.js").ChatCollection.get(e);
      if (!o || !(o == null ? undefined : o.id.isBot()) && !((a = o.contact.businessProfile) === null || a === undefined ? undefined : a.isBizBot3p)) {
        return;
      }
      if (o.botInitialTypingIndicatorMsgId != null) {
        const e = r.get(o.botInitialTypingIndicatorMsgId);
        if (e == null) {
          return;
        }
        if (!(e == null)) {
          e.delete({
            skipUpdatingSortTime: true
          });
        }
      }
      o.set({
        botInitialTypingIndicatorMsgId: t
      }, {
        silent: true
      });
      const s = {
        id: t,
        t: (0, l.unixTime)(),
        from: e,
        to: (0, R.getMaybeMeUser)(),
        type: "chat",
        subtype: f.BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE,
        body: ""
      };
      r.processMultipleMessages(e, [(0, i.default)((0, i.default)({}, s), {}, {
        recvFresh: true,
        isNewMsg: true
      })], {
        add: "after",
        isHistory: false
      }, "createChatOnNewMsg", null, true);
    })();
  }
  encrpytAndClearModels() {
    var e = this;
    return (0, a.default)(function* () {
      const t = e._models.map(e => (0, M.encryptDataInMsgModel)(e));
      yield Promise.all(t);
    })();
  }
  decryptAndSetModels(e) {
    var t = this;
    return (0, a.default)(function* () {
      const n = t._models.map(t => (0, M.decryptDataInMsgModel)(t, e));
      yield Promise.all(n);
    })();
  }
}
exports.MsgCollectionImpl = w;
w.model = T.Msg;
const L = new w();
exports.MsgCollection = L;