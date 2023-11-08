var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsMenu = function (e) {
  let {
    settings: t,
    onSelect: n
  } = e;
  const a = new Set();
  return t.map(e => {
    let t = false;
    var r;
    var o;
    if (!(e.parent != null && a.has(e.parent.step))) {
      t = true;
      a.add((r = (o = e.parent) === null || o === undefined ? undefined : o.step) !== null && r !== undefined ? r : e.step);
    }
    return s.default.createElement(c, {
      key: e.id,
      setting: e,
      showIcon: t,
      onSelect: () => n(e)
    });
  });
};
exports.SettingsMenuItem = c;
exports.openSettingDrawer = function (e) {
  o.DrawerManager.openDrawerLeft(s.default.createElement(l.SettingsFlowLoadable, {
    onEnd: () => o.DrawerManager.closeDrawerLeft(),
    initialStep: e
  }));
};
var r = require("./807078.js");
var o = require("../app/900316.js");
var l = require("./523233.js");
var i = require("./845257.js");
var u = require("./752104.js");
var s = a(require("../vendor/667294.js"));
function c(e) {
  var t;
  var n;
  let {
    setting: a,
    showIcon: o,
    onSelect: l,
    border: c
  } = e;
  let d = " ";
  var f;
  var p;
  if (o) {
    d = s.default.createElement(i.SettingsStepIcon, {
      setting: (f = (p = a.parent) === null || p === undefined ? undefined : p.step) !== null && f !== undefined ? f : a.step
    });
  }
  return s.default.createElement(u.ActionMenuItem, {
    optionId: a.id,
    onSelect: l,
    detailLeft: d,
    primary: a.title(),
    secondary: (t = a.parent) === null || t === undefined ? undefined : t.title(),
    detailRight: a.isDevOnly === true && s.default.createElement(r.DevOnlyBadge, null),
    testid: (n = a.testid) !== null && n !== undefined ? n : `settings-search-${a.id}`,
    border: c
  });
}