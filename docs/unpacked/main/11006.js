var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MembershipApprovalRequest = function (e) {
  const {
    chat: t,
    request: n,
    onRequestClick: a,
    onBack: O
  } = e;
  const [I, R] = (0, T.useState)(u.State.Pending);
  const [N, x] = (0, T.useState)(null);
  const {
    contact: L,
    addedByContact: j
  } = n;
  const [B, F, G, U, W] = (0, w.useContactValues)(L.id, [c.getId, c.getName, h.getFormattedShortName, c.getNotifyName, h.getCommonGroups]);
  const [H, V] = (0, P.default)(t.groupMetadata);
  (0, T.useEffect)(() => {
    if ((0, l.getABPropConfigValue)("group_join_request_m3_groups_in_common")) {
      (0, m.findCommonGroups)(L);
    }
  }, []);
  const q = (0, A.default)(W, ["add", "remove"], () => {
    var e;
    if ((e = W == null ? undefined : W.length) !== null && e !== undefined) {
      return e;
    } else {
      return 0;
    }
  });
  const Y = e => {
    const t = function (e, t) {
      const {
        contact: n
      } = t;
      if (e instanceof E.RequestError) {
        switch (e.status) {
          case 400:
            return S.fbt._("{name} is no longer on WhatsApp.", [S.fbt._param("name", T.default.createElement(_.ContactName, {
              contact: n
            }))], {
              hk: "38gtLe"
            });
          case 404:
            return S.fbt._("Request no longer exists.", null, {
              hk: "phjQb"
            });
          case 409:
            return S.fbt._("{name} has already been added to the group.", [S.fbt._param("name", T.default.createElement(_.ContactName, {
              contact: n
            }))], {
              hk: "2WdsXF"
            });
          case 500:
            return S.fbt._("This group is full. To create space for new participants, you can reject pending requests to join this group or remove existing participants.", null, {
              hk: "2soRwL"
            });
        }
      } else if (e instanceof E.GroupError) {
        switch (e.status) {
          case 400:
            return S.fbt._("Request no longer exists.", null, {
              hk: "phjQb"
            });
          case 401:
            return S.fbt._("You're no longer a group admin. Only group admins can review requests to join.", null, {
              hk: "2mMaqu"
            });
          case 404:
            return S.fbt._("Group has been deleted.", null, {
              hk: "3ITOBm"
            });
          case 412:
            return S.fbt._("This participant can't be added because the community is full.", null, {
              hk: "3U4T6M"
            });
          case 423:
            return S.fbt._("Group has been suspended.", null, {
              hk: "nqhjf"
            });
          case 429:
            return S.fbt._("Please try again later.", null, {
              hk: "2o8Poa"
            });
        }
      }
      return S.fbt._("Something went wrong. Please try again later.", null, {
        hk: "4BScn8"
      });
    }(e, n);
    if (D(e) && (0, l.getABPropConfigValue)("group_join_request_m3")) {
      b.ToastManager.open(T.default.createElement(C.Toast, {
        msg: t
      }), b.ToastPosition.RIGHT);
    } else {
      v.ModalManager.open(T.default.createElement(s.ConfirmPopup, {
        onOK: () => {
          v.ModalManager.close();
          if (e instanceof E.GroupError) {
            const {
              status: t
            } = e;
            if (!(t !== 401 && t !== 404 && t !== 423)) {
              O();
            }
          }
        }
      }, t));
    }
  };
  const z = () => {
    a(n);
  };
  const K = function () {
    var e = (0, r.default)(function* (e) {
      e.stopPropagation();
      R(u.State.Loading);
      try {
        yield (0, E.rejectMembershipApprovalRequest)(t, n, q);
        R(u.State.Rejected);
      } catch (e) {
        if (D(e)) {
          R(u.State.Error);
          x(e);
        } else {
          R(u.State.Pending);
          Y(e);
        }
        (0, g.queryAndUpdateGroupMembershipApprovalRequests)(t.id);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  const Q = function () {
    var e = (0, r.default)(function* (e) {
      e.stopPropagation();
      R(u.State.Loading);
      try {
        yield (0, E.approveMembershipApprovalRequest)(t, n, q);
        R(u.State.Approved);
      } catch (e) {
        if (D(e)) {
          R(u.State.Error);
          x(e);
        } else {
          R(u.State.Pending);
          Y(e);
        }
        (0, g.queryAndUpdateGroupMembershipApprovalRequests)(t.id);
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  let X;
  let Z;
  if (!(U == null || F != null && F !== "" || !(0, l.getABPropConfigValue)("group_join_request_m2_pushname"))) {
    X = T.default.createElement(y.TextDiv, {
      size: "14",
      color: "secondary",
      xstyle: k.text,
      testid: "pushname"
    }, "~", T.default.createElement(p.EmojiText, {
      text: U
    }));
  }
  if (q > 0 && (0, l.getABPropConfigValue)("group_join_request_m3_groups_in_common")) {
    Z = S.fbt._({
      "*": "{number} groups in common",
      _1: "1 group in common"
    }, [S.fbt._plural(q, "number")], {
      hk: "2bl4a5"
    });
  }
  const J = T.default.createElement(T.default.Fragment, null, T.default.createElement(_.ContactName, {
    contact: L,
    ellipsify: true,
    xstyle: k.text
  }), X);
  if ((0, l.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && V && (0, M.isMeAccount)(j.id)) {
    return T.default.createElement(i.CellRequest, {
      image: T.default.createElement(d.ContactImage, {
        size: f.DetailImageSize.Small,
        contact: L
      }),
      primary: J,
      secondary: Z,
      secondaryTestId: "common-groups",
      hoverEnabled: true,
      onClick: z
    });
  }
  return T.default.createElement(i.CellRequest, {
    image: T.default.createElement(d.ContactImage, {
      size: f.DetailImageSize.Small,
      contact: L
    }),
    primary: J,
    secondary: Z,
    secondaryTestId: "common-groups",
    hoverEnabled: true,
    state: I,
    onApprove: e => {
      Q(e);
    },
    onReject: e => {
      K(e);
    },
    onClick: z,
    onError: e => {
      e.stopPropagation();
      Y((0, o.default)(N, "error"));
    }
  });
};
var r = a(require("../vendor/348926.js"));
var o = a(require("../app/670983.js"));
var l = require("../app/287461.js");
var i = require("./718922.js");
var u = require("../app/921264.js");
var s = require("../app/103440.js");
var c = require("../app/660666.js");
var d = require("./270457.js");
var f = require("../app/23641.js");
var p = require("../app/305521.js");
var m = require("./701777.js");
var h = require("../app/714574.js");
var g = require("../app/198111.js");
var E = require("./956932.js");
var v = require("../app/114850.js");
var _ = require("../app/21645.js");
var y = require("../app/180519.js");
var C = require("../app/625786.js");
var b = require("../app/390737.js");
var M = require("../app/459857.js");
var S = require("../vendor/548360.js");
var T = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = O(t);
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
a(require("../app/156720.js"));
var w = require("../app/379811.js");
var A = a(require("../app/524578.js"));
var P = a(require("./426872.js"));
function O(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (O = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const k = {
  text: {
    maxWidth: "laorhtua",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  }
};
function D(e) {
  if (e instanceof E.RequestError) {
    return e.status !== 500;
  } else {
    return e instanceof E.GroupError && e.status === 400;
  }
}