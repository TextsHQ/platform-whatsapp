var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = undefined;
var i = r(require("../vendor/348926.js"));
var a = require("./780549.js");
var o = require("./690495.js");
var s = require("./118612.js");
var l = require("./114850.js");
var u = require("./625786.js");
var c = require("./390737.js");
var d = require("./676345.js");
r(require("./625903.js"));
var p = require("./617425.js");
var f = require("./851488.js");
var _ = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = m(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var r = {};
  var i = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var o = i ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (o && (o.get || o.set)) {
        Object.defineProperty(r, a, o);
      } else {
        r[a] = e[a];
      }
    }
  }
  r.default = e;
  if (n) {
    n.set(e, r);
  }
  return r;
}(require("../vendor/667294.js"));
var g = r(require("./156720.js"));
function m(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (m = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const h = {
  redBox: {
    height: "ppled2lx",
    width: "ln8gz9je",
    display: "p357zi0d",
    justifyContent: "ac2vgrno",
    alignItems: "gndfcl4n",
    textAlign: "qfejxiq4",
    backgroundColor: "m96chkbz",
    color: "havzjkop",
    pointerEvents: "jzetg1s3",
    flexDirection: "f8m0rgwh",
    cursor: "ajgl1lbb"
  },
  codeContainer: {
    whiteSpace: "bbv8nyr4",
    backgroundColor: "na84xivw",
    fontSize: "r8knbtme"
  }
};
const y = e => {
  let {
    boundaryName: t,
    error: n
  } = e;
  const {
    stack: r
  } = n != null ? n : {};
  const l = function () {
    var e = (0, i.default)(function* () {
      if (r != null) {
        yield navigator.clipboard.writeText(r);
        c.ToastManager.open(_.default.createElement(u.Toast, {
          msg: "Stack copied"
        }));
      }
    });
    return function () {
      return e.apply(this, arguments);
    };
  }();
  return _.default.createElement(s.Modal, {
    title: `Error stack from ${t}`,
    type: s.ModalTheme.Multiline
  }, r != null ? _.default.createElement(_.default.Fragment, null, _.default.createElement("div", {
    className: (0, g.default)([h.codeContainer, d.uiPadding.all10])
  }, _.default.createElement("code", null, r)), _.default.createElement("div", {
    className: (0, g.default)(d.uiPadding.vert10)
  }, _.default.createElement(f.WDSTextSmall, {
    xstyle: d.uiPadding.bottom10
  }, "Check the console for more information"), _.default.createElement(o.FlexRow, {
    columnGap: 8,
    justify: "end",
    marginTop: 16
  }, _.default.createElement(p.WDSButtonSecondary, {
    onClick: l
  }, "Copy error stack"), _.default.createElement(p.WDSButtonSecondary, {
    onClick: () => {
      a.Cmd.trigger("trigger_bugreport_v2", `Uncaught render error at ${t}`);
    }
  }, "Report this bug")))) : "No error stack found, check console");
};
const E = e => {
  let {
    boundaryName: t,
    handleClick: n
  } = e;
};
class S extends _.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      error: null
    };
    this._handleOpenMoreInfo = () => {
      l.ModalManager.open(_.default.createElement(y, {
        error: this.state.error,
        boundaryName: this.props.name
      }));
    };
  }
  static getDerivedStateFromError(e) {
    return {
      error: e
    };
  }
  componentDidCatch(e, t) {
    const {
      sendLogs: n = true
    } = this.props;
    if (n === true) {
      __LOG__(4, undefined, new Error(), true)`${e.stack}\n${t.componentStack}`;
      SEND_LOGS(`error-boundary:${this.props.name}`);
    }
  }
  render() {
    var e;
    const {
      error: t
    } = this.state;
    const {
      fallback: n = E
    } = this.props;
    if (t != null) {
      return _.default.createElement(n, {
        boundaryName: this.props.name,
        handleClick: this._handleOpenMoreInfo
      });
    } else if ((e = this.props.children) !== null && e !== undefined) {
      return e;
    } else {
      return null;
    }
  }
}
exports.ErrorBoundary = S;
S.displayName = "ErrorBoundary";