var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToLabelCollection = function (e, t, r) {
  if (t && t.length > 0) {
    const a = require("./856311.js").LabelCollection;
    t.forEach(t => {
      const n = a.gadd({
        id: t
      });
      n.labelItemCollection.gadd({
        id: l(e, t, r),
        labelId: t,
        parentId: e,
        parentType: r
      });
      if (r === i.LabelItemParentType.Chat) {
        n.labelItemCollection.gadd({
          id: l(e, t, i.LabelItemParentType.Contact),
          labelId: t,
          parentId: e,
          parentType: i.LabelItemParentType.Contact
        });
      }
    });
  }
};
exports.createLabelItemId = l;
exports.getParentCollection = function (e) {
  switch (e) {
    case i.LabelItemParentType.Chat:
      return require("./351053.js").ChatCollection;
    case i.LabelItemParentType.Contact:
      return require("./177938.js").ContactCollection;
    case i.LabelItemParentType.Msg:
      return require("./61113.js").MsgCollection;
  }
};
exports.getParentTypeFromModel = s;
exports.initializeLabels = function (e) {
  const t = s(e);
  e.labels = require("./856311.js").LabelCollection.getLabelsForModel(e.id.toString(), t);
};
exports.removeLabelFromCollection = function (e, t, r) {
  const a = require("./856311.js").LabelCollection.get(t);
  const o = a == null ? undefined : a.labelItemCollection;
  if (!o) {
    return void __LOG__(3)`labelItemCollection does not exist for lableId ${t}`;
  }
  o.remove(l(e, t, r));
  if (r === i.LabelItemParentType.Chat) {
    o.remove(l(e, t, i.LabelItemParentType.Contact));
  }
};
var i = require("./454794.js");
var a = r(require("./97359.js"));
var o = r(require("./556869.js"));
function s(e) {
  if (e instanceof require("./79672.js").Chat) {
    return i.LabelItemParentType.Chat;
  }
  if (e instanceof (0, a.default)(require("./102130.js"))) {
    return i.LabelItemParentType.Contact;
  }
  if (e instanceof require("./772358.js").Msg) {
    return i.LabelItemParentType.Msg;
  }
  throw (0, o.default)("getParentTypeFromModel: model is invalid");
}
function l(e, t, n) {
  return `${e}_${t}_${n}`;
}