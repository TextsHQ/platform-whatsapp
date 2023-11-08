var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLabelAssociationMutations = y;
exports.editLabelAssociation = function (e, t) {
  if (t.some(e => e instanceof c.default)) {
    __LOG__(4, undefined, new Error(), true)`contact model is invalid for editLabelAssociation`;
    SEND_LOGS("contact model is invalid for editLabelAssociation");
  }
  return function (e, t) {
    if (!(0, u.canEditLabelAssociation)()) {
      return Promise.reject((0, g.default)("editLabelAssociation is not supported"));
    }
    return (0, f.lockForSync)(["label-association"], y(e, t), () => m(e, t));
  }(e, t.map(e => e instanceof d.Msg ? {
    labelAssociationType: p.LabelAssociationType.Message,
    modelId: e.id.toString(),
    mutationIndexSegments: (0, _.constructMsgKeySegments)(e)
  } : {
    labelAssociationType: p.LabelAssociationType.Jid,
    modelId: e.id.toString(),
    mutationIndexSegments: [e.id.toString({
      legacy: true
    })]
  }));
};
exports.editLocalLabelAssociationMD = m;
var i = r(require("../vendor/348926.js"));
var a = require("./679905.js");
var o = require("./24756.js");
var s = require("./122393.js");
var l = require("./632157.js");
var u = require("./72696.js");
var c = r(require("./102130.js"));
var d = require("./772358.js");
var p = require("./362029.js");
var f = require("./480313.js");
var _ = require("./336897.js");
var g = r(require("./556869.js"));
function m() {
  return h.apply(this, arguments);
}
function h() {
  return (h = (0, i.default)(function* (e, t) {
    const n = [];
    const r = [];
    e.forEach(e => {
      let {
        id: i,
        type: a
      } = e;
      t.map(e => {
        let {
          modelId: t,
          labelAssociationType: o
        } = e;
        if (a === "add") {
          n.push({
            labelId: i,
            associationId: t,
            type: o
          });
        } else {
          r.push([i, t, o]);
        }
      });
    });
    const i = (0, p.getLabelAssociationTable)();
    yield Promise.all([i.bulkCreateOrReplace(n).catch(() => {
      __LOG__(4, true, new Error(), true)`bulkCreateOrReplace into label association table failed`;
      SEND_LOGS("bulkCreateOrReplace into label association table failed when saving label associations");
      throw (0, g.default)("bulkCreateOrReplace into label association table failed");
    }), i.bulkRemove(r).catch(() => {
      __LOG__(4, true, new Error(), true)`bulkRemove from label association table failed`;
      SEND_LOGS("bulkRemove from label association table failed while saving label associations");
      throw (0, g.default)("bulkRemove form label association table failed");
    })]);
  })).apply(this, arguments);
}
function y(e, t) {
  const n = (0, l.unixTimeMs)();
  const r = [];
  e.forEach(e => {
    let {
      id: i,
      type: l
    } = e;
    t.forEach(e => {
      let {
        labelAssociationType: t,
        mutationIndexSegments: u
      } = e;
      const c = t === p.LabelAssociationType.Message ? s.Actions.LabelMessage : s.Actions.LabelJid;
      r.push((0, o.buildPendingMutation)({
        timestamp: n,
        collection: s.CollectionName.Regular,
        operation: a.SyncdMutation$SyncdOperation.SET,
        indexArgs: [i, ...u],
        version: s.LABEL_ASSOCIATION_SYNC_VERSION,
        value: {
          labelAssociationAction: {
            labeled: l === "add"
          }
        },
        action: c
      }));
    });
  });
  return r;
}