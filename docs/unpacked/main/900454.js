var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/291966.js"));
var l = a(require("../vendor/441609.js"));
var i = a(require("../vendor/763105.js"));
var u = require("../app/287461.js");
var s = require("../app/345260.js");
var c = require("../app/547979.js");
var d = require("../app/351053.js");
var f = a(require("../app/345371.js"));
var p = a(require("./557294.js"));
var m = a(require("./227389.js"));
var h = require("../app/396574.js");
var g = require("../app/780549.js");
var E = require("./474103.js");
var v = require("../app/174834.js");
var _ = require("../app/877171.js");
var y = require("../app/103440.js");
var C = require("../app/177938.js");
var b = require("../app/572002.js");
var M = require("../app/660666.js");
var S = require("./657866.js");
var T = require("../app/306703.js");
var w = a(require("./908081.js"));
var A = a(require("./324093.js"));
var P = require("./626194.js");
var O = require("../app/305521.js");
var k = require("./811720.js");
var D = a(require("../app/395767.js"));
var I = require("../app/581354.js");
var R = a(require("./964223.js"));
var N = a(require("./570834.js"));
var x = require("../app/690495.js");
var L = a(require("../app/988410.js"));
var j = a(require("../app/335540.js"));
var B = a(require("../app/667845.js"));
var F = require("../app/862159.js");
var G = require("../app/81644.js");
var U = a(require("../app/932325.js"));
var W = require("../app/447164.js");
var H = require("../app/97858.js");
var V = require("../app/114850.js");
var q = require("../app/21645.js");
var Y = require("./276012.js");
var z = require("./608456.js");
var K = require("./435595.js");
var Q = require("./27872.js");
var X = require("../app/956113.js");
var Z = require("../app/180519.js");
var J = require("../app/625786.js");
var $ = require("../app/390737.js");
var ee = require("../app/454905.js");
var te = require("../app/676345.js");
var ne = a(require("./399506.js"));
var ae = a(require("../app/625903.js"));
var re = require("../app/459857.js");
var oe = a(require("../app/844453.js"));
var le = require("../vendor/548360.js");
var ie = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = me(t);
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
var ue = a(require("../app/156720.js"));
var se = require("./574396.js");
var ce = a(require("./847116.js"));
var de = a(require("../app/637660.js"));
var fe = a(require("./794305.js"));
var pe = a(require("../app/895851.js"));
function me(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (me = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const he = {
  inputarea: {
    display: "l7jjieqr",
    width: "ln8gz9je",
    height: "bvcnfjzh",
    paddingTop: "ppypbuwx",
    paddingEnd: "f9ovudaz",
    paddingBottom: "s8gyl5p1",
    paddingStart: "gx1rr48f",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    fontSize: "bze30y65",
    lineHeight: "k9cretck",
    color: "mfzfak1c",
    verticalAlign: "fewfhwl7",
    backgroundColor: "thr4l2wc",
    borderTop: "q4zabkcz",
    borderEnd: "jkanexlp",
    borderBottom: "thn59n0e",
    borderStart: "nsmrnv0a",
    outline: "gk6igrwd"
  },
  spinner: {
    display: "p357zi0d",
    justifyContent: "ac2vgrno"
  },
  search: {
    paddingTop: "mw9hwy0h",
    paddingEnd: "ixsqo53d",
    paddingBottom: "ekpn4oxx",
    paddingStart: "iy3dfvyp",
    marginTop: "tt8xd2xn",
    marginEnd: "jnwc1y2a",
    marginBottom: "mpdn4nr2",
    marginStart: "svoq16ka",
    backgroundColor: "ihvf49ua"
  },
  subgroups: {
    paddingTop: "b7n2qyd4",
    paddingBottom: "ekpn4oxx",
    paddingEnd: "ixsqo53d",
    paddingStart: "iy3dfvyp",
    backgroundColor: "ihvf49ua",
    overflowX: "ormcsqwh",
    whiteSpace: "le5p0ye3"
  },
  icon: {
    marginEnd: "mw4yctpw"
  },
  subgroup: {
    borderTopStartRadius: "qzcg2mmc",
    borderTopEndRadius: "pxhxxqu1",
    borderBottomEndRadius: "nx7izn6y",
    borderBottomStartRadius: "ao0w5p1o",
    backgroundColor: "i16jpgpt",
    paddingEnd: "btzf6ewn",
    paddingStart: "nqtxkp62",
    paddingTop: "fbgy3m38",
    paddingBottom: "oq31bsqd"
  },
  selectedSubgroup: {
    backgroundColor: "evq4wxsl",
    color: "dxz5bmu7"
  },
  selectAllIcon: {
    color: "s4k44ver"
  },
  inputLine: {
    position: "g0rxnol2",
    width: "ln8gz9je",
    minHeight: "g4oj0cdv",
    maxHeight: "f0mh0h6e",
    overflowY: "ag5g9lrv",
    fontSize: "bze30y65",
    fontWeight: "e1gr2w1z",
    lineHeight: "r5qsrrlp",
    backgroundColor: "thr4l2wc",
    borderTop: "q4zabkcz",
    borderEnd: "jkanexlp",
    borderStart: "nsmrnv0a",
    borderBottom: "ob9ouq0z",
    outline: "gk6igrwd",
    transitionProperty: "nrvfj28n",
    transitionDuration: "hswow7x1",
    transitionTimingFunction: "bkifpc9x"
  },
  inputareaSizer: {
    position: "snyj76hw",
    visibility: "kojwoqec"
  },
  contacts: {
    position: "g0rxnol2",
    flexGrow: "ggj6brxn",
    flexShrink: "m0h2a7mj",
    flexBasis: "rjo8vgbg",
    overflowX: "gfz4du6o",
    overflowY: "ag5g9lrv",
    backgroundColor: "ihvf49ua"
  },
  drawerSection: {
    zIndex: "b9fczbqn",
    display: "p357zi0d",
    flexDirection: "f8m0rgwh",
    alignItems: "gndfcl4n",
    justifyContent: "j1p1mz06",
    paddingTop: "a4bywxmn",
    paddingEnd: "f9ovudaz",
    paddingBottom: "jzp2c175",
    paddingStart: "gx1rr48f",
    textAlign: "qfejxiq4"
  },
  paragraph: {
    paddingTop: "tvsr5v2h",
    paddingEnd: "h1a80dm5",
    paddingBottom: "przvwfww",
    paddingStart: "sta02ykp",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7",
    textAlign: "qfejxiq4",
    color: "pm5hny62",
    overflowWrap: "fd365im1"
  }
};
const ge = (0, J.genId)("max_participant_toast");
function Ee(e, t) {
  const {
    participants: n = [],
    onBack: a,
    onContinue: me,
    communityName: Ee,
    parentGroupId: ve,
    initialSelectedSubgroup: _e
  } = e;
  const ye = (0, pe.default)();
  const Ce = (0, de.default)(() => new N.default());
  const be = (0, ie.useRef)(null);
  const Me = (0, ie.useRef)(null);
  const Se = (0, ie.useRef)(null);
  const Te = (0, ie.useRef)(null);
  const [we, Ae] = (0, ie.useState)(_e);
  const [Pe, Oe] = (0, ie.useState)("");
  const [ke, De] = (0, ie.useState)(n);
  const [Ie, Re] = (0, ie.useState)(true);
  const [Ne, xe] = (0, ie.useState)(false);
  const Le = Boolean(ve) && (0, v.subgroupFilterEnabled)();
  const je = Boolean(!we && ve && (0, v.communitiesEnabled)() && (0, v.communityGroupDirectoryEnabled)());
  const Be = (0, u.getABPropConfigValue)("web_add_non_contacts_to_groups_enabled");
  const Fe = ve ? d.ChatCollection.get(ve) : null;
  const Ge = (0, E.getCommunityAnnouncementGroup)(Fe == null ? undefined : Fe.groupMetadata);
  const {
    members: Ue
  } = (0, se.useCommunityMembers)(Fe, Ge);
  const {
    joinedSubgroups: We
  } = (0, ce.default)(Fe == null ? undefined : Fe.groupMetadata);
  const He = (0, ie.useMemo)(() => {
    const e = [];
    if (!Le || !We.length) {
      return e;
    }
    const t = We.map(e => d.ChatCollection.assertGet(e)).filter(e => {
      var t;
      return ((t = e.groupMetadata) === null || t === undefined ? undefined : t.groupType) !== F.GroupType.LINKED_ANNOUNCEMENT_GROUP;
    }).sort(f.default);
    if (_e) {
      e.push(d.ChatCollection.assertGet(_e));
    }
    t.forEach(t => {
      if (!t.id.equals(_e)) {
        e.push(t);
      }
    });
    return e;
  }, [Le, We, _e]);
  const Ve = () => {
    L.default.shouldIndicateFocus();
    j.default.focus(Se.current);
  };
  const qe = e => {
    var t;
    var n;
    if (!(e.repeat || ((t = Se.current) === null || t === undefined ? undefined : t.selectionStart) !== 0)) {
      if (be.current) {
        e.preventDefault();
        e.stopPropagation();
        if (!((n = be.current) === null || n === undefined)) {
          n.focusLast();
        }
      }
    }
  };
  const Ye = () => {
    const e = (() => {
      const e = B.default.filter(e => {
        const t = e.participants.filter(e => !(0, M.getIsMe)(e.contact));
        if (t.length === ke.length && e.subject === "") {
          const e = ke.sort((e, t) => e.id.toString().localeCompare(t.id.toString()));
          const n = t.sort((e, t) => e.id.toString().localeCompare(t.id.toString()));
          for (let t = 0; t < e.length; t++) {
            if (!e[t].id.isSameAccount(n[t].id)) {
              return false;
            }
          }
          return true;
        }
        return false;
      });
      if (e.length > 0) {
        return e[0].id;
      }
    })();
    if (!ve && e) {
      const t = {
        text: le.fbt._("Create New Group", null, {
          hk: "4f3rJf"
        }),
        onClick: () => {
          V.ModalManager.close();
          me(ke, false);
        }
      };
      V.ModalManager.open(ie.default.createElement(y.ConfirmPopup, {
        title: le.fbt._("Group Already Exists", null, {
          hk: "2GKQke"
        }),
        onOK: () => {
          V.ModalManager.close();
          (0, I.findChat)(e, "existingUnnamedGroup").then(e => {
            g.Cmd.openChatBottom(e).then(t => {
              if (t) {
                _.ComposeBoxActions.focus(e);
                g.Cmd.endFlow();
              }
            });
          });
        },
        onCancel: () => V.ModalManager.close(),
        okText: le.fbt._("View Group", null, {
          hk: "2RF9J5"
        }),
        cancelText: le.fbt._("Cancel", null, {
          hk: "1eNToY"
        }),
        extraButtonProps: t
      }, le.fbt._("You already have this group without a name. To create a new group, give it a name.", null, {
        hk: "3OmBJp"
      })));
    } else {
      me(ke, !ve && ke.length <= (0, u.getABPropConfigValue)("ugc_participant_limit"));
    }
  };
  const ze = e => {
    const t = (0, H.getGroupSizeLimit)();
    if (ke.length >= t) {
      const e = le.fbt._("Can't add more than {max} participants", [le.fbt._param("max", t)], {
        hk: "3Vkijk"
      });
      $.ToastManager.open(ie.default.createElement(J.Toast, {
        msg: e,
        id: ge
      }));
    } else {
      Oe("");
      De(ke.concat(e));
      Re(true);
    }
  };
  const {
    contacts: Ke,
    communityDirectory: Qe
  } = (() => {
    let e;
    let t = [];
    if (we && Le) {
      const t = B.default.assertGet(we);
      const n = [];
      t.participants.forEach(e => {
        if (!(0, M.getIsMe)(e.contact)) {
          n.push(e.contact);
        }
      });
      e = (0, o.default)(n, ke);
    } else {
      const n = (0, W.isLidContactAddToGroupEnabled)();
      const a = C.ContactCollection.getFilteredContacts({
        includeLidContacts: n
      });
      let r = [];
      if (Ue && je) {
        r = Ue.filter(e => {
          let {
            id: t
          } = e;
          return !(0, re.isMeAccount)(t) && !t.isLid();
        }).sort(b.ContactComparator);
        t = (0, o.default)(r, ke);
      }
      e = (0, o.default)(a, [...ke, ...r]);
    }
    let n = Pe;
    if (!n) {
      return {
        contacts: e,
        communityDirectory: t
      };
    }
    n = U.default.accentFold(n);
    const a = (0, z.numberSearch)(n);
    const r = e => e.searchMatch(n, a);
    return {
      contacts: e.filter(r),
      communityDirectory: t.filter(r)
    };
  })();
  const Xe = Ke.length === 0 && Qe.length === 0;
  const {
    unknownContactInfo: Ze,
    loading: Je,
    error: $e,
    onRetry: et
  } = (0, fe.default)({
    phoneNumber: Pe,
    shouldStartSearch: Xe && Be
  });
  const tt = (e, t) => {
    if (ke.find(e => e.id.equals(t.id))) {
      (e => {
        De((0, i.default)(ke, t => !e.id.equals(t.id)));
        Re(true);
      })(t);
    } else if (t.isContactBlocked) {
      V.ModalManager.open(ie.default.createElement(y.ConfirmPopup, {
        title: le.fbt._("Add blocked contact", null, {
          hk: "3AxXKq"
        }),
        onOK: () => {
          (e => {
            xe(true);
            (0, c.unblockContact)(e).then(() => {
              if (!ye.aborted) {
                ze(e);
                xe(false);
              }
            }).catch(() => {
              xe(false);
            });
          })(t);
          V.ModalManager.close();
        },
        onCancel: () => V.ModalManager.close(),
        okText: le.fbt._("Yes", null, {
          hk: "12b9aE"
        }),
        cancelText: le.fbt._("No", null, {
          hk: "4G38V6"
        })
      }, le.fbt._("The contact you have selected is blocked. Would you like to unblock them and add them to the group?", null, {
        hk: "3i4hjJ"
      })));
    } else {
      ze(t);
    }
  };
  let nt;
  (0, ie.useEffect)(() => {
    if (Se.current && Ie) {
      j.default.focus(Se.current);
    }
  }, [ke, Ie]);
  if (Ne) {
    nt = ie.default.createElement("div", {
      className: (0, ue.default)(he.spinner)
    }, ie.default.createElement(X.Spinner, {
      stroke: 6,
      size: 24
    }));
  } else if (ke.length) {
    nt = ie.default.createElement(K.Round, {
      testid: "group-participants-btn",
      onClick: Ye,
      label: (0, D.default)("Next")
    }, ie.default.createElement(s.ArrowForwardIcon, {
      directional: true
    }));
  }
  let at = Be ? (0, D.default)("Search name or number") : le.fbt._("Type contact name", null, {
    hk: "qxANo"
  });
  if (ke.length) {
    at = " ";
  }
  const rt = {
    down: e => {
      var t;
      if (Me.current) {
        e.preventDefault();
        e.stopPropagation();
        L.default.shouldIndicateFocus();
        if (!((t = Me.current) === null || t === undefined)) {
          t.focusFirst();
        }
      }
    },
    enter: Pe ? e => {
      var t;
      e.preventDefault();
      e.stopPropagation();
      const n = (t = Qe == null ? undefined : Qe[0]) !== null && t !== undefined ? t : Ke == null ? undefined : Ke[0];
      if (n) {
        tt(0, n);
      }
      if (Ze == null ? undefined : Ze.wid) {
        tt(0, C.ContactCollection.gadd(Ze.wid));
      }
    } : (ke == null ? undefined : ke.length) ? Ye : () => {},
    up: qe
  };
  let ot;
  rt[U.default.LR("left", "right")] = qe;
  ot = Xe ? Je ? (0, k.SearchingNonContact)() : $e ? (0, k.SearchingNonContactError)((0, S.getErrorStr)($e), et) : Ze ? ie.default.createElement(ne.default, {
    contactInfo: Ze,
    onUnknownContactClick: function () {
      var e = (0, r.default)(function* (e, t) {
        var n;
        var a;
        return tt(0, (n = (a = Ze.chat) === null || a === undefined ? undefined : a.contact) !== null && n !== undefined ? n : C.ContactCollection.gadd(t));
      });
      return function () {
        return e.apply(this, arguments);
      };
    }()
  }) : (0, k.SearchContacts)() : ie.default.createElement(p.default, {
    ref: Me,
    flatListController: Ce.current,
    contacts: Ke,
    separateContacts: {
      contacts: Qe,
      header: le.fbt._("People also in {community-name}", [le.fbt._param("community-name", Ee)], {
        hk: "1VrgAs"
      })
    },
    onClick: tt,
    onFocusSearch: Ve,
    showPersonGroupDivisionHeader: je
  });
  const lt = Je ? ie.default.createElement(ae.default, {
    onClick: () => {
      Oe("");
    },
    xstyle: te.uiPadding.end2
  }, ie.default.createElement(X.Spinner, {
    size: 20,
    stroke: 5,
    color: "highlight"
  })) : null;
  const it = Le ? ie.default.createElement("div", {
    className: (0, ue.default)(he.subgroups)
  }, He.map((e, t) => ie.default.createElement(ae.default, {
    onClick: () => (e => {
      if (e.equals(we)) {
        Ae(undefined);
      } else {
        Ae(e);
      }
    })(e.id),
    key: e.id.toString(),
    xstyle: [he.subgroup, t + 1 < He.length && te.uiMargin.end6, e.id.equals(we) && he.selectedSubgroup]
  }, ie.default.createElement(x.FlexRow, null, ie.default.createElement(Y.PeopleIcon, {
    width: 20,
    height: 20,
    xstyle: he.icon
  }), ie.default.createElement(q.Name, {
    chat: e
  }))))) : null;
  const ut = we && Le ? ie.default.createElement(ae.default, {
    onClick: () => {
      const e = Ke.filter(e => !e.isContactBlocked);
      const t = (0, H.getGroupSizeLimit)();
      if (ke.length + e.length >= t) {
        const e = le.fbt._("Can't add more than {max} participants", [le.fbt._param("max", t)], {
          hk: "3Vkijk"
        });
        $.ToastManager.open(ie.default.createElement(J.Toast, {
          msg: e,
          id: ge
        }));
      } else {
        Oe("");
        De(ke.concat(e));
        Re(true);
        if (e.length !== Ke.length) {
          V.ModalManager.open(ie.default.createElement(y.ConfirmPopup, {
            title: le.fbt._("Blocked contacts", null, {
              hk: "DOWxR"
            }),
            onOK: () => {
              V.ModalManager.close();
            }
          }, le.fbt._("Some contacts you have selected are blocked. Please select them individually if you would like to unblock them and add them to the group.", null, {
            hk: "3Py3uw"
          })));
        }
      }
    }
  }, ie.default.createElement(Q.SelectAllIcon, {
    title: le.fbt._("Select all contacts", null, {
      hk: "2HsWZ1"
    }),
    xstyle: he.selectAllIcon
  })) : null;
  const st = Ee != null && ke.length ? ie.default.createElement(Z.TextParagraph, {
    xstyle: he.paragraph
  }, le.fbt._("Participants will also be added to the community \"{community-name}\" and its announcement group.", [le.fbt._param("community-name", ie.default.createElement(O.EmojiText, {
    text: Ee
  }))], {
    hk: "26Jp8c"
  })) : null;
  return ie.default.createElement(w.default, {
    ref: t,
    testid: "new-group-drawer-participants"
  }, ie.default.createElement(P.DrawerHeader, {
    title: le.fbt._("Add group participants", null, {
      hk: "2fgYHr"
    }),
    type: (0, ee.topMenuRedesignEnabled)() ? P.DRAWER_HEADER_TYPE.SMALL : P.DRAWER_HEADER_TYPE.LARGE,
    onBack: () => {
      a();
    }
  }), ie.default.createElement(A.default, null, ie.default.createElement("div", {
    className: (0, ue.default)(he.search)
  }, ie.default.createElement("div", null, ie.default.createElement(G.HotKeys, {
    handlers: rt,
    className: (0, ue.default)(he.inputLine, te.uiPadding.top6, te.uiPadding.bottom0, te.uiPadding.horiz2)
  }, ie.default.createElement("div", {
    "data-list-scroll-container": true
  }, ie.default.createElement(m.default, {
    ref: be,
    theme: "list-names",
    contacts: ke,
    onDelete: (e, t) => {
      const n = (0, i.default)(ke, e => !e.id.equals(t.id));
      De(n);
      Re(!n.length);
    },
    onFocusSearch: Ve
  })), ie.default.createElement(x.FlexRow, null, ie.default.createElement("input", {
    className: (0, h.classnamesConvertMeToStylexPlease)((0, ue.default)(he.inputarea), T.SELECTABLE_INPUT_CSS_CLASS),
    ref: Se,
    placeholder: at,
    onKeyDown: e => {
      if (!(e.key !== "Backspace" || Pe || (0, l.default)(ke))) {
        e.preventDefault();
        De(ke.slice(0, ke.length - 1));
        Re(true);
      }
    },
    onChange: e => {
      Oe(e.target.value);
    },
    value: Pe,
    type: "text"
  }), ie.default.createElement("span", {
    className: (0, ue.default)(he.inputareaSizer),
    ref: Te
  }, Pe), ut, lt)))), it, ie.default.createElement(R.default, {
    className: (0, ue.default)(he.contacts),
    flatListControllers: [Ce.current]
  }, ot), ie.default.createElement(oe.default, {
    transitionName: "btn",
    className: (0, ue.default)(he.drawerSection)
  }, nt, st)));
}
var ve = (0, ie.forwardRef)(Ee);
exports.default = ve;