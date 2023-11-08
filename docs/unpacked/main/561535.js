var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  const {
    settingType: t
  } = e;
  const n = (0, C.useModelValues)(e.chat, ["id"]);
  const a = (0, C.useModelValues)(e.groupMetadata, ["restrict", "announce", "noFrequentlyForwarded", "membershipApprovalMode", "memberAddMode", "membershipApprovalRequests", "reportToAdminMode", "allowNonAdminSubGroupCreation", "subgroupSuggestions", "joinedSubgroups", "unjoinedSubgroups"]);
  const b = (0, y.useMemo)(() => {
    switch (t) {
      case d.GROUP_SETTING_TYPE.ANNOUNCEMENT:
      case d.GROUP_SETTING_TYPE.RESTRICT:
        return [{
          label: _.fbt._("All participants", null, {
            hk: "2YNQNN"
          }),
          value: 0
        }, {
          label: _.fbt._("Only admins", null, {
            hk: "1shXeT"
          }),
          value: 1
        }];
      case d.GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
        return [{
          label: _.fbt._("All participants", null, {
            hk: "2YNQNN"
          }),
          value: 1
        }, {
          label: _.fbt._("Only admins", null, {
            hk: "1shXeT"
          }),
          value: 0
        }];
      case d.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
        return [{
          label: _.fbt._("Allow", null, {
            hk: "2pdVOn"
          }),
          value: 0
        }, {
          label: _.fbt._("Don't allow", null, {
            hk: "3uBuwQ"
          }),
          value: 1
        }];
      case d.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE:
        return [{
          label: _.fbt._("On", null, {
            hk: "nU82j"
          }),
          value: 1
        }, {
          label: _.fbt._("Off", null, {
            hk: "2U3mCO"
          }),
          value: 0
        }];
      case d.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
        return [{
          label: _.fbt._("On", null, {
            hk: "27ScsS"
          }),
          value: 1
        }, {
          label: _.fbt._("Off", null, {
            hk: "39gguD"
          }),
          value: 0
        }];
      case d.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        return [{
          label: _.fbt._("Everyone", null, {
            hk: "Fa1S0"
          }),
          secondaryLabel: _.fbt._("All community members can add new groups directly.", null, {
            hk: "3JVNtC"
          }),
          value: 1
        }, {
          label: _.fbt._("Only community admins", null, {
            hk: "2vtnnz"
          }),
          secondaryLabel: _.fbt._("Only community admins can add new groups directly.", null, {
            hk: "3AD4du"
          }),
          value: 0
        }];
      default:
        return [];
    }
  }, [t]);
  const M = (0, y.useMemo)(() => {
    const {
      restrict: e,
      announce: n,
      noFrequentlyForwarded: r,
      membershipApprovalMode: o,
      memberAddMode: l,
      reportToAdminMode: i,
      allowNonAdminSubGroupCreation: u
    } = a;
    switch (t) {
      case d.GROUP_SETTING_TYPE.ANNOUNCEMENT:
        if (n) {
          return 1;
        } else {
          return 0;
        }
      case d.GROUP_SETTING_TYPE.RESTRICT:
        if (e) {
          return 1;
        } else {
          return 0;
        }
      case d.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
        if (r) {
          return 1;
        } else {
          return 0;
        }
      case d.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE:
        if (o) {
          return 1;
        } else {
          return 0;
        }
      case d.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
        if (i) {
          return 1;
        } else {
          return 0;
        }
      case d.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        if (u === true) {
          return 1;
        } else {
          return 0;
        }
      case d.GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
        if (l === g.MEMBER_ADD_MODE.ALL_MEMBER_ADD) {
          return 1;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  }, [t, a]);
  const S = (0, y.useMemo)(() => {
    switch (t) {
      case d.GROUP_SETTING_TYPE.ANNOUNCEMENT:
        return _.fbt._("Send messages", null, {
          hk: "2zKwxL"
        });
      case d.GROUP_SETTING_TYPE.MEMBER_ADD_MODE:
        return _.fbt._("Add other participants", null, {
          hk: "42SBfG"
        });
      case d.GROUP_SETTING_TYPE.RESTRICT:
        return _.fbt._("Edit group settings", null, {
          hk: "3gxBT7"
        });
      case d.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED:
        return _.fbt._("Messages forwarded many times", null, {
          hk: "2Neytn"
        });
      case d.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE:
        return _.fbt._("Approve new participants", null, {
          hk: "2plkNN"
        });
      case d.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
        return _.fbt._("Send for admin review", null, {
          hk: "dAudK"
        });
      case d.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
        return _.fbt._("Who can add new groups", null, {
          hk: "1PPiDB"
        });
      default:
        return "";
    }
  }, [t]);
  const T = (0, y.useMemo)(() => t === d.GROUP_SETTING_TYPE.RESTRICT ? (0, h.isPinnedMessagesM1SenderEnabled)() ? _.fbt._("Choose who can change this group's subject, icon and description. They can also edit the disappearing message timer, keep and unkeep messages, and pin and unpin messages.", null, {
    hk: "3SarBg"
  }) : _.fbt._("Choose who can change this group's subject, icon, and description. They can also edit the disappearing message timer and keep or unkeep messages.", null, {
    hk: "2l2jvX"
  }) : t === d.GROUP_SETTING_TYPE.NO_FREQUENTLY_FORWARDED && (0, p.isAdminHfmToggleEnabled)() ? y.default.createElement(y.default.Fragment, null, _.fbt._("Choose to allow participants to send messages to the group that have been forwarded many times.", null, {
    hk: "1PP9Ge"
  }), " ", y.default.createElement(u.ExternalLink, {
    href: (0, s.getFrequentlyForwardedFaqUrl)()
  }, _.fbt._("Learn more", null, {
    hk: "1rcCLt"
  }))) : t === d.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE ? _.fbt._("When turned on, admins must approve anyone who wants to join this group. {=m2}", [_.fbt._implicitParam("=m2", y.default.createElement(u.ExternalLink, {
    href: (0, s.getMembershipApprovalModeFaqUrl)()
  }, _.fbt._("Learn more", null, {
    hk: "hSUU3"
  })))], {
    hk: "3Xn5Kd"
  }) : t === d.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION ? _.fbt._("Members can always suggest groups for admin approval. Community admins can remove any group. {=m1}", [_.fbt._implicitParam("=m1", y.default.createElement(u.ExternalLink, {
    href: (0, s.getMemberAddedGroupsUrl)()
  }, _.fbt._("Learn more", null, {
    hk: "4TKjx"
  })))], {
    hk: "3Ceh93"
  }) : t === d.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE ? _.fbt._("Allow group participants to send messages to group admins for review.", null, {
    hk: "3Kahcb"
  }) : null, [t]);
  const w = function () {
    var e = (0, r.default)(function* (e) {
      if (e === M) {
        return void m.ModalManager.close();
      }
      const r = () => {
        (0, E.setGroupProperty)(n, t, e).catch(() => () => {});
      };
      switch (t) {
        case d.GROUP_SETTING_TYPE.MEMBERSHIP_APPROVAL_MODE:
          {
            const t = a.membershipApprovalRequests.length;
            if (e === 0 && t > 0) {
              if (!(yield new Promise(e => {
                m.ModalManager.open(y.default.createElement(i.ConfirmPopup, {
                  title: _.fbt._("Approve all pending requests to join this group?", null, {
                    hk: "28V1Mu"
                  }),
                  onOK: () => e(true),
                  onCancel: () => e(false)
                }, _.fbt._("If this setting is turned off, all pending requests to join this group will be approved.", null, {
                  hk: "3OsQ8M"
                })));
              }))) {
                break;
              }
              const e = a.participants.length;
              const n = (0, p.getGroupSizeLimit)() - e;
              if (t > n && !(yield function (e, t) {
                return new Promise(n => {
                  m.ModalManager.open(y.default.createElement(i.ConfirmPopup, {
                    title: _.fbt._("Group is full", null, {
                      hk: "nTXRS"
                    }),
                    okText: (0, c.default)("Continue"),
                    onOK: () => n(true),
                    onCancel: () => n(false)
                  }, _.fbt._({
                    "*": "Only {available} of {pending} pending requests will be approved because this group has reached capacity.",
                    _1: "Only {available} of 1 pending request will be approved because this group has reached capacity."
                  }, [_.fbt._plural(t, "pending"), _.fbt._param("available", f.default.n(e))], {
                    hk: "3myKbT"
                  })));
                });
              }(n, t))) {
                break;
              }
            }
            r();
            break;
          }
        case d.GROUP_SETTING_TYPE.REPORT_TO_ADMIN_MODE:
          if (e === 0 && !(yield new Promise(e => {
            m.ModalManager.open(y.default.createElement(i.ConfirmPopup, {
              title: _.fbt._("Clear messages sent for admin review?", null, {
                hk: "3F0kyc"
              }),
              onOK: () => e(true),
              onCancel: () => e(false)
            }, _.fbt._("If this setting is turned off, past messages sent for review will be removed.", null, {
              hk: "1O2HFK"
            })));
          }))) {
            break;
          }
          r();
          break;
        case d.GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION:
          {
            const t = a.subgroupSuggestions.length;
            if (e === 1 && t > 0 && (0, o.memberSuggestedGroupsEnabled)()) {
              if (!(yield new Promise(e => {
                m.ModalManager.open(y.default.createElement(i.ConfirmPopup, {
                  title: _.fbt._("Approve all pending group suggestions?", null, {
                    hk: "94kwl"
                  }),
                  okText: _.fbt._("Approve", null, {
                    hk: "YoNtY"
                  }),
                  onOK: () => e(true),
                  onCancel: () => e(false)
                }, _.fbt._("If this setting is changed to \"Everyone,\" all pending group suggestions will be approved.", null, {
                  hk: "4aNyTm"
                })));
              }))) {
                break;
              }
              const e = a.joinedSubgroups.length + a.unjoinedSubgroups.length;
              const n = (0, o.getParentGroupLinkLimit)() - e;
              if (t > n && !(yield (0, l.confirmCommunityFull)(n, t))) {
                break;
              }
            }
            r();
            break;
          }
        default:
          r();
      }
      m.ModalManager.close();
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return y.default.createElement(v.default, {
    options: b,
    initialValue: M,
    title: S,
    onSelect: e => {
      w(e);
    },
    explanation: T
  });
};
var r = a(require("../vendor/348926.js"));
var o = require("../app/174834.js");
var l = require("./894808.js");
var i = require("../app/103440.js");
var u = require("../app/753233.js");
var s = require("../app/258105.js");
var c = a(require("../app/395767.js"));
var d = require("../app/682144.js");
var f = a(require("../app/932325.js"));
var p = require("../app/97858.js");
var m = require("../app/114850.js");
var h = require("../app/591800.js");
var g = require("../app/98742.js");
var E = require("./527837.js");
var v = a(require("./325512.js"));
var _ = require("../vendor/548360.js");
var y = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = b(t);
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
var C = require("../app/655241.js");
function b(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (b = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}