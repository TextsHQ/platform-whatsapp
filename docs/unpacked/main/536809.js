var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function (e) {
  var t;
  const {
    displayLocation: n
  } = e;
  let a = -1;
  const p = e.sectionIds.map((t, n) => {
    let r = false;
    if (t === e.selectedSectionId) {
      if (e.showTabHighlight) {
        a = n;
        r = true;
      } else {
        a = -1;
      }
    }
    return e.renderSectionTab(t, r);
  });
  const m = n === l.DisplayLocation.Reactions || n === l.DisplayLocation.ExpressionsPanel;
  return c.default.createElement(r.HotKeys, {
    component: "div",
    className: (0, d.default)(m && f.reactionsTabSeparator),
    tabIndex: null,
    handlers: (0, s.default)({
      "shift+tab": e.onFocusPrev,
      tab: e.onFocusNext,
      down: e.onFocusLeave,
      left: () => {
        var t;
        var n;
        if (o.default.isRTL()) {
          if (!((t = e.onFocusNext) === null || t === undefined)) {
            t.call(e);
          }
        } else if (!((n = e.onFocusPrev) === null || n === undefined)) {
          n.call(e);
        }
      },
      right: () => {
        var t;
        var n;
        if (o.default.isRTL()) {
          if (!((t = e.onFocusPrev) === null || t === undefined)) {
            t.call(e);
          }
        } else if (!((n = e.onFocusNext) === null || n === undefined)) {
          n.call(e);
        }
      },
      enter: e.onEnter,
      space: e.onEnter
    })
  }, c.default.createElement(i.MenuContainer, {
    theme: m ? i.MenuContainerTheme.TAB_MARKER_SEPARATOR : undefined
  }, c.default.createElement(u.default, {
    numTabs: e.sectionIds.length,
    selectedTabIndex: a,
    animate: (t = e.showTabHighlight) === null || t === undefined || t
  }), p));
};
var r = require("../app/81644.js");
var o = a(require("../app/932325.js"));
var l = require("./833654.js");
var i = require("./150396.js");
var u = a(require("./107223.js"));
var s = a(require("../app/731058.js"));
var c = a(require("../vendor/667294.js"));
var d = a(require("../app/156720.js"));
const f = {
  reactionsTabSeparator: {
    borderBottom: "gm3we2i2"
  }
};