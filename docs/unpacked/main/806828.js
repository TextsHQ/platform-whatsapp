Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultCommandPalettePlugin = undefined;
var a = require("./470597.js");
var r = require("../app/351053.js");
var o = require("./628445.js");
var l = require("./155734.js");
var i = require("./620547.js");
var u = require("./58874.js");
var s = require("./216709.js");
var c = require("./532481.js");
var d = require("../main-chunk/341445.js");
var f = require("../app/690495.js");
var p = require("./324077.js");
var m = require("./854335.js");
var h = require("./41278.js");
var g = require("./338996.js");
var E = require("./579443.js");
var v = require("./618791.js");
var _ = require("./150103.js");
var y = require("./681324.js");
var C = require("./273275.js");
var b = require("../app/220584.js");
var M = require("../app/851488.js");
var S = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = T(t);
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
function T(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (T = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
function w(e) {
  let {
    title: t,
    icon: n
  } = e;
  return S.default.createElement(C.MenuHeading, null, S.default.createElement(f.FlexRow, {
    align: "center"
  }, S.default.createElement(f.FlexItem, {
    paddingEnd: 8
  }, n), t));
}
function A() {
  const e = (0, u.useCommandPalette)();
  let t = 0;
  const n = [];
  const l = r.ChatCollection.getModelsArray();
  for (let e = 0; e < l.length; e++) {
    const a = l[e];
    if (!a.active && a.shouldAppearInList) {
      n.push(a);
      if (a.pin == null) {
        t++;
      }
    }
    if (t === 3) {
      break;
    }
  }
  const i = n.sort((e, t) => {
    var n;
    var a;
    return ((n = t.t) !== null && n !== undefined ? n : 0) - ((a = e.t) !== null && a !== undefined ? a : 0);
  }).slice(0, 3);
  return S.default.createElement(m.LexicalWDSMenu, {
    forceSelection: true
  }, S.default.createElement(w, {
    title: "Recent Chats",
    icon: S.default.createElement(h.PanelRecentIcon, null)
  }), i.map(t => S.default.createElement(a.ChatMenuItem, {
    key: t.id.toString(),
    chat: t,
    onSelect: () => {
      (0, o.openChat)(t.id).catch(() => {});
      e.closeModal();
    }
  })));
}
function P(e) {
  let {
    section: t
  } = e;
  const n = (0, u.useCommandPalette)();
  switch (t.type) {
    case "setting":
      return S.default.createElement(S.default.Fragment, null, S.default.createElement(w, {
        title: "Settings",
        icon: S.default.createElement(_.SettingsIcon, {
          width: 16,
          height: 16,
          color: b.SvgColorProp.TEAL
        })
      }), S.default.createElement(E.SettingsMenu, {
        settings: t.results.map(e => e.data),
        onSelect: e => {
          (0, E.openSettingDrawer)(e.step);
          n.closeModal();
        }
      }));
    case "chat":
      return S.default.createElement(S.default.Fragment, null, S.default.createElement(w, {
        title: "Chats",
        icon: S.default.createElement(l.ChatMsgIcon, {
          width: 24,
          height: 24,
          color: b.SvgColorProp.TEAL
        })
      }), t.results.map(e => S.default.createElement(a.ChatMenuItem, {
        key: `${t.type}-${e.id}`,
        chat: e.data,
        onSelect: () => {
          (0, o.openChat)(e.data.id).catch(() => {});
          n.closeModal();
        }
      })));
    case "contact":
      return S.default.createElement(S.default.Fragment, null, S.default.createElement(w, {
        title: "Contacts",
        icon: S.default.createElement(d.ContactsIcon, {
          width: 24,
          height: 24,
          color: b.SvgColorProp.TEAL
        })
      }), t.results.map(e => S.default.createElement(s.ContactMenuItem, {
        key: `${t.type}-${e.id}`,
        contact: e.data,
        onSelect: () => {
          (0, o.openChat)(e.data.id).catch(() => {});
          n.closeModal();
        }
      })));
  }
}
function O() {
  const e = (0, u.useCommandPalette)();
  let t;
  if (e.pluginList != null) {
    if (e.pluginList.find(e => e.plugin.id === "HelpCommandPalettePlugin") != null) {
      t = () => S.default.createElement(S.default.Fragment, null, S.default.createElement(C.MenuSeparator, null), S.default.createElement(f.FlexRow, {
        padding: [8, 24, 16, 24],
        align: "center",
        gap: 16
      }, S.default.createElement(y.SparklesIcon, {
        width: 32,
        height: 32,
        color: b.SvgColorProp.TEAL
      }), S.default.createElement(M.WDSTextMuted, null, "Type ", S.default.createElement(p.KeyboardKey, {
        value: "/?"
      }), " to see available plugins")));
    }
  }
  return S.default.createElement(S.default.Fragment, null, S.default.createElement(A, null), t != null && S.default.createElement(t, null));
}
const k = {
  id: "DefaultCommand",
  placeholder: "Search anything",
  shortName: null,
  Component: function () {
    const e = (0, u.useCommandPalette)();
    const [t, n] = (0, S.useState)([]);
    const a = (0, S.useMemo)(() => new g.SearchCollection([new v.SettingSearch({
      maxPageLength: 3
    }), new i.ChatSearch({
      maxPageLength: 4
    }), new c.ContactSearch({
      maxPageLength: 4
    })]), []);
    (0, S.useEffect)(() => {
      Promise.all(a.query(e.input)).then(e => n(e)).catch(() => {});
    }, [a, e.input]);
    if (e.input === "") {
      return S.default.createElement(O, null);
    } else {
      return S.default.createElement(m.LexicalWDSMenu, {
        forceSelection: true
      }, t.map(e => e.results.length > 0 && S.default.createElement(P, {
        key: e.type,
        section: e
      })));
    }
  }
};
exports.DefaultCommandPalettePlugin = k;