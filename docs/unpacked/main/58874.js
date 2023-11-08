var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommandPalette = function (e) {
  let {
    defaultPlugin: t,
    triggeredPlugins: n
  } = e;
  const a = (0, p.useMemo)(() => ({
    namespace: "CommandPaletteInput",
    onError: () => {}
  }), []);
  return p.default.createElement(u.FlexColumn, {
    align: "stretch",
    xstyle: E.container
  }, p.default.createElement(o.LexicalComposer, {
    initialConfig: a
  }, p.default.createElement(y, {
    defaultPlugin: t,
    triggeredPlugins: n
  }, p.default.createElement(i.CommandPaletteInput, null), p.default.createElement(C, null))));
};
exports.useCommandPalette = _;
var r = require("../main-chunk/14544.js");
var o = require("../main-chunk/808485.js");
var l = require("../main-chunk/71671.js");
var i = require("./691915.js");
var u = require("../app/690495.js");
var s = require("../main-chunk/251922.js");
var c = require("../app/114850.js");
var d = require("./589332.js");
var f = a(require("../app/556869.js"));
var p = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = g(t);
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
var m = require("../main-chunk/16188.js");
var h = require("./599584.js");
function g(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (g = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const E = {
  container: {
    borderTopStartRadius: "nl2xi1ke",
    borderTopEndRadius: "r2bxqa8h",
    borderBottomEndRadius: "jyp9psb5",
    borderBottomStartRadius: "n1nfpgil",
    backgroundColor: "rf2f03pv",
    color: "fkbpgrx9",
    overflowX: "gfz4du6o",
    overflowY: "r7fjleex"
  },
  pluginContainer: {
    maxHeight: "ly3y407s"
  }
};
const v = (0, p.createContext)(null);
function _() {
  const e = (0, p.useContext)(v);
  if (e == null) {
    throw (0, f.default)("useCommandPalette must be used inside of a CommandPaletteContext");
  }
  return e;
}
function y(e) {
  var t;
  let {
    defaultPlugin: n,
    triggeredPlugins: a,
    children: o
  } = e;
  const [i, u] = (0, p.useState)([]);
  const [f, g] = (0, p.useState)("");
  const [E] = (0, l.useLexicalComposerContext)();
  const _ = i[i.length - 1];
  const y = e => {
    (0, s.setTextContent)(E, e);
    g(e);
  };
  const C = (e, t) => {
    var n;
    const a = (n = t == null ? undefined : t.input) !== null && n !== undefined ? n : "";
    y(a);
    u([...i, {
      plugin: e,
      input: a
    }]);
  };
  const b = e => {
    const t = i.slice(0, i.length - 1);
    const n = t[t.length - 1];
    let a = "";
    if (n != null) {
      if ((e == null ? undefined : e.input) != null) {
        a = e.input;
      } else if (n.plugin.restoreInputOnBack === true) {
        a = n.input;
      }
    }
    y(a);
    u(t);
  };
  (0, p.useEffect)(() => {
    if (i.length === 0) {
      const e = a == null ? undefined : a.find(e => {
        if ((0, d.toArray)(e.trigger).includes(f)) {
          return e;
        }
      });
      if (e != null) {
        C(e.plugin);
      }
    }
  }, [f]);
  (0, m.useLexicalCommandListener)(E, r.KEY_BACKSPACE_COMMAND, e => {
    if (f === "") {
      e.preventDefault();
      b();
    }
    return false;
  });
  (0, h.useLexicalOnContentChange)(e => {
    if (_ != null) {
      _.input = e;
    }
    g(e);
  });
  const M = {
    input: f,
    pushPlugin: C,
    popPlugin: b,
    clearStack: () => u([]),
    replaceStack: (e, t) => {
      var n;
      const a = (n = t == null ? undefined : t.input) !== null && n !== undefined ? n : "";
      y(a);
      u([{
        plugin: e,
        input: a
      }]);
    },
    closeModal: () => {
      c.ModalManager.close();
    },
    activePlugin: (t = _ == null ? undefined : _.plugin) !== null && t !== undefined ? t : n,
    pluginStack: i,
    pluginList: a
  };
  return p.default.createElement(v.Provider, {
    value: M
  }, o);
}
function C() {
  const e = _().activePlugin;
  if (e != null) {
    return p.default.createElement(u.FlexColumn, {
      align: "stretch",
      xstyle: E.pluginContainer
    }, p.default.createElement(e.Component, null));
  } else {
    return null;
  }
}