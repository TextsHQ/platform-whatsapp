Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BotCommandSuggestions = undefined;
var a = require("../main-chunk/14544.js");
var r = require("./835345.js");
var o = require("../main-chunk/251922.js");
var l = require("./939758.js");
var i = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = c(t);
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
var u = require("../app/655241.js");
var s = require("./972934.js");
function c(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (c = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const d = (0, i.forwardRef)(e => {
  var t;
  var n;
  const {
    editor: a,
    kind: o
  } = e;
  const c = (0, u.useOptionalModelValues)(e.businessProfile, ["id", "commands"]);
  const d = (0, u.useOptionalModelValues)(e.botProfile, ["id", "commands"]);
  const p = (t = c == null ? undefined : c.commands) !== null && t !== undefined ? t : d == null ? undefined : d.commands;
  const m = (n = d == null ? undefined : d.id) !== null && n !== undefined ? n : c == null ? undefined : c.id;
  const {
    query: h,
    replaceQuery: g,
    omitQuery: E
  } = (0, s.useQuery)(a, "/", {
    boundary: true,
    maxQueryLength: 25
  });
  const [v, _] = (0, i.useState)(() => f(a));
  (0, i.useEffect)(() => a.registerUpdateListener(() => {
    _(f(a));
  }), [a]);
  const y = (0, i.useMemo)(() => h == null || !p || v ? null : p.filter(e => e.name.startsWith(h)).map((e, t) => ({
    height: 52,
    itemKey: e.name,
    contentKey: h,
    index: t,
    command: e,
    query: h,
    selectable: true
  })), [h, p, v]);
  return i.default.createElement(l.ListSuggestionsPanel, {
    kind: o,
    editor: a,
    items: y,
    renderItem: (e, t) => i.default.createElement(r.BotCommandResult, {
      key: e.itemKey,
      command: e.command,
      query: e.query,
      selected: t,
      imageWid: m
    }),
    onSelect: e => {
      let {
        command: t
      } = e;
      g(`/${t.name} `);
    },
    onDismiss: () => {
      E();
    }
  });
});
function f(e) {
  return e.getEditorState().read(() => {
    for (const t of (0, o.textNodesIterator)((0, a.$getRoot)())) {
      var e;
      if ((e = t.getStyle()) === null || e === undefined ? undefined : e.includes("bot-command-text")) {
        return true;
      }
    }
    return false;
  });
}
exports.BotCommandSuggestions = d;
d.displayName = "BotCommandSuggestions";