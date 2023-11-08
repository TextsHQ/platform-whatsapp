var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("./235600.js"));
var o = require("../app/698052.js");
var l = require("../main-chunk/628671.js");
var i = require("../app/79672.js");
var u = require("../app/396574.js");
var s = a(require("../app/883891.js"));
var c = require("./184385.js");
var d = require("./570632.js");
var f = require("../app/170749.js");
var p = require("./614724.js");
var m = a(require("./109158.js"));
var h = require("../app/114850.js");
var g = require("./608834.js");
var E = require("../app/316348.js");
var v = require("../app/555622.js");
var _ = a(require("./444537.js"));
var y = require("./767301.js");
var C = require("../app/561912.js");
var b = require("../vendor/548360.js");
var M = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = A(t);
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
var S = a(require("../app/969651.js"));
var T = require("../app/808446.js");
var w = a(require("../app/17533.js"));
function A(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (A = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function P(e, t) {
  const {
    labelEditEnabled: n = false,
    multiSelectEntryPoint: a,
    onRemoveLabel: A,
    selectedModels: P,
    onCancel: k,
    onDelete: D
  } = e;
  const I = a === g.MultiSelectEntryPoint.ChatAssignment;
  const R = (0, S.default)();
  const N = P.getSelected();
  const x = N.length;
  const L = () => {
    h.ModalManager.open(M.default.createElement(p.ManageLabelFlowLoadable, {
      onLabelUpdateComplete: k,
      modelsToUpdate: N,
      onClose: () => h.ModalManager.close()
    }));
  };
  const j = () => {
    const e = N.reduce((e, t) => {
      if (t instanceof i.Chat) {
        e.push(t);
      }
      return e;
    }, []);
    _.default.maybeShowLabelDataSharingDialog(e, s.default.SmbDataSharingLabelTargetValues.CHAT, L, y.SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT);
  };
  const B = (0, w.default)(k);
  (0, M.useEffect)(() => {
    if (x === 0) {
      B();
    }
  }, [x, B]);
  (0, T.useListener)(P, "all", R);
  const F = N.length;
  let G;
  let U;
  let W;
  let H;
  if (I && F > 0) {
    G = M.default.createElement(O, {
      Icon: l.ChatAssignmentWithContainerIcon,
      disabled: !F,
      title: b.fbt._("Assign chat", null, {
        hk: "Ky2l6"
      }),
      onClick: () => {
        v.QPL.markerStart(E.QuickLogMarkerId.WHATSAPP_FETCH_ASSIGN_CHAT_AGENT_LIST, {
          annotations: {
            string: {
              CHAT_ASSIGNMENT_ENTRY_POINT: "MULTI_SELECT"
            }
          }
        });
        h.ModalManager.open(M.default.createElement(r.default, {
          chats: N,
          onSave: k,
          entryPoint: o.ChatAssignmentEntryPointType.MULTI_SELECT
        }));
      }
    });
  }
  if (n && F > 0) {
    U = M.default.createElement(O, {
      Icon: f.LabelIcon,
      disabled: !F,
      title: b.fbt._("Add label", null, {
        hk: "1tcf6K"
      }),
      onClick: j
    });
  }
  if (A && F > 0) {
    H = M.default.createElement(O, {
      Icon: d.LabelDeleteIcon,
      disabled: !F,
      title: b.fbt._("Remove label", null, {
        hk: "3cOKlJ"
      }),
      onClick: A
    });
  }
  if (D && F > 0) {
    W = M.default.createElement(O, {
      Icon: c.DeleteIcon,
      disabled: !F,
      title: b.fbt._("Delete label", null, {
        hk: "2cvgyg"
      }),
      onClick: D
    });
  }
  const V = (0, u.classnamesConvertMeToStylexPlease)({
    [m.default.drawerHeader]: e.theme === "drawer-header",
    [m.default.chatListPanel]: e.theme === "chatlist-panel",
    [m.default.multiControls]: true
  });
  return M.default.createElement("div", {
    className: V,
    ref: t
  }, M.default.createElement(O, {
    Icon: C.XIcon,
    onClick: e.onCancel
  }), M.default.createElement("div", {
    className: m.default.multiCount
  }, b.fbt._({
    "*": "{count} selected",
    _1: "1 selected"
  }, [b.fbt._plural(F, "count")], {
    hk: "PdQWz"
  })), G, U, W, H);
}
const O = e => {
  let {
    Icon: t,
    title: n,
    onClick: a,
    directional: r,
    disabled: o
  } = e;
  return M.default.createElement("button", {
    className: m.default.multiselectIcon,
    title: n,
    onClick: a,
    disabled: o === true ? "disabled" : undefined
  }, M.default.createElement(t, {
    directional: r
  }));
};
var k = (0, M.forwardRef)(P);
exports.default = k;