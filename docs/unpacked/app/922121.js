Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectValidAndOrphanAddons = function (e, t) {
  const n = [];
  const r = [];
  for (const a of e) {
    const e = t.get((0, i.getAddonParentMsgKey)(a).toString());
    if (e == null || e.type === o.MSG_TYPE.UNKNOWN) {
      n.push(a);
    } else {
      r.push(a);
    }
  }
  return {
    orphans: n,
    validAddons: r
  };
};
exports.groupAddonsByProcessor = function (e) {
  const t = new Map();
  for (const i of e) {
    var n;
    if (!t.has(i.type)) {
      const e = (0, r.getAddonProcessor)(i.type);
      t.set(i.type, {
        processor: e,
        addons: [],
        existingAddons: []
      });
    }
    if (!((n = t.get(i.type)) === null || n === undefined)) {
      n.addons.push(i);
    }
  }
  return Array.from(t.values());
};
exports.groupAddonsByTableMode = function (e) {
  const t = new Map();
  for (const r of e) {
    var n;
    const e = (0, a.getTableModeByMsgType)(r.type);
    if (!t.has(e)) {
      t.set(e, []);
    }
    if (!((n = t.get(e)) === null || n === undefined)) {
      n.push(r);
    }
  }
  return t;
};
var r = require("./664179.js");
var i = require("./34214.js");
var a = require("./59158.js");
var o = require("./373070.js");