Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = undefined;
exports.colorIndexToHex = d;
exports.getAllLabelColors = c;
exports.intColorToHex = function (e) {
  return `#${(parseInt(e, 10) >>> 0).toString(16).slice(-6)}`;
};
var r = require("./481173.js");
var i = require("./454794.js");
var a = require("./445729.js");
var o = require("./142621.js");
var s = require("./595055.js");
var l = require("./94602.js");
class u extends r.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, r.prop)();
    this.name = (0, r.prop)();
    this.colorIndex = (0, r.prop)();
    this.color = (0, r.prop)();
    this.count = (0, r.prop)();
    this.stale = (0, r.session)(true);
    this.predefinedId = (0, r.prop)();
    this.hexColor = (0, r.derived)(function () {
      const e = this.colorIndex;
      if (e != null) {
        return d(e);
      }
    }, ["color", "colorIndex"]);
  }
  initialize() {
    super.initialize();
    this.labelItemCollection = new s.LabelItemCollection();
    this._triggerLabelUpdate();
    this.listenTo(this, "change:name", this._triggerLabelUpdate);
    this.listenTo(this, "change:color", this._triggerLabelUpdate);
    this.listenTo(this, "change:colorIndex", this._triggerLabelUpdate);
    this.listenTo(this, "change:count", this._triggerLabelUpdate);
    this.listenTo(this.labelItemCollection, "add", this._handleLabelItemCollectionUpdate);
    this.listenTo(this.labelItemCollection, "remove", this._handleLabelItemCollectionUpdate);
  }
  findImpl(e) {
    return Promise.resolve({
      id: e
    });
  }
  _triggerLabelUpdate() {
    if (this.name) {
      require("./856311.js").LabelCollection.trigger(`label_updated_${this.id}`);
    }
  }
  _handleLabelItemCollectionUpdate() {
    const e = this.labelItemCollection.filter(e => e.parentType !== i.LabelItemParentType.Contact).length;
    this.count = String(e);
  }
}
function c() {
  if (a.Conn.platform === l.PLATFORMS.SMBI) {
    return o.IPHONE_LABEL_COLOR_PALETTE;
  } else {
    return o.ANDROID_LABEL_COLOR_PALETTE;
  }
}
function d(e) {
  return c()[e];
}
u.Proxy = "label";
const p = (0, r.defineModel)(u);
exports.Label = p;