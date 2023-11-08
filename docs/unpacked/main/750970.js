var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageCommunityEmptySubgroupWelcome = function (e) {
  var t;
  const {
    templateParams: n,
    subgroupChat: a
  } = e;
  const [M, S, T] = n;
  const w = l.ChatCollection.get(M);
  const A = (t = w == null ? undefined : w.formattedTitle) !== null && t !== undefined ? t : S;
  const P = T != null ? T : a.formattedTitle;
  const O = w ? y.default.createElement(d.FlexRow, {
    justify: "center",
    align: "center"
  }, y.default.createElement(u.default, {
    chat: a,
    size: 49,
    parentGroupChat: w
  })) : null;
  const k = A ? y.default.createElement(c.EmojiText, {
    text: _.fbt._("It was added to the community \"{community_name}\"", [_.fbt._param("community_name", A)], {
      hk: "ufYow"
    })
  }) : _.fbt._("It was added to the community", null, {
    hk: "UrC4A"
  });
  return y.default.createElement(y.default.Fragment, null, y.default.createElement("div", {
    className: (0, C.default)(g.uiPadding.horiz12, g.uiPadding.vert12, b.border)
  }, O, y.default.createElement(d.FlexRow, {
    className: (0, C.default)(g.uiMargin.top8, g.uiMargin.bottom4),
    justify: "center"
  }, y.default.createElement(v.WDSTextTitle, {
    color: "primary",
    weight: "medium"
  }, y.default.createElement(c.EmojiText, {
    text: _.fbt._("You created the group: {subgroup_name}", [_.fbt._param("subgroup_name", P)], {
      hk: "1C3Kpe"
    })
  }))), y.default.createElement(d.FlexRow, {
    justify: "center"
  }, y.default.createElement(v.WDSTextSmall, null, k))), y.default.createElement(E.default, {
    xstyle: [b.button, g.uiMargin.vert20],
    onClick: () => {
      (0, i.groupOpenAddParticipantFlow)((0, r.default)(a.groupMetadata, "subgroupChat.groupMetadata"), a, A);
    }
  }, y.default.createElement(d.FlexRow, {
    align: "center",
    justify: "end",
    xstyle: g.uiMargin.end8
  }, y.default.createElement(o.AddUserIcon, {
    color: h.SvgColorProp.TEAL_LIGHTER,
    height: 20
  })), y.default.createElement("span", {
    className: (0, C.default)(b.buttonText)
  }, _.fbt._("Add participants", null, {
    hk: "392H10"
  }))), y.default.createElement(E.default, {
    xstyle: [b.button, g.uiMargin.vert20],
    onClick: () => {
      const e = y.default.createElement(p.default, {
        chat: a,
        groupMetadata: (0, r.default)(a.groupMetadata, "subgroupChat.groupMetadata"),
        onClose: () => s.DrawerManager.closeDrawerRight()
      });
      s.DrawerManager.openDrawerRight(y.default.createElement(f.GroupInviteLinkDrawerLoadable, {
        chat: a,
        groupMetadata: (0, r.default)(a.groupMetadata, "subgroupChat.groupMetadata"),
        onBack: () => s.DrawerManager.closeDrawerRight(),
        onGroupSettings: () => s.DrawerManager.openDrawerRight(e)
      }));
    }
  }, y.default.createElement(d.FlexRow, {
    align: "center",
    justify: "end",
    xstyle: g.uiMargin.end8
  }, y.default.createElement(m.LinkIcon, {
    color: h.SvgColorProp.TEAL_LIGHTER,
    height: 20
  })), y.default.createElement("span", {
    className: (0, C.default)(b.buttonText)
  }, _.fbt._("Invite to group via link", null, {
    hk: "xFcAR"
  }))));
};
var r = a(require("../app/670983.js"));
var o = require("./570588.js");
var l = require("../app/351053.js");
var i = require("./692310.js");
var u = a(require("./491248.js"));
var s = require("../app/900316.js");
var c = require("../app/305521.js");
var d = require("../app/690495.js");
var f = require("./408256.js");
var p = a(require("./422325.js"));
var m = require("./406506.js");
var h = require("../app/220584.js");
var g = require("../app/676345.js");
var E = a(require("../app/625903.js"));
var v = require("../app/851488.js");
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
var C = a(require("../app/156720.js"));
const b = {
  border: {
    borderBottomWidth: "oteuebma",
    borderBottomStyle: "cmcp1to6",
    borderBottomColor: "nc5t0wl8"
  },
  button: {
    display: "p357zi0d",
    width: "ln8gz9je",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n"
  },
  buttonText: {
    color: "fsk8o631",
    minWidth: "ktfrpxia",
    lineHeight: "tkq7s68q",
    fontSize: "f8jlpxt4"
  }
};