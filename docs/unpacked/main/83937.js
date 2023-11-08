var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatCell = undefined;
exports.getChatCellContent = c;
var r = a(require("./262290.js"));
var o = require("../app/660666.js");
var l = require("../app/23641.js");
var i = require("../app/21645.js");
var u = require("./219753.js");
var s = a(require("../vendor/667294.js"));
function c(e) {
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    useShortName: n,
    showMessageYourselfName: a = false
  } = t;
  let u;
  u = e.isGroup ? s.default.createElement(i.Name, {
    chat: e,
    useShortName: n,
    showLabel: true,
    titlify: true,
    ellipsify: true,
    showMessageYourselfName: a
  }) : s.default.createElement(i.Name, {
    contact: e.contact,
    useShortName: n,
    showBusinessCheckmark: (0, o.getShowBusinessCheckmarkAsPrimary)(e.contact),
    showLabel: true,
    titlify: true,
    ellipsify: true,
    you: true,
    showMessageYourselfName: a
  });
  const c = s.default.createElement(r.default, {
    chat: e
  });
  const d = s.default.createElement(l.DetailImage, {
    id: e.id,
    size: 40,
    waitIdle: true
  });
  return {
    primary: u,
    secondary: c,
    detailLeft: d
  };
}
exports.ChatCell = e => {
  const {
    chat: t,
    useShortName: n,
    showMessageYourselfName: a = false
  } = e;
  const r = c(t, {
    useShortName: n,
    showMessageYourselfName: a
  });
  return s.default.createElement(u.WDSCell, r);
};