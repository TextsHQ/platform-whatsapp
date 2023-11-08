var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellRequest = function (e) {
  const {
    image: t,
    primary: n,
    secondary: a,
    secondaryTestId: P,
    signals: O,
    state: D,
    hoverEnabled: I = false,
    onClick: R,
    onApprove: N,
    onReject: x,
    onError: L
  } = e;
  const j = (0, _.useIsDarkTheme)();
  const {
    description: B,
    participantCountText: F
  } = O != null ? O : {};
  const {
    isHovered: G,
    onMouseEnter: U,
    onMouseLeave: W
  } = (0, A.default)();
  const H = !!I && G;
  const [V, q] = (0, T.useState)(false);
  const Y = (0, T.useCallback)(e => {
    if (e) {
      q(e.isExpanded);
    }
  }, []);
  let z = [];
  if (D) {
    switch (D) {
      case o.State.Pending:
        z = [T.default.createElement(m.Round, {
          key: "reject",
          label: S.fbt._("Reject", null, {
            hk: "4x38MS"
          }),
          theme: m.RoundTheme.Reject,
          onClick: x,
          isHovered: H
        }, T.default.createElement(M.XIcon, {
          width: 24,
          height: 24
        }))];
        if (N) {
          z.push(T.default.createElement(m.Round, {
            key: "approve",
            label: S.fbt._("Approve", null, {
              hk: "3aFl2F"
            }),
            theme: m.RoundTheme.Approve,
            onClick: N,
            isHovered: H
          }, T.default.createElement(l.CheckmarkIcon, {
            width: 24,
            height: 24
          })));
        }
        break;
      case o.State.Loading:
        z = [T.default.createElement(h.Spinner, {
          key: "loading",
          size: 32,
          stroke: 3
        })];
        break;
      case o.State.Approved:
        z = [T.default.createElement(E.Tag, {
          key: "approved",
          xstyle: [k.tag, k.approved, H && k.approvedHover]
        }, S.fbt._("Approved", null, {
          hk: "4b6ken"
        }))];
        break;
      case o.State.Rejected:
        z = [T.default.createElement(E.Tag, {
          key: "rejected",
          xstyle: [k.tag, k.rejected, H && k.rejectedHover]
        }, S.fbt._("Rejected", null, {
          hk: "1wJGsk"
        }))];
        break;
      case o.State.Canceled:
        z = [T.default.createElement(E.Tag, {
          key: "canceled",
          xstyle: [k.tag, k.rejected, H && k.rejectedHover]
        }, S.fbt._("Canceled", null, {
          hk: "197aqw"
        }))];
        break;
      case o.State.Error:
        z = [T.default.createElement(C.default, {
          key: "error",
          onClick: L
        }, T.default.createElement(r.AlertErrorIcon, {
          width: 20,
          height: 20
        }))];
    }
  }
  return T.default.createElement(c.FlexColumn, null, T.default.createElement(C.default, {
    xstyle: [k.row, y.uiPadding.horiz24, y.uiPadding.vert16, H && k.rowHover, !R && k.notClickable],
    onClick: R,
    onMouseEnter: U,
    onMouseLeave: W,
    testid: "row"
  }, T.default.createElement(c.FlexRow, {
    align: "center",
    justify: "all"
  }, T.default.createElement(d.default, {
    xstyle: k.image
  }, t), T.default.createElement(d.default, {
    justify: "start",
    grow: 1,
    xstyle: [k.info, y.uiPadding.horiz12]
  }, T.default.createElement(c.FlexColumn, null, n, T.default.createElement(v.TextDiv, {
    size: "14",
    color: "secondary",
    xstyle: k.text,
    testid: P
  }, a))), T.default.createElement(d.default, {
    xstyle: k.actions
  }, T.default.createElement(c.FlexRow, {
    justify: "end",
    xstyle: [D === o.State.Error && y.uiPadding.end10, D === o.State.Loading && y.uiPadding.end4]
  }, z.map((e, t) => T.default.createElement(d.default, {
    key: `${D != null ? D : ""}-${t}`,
    xstyle: t < z.length - 1 && y.uiPadding.end8
  }, e)))))), B || F != null ? T.default.createElement(c.FlexRow, {
    xstyle: k.row
  }, T.default.createElement(d.default, {
    xstyle: [k.signalItem, y.uiPadding.start12],
    grow: 1
  }, T.default.createElement("div", {
    className: (0, w.default)(y.uiPadding.all12, y.uiMargin.bottom16, y.uiMargin.top4, y.uiMargin.horiz24, k.signalContainer)
  }, B ? T.default.createElement(T.default.Fragment, null, T.default.createElement(v.TextDiv, {
    size: "13",
    xstyle: [k.descriptionTitle, y.uiMargin.bottom4]
  }, B.title), T.default.createElement("section", {
    className: (0, w.default)(V && k.expandedDescription)
  }, T.default.createElement(s.ExpandableText, {
    ref: Y,
    text: B.content,
    textLimit: 100
  }, e => {
    let {
      textLimit: t
    } = e;
    return T.default.createElement(u.EmojiText, {
      text: B.content,
      textLimit: t,
      xstyle: k.descriptionContent,
      inferLinesDirection: true,
      multiline: true,
      formatters: f.UntrustedGroupDesc({
        bulletPointsEnabled: (0, i.richCommunityDescriptionEnabled)()
      })
    });
  }))) : null, F != null ? T.default.createElement(c.FlexRow, {
    align: "center",
    justify: "start",
    xstyle: B && y.uiPadding.top4
  }, T.default.createElement(p.PeopleIcon, {
    height: 20,
    width: 20,
    color: j ? g.SvgColorProp.SECONDARY : g.SvgColorProp.GRAY,
    xstyle: y.uiPadding.end4
  }), T.default.createElement(b.WDSTextMuted, null, F)) : null))) : null);
};
var r = require("./640998.js");
var o = require("../app/921264.js");
var l = require("../app/731971.js");
var i = require("../app/174834.js");
var u = require("../app/305521.js");
var s = require("./999649.js");
var c = require("../app/690495.js");
var d = a(require("../app/469733.js"));
var f = O(require("../app/675886.js"));
var p = require("./276012.js");
var m = require("./435595.js");
var h = require("../app/956113.js");
var g = require("../app/220584.js");
var E = require("./533426.js");
var v = require("../app/180519.js");
var _ = require("../app/667738.js");
var y = require("../app/676345.js");
var C = a(require("../app/625903.js"));
var b = require("../app/851488.js");
var M = require("../app/561912.js");
var S = require("../vendor/548360.js");
var T = O(require("../vendor/667294.js"));
var w = a(require("../app/156720.js"));
var A = a(require("./478636.js"));
function P(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (P = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function O(e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = P(t);
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
}
const k = {
  row: {
    width: "ln8gz9je",
    minHeight: "nhwamvof",
    backgroundColor: "ihvf49ua",
    textAlign: "ljrqcn24"
  },
  rowHover: {
    ":hover": {
      backgroundColor: "os03hap6"
    }
  },
  image: {
    minWidth: "bvz86wrv"
  },
  info: {
    lineHeight: "r5qsrrlp"
  },
  actions: {
    minWidth: "prstqlfy"
  },
  text: {
    maxWidth: "laorhtua",
    whiteSpace: "le5p0ye3",
    textOverflow: "lhj4utae",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  tag: {
    fontSize: "f8jlpxt4",
    lineHeight: "e4qy2s3t",
    paddingTop: "eujn52yf",
    paddingEnd: "ft2m32mm",
    paddingBottom: "ckm995li",
    paddingStart: "nu34rnf1",
    height: "hpdpob1j"
  },
  approved: {
    backgroundColor: "rr4x56ni",
    color: "lcen7ztn",
    borderTopColor: "kj4uqrhe",
    borderEndColor: "oegm8fv3",
    borderBottomColor: "svaoiiyi",
    borderStartColor: "psu04wdc"
  },
  approvedHover: {
    backgroundColor: "k144jibt",
    color: "r2tlnwpb",
    borderTopColor: "pv3vtuii",
    borderEndColor: "t5v5bxpj",
    borderBottomColor: "m2dig2b3",
    borderStartColor: "ejw0wqpm"
  },
  rejected: {
    backgroundColor: "jcupx58r",
    color: "oqukxxk7",
    borderTopColor: "ov3ofjdl",
    borderEndColor: "q0aiiolu",
    borderBottomColor: "l1hsp2et",
    borderStartColor: "s3iv1jvf"
  },
  rejectedHover: {
    backgroundColor: "qzdlxc9r",
    color: "spqnsr0h",
    borderTopColor: "qbtchylx",
    borderEndColor: "cb68oqb6",
    borderBottomColor: "erpi6agv",
    borderStartColor: "k5fusljf"
  },
  notClickable: {
    cursor: "bx7g2weo"
  },
  signalItem: {
    marginStart: "al0ejoxj"
  },
  signalContainer: {
    borderTopStartRadius: "ho9ovbg7",
    borderTopEndRadius: "tcg15ap9",
    borderBottomEndRadius: "c5wy1lv0",
    borderBottomStartRadius: "bqysl6j9",
    backgroundColor: "i16jpgpt",
    fontSize: "f8jlpxt4"
  },
  descriptionTitle: {
    color: "jq3rn4u7"
  },
  expandedDescription: {
    maxHeight: "o62obdte",
    overflowY: "rpvcun8f",
    animationName: "mlel4ivs",
    animationDuration: "eb9g83lr"
  },
  descriptionContent: {
    lineHeight: "e4qy2s3t"
  }
};