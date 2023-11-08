var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerSearchInput = function (e) {
  return _.default.createElement(d.FlexColumn, {
    align: "stretch"
  }, _.default.createElement(T, (0, r.default)({}, e, {
    padding: [8, 16]
  })));
};
exports.SearchInput = T;
var r = a(require("../vendor/967154.js"));
var o = require("../main-chunk/808485.js");
var l = a(require("../main-chunk/284014.js"));
var i = require("../main-chunk/728684.js");
var u = a(require("../app/670983.js"));
var s = require("../main-chunk/991086.js");
var c = require("../main-chunk/321245.js");
var d = require("../app/690495.js");
var f = require("../main-chunk/251922.js");
var p = require("../main-chunk/71881.js");
var m = require("../main-chunk/654761.js");
var h = require("../main-chunk/447514.js");
var g = require("../app/956113.js");
var E = require("../app/813133.js");
var v = require("../vendor/548360.js");
var _ = function (e, t) {
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
var y = a(require("../app/156720.js"));
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
const b = {
  relative: {
    position: "g0rxnol2"
  },
  container: {
    position: "g0rxnol2",
    width: "ln8gz9je",
    boxSizing: "cm280p3y"
  },
  inputContainer: {
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    flexGrow: "ggj6brxn",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  iconSearch: {
    width: "i94gqilv",
    height: "bmot90v7"
  },
  iconCloseSearch: {
    position: "lhggkp7q",
    top: "qq0sjtgm",
    height: "ppled2lx",
    end: "j2mzdvlq"
  },
  inputWrapper: {
    position: "g0rxnol2",
    boxSizing: "cm280p3y",
    display: "p357zi0d",
    flexDirection: "sap93d0t",
    alignItems: "gndfcl4n",
    height: "j8e73hjv",
    borderTopStartRadius: "bbr44loe",
    borderTopEndRadius: "ooj5yc5b",
    borderBottomEndRadius: "m8i16etx",
    borderBottomStartRadius: "cw0ivh8j"
  },
  inputPlaceholder: {
    position: "lhggkp7q",
    width: "ln8gz9je",
    height: "jdwybkuq",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex",
    fontSize: "f8jlpxt4",
    lineHeight: "jgi8eev7",
    textOverflow: "lhj4utae",
    whiteSpace: "le5p0ye3",
    pointerEvents: "m62443ks",
    transitionProperty: "cr6d9hz6",
    transitionDuration: "fvowycgw",
    transitionTimingFunction: "lu2z1zfr"
  },
  inputPlaceholderHidden: {
    opacity: "axi1ht8l"
  },
  innerInputWrapper: {
    position: "g0rxnol2",
    flexGrow: "ggj6brxn"
  },
  contentEditable: {
    width: "ln8gz9je"
  }
};
const M = {
  inputWrapper: {
    backgroundColor: "s5iwbdjo"
  },
  inputPlaceholder: {
    color: "t35qvd06"
  },
  iconSearch: {
    color: "t35qvd06"
  },
  iconCloseSearch: {
    color: "t35qvd06"
  }
};
const S = {
  inputWrapper: {
    backgroundColor: "dim55e0e"
  },
  inputPlaceholder: {
    color: "t35qvd06"
  },
  iconSearch: {
    color: "t35qvd06"
  },
  iconCloseSearch: {
    color: "t35qvd06"
  }
};
function T(e) {
  const {
    placeholder: t,
    onSearch: n,
    onClick: a,
    searchInputA11yLabel: r,
    focusOnMount: C = true,
    colorScheme: T,
    loading: w,
    children: A,
    padding: P,
    detailLeft: O,
    detailRight: k
  } = e;
  const [D, I] = (0, _.useState)("");
  const R = (0, _.useRef)();
  const N = e => {
    let {
      text: t
    } = e;
    I(t);
    n(t);
  };
  const x = () => {
    (0, u.default)(R.current, "editorRef.current").focus();
  };
  let L;
  switch (T) {
    case "darker":
      L = S;
      break;
    case "default":
    default:
      L = M;
  }
  let j = null;
  if (w === true) {
    j = _.default.createElement(g.Spinner, {
      size: 20,
      stroke: 6,
      color: "highlight"
    });
  } else if (D) {
    j = _.default.createElement("button", {
      "aria-label": v.fbt._("Cancel search", null, {
        hk: "16SlG4"
      }),
      className: (0, y.default)([b.iconCloseSearch, L.iconCloseSearch]),
      key: "icon-clear-search",
      onClick: () => {
        if (R.current) {
          (0, f.setTextContent)(R.current, "");
          N({
            text: "",
            parsableText: "",
            data: {}
          });
        }
        x();
      }
    }, _.default.createElement(E.XAltIcon, null));
  }
  const B = (0, _.useMemo)(() => ({
    namespace: "CommandPaletteInput",
    onError: () => {}
  }), []);
  return _.default.createElement(o.LexicalComposer, {
    initialConfig: B
  }, _.default.createElement(d.FlexRow, {
    grow: 0,
    shrink: 0,
    basis: "auto",
    align: "center",
    padding: P,
    xstyle: b.container
  }, O, _.default.createElement(d.FlexRow, {
    align: "center",
    padding: [8, 16],
    grow: 1,
    xstyle: [b.inputWrapper, L.inputWrapper]
  }, _.default.createElement(h.SearchIcon, null), _.default.createElement(d.FlexRow, {
    grow: 1,
    marginStart: 8,
    xstyle: b.relative
  }, _.default.createElement(i.PlainTextPlugin, {
    contentEditable: _.default.createElement(m.ContentEditable, {
      testid: "search-input",
      title: r,
      focusOnMount: C,
      xstyle: b.contentEditable,
      onClick: a
    }),
    ErrorBoundary: l.default,
    placeholder: _.default.createElement(m.Placeholder, {
      text: t,
      testid: "input-placeholder"
    })
  })), j, _.default.createElement(p.MultilinePlugin, {
    multiline: false
  }), _.default.createElement(c.EditorStatePlugin, {
    onChange: N,
    onBlur: t => {
      if (e.onBlur != null) {
        e.onBlur(t);
      }
    },
    onFocus: t => {
      x();
      if (e.onFocus != null) {
        e.onFocus(t);
      }
    }
  }), _.default.createElement(s.EditorRefPlugin, {
    editorRef: R
  })), k), A);
}