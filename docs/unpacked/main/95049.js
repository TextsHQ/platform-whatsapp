var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDirectConnectionKeysForChat = v;
exports.sendDelete = function (e) {
  return y((0, p.unproxy)(e));
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/328620.js");
var l = require("../app/35234.js");
var i = require("../app/452072.js");
var u = require("../app/125409.js");
var s = require("../app/953213.js");
var c = require("../app/177938.js");
var d = require("../app/856311.js");
var f = require("../app/525119.js");
var p = require("../app/163139.js");
var m = require("../app/390737.js");
var h = require("../vendor/548360.js");
var g = a(require("../vendor/667294.js"));
function E(e) {
  let t = "";
  if (e != null) {
    switch (e) {
      case s.ChatKindType.Community:
        t = h.fbt._("Deleting community", null, {
          hk: "3Pxrl8"
        });
        break;
      case s.ChatKindType.Group:
        t = h.fbt._("Deleting group", null, {
          hk: "2wPgLr"
        });
        break;
      case s.ChatKindType.Broadcast:
        t = h.fbt._("Deleting broadcast list", null, {
          hk: "3ZQx87"
        });
        break;
      case s.ChatKindType.Chat:
        t = h.fbt._("Deleting chat", null, {
          hk: "2c4rEo"
        });
        break;
      case s.ChatKindType.Newsletter:
    }
  } else {
    t = h.fbt._("Deleting chat", null, {
      hk: "2c4rEo"
    });
  }
  return new o.ActionType(t);
}
function v() {
  return _.apply(this, arguments);
}
function _() {
  return (_ = (0, r.default)(function* (e) {
    const {
      removeDirectConnectionKeys: t
    } = yield require.e(2191).then(require.bind(require, 549349));
    yield t(e);
  })).apply(this, arguments);
}
function y(e) {
  if (e.promises.sendDelete) {
    return e.promises.sendDelete;
  }
  const t = e.getLastMsgKeyForAction();
  const n = t ? e.msgs.get(t) : undefined;
  const a = e.promises.sendDelete = (0, u.sendConversationDelete)(e.id, e.tcToken, e.tcTokenTimestamp);
  const p = e.kind;
  const _ = a.then(function () {
    var t = (0, r.default)(function* (t) {
      if (t.status === 200) {
        d.LabelCollection.removeAllLabelsMD(e);
        if (p === s.ChatKindType.Chat) {
          yield v(e.id);
          if ((0, f.isMatFullyEnabled)() && e.id.isUser()) {
            (0, l.removeMatChatMapping)(e.id);
          }
        }
        if ([s.ChatKindType.Chat, s.ChatKindType.Group, s.ChatKindType.Community].includes(p)) {
          yield (0, i.removeChatAssignmentsForChat)(e.id);
        }
        if (p != null) {
          switch (p) {
            case s.ChatKindType.Community:
              return new o.ActionType(h.fbt._("Community deleted", null, {
                hk: "1SXuj2"
              }));
            case s.ChatKindType.Group:
              return new o.ActionType(h.fbt._("Group deleted", null, {
                hk: "4Bo3XW"
              }));
            case s.ChatKindType.Broadcast:
              return new o.ActionType(h.fbt._("Broadcast list deleted", null, {
                hk: "OaJNR"
              }));
            case s.ChatKindType.Chat:
              return new o.ActionType(h.fbt._("Chat deleted", null, {
                hk: "2MFBUj"
              }));
            case s.ChatKindType.Newsletter:
          }
        }
      } else if (t.status >= 400 && p != null) {
        switch (p) {
          case s.ChatKindType.Community:
            return new o.ActionType(h.fbt._("Couldn't delete community.", null, {
              hk: "3ctAwy"
            }));
          case s.ChatKindType.Group:
            return new o.ActionType(h.fbt._("Couldn't delete group.", null, {
              hk: "3IV9oM"
            }));
          case s.ChatKindType.Broadcast:
            return new o.ActionType(h.fbt._("Couldn't delete broadcast list.", null, {
              hk: "224dIn"
            }));
          case s.ChatKindType.Chat:
            return new o.ActionType(h.fbt._("Couldn't delete chat.", null, {
              hk: "3Ky5Ij"
            }));
          case s.ChatKindType.Newsletter:
        }
      }
    });
    return function () {
      return t.apply(this, arguments);
    };
  }()).catch(function () {
    __LOG__(3)`models:chat:sendDelete dropped`;
    let t = "";
    if (p != null) {
      switch (p) {
        case s.ChatKindType.Community:
          t = h.fbt._("Couldn't delete community.", null, {
            hk: "3ctAwy"
          });
          break;
        case s.ChatKindType.Group:
          t = h.fbt._("Couldn't delete group.", null, {
            hk: "3IV9oM"
          });
          break;
        case s.ChatKindType.Broadcast:
          t = h.fbt._("Couldn't delete broadcast list.", null, {
            hk: "224dIn"
          });
          break;
        case s.ChatKindType.Chat:
          t = h.fbt._("Couldn't delete chat.", null, {
            hk: "3Ky5Ij"
          });
          break;
        case s.ChatKindType.Newsletter:
      }
    } else {
      t = h.fbt._("Couldn't delete chat.", null, {
        hk: "3Ky5Ij"
      });
    }
    return new o.ActionType(t, {
      actionText: h.fbt._("Try again.", null, {
        hk: "262nZi"
      }),
      actionHandler: () => y(e)
    });
  });
  m.ToastManager.open(g.default.createElement(o.ActionToast, {
    initialAction: E(p),
    pendingAction: _
  }));
  return a.then(function (a) {
    if (a.status === 200) {
      const a = e.getLastMsgKeyForAction();
      if (t && t.equals(a) || t === a) {
        e.delete();
      } else {
        e.deleteMsgsBeforeMsgInclusive(n);
      }
      if (e.kind === s.ChatKindType.Community) {
        c.ContactCollection.remove(e.id.toString());
      }
    }
  }).finally(() => {
    e.promises.sendDelete = null;
  });
}