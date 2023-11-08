var r = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX_BUSINESS_CATEGORIES = exports.DEFAULTS = exports.BusinessProfile = exports.BUSINESS_URL_DOMAIN = undefined;
var i = require("./481173.js");
var a = require("./72696.js");
var o = require("./354458.js");
var s = require("./37237.js");
var l = require("./374660.js");
var u = r(require("./124928.js"));
const c = "wa.me/";
exports.BUSINESS_URL_DOMAIN = c;
exports.MAX_BUSINESS_CATEGORIES = 3;
class d extends i.BaseModel {
  constructor() {
    super(...arguments);
    this.id = (0, i.prop)();
    this.dataSource = (0, i.prop)("placeholder");
    this.tag = (0, i.prop)();
    this.description = (0, i.prop)();
    this.categories = (0, i.prop)();
    this.profileOptions = (0, i.prop)();
    this.email = (0, i.prop)();
    this.website = (0, i.prop)();
    this.latitude = (0, i.prop)();
    this.longitude = (0, i.prop)();
    this.businessHours = (0, i.prop)();
    this.catalogStatus = (0, i.prop)();
    this.address = (0, i.prop)();
    this.structuredAddress = (0, i.prop)();
    this.legalEntityDetails = (0, i.prop)();
    this.fbPage = (0, i.prop)();
    this.igProfessional = (0, i.prop)();
    this.isProfileLinked = (0, i.prop)();
    this.directConnection = (0, i.prop)();
    this.customUrlPaths = (0, i.prop)();
    this.customUrlPath = (0, i.prop)();
    this.isProfileLocked = (0, i.prop)(true);
    this.customUrl = (0, i.derived)(function () {
      var e;
      let t;
      if ((0, a.isCustomURLViaBizProfileEnabled)() && this.customUrlPath != null) {
        t = this.customUrlPath;
      } else {
        if (!(this.customUrlPaths && ((e = this.customUrlPaths) === null || e === undefined ? undefined : e.length) > 0)) {
          return null;
        }
        t = this.customUrlPaths[0];
      }
      return `wa.me/${t}`;
    }, ["customUrlPaths", "customUrlPath"]);
    this.coverPhoto = (0, i.prop)();
    this.automatedType = (0, i.prop)(s.BizBotAutomatedType.UNKNOWN);
    this.welcomeMsgProtocolMode = (0, i.prop)(s.BotWelcomeMsgProtocolModeType.NONE);
    this.prompts = (0, i.prop)();
    this.commandsDescription = (0, i.prop)();
    this.commands = (0, i.prop)();
    this.stale = (0, i.session)(true);
    this.isBizBot3p = (0, i.derived)(function () {
      return this.automatedType === s.BizBotAutomatedType.FULL_3P;
    }, ["automatedType"]);
    this.isBizBot1p = (0, i.derived)(function () {
      return this.automatedType === s.BizBotAutomatedType.PARTIAL_1P;
    }, ["automatedType"]);
  }
  initialize() {
    super.initialize();
    this.listenTo(this, "change:automatedType", () => {
      this._updateChatCanSend();
      this._updateContactName();
    });
    this._updateChatCanSend();
    this._updateContactName();
  }
  markStale() {
    this.stale = true;
    if (this.hasObservers()) {
      this.getCollection().find(this.id);
    }
  }
  getCollection() {
    return require("./778945.js").BusinessProfileCollection;
  }
  isValid() {
    return Array.isArray(this.categories);
  }
  isBusinessDirectConnection() {
    var e;
    var t;
    var n;
    var r;
    return (e = (t = (n = this.directConnection) === null || n === undefined ? undefined : n.enabled) !== null && t !== undefined ? t : (r = this.profileOptions) === null || r === undefined ? undefined : r.directConnection) !== null && e !== undefined && e;
  }
  _updateContactName() {
    if (!(0, o.isBizBot3pEnabled)() || !this.isBizBot3p) {
      return;
    }
    const e = require("./177938.js").ContactCollection.get(this.id);
    const t = e == null ? undefined : e.verifiedName;
    if (e && t != null) {
      e.set({
        name: t,
        verifiedName: t,
        shortName: t,
        pushName: t
      });
    }
  }
  _updateChatCanSend() {
    const e = require("./351053.js").ChatCollection.get(this.id);
    if (e) {
      (0, l.updateCanSend)(e, this);
    }
  }
}
d.Proxy = "businessProfile";
d.idClass = u.default;
const p = (0, i.defineModel)(d);
exports.BusinessProfile = p;
exports.DEFAULTS = {
  description: null,
  email: null,
  website: null
};