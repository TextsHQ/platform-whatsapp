var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeaveCommunityModal = function (e) {
  var t;
  var n;
  let {
    chat: a,
    onDeactivateCommunity: v,
    onSuccess: _
  } = e;
  const y = (t = (n = a.groupMetadata) === null || n === undefined ? undefined : n.joinedSubgroups.length) !== null && t !== undefined ? t : 0;
  const C = (0, r.isCommunityCreator)(a);
  const b = E.default.createElement(c.ExternalLink, {
    href: (0, d.getExitCommunityUrl)()
  }, (0, f.default)("Learn more"));
  let M;
  M = a.formattedTitle ? y === 1 ? g.fbt._("By exiting \"{community}\" you will exit and lose access to the group that you belong to in this community.", [g.fbt._param("community", E.default.createElement(h.Name, {
    chat: a
  }))], {
    hk: "CKKcZ"
  }) : g.fbt._("By exiting \"{community}\" you will exit and lose access to all groups that you belong to in this community.", [g.fbt._param("community", E.default.createElement(h.Name, {
    chat: a
  }))], {
    hk: "2euT0P"
  }) : y === 1 ? g.fbt._("By exiting the community you will exit and lose access to the group that you belong to in this community.", null, {
    hk: "3MNxmv"
  }) : g.fbt._("By exiting the community you will exit and lose access to all groups that you belong to in this community.", null, {
    hk: "82bL3"
  });
  const S = E.default.createElement(E.default.Fragment, null, M, " ", b);
  const T = g.fbt._("You cannot exit this community because you created it. If you want to leave, you will have to deactivate the community.", null, {
    hk: "4iBAsd"
  });
  const w = () => {
    (0, s.sendExitCommunity)(a);
    m.ModalManager.close();
    if (!(_ == null)) {
      _();
    }
  };
  if (C !== true) {
    return E.default.createElement(l.ConfirmPopup, {
      testid: "leave-community-popup",
      title: g.fbt._({
        "*": "Exit community and {number_of_groups} groups?",
        _1: "Exit community and 1 group?"
      }, [g.fbt._plural(y, "number_of_groups")], {
        hk: "3JYtfB"
      }),
      onCancel: () => {
        m.ModalManager.close();
        if (!(_ == null)) {
          _();
        }
      },
      onOK: w,
      okText: g.fbt._("Exit", null, {
        hk: "3otZ8O"
      })
    }, S);
  }
  return E.default.createElement(l.ConfirmPopup, {
    testid: "leave-community-as-creator-popup",
    cancelText: g.fbt._("Deactivate instead", null, {
      hk: "4BJ4mh"
    }),
    onCancel: () => {
      m.ModalManager.close();
      if (!(_ == null)) {
        _();
      }
      if (v) {
        v();
      } else {
        u.DrawerManager.openDrawerLeft(E.default.createElement(i.DeactivateCommunityDrawerLoadable, {
          onBack: () => o.Cmd.openCommunityHome(a.id),
          chat: a
        }), {
          transition: "flow-transition-drawer-push",
          focusType: p.FocusType.TABBABLE
        });
      }
    },
    onOK: () => m.ModalManager.close()
  }, T);
};
var r = require("../app/394164.js");
var o = require("../app/780549.js");
var l = require("../app/103440.js");
var i = require("./243999.js");
var u = require("../app/900316.js");
var s = require("../app/887440.js");
var c = require("../app/753233.js");
var d = require("../app/258105.js");
var f = a(require("../app/395767.js"));
var p = require("../app/299950.js");
var m = require("../app/114850.js");
var h = require("../app/21645.js");
var g = require("../vendor/548360.js");
var E = a(require("../vendor/667294.js"));