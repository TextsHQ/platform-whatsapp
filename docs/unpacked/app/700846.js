var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSingleMsg = function () {
  return b.apply(this, arguments);
};
var i = r(require("../vendor/81109.js"));
var a = r(require("../vendor/348926.js"));
var o = require("./250655.js");
var s = require("./8304.js");
var l = require("./904086.js");
var u = require("./998667.js");
var c = require("./632157.js");
var d = require("./144818.js");
var p = require("./583464.js");
var f = require("./359987.js");
var _ = require("./984330.js");
var g = require("./621180.js");
var m = require("./428261.js");
var h = require("./488300.js");
var y = require("./641473.js");
var E = require("./989.js");
var S = require("./257845.js");
var v = require("./373070.js");
var T = require("./323829.js");
var M = require("./198740.js");
var A = r(require("./124928.js"));
function b() {
  return (b = (0, a.default)(function* (e, t, r) {
    let b = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : S.MessageOverwriteOption.NO_OVERWRITE;
    let C = !(arguments.length > 4 && arguments[4] !== undefined) || arguments[4];
    const P = b !== S.MessageOverwriteOption.NO_OVERWRITE;
    const O = {
      add: "after",
      update: P,
      isHistory: false
    };
    const I = t.type === v.MSG_TYPE.PROTOCOL && ["sender_revoke", "admin_revoke"].includes(t.subtype);
    let R = t;
    if (!I) {
      const e = yield (0, p.applyOrphanRevokes)([R]);
      if (e.length === 0) {
        return;
      }
      R = e[0];
    }
    const N = yield (0, y.handleForActiveMessageRange)(e, R);
    if (N.has(E.ActiveRangeHandlerAction.DropMessage)) {
      return;
    }
    const D = N.has(E.ActiveRangeHandlerAction.SkipUI);
    try {
      if (A.default.isStatusV3(e)) {
        yield (0, f.frontendSendAndReceive)("handleStatusV3Update", {
          rawMsg: R,
          checksum: null,
          isMsgUpdate: false
        });
      }
      yield (0, l.promiseLoop)(function () {
        var t = (0, a.default)(function* (t, r, i) {
          const a = (0, s.delayMs)((0, o.expBackoff)(i, 120000, 1000, 0.1));
          try {
            if (P) {
              R = yield (0, m.updateMessage)(R);
              __LOG__(2, undefined, undefined, undefined, ["handleSingleMsg"])`placeholder populate successful`;
            } else if (I) {
              yield (0, h.processRevokeMsgs)([{
                revokeMsgKey: R.protocolMessageKey,
                newMsgKey: R.id,
                timestamp: R.t,
                subtype: R.subtype,
                sender: R.author,
                revokeTimestamp: R.t
              }]);
              (0, f.frontendFireAndForget)("deleteModelsForLastAddOnPreview", {
                messagesIds: [R.protocolMessageKey.toString()]
              });
              const t = require("./628905.js").getJobManager;
              yield t().waitUntilPersisted(T.jobSerializers.deleteAddOns(e.toString(), [R.protocolMessageKey.toString()]));
            } else {
              try {
                yield (0, m.storeMessages)([R], e);
                if (R.type === v.MSG_TYPE.CIPHERTEXT) {
                  (0, M.addPlaceholderActions)([R]);
                }
              } catch (e) {
                if (!(e instanceof m.DuplicateMessageError)) {
                  throw e;
                }
                if (R.type === v.MSG_TYPE.CIPHERTEXT) {
                  __LOG__(2)`processPlaceholderMsg: skip creating duplicate placeholder`;
                } else {
                  __LOG__(2)`storeMessages loop: detect resend message`;
                  R = yield (0, m.updateMessage)(R);
                  O.update = true;
                }
              }
            }
            if (R.type === v.MSG_TYPE.GROUPS_V4_INVITE) {
              const e = R.id.toString();
              yield (0, d.persistGroupInviteV4Msg)(e, {
                id: e,
                from: R.from.toString(),
                to: R.to.toString(),
                groupId: R.inviteGrp,
                expiration: parseInt(R.inviteCodeExp, 10),
                expired: (0, c.unixTime)() >= parseInt(R.inviteCodeExp, 10)
              });
            }
            __LOG__(2, undefined, undefined, undefined, ["handleSingleMsg"])`storeMessages loop`;
            t();
          } catch (e) {
            __LOG__(2, undefined, undefined, undefined, ["handleSingleMsg"])`storeMessages loop: failed with error ${e}.`;
            if (i > 3) {
              __LOG__(3)`storeMessages loop: Gave up after ${i} tries`;
              return Promise.reject(e);
            } else {
              return a;
            }
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      }());
      __LOG__(2, undefined, undefined, undefined, ["messaging"])`handleSingleMsg: msgId::${R.id.id}, write message to db done, overwrite: ${P}, skipUI: ${D}`;
      try {
        yield (0, u.checkOrphanMutations)([R.id.toString()], [e.toString()]);
        yield (0, g.checkUpdateForOrphanReactions)([R.id.toString()]);
      } catch (t) {
        __LOG__(4, undefined, new Error())`handleSingleMsg: checkOrphanMutations failed during handleSingleMsg for: ${String(R.id)} chat: ${String(e)} Error: ${t.name}, message: ${t.message}, stack: ${t.stack}`;
      }
      if (!D) {
        yield (0, f.frontendSendAndReceive)("processMultipleMessages", {
          chatId: e,
          msgObjs: [(0, i.default)((0, i.default)({}, R), {}, {
            recvFresh: true,
            isNewMsg: true
          })],
          meta: O,
          processMessagesOrigin: r,
          chatMsgsCollection: null,
          preserveOrder: C
        });
      }
    } catch (t) {
      if (t instanceof _.LogoutDrop) {
        return;
      }
      if (t instanceof m.PreviousMsgNotUpdatableError) {
        return void __LOG__(3)`Msg: ${String(R.id)} chat: ${String(e)} Error: PreviousMsgNotUpdatableError`;
      }
      __LOG__(3, undefined, undefined, undefined, ["messaging"])`Msg: ${String(R.id)} chat: ${String(e)} Error: ${t.name}, message: ${t.message}, stack: ${t.stack}`;
    }
  })).apply(this, arguments);
}