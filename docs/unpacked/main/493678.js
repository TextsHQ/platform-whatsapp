var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleTooFewSubgroups = exports.handleRemoveSubgroup = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/967154.js"));
var l = require("../app/351053.js");
var i = require("./468926.js");
var u = require("../app/780549.js");
var s = require("../app/174834.js");
var c = require("../app/103440.js");
var d = require("../app/305521.js");
var f = require("../app/690495.js");
var p = require("../app/114850.js");
var m = require("../app/180519.js");
var h = require("../app/676345.js");
var g = a(require("./123490.js"));
var E = require("../vendor/548360.js");
var v = a(require("../vendor/667294.js"));
var _ = a(require("../app/156720.js"));
var y = a(require("../app/305988.js"));
const C = {
  checkboxContainer: {
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t",
    borderTop: "ei53l81b"
  },
  checkbox: {
    display: "l7jjieqr",
    flex: "kk3akd72",
    verticalAlign: "kbne4t5p",
    transitionProperty: "cr6d9hz6",
    transitionDuration: "p4t1lx4y",
    transitionTimingFunction: "pu4k07i0"
  }
};
const b = e => {
  let {
    removeDisclaimer: t,
    removeParticipantOption: n = false,
    handleRemove: a
  } = e;
  const [r, o] = (0, y.default)(false);
  let l;
  const u = E.fbt._("Remove group from community?", null, {
    hk: "1kAakd"
  });
  if (n) {
    const e = v.default.createElement("div", {
      className: (0, _.default)(C.checkbox, h.uiMargin.end10)
    }, v.default.createElement(i.CheckBox, {
      onChange: o,
      checked: r,
      id: "checkbox-remove-orphan-members"
    }));
    const n = E.fbt._("Remove group participants", null, {
      hk: "2jEii2"
    });
    l = v.default.createElement(v.default.Fragment, null, v.default.createElement(m.TextDiv, {
      xstyle: h.uiPadding.bottom20,
      theme: "muted"
    }, t), v.default.createElement(f.FlexRow, {
      xstyle: [C.checkboxContainer, h.uiPadding.top20, h.uiMargin.end0]
    }, e, n));
  }
  return v.default.createElement(c.ConfirmPopup, {
    onOK: () => a(r),
    okText: E.fbt._("Remove", null, {
      hk: "3xUR13"
    }),
    onCancel: () => p.ModalManager.close(),
    title: u
  }, n ? l : t);
};
const M = (e, t, n, a) => {
  const r = E.fbt._("A community must have at least 1 group. You can remove \"{group_name}\" after adding another group to this community.", [E.fbt._param("group_name", v.default.createElement(d.EmojiText, {
    text: e
  }))], {
    hk: "1ci2bj"
  });
  const l = n != null ? E.fbt._("A community must have at least 1 group. You can remove \"{group_name}\" after a community admin from \"{community_name}\" adds another group to the community.", [E.fbt._param("group_name", v.default.createElement(d.EmojiText, {
    text: e
  })), E.fbt._param("community_name", v.default.createElement(d.EmojiText, {
    text: n
  }))], {
    hk: "1amNJ1"
  }) : E.fbt._("A community must have at least 1 group. You can remove \"{group_name}\" after a community admin adds another group to this community.", [E.fbt._param("group_name", v.default.createElement(d.EmojiText, {
    text: e
  }))], {
    hk: "3BhBjQ"
  });
  p.ModalManager.open(v.default.createElement(c.ConfirmPopup, (0, o.default)({
    testid: "min-subgroup-count-popup",
    onOK: () => p.ModalManager.close()
  }, t && {
    cancelText: E.fbt._("Add group", null, {
      hk: "3Wkqmm"
    }),
    onCancel: a
  }, {
    title: E.fbt._("Cannot remove group from community", null, {
      hk: "3AsH6T"
    })
  }), t ? r : l));
};
exports.handleTooFewSubgroups = M;
exports.handleRemoveSubgroup = e => {
  var t;
  let {
    parentId: n,
    currentSubgroupCount: a,
    removedSubgroupWid: o,
    removedSubgroupTitle: i,
    setLoading: c,
    iAmCommunityAdmin: f = true
  } = e;
  const m = (t = l.ChatCollection.get(n)) === null || t === undefined ? undefined : t.formattedTitle;
  if (a <= 2 && !(0, s.noSubgroupRequirementEnabled)()) {
    return void M(i, f, m, () => {
      p.ModalManager.close();
      u.Cmd.openCommunityHomeManageGroups(n);
    });
  }
  let h;
  const _ = function () {
    var e = (0, r.default)(function* () {
      let e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
      p.ModalManager.close();
      c(true);
      yield (0, g.default)(n, [o], e);
      c(false);
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  if (f) {
    h = E.fbt._("You can remove the \"{group_title}\" group from the community. You can also remove the group and its participants who aren't part of other groups.", [E.fbt._param("group_title", v.default.createElement(d.EmojiText, {
      text: i
    }))], {
      hk: "2CXAM6"
    });
    return void p.ModalManager.open(v.default.createElement(b, {
      removeDisclaimer: h,
      handleRemove: _,
      removeParticipantOption: true
    }));
  }
  h = m != null ? E.fbt._("\"{group_title}\" will no longer be a part of this community \"{community_title}.\" Anyone in this group will still be able to find it from their chats to send messages and make calls.", [E.fbt._param("group_title", v.default.createElement(d.EmojiText, {
    text: i
  })), E.fbt._param("community_title", v.default.createElement(d.EmojiText, {
    text: m
  }))], {
    hk: "p3q2"
  }) : E.fbt._("\"{group_title}\" will no longer be a part of this community. Anyone in this group will still be able to find it from their chats to send messages and make calls.", [E.fbt._param("group_title", v.default.createElement(d.EmojiText, {
    text: i
  }))], {
    hk: "1iKEHi"
  });
  p.ModalManager.open(v.default.createElement(b, {
    removeDisclaimer: h,
    handleRemove: _
  }));
};