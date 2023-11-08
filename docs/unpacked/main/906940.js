var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    msgs: n,
    displayType: a,
    showForMessages: k,
    showForAddOns: D
  } = e;
  const I = (0, r.default)(n[0], "msgs[0]");
  const [R] = (0, A.useMsgValues)(I.id, [p.getIsSentByMe]);
  const N = (0, s.getChat)(I.unsafe());
  const x = k ? n : [];
  const L = (0, T.default)(x, "change:ack change:isSendFailure", () => x.filter(e => (0, p.getIsFailed)(e)));
  const j = x[0] != null && (0, p.getIsEdited)(x[0]);
  const B = D ? n : [];
  const F = (0, O.default)(B.map(e => e.id.toString()));
  const G = (0, T.default)(F, "change:isFailed", () => F.filter(e => e.isFailed));
  const U = B[0];
  const W = U != null ? (0, s.getAsPollCreation)(U.unsafe()) : null;
  const H = (0, g.useMyVote)({
    pollCreationMsg: W,
    includeUnvote: true
  });
  const V = ((t = (0, w.useOptionalModelValues)(H, ["isFailed"])) === null || t === undefined ? undefined : t.isFailed) === true && H != null ? [H] : [];
  const q = (0, P.default)(N.id, B.map(e => e.id));
  const Y = (0, T.default)(q, "change:isFailed", () => q.filter(e => e.isFailed));
  if (L.length === 0 && G.length === 0 && V.length === 0 && Y.length === 0) {
    return null;
  }
  const z = M.fbt._("Something went wrong. Click to learn more.", null, {
    hk: "2Reha"
  });
  return S.default.createElement(u.default, {
    displayType: a,
    tooltip: z,
    ariaLabel: z,
    fromMe: R,
    onClick: () => {
      if (j && G.length === 0) {
        (function (e, t) {
          const n = (0, f.canEditText)(e.unsafe()) ? S.default.createElement(l.default, {
            failedEditedMsg: e.unsafe()
          }) : S.default.createElement(o.default, {
            chat: t,
            msgList: [e.unsafe()].map(C.unproxy)
          });
          d.ModalManager.open(n);
        })(I, N);
      } else {
        (function (e, t, n, a) {
          const r = function (e, t, n, a) {
            const r = t.length + n.length + a.length;
            const o = e.length + t.length + n.length + a.length;
            switch (o) {
              case e.length:
                return M.fbt._("Your message was not sent.", null, {
                  hk: "2vD411"
                });
              case t.length:
                {
                  const e = t.map(e => e.reactionText).join(c.default.t(54));
                  if (t.length > 2) {
                    return M.fbt._({
                      "*": "{count} reactions weren't sent",
                      _1: "{count} reactions weren't sent"
                    }, [M.fbt._plural(t.length), M.fbt._param("count", c.default.n(t.length))], {
                      hk: "41MvFZ"
                    });
                  } else {
                    return M.fbt._({
                      "*": "Your {reactions} reactions weren't sent",
                      _1: "Your {reactions} reaction was not sent"
                    }, [M.fbt._plural(t.length), M.fbt._param("reactions", e)], {
                      hk: "K3Fmi"
                    });
                  }
                }
              case n.length:
                {
                  const [e] = n;
                  if (e.isUnvote) {
                    return M.fbt._("Your vote change was not sent.", null, {
                      hk: "1XXW43"
                    });
                  } else {
                    return M.fbt._("Your vote was not sent.", null, {
                      hk: "1EH9Vx"
                    });
                  }
                }
              case a.length:
                {
                  const [e] = a;
                  if (e.pinType === m.PIN_STATE.PIN) {
                    return M.fbt._("Could not pin.", null, {
                      hk: "1NK0CQ"
                    });
                  } else {
                    return M.fbt._("Could not unpin.", null, {
                      hk: "1oFfnr"
                    });
                  }
                }
              case r:
                return M.fbt._("Your actions on this message were not sent.", null, {
                  hk: "W3IoR"
                });
              case o:
                return M.fbt._("Your message and actions on this message were not sent.", null, {
                  hk: "Pqk5j"
                });
            }
            throw (0, b.default)(`Unhandled case: ${e.length} messages, ${t.length} reactions, ${n.length} votes, ${o} total.`);
          }(e, t, n, a);
          d.ModalManager.open(S.default.createElement(i.default, {
            text: r,
            resend: () => {
              !function (e, t, n, a) {
                for (const t of e) {
                  t.resend().then(e => {
                    if (e === _.SendMsgResult.ERROR_UNKNOWN) {
                      __LOG__(2, undefined, undefined, undefined, ["messaging"])`FailedMessageModal:resend: failure with SendMsgResult.ERROR_UNKNOWN`;
                    }
                  }).catch(function (e) {
                    __LOG__(2, undefined, undefined, undefined, ["messaging"])`FailedMessageModal:resend: resend failure ${e}`;
                  });
                }
                for (const e of t) {
                  const t = (0, v.reactionSenderToReactionUpdate)(e);
                  (0, E.resendUpdateFailedPropsForSentReactionsDBAndModel)(t);
                }
                for (const e of n) {
                  (0, h.resendVote)(e);
                }
                for (const e of a) {
                  (0, y.resendPinInChatMsg)(e);
                }
              }(e, t, n, a);
            }
          }));
        })(L, G, V, Y);
      }
    },
    isGroupChatProfilePictureDisplayed: true
  });
};
var r = a(require("../app/670983.js"));
var o = a(require("./804418.js"));
var l = a(require("./301280.js"));
var i = a(require("./628727.js"));
var u = a(require("./761926.js"));
var s = require("../app/163755.js");
var c = a(require("../app/932325.js"));
var d = require("../app/114850.js");
var f = require("../app/939716.js");
var p = require("../app/787742.js");
var m = require("../app/96374.js");
var h = require("./702414.js");
var g = require("./52135.js");
var E = require("../app/548410.js");
var v = require("./474474.js");
var _ = require("../app/693741.js");
var y = require("./923743.js");
var C = require("../app/163139.js");
var b = a(require("../app/556869.js"));
var M = require("../vendor/548360.js");
var S = a(require("../vendor/667294.js"));
var T = a(require("../app/524578.js"));
var w = require("../app/655241.js");
var A = require("./871210.js");
var P = a(require("./960685.js"));
var O = a(require("./129723.js"));