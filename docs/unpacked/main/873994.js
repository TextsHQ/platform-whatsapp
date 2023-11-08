Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderDetailsActionsSmbWamEvent = undefined;
var a = require("../app/901032.js");
var r = require("./76195.js");
const {
  BOOLEAN: o,
  STRING: l
} = a.TYPES;
const i = (0, a.defineEvents)({
  OrderDetailsActionsSmb: [3456, {
    acceptedPayMethods: [1, l],
    actionCategory: [2, l],
    extraAttributes: [3, l],
    hasAddedPrice: [4, o],
    hasCatalog: [5, o],
    hasNote: [6, o],
    orderDetailEntryPoint: [7, l],
    orderDetailsCreationAction: [8, r.ORDER_DETAILS_CREATION_ACTION],
    orderEligibleToSend: [11, o],
    paymentStatus: [9, o],
    paymentType: [10, l],
    sharingOrderStatusEvents: [12, o]
  }, [1, 1, 1], "regular"]
});
exports.OrderDetailsActionsSmbWamEvent = i;