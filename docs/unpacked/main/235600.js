var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    chats: t,
    onSave: n,
    entryPoint: a
  } = e;
  const u = () => new Map(t.map(e => {
    const t = d.ChatAssignmentCollection.getAgentCollectionForChatId(e.id);
    return [e.id.toString(), t.length > 0 ? (0, o.default)(t.head(), "assignedAgentsForThisChat.head()").id : null];
  }));
  const [m, T] = (0, b.useState)(u);
  (0, S.useListener)(d.ChatAssignmentCollection, "add change remove", () => {
    T(u());
  });
  const A = () => {
    let e = m.get(t[0].id.toString());
    let n = true;
    m.forEach(t => {
      if (t !== e) {
        e = null;
      }
      if (t != null) {
        n = false;
      }
    });
    return {
      commonlyAssignedAgentId: e,
      areAllChatsUnassigned: n
    };
  };
  const [P, D] = (0, b.useState)(A().commonlyAssignedAgentId);
  const [I, R] = (0, b.useState)(O());
  (0, S.useListener)(i.AgentCollection, "add change remove", () => {
    R(O());
  });
  const N = b.default.createElement(p.FlexRow, {
    justify: "all",
    align: "center"
  }, b.default.createElement(_.WDSTextLarge, {
    as: "span",
    weight: "medium"
  }, C.fbt._("Assign chat", null, {
    hk: "1nbehc"
  })), b.default.createElement(c.default, {
    type: "simplified",
    nowrap: true,
    xstyle: w.unassignButton,
    disabled: !P,
    onClick: () => {
      D(null);
    }
  }, C.fbt._("UNASSIGN", null, {
    hk: "3L0gZA"
  })));
  const x = function () {
    var e = (0, r.default)(function* () {
      try {
        v.QPL.markerStart(E.QuickLogMarkerId.WHATSAPP_ASSIGN_CHAT, {
          annotations: {
            int: {
              chats_count: t.length
            }
          }
        });
        yield (0, s.changeChatAssignment)(t.map(e => ({
          chat: e,
          agentId: P
        })), a);
        v.QPL.markerEnd(E.QuickLogMarkerId.WHATSAPP_ASSIGN_CHAT, l.QuickLogActionType.SUCCESS);
        if (!(n == null)) {
          n();
        }
      } catch (e) {
        v.QPL.markerEnd(E.QuickLogMarkerId.WHATSAPP_ASSIGN_CHAT, l.QuickLogActionType.FAIL);
        __LOG__(4, undefined, new Error())`chat_assignment_modal: handleOk error ${e}`;
      } finally {
        g.ModalManager.close();
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const L = e => {
    D(e.target.value);
  };
  const j = I.map(e => b.default.createElement("li", {
    key: e.id
  }, b.default.createElement(p.FlexRow, {
    align: "center"
  }, b.default.createElement("input", {
    id: e.id,
    className: (0, M.default)(w.input),
    type: "radio",
    name: "agent",
    checked: e.id === P,
    value: e.id,
    onChange: L
  }), b.default.createElement(_.TextLabel, {
    htmlFor: e.id,
    size: "16",
    color: "secondary",
    xstyle: w.label
  }, e.name), b.default.createElement(k, null), function (e) {
    const t = (0, y.assertGetMe)().getDeviceId();
    let n;
    n = e.deviceId === t ? C.fbt._("You", null, {
      hk: "JczjC"
    }) : null;
    return b.default.createElement(_.Text, {
      as: "span",
      color: "secondary",
      xstyle: w.helperText
    }, n);
  }(e))));
  (0, b.useEffect)(() => {
    v.QPL.markerEnd(E.QuickLogMarkerId.WHATSAPP_FETCH_ASSIGN_CHAT_AGENT_LIST, l.QuickLogActionType.SUCCESS);
  }, []);
  return b.default.createElement(f.ConfirmPopup, {
    title: N,
    okText: C.fbt._("Save", null, {
      hk: "2ACkHR"
    }),
    type: h.ModalTheme.ChatAssignment,
    onCancel: () => {
      g.ModalManager.close();
    },
    onOK: x,
    okDisabled: (() => {
      const {
        commonlyAssignedAgentId: e,
        areAllChatsUnassigned: n
      } = A();
      if (t.length > 1 && P == null) {
        return n;
      } else {
        return P === e;
      }
    })()
  }, b.default.createElement("form", null, b.default.createElement("ol", null, j)));
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/15842.js");
var i = require("../app/919833.js");
require("../app/959006.js");
var u = require("../app/86417.js");
var s = require("../app/452072.js");
var c = a(require("../app/692629.js"));
var d = require("../app/412380.js");
var f = require("../app/103440.js");
var p = require("../app/690495.js");
var m = a(require("../app/469733.js"));
var h = require("../app/118612.js");
var g = require("../app/114850.js");
var E = require("../app/316348.js");
var v = require("../app/555622.js");
var _ = require("../app/180519.js");
var y = require("../app/459857.js");
var C = require("../vendor/548360.js");
var b = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
}(require("../vendor/667294.js"));
var M = a(require("../app/156720.js"));
var S = require("../app/808446.js");
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const w = {
  unassignButton: {
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka"
  },
  input: {
    flexShrink: "oq44ahr5",
    marginEnd: "bugiwsl0",
    width: "dh5rsm73",
    height: "hpdpob1j"
  },
  label: {
    display: "l7jjieqr",
    height: "hpdpob1j",
    paddingTop: "n1yiu2zv",
    paddingEnd: "f9ovudaz",
    paddingBottom: "eb4rp10x",
    paddingStart: "gx1rr48f",
    cursor: "ajgl1lbb",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae"
  },
  helperText: {
    marginStart: "fooq7fky",
    whiteSpace: "le5p0ye3"
  }
};
function A(e) {
  const t = (0, y.assertGetMe)().getDeviceId();
  if (e.deviceId === t) {
    return 0;
  } else if (e.deviceId === u.PRIMARY_DEVICE_ID) {
    return 1;
  } else {
    return 2;
  }
}
function P(e, t) {
  return A(e) - A(t);
}
function O() {
  const e = i.AgentCollection.filter(e => !e.isDeleted);
  e.sort(P);
  return e;
}
function k() {
  return b.default.createElement(m.default, {
    grow: 1
  }, null);
}