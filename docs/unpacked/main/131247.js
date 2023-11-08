var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    chat: a,
    regularChatImage: C,
    selection: b,
    showCommunityInfo: M,
    showSpeakerForCag: S,
    theme: T,
    isHovered: w = false,
    size: A
  } = e;
  const P = (0, y.useOptionalModelValues)(a.groupMetadata, ["groupType", "participants", "terminated"]);
  const [O, k] = (0, v.useState)(c.default.get().textsize);
  (0, _.useListener)(o.Cmd, "textsize_change", e => {
    k(e);
  });
  const D = (P == null ? undefined : P.groupType) === p.GroupType.LINKED_SUBGROUP || (P == null ? undefined : P.groupType) === p.GroupType.LINKED_GENERAL_GROUP || (P == null ? undefined : P.groupType) === p.GroupType.LINKED_ANNOUNCEMENT_GROUP;
  const I = e => {
    var t;
    var r;
    if (!(P == null ? undefined : P.participants.iAmMember()) || (0, i.communitySubgroupSwitcherEntrypointEnabled)()) {
      return;
    }
    e.stopPropagation();
    new l.CommunityFeatureUsageWamEvent({
      communityId: (t = a.groupMetadata) === null || t === undefined || (r = t.parentGroup) === null || r === undefined ? undefined : r.user,
      communityUiAction: g.COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.ENTRY,
      communityUiFeature: E.COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
    }).commit();
    const o = (0, f.default)(require("./15283.js"));
    m.ModalManager.open(v.default.createElement(o, {
      chat: a
    }));
  };
  const R = e => {
    if (!(0, i.communitySubgroupSwitcherEntrypointEnabled)()) {
      e.stopPropagation();
    }
  };
  const N = (t = a.groupMetadata) === null || t === undefined ? undefined : t.getParentGroupChat();
  if (D && N && (0, i.communitiesEnabled)()) {
    if ((P == null ? undefined : P.groupType) === p.GroupType.LINKED_ANNOUNCEMENT_GROUP) {
      if (S === true) {
        return v.default.createElement(u.CommunitySpeakerIcon, {
          size: A
        });
      } else {
        return v.default.createElement(d.DetailImage, {
          id: N.id,
          shape: d.DetailImageShape.Squircle,
          size: A != null ? A : (0, r.getDetailImageSizeForTextSize)(O),
          onClick: e => I(e)
        });
      }
    }
    if ((0, i.communitySubgroupIdentityV2Enabled)()) {
      if (M && T === h.SubgroupImageTheme.CHAT_LIST) {
        return v.default.createElement(s.default, {
          chat: a,
          parentGroupChat: N,
          selection: b,
          isHovered: w,
          onClick: e => I(e),
          onMouseDown: e => R(e),
          size: A != null ? A : (0, r.getDetailImageSizeForTextSize)(O)
        });
      } else {
        return C;
      }
    }
    if (M) {
      return v.default.createElement(h.StackedCirclesImage, {
        chat: a,
        selection: b,
        theme: T,
        isHovered: w,
        onClick: e => I(e),
        onMouseDown: e => R(e)
      });
    }
  }
  return C;
};
var r = require("./628445.js");
var o = require("../app/780549.js");
var l = require("./531359.js");
var i = require("../app/174834.js");
var u = require("./119357.js");
var s = a(require("./491248.js"));
var c = a(require("../app/677102.js"));
var d = require("../app/23641.js");
var f = a(require("../app/97359.js"));
var p = require("../app/862159.js");
var m = require("../app/114850.js");
var h = require("./260818.js");
var g = require("./276081.js");
var E = require("./572968.js");
var v = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = C(t);
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
var _ = require("../app/808446.js");
var y = require("../app/655241.js");
function C(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (C = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}