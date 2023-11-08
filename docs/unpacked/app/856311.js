var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelCollectionImpl = exports.LabelCollection = undefined;
var i = r(require("../vendor/82729.js"));
var a = require("./328620.js");
var o = require("./392125.js");
var s = require("./454794.js");
var l = require("./388536.js");
var u = require("./834909.js");
var c = r(require("./932325.js"));
var d = require("./804826.js");
var p = require("./362029.js");
var f = require("./390737.js");
var _ = require("../vendor/548360.js");
var g = r(require("../vendor/667294.js"));
class m extends o.BaseCollection {
  constructor() {
    super();
    this.listenTo(this, "remove", this._handleRemove);
  }
  initializeAssociationsFromCache(e) {
    e.forEach(e => {
      let {
        labelId: t,
        associationId: n,
        type: r
      } = e;
      (0, l.addToLabelCollection)(n, [t], r === p.LabelAssociationType.Jid ? s.LabelItemParentType.Chat : s.LabelItemParentType.Msg);
    });
  }
  removeAllLabelsMD(e) {
    return this.addOrRemoveLabelsMD((e.labels || []).map(e => ({
      type: "remove",
      id: e
    })), [e]);
  }
  addOrRemoveLabelsMD(e, t) {
    e.forEach(e => {
      let {
        id: n,
        type: r
      } = e;
      t.forEach(e => {
        const t = (0, l.getParentTypeFromModel)(e);
        const i = e.id.toString();
        if (r === "add") {
          (0, l.addToLabelCollection)(i, [n], t);
        } else {
          (0, l.removeLabelFromCollection)(i, n, t);
        }
      });
    });
  }
  addOrRemoveLabels(e, t) {
    const n = (0, a.genId)();
    const r = new a.ActionType(_.fbt._({
      "*": "Changing {count} labels",
      _1: "Changing {count} label"
    }, [_.fbt._plural(e.length), _.fbt._param("count", e.length)], {
      hk: "2ZnRCH"
    }));
    const i = (0, u.editLabelAssociation)(e, t).then(() => {
      this.addOrRemoveLabelsMD(e, t);
    }).then(() => new a.ActionType(_.fbt._({
      "*": "{count} labels changed",
      _1: "{count} label changed"
    }, [_.fbt._plural(e.length), _.fbt._param("count", c.default.n(e.length))], {
      hk: "2HtRQv"
    }))).catch(() => {
      __LOG__(3)`addingNewLabel dropped`;
      return new a.ActionType(c.default.t(4));
    });
    f.ToastManager.open(g.default.createElement(a.ActionToast, {
      id: n,
      initialAction: r,
      pendingAction: i
    }));
  }
  _handleRemove(e) {
    const {
      labelItemCollection: t
    } = e;
    t.toArray().forEach(e => {
      const {
        parentId: t,
        parentType: n,
        labelId: r
      } = e;
      const a = (0, l.getParentCollection)(n).get(t);
      if (a) {
        a.labels = (0, i.default)(a.labels, e => e !== r);
      }
    });
  }
  getLabelsForModel(e, t) {
    return this.filter(n => n.labelItemCollection.get((0, l.createLabelItemId)(e, n.id, t))).map(e => e.id);
  }
  getNextAvailableColor() {
    return this.map(e => e.colorIndex).sort().findIndex((e, t) => e !== t);
  }
}
exports.LabelCollectionImpl = m;
m.model = d.Label;
m.staleCollection = true;
const h = new m();
exports.LabelCollection = h;