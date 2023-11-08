var a = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = a(require("../app/670983.js"));
var o = require("../app/287461.js");
var l = require("../app/12643.js");
var i = require("./250314.js");
var u = require("../app/174834.js");
var s = require("../app/103440.js");
var c = require("../app/177938.js");
var d = require("../app/305521.js");
var f = a(require("../app/329982.js"));
var p = require("../app/714574.js");
var m = require("../app/862159.js");
var h = a(require("../app/932325.js"));
var g = require("../app/97858.js");
var E = require("../app/114850.js");
var v = require("./33014.js");
var _ = require("../app/843337.js");
var y = require("./61740.js");
var C = require("./792882.js");
var b = require("../app/676345.js");
var M = require("../app/851488.js");
var S = require("../vendor/548360.js");
var T = a(require("../vendor/667294.js"));
var w = a(require("../app/156720.js"));
const A = {
  backgroundColor: "ihvf49ua",
  textAlign: "qfejxiq4"
};
class P extends f.default {
  constructor() {
    super(...arguments);
    this._isGroupParticipant = e => {
      var t;
      var n;
      const {
        chat: a
      } = this.props;
      const r = ((t = a.groupMetadata) === null || t === undefined ? undefined : t.isLidAddressingMode) === true ? (0, l.getCurrentLid)(e.id) : e.id;
      return !(r == null || !((n = a.groupMetadata) === null || n === undefined ? undefined : n.participants.get(r)));
    };
    this._partOfGroupText = () => {
      var e;
      const {
        chat: t
      } = this.props;
      return (((e = t.groupMetadata) === null || e === undefined ? undefined : e.groupType) === m.GroupType.LINKED_ANNOUNCEMENT_GROUP && (0, u.communityTabbedInfoEnabled)() ? S.fbt._("Already added to community", null, {
        hk: "3j4bWM"
      }) : S.fbt._("Already added to group", null, {
        hk: "4hdDHF"
      })).toString();
    };
    this.customSecondaryText = e => {
      var t;
      var n;
      const {
        chat: a
      } = this.props;
      const r = ((t = a.groupMetadata) === null || t === undefined ? undefined : t.isLidAddressingMode) === true ? (0, l.getCurrentLid)(e) : e;
      if (r != null && ((n = a.groupMetadata) === null || n === undefined ? undefined : n.participants.get(r))) {
        return this._partOfGroupText();
      } else {
        return null;
      }
    };
    this.contactFilter = e => {
      const t = this.props.chat.groupMetadata;
      if (!c.ContactCollection.isFilteredContact(e)) {
        return false;
      }
      const n = (t == null ? undefined : t.isLidAddressingMode) === true ? (0, l.getCurrentLid)(e.id) : e.id;
      return n == null || !(t == null ? undefined : t.participants.get(n)) || this._partOfGroupText();
    };
    this.confirmAddParticipant = e => {
      const {
        chat: t
      } = this.props;
      const n = (0, r.default)(t.groupMetadata, "chat.groupMetadata");
      if ((n.parentGroup != null || n.isParentGroup === true) && (0, u.communityGeneralChatUIEnabled)()) {
        this.push(T.default.createElement(i.CommunityAddParticipantModal, {
          onOK: () => this._handleAddParticipant(e),
          onCancel: this._pop,
          contacts: e
        }));
      } else {
        this.push(T.default.createElement(s.ConfirmPopup, {
          onOK: this._handleAddParticipant.bind(this, e),
          okText: S.fbt._({
            "*": "Add participants",
            _1: "Add participant"
          }, [S.fbt._plural(e.length)], {
            hk: "3kJwoC"
          }),
          onCancel: this._pop,
          cancelText: S.fbt._("Cancel", null, {
            hk: "H0gNq"
          })
        }, T.default.createElement(d.EmojiText, {
          text: this._makeNameEnumeration(e, n.isUnnamed && (0, o.getABPropConfigValue)("ugr_enabled") ? (0, _.calculateUnnamedGroupParticipantsList)(n) : t.contact.name)
        })));
      }
    };
    this._makeNameEnumeration = (e, t) => {
      const n = e.map(e => (0, p.getFormattedShortName)(e) || e.shortName).reduce((t, n, a) => [...t, n, a !== e.length - 1 && h.default.t(54) || ""], []);
      return S.fbt._("Add {participants} to \"{subject}\" group?", [S.fbt._param("participants", n.join("")), S.fbt._param("subject", t)], {
        hk: "4fp3A7"
      });
    };
    this._handleAddParticipant = e => {
      (0, v.addParticipants)(this.props.chat, e).catch(() => {});
      E.ModalManager.close();
    };
    this._pop = () => {
      this.pop();
    };
  }
  componentDidMount() {
    var e;
    var t;
    var n;
    var a;
    var r;
    const {
      chat: l,
      communityName: i
    } = this.props;
    const s = ((e = l.groupMetadata) === null || e === undefined ? undefined : e.groupType) === m.GroupType.LINKED_ANNOUNCEMENT_GROUP;
    let c = null;
    if (i != null) {
      c = s ? S.fbt._("Participants will also be added to the community \"{community-name}\" and can join the groups in it.", [S.fbt._param("community-name", T.default.createElement(d.EmojiText, {
        text: i
      }))], {
        hk: "3oUb4T"
      }) : S.fbt._("Participants will also be added to the community \"{community-name}\" and its announcement group.", [S.fbt._param("community-name", T.default.createElement(d.EmojiText, {
        text: i
      }))], {
        hk: "3DDBXm"
      });
    }
    const f = (t = (n = l.groupMetadata) === null || n === undefined ? undefined : n.participants.length) !== null && t !== undefined ? t : 0;
    const p = (0, g.getGroupSizeLimit)((a = l.groupMetadata) === null || a === undefined ? undefined : a.groupType);
    const h = S.fbt._({
      "*": "Can't add more than {participants_limit} participants",
      _1: "Can't add more than 1 participant"
    }, [S.fbt._plural(p, "participants_limit")], {
      hk: "bUSnr"
    });
    let E;
    if ((0, o.getABPropConfigValue)("web_anyone_can_add_group_setting_enabled") && ((r = l.groupMetadata) === null || r === undefined ? undefined : r.isNonAdminAndACAGJREnabled()) === true) {
      E = T.default.createElement("div", {
        className: (0, w.default)(b.uiPadding.horiz12, b.uiPadding.vert6, A)
      }, T.default.createElement(M.WDSTextSmall, {
        color: "secondary"
      }, S.fbt._("Admins need to approve new participants based on this group's settings.", null, {
        hk: "dSq6B"
      })));
    }
    this.push(T.default.createElement(y.SelectModal, {
      onConfirm: this.confirmAddParticipant,
      filter: this.contactFilter,
      title: s && (0, u.communityTabbedInfoEnabled)() ? S.fbt._("Add member", null, {
        hk: "2TD7lX"
      }) : S.fbt._("Add participant", null, {
        hk: "48ECfz"
      }),
      isDisabled: this._isGroupParticipant,
      isSelected: this._isGroupParticipant,
      customHeader: E,
      customSecondaryText: this.customSecondaryText,
      listType: y.ListType.ParticipantManageModal,
      singleSelectionFooterType: C.FooterType.CONFIRM,
      multipleSelectionFooterType: C.FooterType.CONFIRM,
      shouldShowSelectionSummary: false,
      disclaimer: (0, u.communityGeneralChatUIEnabled)() ? null : c,
      maxItems: p - f,
      maxItemsExceedErrorMsg: h,
      allowUnknownContactSearch: (0, o.getABPropConfigValue)("web_add_non_contacts_to_groups_enabled")
    }));
  }
}
exports.default = P;