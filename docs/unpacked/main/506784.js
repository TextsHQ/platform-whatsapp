var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../vendor/348926.js"));
var o = a(require("../vendor/170735.js"));
var l = require("../app/287461.js");
var i = require("../app/984330.js");
var u = require("../app/177938.js");
var s = a(require("../app/329982.js"));
var c = require("../app/384464.js");
var d = require("./61740.js");
var f = require("./792882.js");
var p = require("./388444.js");
var m = require("./373842.js");
var h = require("../app/625786.js");
var g = require("../app/390737.js");
var E = require("../app/669050.js");
var v = a(require("../app/556869.js"));
var _ = require("../vendor/548360.js");
var y = a(require("../vendor/667294.js"));
function C(e) {
  switch (e) {
    case "about":
      return _.fbt._("Hide About from...", null, {
        hk: "1MC2Uy"
      });
    case "profilePicture":
      return _.fbt._("Hide Profile photo from...", null, {
        hk: "1j0ovi"
      });
    case "lastSeen":
      return _.fbt._("Hide Last seen from...", null, {
        hk: "1bZFrJ"
      });
    case "groupAdd":
      return _.fbt._("My contacts except...", null, {
        hk: "2tCWPL"
      });
  }
}
class b extends s.default {
  constructor() {
    var e;
    super(...arguments);
    e = this;
    this._excludedContacts = [];
    this._handleConfirm = function () {
      var t = (0, r.default)(function* (t, n) {
        const a = e._excludedContacts.map(e => e.id);
        const r = t.map(e => e.id);
        const l = [...(0, o.default)(r, a, e => e.toString()).map(e => ({
          action: m.PrivacyUserAction.Add,
          wid: e
        })), ...(0, o.default)(a, r, e => e.toString()).map(e => ({
          action: m.PrivacyUserAction.Remove,
          wid: e
        }))];
        const u = (0, p.privacyWebNameToServerName)(e.props.category);
        if (u === "readreceipts" || u === "online" || u === "calladd") {
          throw (0, v.default)(`select_contacts_except_flow: name can not be ${u}`);
        }
        try {
          yield (0, p.setPrivacyForOneCategory)({
            value: "contact_blacklist",
            users: l,
            dhash: n,
            name: u
          }, r);
          e.props.onConfirm();
        } catch (e) {
          if (!(e instanceof i.ServerStatusCodeError && e.statusCode === 409)) {
            __LOG__(3, undefined, undefined, true)`select_contacts_except_flow: set visiblity option failed ${e.stack}`;
            SEND_LOGS("select_contacts_except_flow: set visiblity option failed");
          }
          g.ToastManager.open(y.default.createElement(h.Toast, {
            msg: _.fbt._("Failed to update privacy settings. Please try again.", null, {
              hk: "h89q3"
            })
          }));
        }
        e.pop();
      });
      return function () {
        return t.apply(this, arguments);
      };
    }();
  }
  componentDidMount() {
    this._pushSelectModalToFlow();
  }
  _pushSelectModalToFlow() {
    var e = this;
    return (0, r.default)(function* () {
      const {
        category: t
      } = e.props;
      let n = null;
      try {
        const a = function (e) {
          switch (e) {
            case "about":
              return c.PrivacyDisallowedListType.About;
            case "profilePicture":
              return c.PrivacyDisallowedListType.ProfilePicture;
            case "lastSeen":
              return c.PrivacyDisallowedListType.LastSeen;
            case "groupAdd":
              return c.PrivacyDisallowedListType.GroupAdd;
          }
        }(t);
        const r = yield (0, c.getPrivacyDisallowedListTable)().get(a);
        if (r != null) {
          e._excludedContacts = r.disallowedList.map(e => u.ContactCollection.gadd((0, E.createWid)(e)));
          n = r.dhash;
        }
      } catch (t) {
        __LOG__(4, undefined, new Error(), true)`error: ${String(t.stack)}`;
        SEND_LOGS("SelectContactsExceptFlow:failed to get privacyDisallowedList");
        g.ToastManager.open(y.default.createElement(h.Toast, {
          msg: _.fbt._("Failed to get contacts except list. Please try again.", null, {
            hk: "1OErrO"
          })
        }));
        return void e.pop();
      }
      const a = new Set(e._excludedContacts.map(e => e.id.toString()));
      const r = (0, l.getABPropConfigValue)("allow_lid_contacts_privacy_settings");
      e.push(y.default.createElement(d.SelectModal, {
        title: C(t),
        onCancel: () => e.pop(),
        onConfirm: t => {
          e._handleConfirm(t, n);
        },
        getInitialItems: () => e._excludedContacts,
        listType: d.ListType.ContactSelectModal,
        maxItems: 64000,
        singleSelectionFooterType: f.FooterType.CONFIRM,
        multipleSelectionFooterType: f.FooterType.CONFIRM,
        useAllContacts: true,
        filter: e => (!e.id.isLid() || r !== false) && (a.has(e.id.toString()) || u.ContactCollection.isFilteredContact(e)),
        getSelectionSummary: M,
        enableSelectAll: true,
        activeWithoutSelection: true
      }));
    })();
  }
}
function M(e) {
  const t = e.length;
  return _.fbt._({
    "*": "{count} contacts excluded",
    _1: "1 contact excluded"
  }, [_.fbt._plural(t, "count")], {
    hk: "3yGURq"
  }).toString();
}
exports.default = b;