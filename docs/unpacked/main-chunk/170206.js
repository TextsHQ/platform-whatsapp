var o = require("../vendor/595318.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var r = o(require("../vendor/967154.js"));
var a = o(require("./780387.js"));
var l = require("../app/396574.js");
var i = require("./470855.js");
var s = function (e, t) {
  if (!t && e && e.__esModule) {
    return e;
  }
  if (e === null || typeof e != "object" && typeof e != "function") {
    return {
      default: e
    };
  }
  var n = f(t);
  if (n && n.has(e)) {
    return n.get(e);
  }
  var o = {};
  var r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var a in e) {
    if (a !== "default" && Object.prototype.hasOwnProperty.call(e, a)) {
      var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
      if (l && (l.get || l.set)) {
        Object.defineProperty(o, a, l);
      } else {
        o[a] = e[a];
      }
    }
  }
  o.default = e;
  if (n) {
    n.set(e, o);
  }
  return o;
}(require("../vendor/667294.js"));
var u = o(require("../app/576191.js"));
var d = o(require("../app/38085.js"));
var c = o(require("../app/83233.js"));
function f(e) {
  if (typeof WeakMap != "function") {
    return null;
  }
  var t = new WeakMap();
  var n = new WeakMap();
  return (f = function (e) {
    if (e) {
      return n;
    } else {
      return t;
    }
  })(e);
}
const m = (0, s.forwardRef)((e, t) => {
  const {
    disabled: n,
    className: o,
    theme: f,
    idle: m,
    image: p,
    customImage: h = false,
    detail: E,
    label: g,
    primary: C,
    primaryDetail: _,
    secondary: T,
    secondaryDetail: S,
    extendSecondaryEllipsis: N = false,
    unreadStyle: v,
    checkbox: b = false,
    active: y,
    focusable: M = false,
    dragging: O,
    isMuted: A,
    onClick: x,
    onMouseDown: R,
    onMouseEnter: P,
    onMouseOver: L,
    onMouseLeave: w,
    onContextMenu: I,
    testid: D,
    role: k = "gridcell",
    ariaColIndex: j = 2,
    ariaLabel: F,
    tabIndex: B,
    containerRole: H,
    handleKeyboardClick: Y,
    focusid: $
  } = e;
  const U = Boolean(n !== true && f !== "disabled" && (x || R || P || L));
  const [W, z] = (0, c.default)(x);
  const [G, K] = (0, u.default)();
  const q = (0, d.default)(t, W, G);
  const V = (0, l.classnamesConvertMeToStylexPlease)(o, a.default.chat, {
    [a.default.chatInteractive]: U,
    [a.default.cartProduct]: f === "cart-product",
    [a.default.themeCheckbox]: b || f === "chat-checkbox" || f === "chat-checkbox-no-delete" || f === "cell-message-checkbox" || f === "chat-checkbox-disabled",
    [a.default.themeDrawerList]: f === "drawer-list" || f === "chat-info" || f === "label-list" || f === "subgroup" || f === "subgroup-new" || f === "quick-replies-drawer-item",
    [a.default.themeChatInfo]: f === "chat-info",
    [a.default.themeSubgroup]: f === "subgroup" || f === "subgroup-new",
    [a.default.themeSubgroupNew]: f === "subgroup-new",
    [a.default.themeCommunityHome]: f === "community-home",
    [a.default.themeIdentity]: f === "identity",
    [a.default.themeListNames]: f === "list-names" || f === "list-names-no-delete",
    [a.default.themeMessage]: f === "cell-message" || f === "cell-message-checkbox",
    [a.default.themePlain]: f === "plain",
    [a.default.themeSearch]: f === "chat-search",
    [a.default.themeStatusListModal]: f === "status-list-modal",
    [a.default.themeLabel]: f === "label-selection",
    [a.default.themeAddItem]: f === "add-item",
    [a.default.themeAddItemPlaceholder]: f === "add-item-placeholder",
    [a.default.themeAddOrderItem]: f === "add-order-item",
    [a.default.idle]: m,
    [a.default.member]: f === "group-modal" || f === "chat-checkbox-no-delete",
    [a.default.unread]: !!v,
    [a.default.chatDrag]: !!O,
    [a.default.active]: K || !!y,
    [a.default.isMuted]: !!A,
    [a.default.groupsV4Invite]: f === "groups_v4_invite",
    [a.default.product]: f === "product" || f === "product-out-of-stock" || f === "product-of-collection" || f === "collection-header" || f === "collection-edit",
    [a.default.productOfCollection]: f === "product-of-collection",
    [a.default.productOutOfStock]: f === "product-out-of-stock",
    [a.default.collectionEdit]: f === "collection-edit",
    [a.default.collectionHeader]: f === "collection-header",
    [a.default.orderProduct]: f === "order-product",
    [a.default.media]: f === "media",
    [a.default.listButton]: f === "list-button-compact",
    [a.default.listMsg]: f === "list-msg",
    [a.default.archivePanel]: f === "archive-panel",
    [a.default.themeRadioButtonRow]: f === "radio-button-row",
    [a.default.stickerPack]: f === "sticker-pack",
    [a.default.themeReaction]: f === "reaction-by-others" || f === "reaction-by-me" || f === "newsletter-reaction-by-others" || f === "newsletter-reaction-by-me",
    [a.default.themeReactionByMe]: f === "reaction-by-me",
    [a.default.themeNewsletterLinkDrawer]: f === "newsletter-link-cell",
    [a.default.themeReactionByOthers]: f === "reaction-by-others",
    [a.default.themeNewsletterReactionByOthers]: f === "newsletter-reaction-by-others",
    [a.default.themeNewsletterContactReactions]: f === "newsletter-reaction-by-contact",
    [a.default.disabled]: f === "disabled",
    [a.default.linkedAccount]: f === "linked-account" || f === "linked-account-consumer",
    [a.default.linkedAccountConsumer]: f === "linked-account-consumer",
    [a.default.themeCheckboxDisabled]: f === "chat-checkbox-disabled",
    [a.default.themeCommunityTabHome]: f === "community-tab-home" || f === "community-tab-home-new",
    [a.default.themeCommunityTabHomeNew]: f === "community-tab-home-new",
    [a.default.themeCommunityTabSubgroup]: f === "community-tab-subgroup",
    [a.default.themeCommunityTabViewAll]: f === "community-tab-view-all",
    [a.default.themeCommunityTabActivityCell]: f === "community-tab-activity-cell",
    [a.default.themeCommunityCreate]: f === "community-create",
    [a.default.themeNoBorder]: f === "no-border",
    [a.default.themeProductAddToOrder]: f === "product-add-to-order",
    [a.default.themeSelectDropdownItem]: f === "select-dropdown-item",
    [a.default.tallerCellWithLabel]: g != null,
    [a.default.chatMaterial]: (0, i.supportsMaterialDesign)(),
    [a.default.noBorderMaterial]: (0, i.supportsMaterialDesign)()
  });
  let X;
  if (p) {
    X = h ? p : s.default.createElement("div", {
      className: a.default.chatAvatar
    }, p);
  }
  const Q = _ != null ? s.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)({
      [a.default.chatMeta]: !["product", "product-out-of-stock", "product-of-collection"].includes(f) && f !== "sticker-pack"
    })
  }, _) : null;
  let J;
  let Z;
  if (T != null) {
    Z = S != null ? s.default.createElement("div", {
      role: "gridcell",
      "aria-colindex": "1",
      className: a.default.chatMeta
    }, S) : null;
    J = s.default.createElement("div", {
      className: a.default.chatSecondary
    }, s.default.createElement("div", {
      className: (0, l.classnamesConvertMeToStylexPlease)(a.default.chatStatus, {
        [a.default.extendSecondaryEllipsis]: N
      })
    }, T), g == null && Z);
  }
  const ee = E != null ? s.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)(a.default.chatBody, a.default.chatDetails, {
      [a.default.noBorderMaterial]: (0, i.supportsMaterialDesign)()
    })
  }, E) : null;
  return s.default.createElement("div", (0, r.default)({
    ref: q,
    tabIndex: B,
    "data-focusid": $,
    className: V,
    onClick: x,
    onMouseDown: R,
    onMouseEnter: P,
    onMouseOver: L,
    onMouseLeave: w,
    onContextMenu: I,
    role: H,
    "aria-label": F
  }, (M && U && y == null || Y === true) && z), s.default.createElement("div", {
    className: a.default.image
  }, X), s.default.createElement("div", {
    className: (0, l.classnamesConvertMeToStylexPlease)(a.default.chatBody, {
      [a.default.noBorderMaterial]: (0, i.supportsMaterialDesign)()
    })
  }, g != null && s.default.createElement("div", {
    className: a.default.chatLabel
  }, g, Q), s.default.createElement("div", {
    role: k,
    "aria-colindex": j,
    className: (0, l.classnamesConvertMeToStylexPlease)(a.default.chatMain, {
      [a.default.noDelete]: f === "list-names-no-delete"
    })
  }, s.default.createElement("div", {
    className: a.default.chatTitle
  }, C, g != null && Z), g == null && Q), J), ee);
});
m.displayName = "CellFrame";
var p = m;
exports.default = p;