var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findAndDeleteAssociatedPluginMsg = E;
exports.processRevokeMsgs = function () {
  return y.apply(this, arguments);
};
var i = r(require("../vendor/348926.js"));
var a = require("./35234.js");
var o = require("./583464.js");
var s = require("./359987.js");
var l = require("./354458.js");
var u = require("./271368.js");
var c = require("./66055.js");
var d = require("./732011.js");
var p = require("./787742.js");
var f = r(require("./565754.js"));
var _ = require("./373070.js");
var g = require("./851698.js");
var m = r(require("./124928.js"));
var h = require("./669050.js");
function y() {
  return (y = (0, i.default)(function* (e) {
    const t = [];
    const n = [];
    const r = [];
    const s = [];
    const y = new Map();
    const S = [];
    const v = [];
    const T = [];
    const M = e.filter(e => {
      const {
        revokeMsgKey: t,
        newMsgKey: n,
        subtype: r
      } = e;
      let i = true;
      if (r === "admin_revoke") {
        if (m.default.isGroup(t.remote) || m.default.isNewsletter(t.remote)) {
          if (!m.default.equals(t.remote, n.remote)) {
            i = false;
            __LOG__(2)`processRevokeMsgs: ${String(t)} has not been revoked`;
            __LOG__(3, undefined, undefined, true)`processRevokeMsgs: admin revoke came for the different group than the original message was in`;
            SEND_LOGS("process-admin-revoke-message");
          }
        } else {
          i = false;
          __LOG__(2)`processRevokeMsgs: ${String(t)} has not been revoked`;
          __LOG__(3, undefined, undefined, true)`processRevokeMsgs: admin revoke has to be sent to a group or newsletter chat`;
          SEND_LOGS("process-admin-revoke-message");
        }
      } else {
        i = m.default.equals(t.remote, n.remote) && m.default.equals(...(0, c.normalizeUserWidsToLidOrPn)(t.participant, n.participant)) && t.fromMe === n.fromMe;
        if (!i) {
          __LOG__(2)`processRevokeMsgs: invalid revoke request ${String(t)}, ${String(n)}`;
          if ((0, l.isBotReceiveEnabled)()) {
            __LOG__(2)`processRevokeMsgs: sending invalid revoke for secondary validation as bot invoker revoke`;
            S.push(e);
          }
        }
      }
      return i;
    });
    if ((0, l.isBotReceiveEnabled)() && S.length > 0) {
      try {
        const e = S.map(e => e.revokeMsgKey.toString());
        (yield (0, g.getMessageTable)().bulkGet(e, false)).forEach((e, t) => {
          let n = false;
          const r = S[t];
          const {
            newMsgKey: i,
            subtype: a,
            sender: o
          } = r;
          if ((e == null ? undefined : e.id) == null || r == null || a === "admin_revoke") {
            return;
          }
          const s = f.default.from(e.id).remote;
          const u = e.botTargetSenderJid ? (0, h.createWidFromWidLike)(e.botTargetSenderJid) : null;
          if (u == null || s == null) {
            return;
          }
          const c = e.botPluginSearchUrl != null && e.botResponseTargetId != null;
          if (s.isGroup()) {
            if (m.default.equals(u, i.participant)) {
              n = true;
            }
          } else if (!s.isBot()) {
            if (m.default.equals(u, o)) {
              n = true;
            }
          }
          if (n) {
            v.push(r);
            const {
              internalId: t,
              botResponseTargetId: n
            } = e;
            if ((0, l.isBotCarouselEnabled)() && c && t != null && n != null) {
              T.push({
                internalId: t,
                targetId: n
              });
            }
          }
        });
        M.push(...v);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`Store Revoked Msg: re-validate bot revoke failed with error: ${e.name}, stack: ${e.stack}`;
        SEND_LOGS("Re-validate revoke failed");
      }
    }
    if ((0, l.isBotCarouselEnabled)() && T.length > 0) {
      try {
        yield E(T);
      } catch (e) {
        __LOG__(4, undefined, new Error(), true)`Store Revoked Msg: delete associated carousel revoke failed with error: ${e.name}, stack: ${e.stack}`;
        SEND_LOGS("Plugin carousel delete revoke failed");
      }
    }
    yield (0, d.getStorage)().lock(["message", "orphan-revoke"], function () {
      var e = (0, i.default)(function* (e) {
        let [i, a] = e;
        const l = yield i.bulkGet([...M.map(e => e.revokeMsgKey.toString()), ...M.map(e => {
          var t;
          var n;
          if ((t = (n = (0, c.getAlternateMsgKey)(e.revokeMsgKey)) === null || n === undefined ? undefined : n.toString()) !== null && t !== undefined) {
            return t;
          } else {
            return "";
          }
        }), ...M.map(e => e.newMsgKey.toString())], false);
        const u = M.length;
        const d = l.slice(0, u);
        const g = l.slice(u, u * 2);
        const m = l.slice(u * 2);
        M.forEach((e, i) => {
          var a;
          const o = (a = d[i]) !== null && a !== undefined ? a : g[i];
          const l = m[i];
          var u;
          if (o == null) {
            __LOG__(2)`processRevokeMsg: orphan revoke message key ${e.revokeMsgKey}`;
            return void r.push({
              msgKey: e.revokeMsgKey.toString(),
              sender: e.sender,
              timestamp: e.timestamp,
              subtype: (u = e.subtype) !== null && u !== undefined ? u : "sender_revoke"
            });
          }
          t.push(o.id);
          s.push(String(o.rowId));
          n.push({
            id: e.newMsgKey.toString(),
            to: o.to,
            author: o.author,
            type: _.MSG_TYPE.REVOKED,
            subtype: e.subtype === "admin_revoke" ? "admin" : "sender",
            revokeSender: e.sender,
            protocolMessageKey: o.id,
            protocolMessageRowId: l == null ? undefined : l.rowId,
            from: o.from,
            t: o.t,
            rowId: o.rowId,
            internalId: o.internalId,
            messageRangeIndex: o.messageRangeIndex,
            revokeTimestamp: e.revokeTimestamp,
            disappearingModeInitiator: e.disappearingModeInitiator,
            ephemeralDuration: e.ephemeralDuration,
            ephemeralSettingTimestamp: e.ephemeralSettingTimestamp
          });
          if ((0, p.getIsImportantMessage)(o)) {
            const e = f.default.fromString(o.id).remote.toString();
            if (y.has(e)) {
              var c;
              const t = (c = y.get(e)) !== null && c !== undefined ? c : [];
              y.set(e, [...t, o.id]);
            } else {
              y.set(e, [o.id]);
            }
          }
        });
        const h = [];
        if (t.length > 0) {
          h.push(i.bulkRemove(t));
        }
        if (n.length > 0) {
          h.push(i.bulkCreateOrReplace(n));
        }
        if (r.length > 0) {
          h.push((0, o.addOrphanRevokes)(r));
        }
        yield Promise.all(h);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    u.ftsLightClient.purge(s).catch(() => {});
    if (y.size > 0) {
      (0, a.removeUnreadMentionChat)(y);
    }
  })).apply(this, arguments);
}
function E() {
  return S.apply(this, arguments);
}
function S() {
  return (S = (0, i.default)(function* (e) {
    const t = [];
    const n = [];
    const r = e.map(function () {
      var e = (0, i.default)(function* (e) {
        const {
          internalId: r,
          targetId: i
        } = e;
        const a = r.split("_")[0];
        yield (0, g.getMessageTable)().between(["internalId"], r, `${a}_g`, {
          reverse: false,
          limit: 20,
          shouldDecrypt: false
        }, e => e.botResponseTargetId !== i || (t.push(e.id), n.push(String(e.rowId)), false));
        yield (0, g.getMessageTable)().bulkRemove(t);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }());
    yield Promise.all(r);
    u.ftsLightClient.purge(n).catch(() => {});
    (0, s.frontendFireAndForget)("deleteAssociatedBotCarouselMsgs", {
      msgKeys: t
    });
  })).apply(this, arguments);
}