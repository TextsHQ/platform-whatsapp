Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentTransactionTypeServerString = exports.PaymentTransactionType = exports.PaymentTransactionStatusServerString = exports.NotificationTransactionStatus = undefined;
exports.determinePaymentRequestFulfilledStatus = function (e) {
  t = e;
  if (t === r.PaymentInfo$TxnStatus.COMPLETED || t === r.PaymentInfo$TxnStatus.SUCCESS) {
    return e;
  }
  var t;
  return r.PaymentInfo$TxnStatus.COLLECT_INIT;
};
exports.getNotificationTransactionStatus = function (e, t) {
  if (!t) {
    return a.STATUS_UNSET;
  }
  const n = t.toUpperCase();
  switch (e) {
    case i.TYPE_P2P_SENT:
    case i.TYPE_P2M_SENT:
    case i.TYPE_DEPOSIT:
      switch (n) {
        case s.PENDING_RECEIVER_SETUP:
          return a.SEND_PAY_PENDING_RECEIVER;
        case s.FAILED_DA:
          return a.SEND_PAY_PENDING;
        case s.REFUND_FAILED_DA:
          return a.SEND_PAY_REFUND_PENDING;
        case s.FAILED_RISK:
          return a.SEND_PAY_FAILURE_RISK;
        case s.INITIAL:
          return a.SEND_PAY_INIT;
        case s.SUCCESS:
        case s.COMPLETED:
          return a.SEND_PAY_SUCCESS;
        case s.FAILURE:
        case s.FAILED:
          return a.SEND_PAY_FAILURE;
        case s.REFUNDED:
          return a.SEND_PAY_REFUNDED;
        case s.REFUND_FAILED:
          return a.SEND_PAY_REFUND_FAILED;
        case s.FAILED_RECEIVER_PROCESSING:
          return a.SEND_PAY_FAILURE_RECEIVER;
        case s.REFUND_FAILED_PROCESSING:
          return a.SEND_PAY_REFUND_FAILED_PROCESSING;
        case s.FAILED_DA_FINAL:
          return a.SEND_PAY_PENDING_REFUND;
        case s.AUTH_CANCEL_FAILED_PROCESSING:
          return a.SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING;
        case s.AUTH_CANCEL_FAILED:
          return a.SEND_PAY_AUTH_CANCEL_FAILED;
        case s.AUTH_CANCELED:
          return a.SEND_PAY_AUTH_CANCELED;
        case s.EXPIRED:
          return a.SEND_PAY_EXPIRED;
        case s.IN_REVIEW:
          return a.SEND_PAY_IN_REVIEW;
        case s.PENDING:
          return a.SEND_PAY_PENDING_PROCESSING;
        case s.CANCELED:
          return a.SEND_PAY_USER_CANCELED;
      }
      break;
    case i.TYPE_P2P_RCVD:
    case i.TYPE_P2M_RCVD:
      switch (n) {
        case s.PENDING_SETUP:
          return a.RECV_PAY_PENDING_SETUP;
        case s.FAILED_DA:
          return a.RECV_PAY_PENDING;
        case s.FAILED_PROCESSING:
          return a.RECV_PAY_RETRY_ON_FAILURE;
        case s.SUCCESS:
        case s.COMPLETED:
          return a.RECV_PAY_SUCCESS;
        case s.FAILURE:
        case s.FAILED:
          return a.RECV_PAY_FAILURE;
        case s.EXPIRED:
          return a.RECV_PAY_EXPIRED;
        case s.FAILED_RISK:
          return a.RECV_PAY_FAILURE_RISK;
        case s.WITHDRAWAL_PROCESSING:
          return a.RECV_PAY_WITHDRAWAL_PROCESSING;
        case s.WITHDRAWAL_FAILURE:
          return a.RECV_PAY_WITHDRAWAL_FAILURE;
        case s.WITHDRAWAL_PERMANENT_FAILED:
          return a.RECV_PAY_WITHDRAWAL_PERMANENT_FAILED;
        case s.CANCELED:
          return a.RECV_PAY_SENDER_CANCELED;
      }
      break;
    case i.TYPE_P2P_REQ_SENT:
    case i.TYPE_P2P_REQ_RCVD:
      switch (n) {
        case s.COLLECT_SUCCESS:
          return a.REQUEST_PAY_SUCCESS;
        case s.COLLECT_FAILED:
          return a.REQUEST_PAY_FAILED;
        case s.COLLECT_FAILED_RISK:
          return a.REQUEST_PAY_FAILED_RISK;
        case s.COLLECT_REJECTED:
          return a.REQUEST_PAY_REJECTED;
        case s.COLLECT_EXPIRED:
          return a.REQUEST_PAY_EXPIRED;
        case s.COLLECT_CANCELED:
          return a.REQUEST_PAY_CANCELLED;
      }
      break;
    case i.TYPE_P2P_REQ_SCHEDULED_PAYMENT_RCVD:
      switch (n) {
        case s.COLLECT_SUCCESS:
          return a.REQUEST_PAY_SCHEDULED_PAYMENT_SUCCESS;
        case s.AUTH_SUCCESS:
          return a.SEND_PAY_AUTH_SUCCESS;
      }
      break;
    case i.TYPE_REFUND:
      switch (n) {
        case s.SUCCESS:
        case s.COMPLETED:
          return a.RECV_PAY_SUCCESS;
      }
      break;
    case i.TYPE_WITHDRAWAL:
      switch (n) {
        case s.PENDING:
          return a.WITHDRAWAL_PENDING;
        case s.IN_REVIEW:
          return a.WITHDRAWAL_IN_REVIEW;
        case s.SUCCESS:
        case s.COMPLETED:
          return a.WITHDRAWAL_SUCCESS;
        case s.FAILED:
        case s.DECLINED:
          return a.WITHDRAWAL_FAILED;
        case s.CANCELED:
          return a.WITHDRAWAL_USER_CANCELED;
        case s.EXPIRED:
          return a.WITHDRAWAL_EXPIRED;
        case s.WITHDRAWAL_ACTIVE:
          return a.WITHDRAWAL_ACTIVE;
      }
      break;
    default:
      return a.STATUS_UNSET;
  }
  return a.STATUS_UNSET;
};
exports.getPaymentTransactionType = function (e, t) {
  if (e) {
    const n = e.toLowerCase();
    switch (n) {
      case o.TYPE_P2P:
        if (t) {
          return i.TYPE_P2P_SENT;
        } else {
          return i.TYPE_P2P_RCVD;
        }
      case o.TYPE_P2M:
        if (t) {
          return i.TYPE_P2M_SENT;
        } else {
          return i.TYPE_P2M_RCVD;
        }
      case o.TYPE_P2M_PAYOUT:
        return i.TYPE_P2M_PAYOUT;
      case o.TYPE_DEPOSIT:
        return i.TYPE_DEPOSIT;
      case o.TYPE_REFUND:
        return i.TYPE_REFUND;
      case o.TYPE_WITHDRAWAL:
        return i.TYPE_WITHDRAWAL;
      default:
        __LOG__(2)`parsePaymentTransactionType payment transaction string=${n}`;
    }
  }
  if (t) {
    return i.TYPE_P2P_SENT;
  } else {
    return i.TYPE_P2P_RCVD;
  }
};
exports.getPaymentTxnWebStatus = function (e) {
  if (e == null) {
    return r.PaymentInfo$TxnStatus.UNKNOWN;
  }
  switch (e) {
    case a.RECV_PAY_EXPIRED:
    case a.SEND_PAY_EXPIRED:
      return r.PaymentInfo$TxnStatus.EXPIRED_TXN;
    case a.RECV_PAY_FAILURE:
    case a.SEND_PAY_FAILURE:
      return r.PaymentInfo$TxnStatus.FAILED;
    case a.RECV_PAY_INIT:
    case a.SEND_PAY_INIT:
      return r.PaymentInfo$TxnStatus.INIT;
    case a.RECV_PAY_PENDING_SETUP:
      return r.PaymentInfo$TxnStatus.PENDING_SETUP;
    case a.RECV_PAY_PENDING:
    case a.SEND_PAY_PENDING:
      return r.PaymentInfo$TxnStatus.FAILED_DA;
    case a.RECV_PAY_RETRY_ON_FAILURE:
      return r.PaymentInfo$TxnStatus.FAILED_PROCESSING;
    case a.RECV_PAY_SUCCESS:
    case a.SEND_PAY_SUCCESS:
    case a.REQUEST_PAY_FULFILLED:
      return r.PaymentInfo$TxnStatus.SUCCESS;
    case a.REQUEST_PAY_CANCELLED:
      return r.PaymentInfo$TxnStatus.COLLECT_CANCELED;
    case a.REQUEST_PAY_CANCELLING:
      return r.PaymentInfo$TxnStatus.COLLECT_CANCELLING;
    case a.REQUEST_PAY_EXPIRED:
      return r.PaymentInfo$TxnStatus.COLLECT_EXPIRED;
    case a.REQUEST_PAY_FAILED_RISK:
      return r.PaymentInfo$TxnStatus.COLLECT_FAILED_RISK;
    case a.REQUEST_PAY_FAILED:
      return r.PaymentInfo$TxnStatus.COLLECT_FAILED;
    case a.REQUEST_PAY_INIT:
      return r.PaymentInfo$TxnStatus.COLLECT_INIT;
    case a.REQUEST_PAY_REJECTED:
      return r.PaymentInfo$TxnStatus.COLLECT_REJECTED;
    case a.REQUEST_PAY_SUCCESS:
      return r.PaymentInfo$TxnStatus.COLLECT_SUCCESS;
    case a.SEND_PAY_AUTH_CANCELED:
      return r.PaymentInfo$TxnStatus.AUTH_CANCELED;
    case a.SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING:
      return r.PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED_PROCESSING;
    case a.SEND_PAY_AUTH_CANCEL_FAILED:
      return r.PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED;
    case a.SEND_PAY_FAILURE_RECEIVER:
      return r.PaymentInfo$TxnStatus.FAILED_RECEIVER_PROCESSING;
    case a.SEND_PAY_FAILURE_RISK:
    case a.RECV_PAY_FAILURE_RISK:
      return r.PaymentInfo$TxnStatus.FAILED_RISK;
    case a.SEND_PAY_PENDING_RECEIVER:
      return r.PaymentInfo$TxnStatus.PENDING_RECEIVER_SETUP;
    case a.SEND_PAY_PENDING_REFUND:
      return r.PaymentInfo$TxnStatus.FAILED_DA_FINAL;
    case a.SEND_PAY_REFUNDED:
      return r.PaymentInfo$TxnStatus.REFUNDED_TXN;
    case a.SEND_PAY_REFUND_FAILED_PROCESSING:
      return r.PaymentInfo$TxnStatus.REFUND_FAILED_PROCESSING;
    case a.SEND_PAY_REFUND_FAILED:
      return r.PaymentInfo$TxnStatus.REFUND_FAILED;
    case a.SEND_PAY_REFUND_PENDING:
      return r.PaymentInfo$TxnStatus.REFUND_FAILED_DA;
    case a.SEND_PAY_IN_REVIEW:
      return r.PaymentInfo$TxnStatus.IN_REVIEW;
    case a.STATUS_UNSET:
    default:
      return r.PaymentInfo$TxnStatus.UNKNOWN;
  }
};
exports.getPaymentWebStatus = function (e, t) {
  if (e == null) {
    return r.PaymentInfo$Status.UNKNOWN_STATUS;
  }
  switch (e) {
    case a.SEND_PAY_INIT:
    case a.SEND_PAY_PENDING:
    case a.RECV_PAY_INIT:
    case a.RECV_PAY_PENDING:
    case a.RECV_PAY_RETRY_ON_FAILURE:
    case a.REQUEST_PAY_INIT:
      return r.PaymentInfo$Status.PROCESSING;
    case a.SEND_PAY_PENDING_RECEIVER:
    case a.SEND_PAY_FAILURE_RECEIVER:
      return r.PaymentInfo$Status.SENT;
    case a.REQUEST_PAY_SUCCESS:
      if (t === i.TYPE_P2P_REQ_SENT) {
        return r.PaymentInfo$Status.WAITING_FOR_PAYER;
      } else {
        return r.PaymentInfo$Status.WAITING;
      }
    case a.RECV_PAY_PENDING_SETUP:
      return r.PaymentInfo$Status.NEED_TO_ACCEPT;
    case a.SEND_PAY_SUCCESS:
    case a.RECV_PAY_SUCCESS:
    case a.REQUEST_PAY_FULFILLED:
      return r.PaymentInfo$Status.COMPLETE;
    case a.SEND_PAY_FAILURE:
    case a.SEND_PAY_FAILURE_RISK:
    case a.SEND_PAY_PENDING_REFUND:
    case a.SEND_PAY_REFUND_PENDING:
    case a.SEND_PAY_REFUND_FAILED:
    case a.SEND_PAY_REFUND_FAILED_PROCESSING:
    case a.RECV_PAY_FAILURE:
    case a.REQUEST_PAY_FAILED:
    case a.REQUEST_PAY_FAILED_RISK:
      return r.PaymentInfo$Status.COULD_NOT_COMPLETE;
    case a.SEND_PAY_REFUNDED:
      return r.PaymentInfo$Status.REFUNDED;
    case a.RECV_PAY_EXPIRED:
    case a.REQUEST_PAY_EXPIRED:
    case a.SEND_PAY_AUTH_CANCELED:
    case a.SEND_PAY_AUTH_CANCEL_FAILED:
    case a.SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING:
      return r.PaymentInfo$Status.EXPIRED;
    case a.REQUEST_PAY_REJECTED:
      return r.PaymentInfo$Status.REJECTED;
    case a.REQUEST_PAY_CANCELLED:
      return r.PaymentInfo$Status.CANCELLED;
    case a.STATUS_UNSET:
    case a.REQUEST_PAY_CANCELLING:
    default:
      return r.PaymentInfo$Status.UNKNOWN_STATUS;
  }
};
var r = require("./968923.js");
const i = require("../vendor/76672.js")({
  TYPE_UNSET: 0,
  TYPE_P2P_SENT: 1,
  TYPE_P2P_RCVD: 2,
  TYPE_P2P_GRP: 3,
  TYPE_P2P_NO_INFO: 4,
  TYPE_FUTURE: 5,
  TYPE_P2P_REQ_SENT: 10,
  TYPE_P2P_REQ_RCVD: 20,
  TYPE_P2P_REQ_SCHEDULED_PAYMENT_RCVD: 21,
  TYPE_P2P_REQ_GRP: 30,
  TYPE_P2M_SENT: 100,
  TYPE_P2M_RCVD: 200,
  TYPE_P2M_PAYOUT: 300,
  TYPE_MISSING_DETAILS: 400,
  TYPE_DEPOSIT: 500,
  TYPE_REFUND: 600,
  TYPE_WITHDRAWAL: 700
});
exports.PaymentTransactionType = i;
const a = require("../vendor/76672.js")({
  STATUS_UNSET: 0,
  REQUEST_PAY_INIT: 11,
  REQUEST_PAY_SUCCESS: 12,
  REQUEST_PAY_FAILED: 13,
  REQUEST_PAY_FAILED_RISK: 14,
  REQUEST_PAY_REJECTED: 15,
  REQUEST_PAY_EXPIRED: 16,
  REQUEST_PAY_FULFILLED: 17,
  REQUEST_PAY_CANCELLED: 18,
  REQUEST_PAY_CANCELLING: 19,
  REQUEST_PAY_SCHEDULED_PAYMENT_SUCCESS: 20,
  RECV_PAY_INIT: 101,
  RECV_PAY_PENDING_SETUP: 102,
  RECV_PAY_PENDING: 103,
  RECV_PAY_RETRY_ON_FAILURE: 104,
  RECV_PAY_FAILURE: 105,
  RECV_PAY_SUCCESS: 106,
  RECV_PAY_EXPIRED: 107,
  RECV_PAY_FAILURE_RISK: 108,
  RECV_PAY_WITHDRAWAL_PROCESSING: 109,
  RECV_PAY_WITHDRAWAL_FAILURE: 110,
  RECV_PAY_WITHDRAWAL_PERMANENT_FAILED: 111,
  RECV_PAY_SENDER_CANCELED: 112,
  SEND_PAY_INIT: 401,
  SEND_PAY_PENDING_RECEIVER: 402,
  SEND_PAY_PENDING: 403,
  SEND_PAY_REFUND_PENDING: 404,
  SEND_PAY_SUCCESS: 405,
  SEND_PAY_FAILURE: 406,
  SEND_PAY_FAILURE_RISK: 407,
  SEND_PAY_REFUNDED: 408,
  SEND_PAY_REFUND_FAILED: 409,
  SEND_PAY_FAILURE_RECEIVER: 410,
  SEND_PAY_REFUND_FAILED_PROCESSING: 411,
  SEND_PAY_PENDING_REFUND: 412,
  SEND_PAY_AUTH_CANCEL_FAILED_PROCESSING: 413,
  SEND_PAY_AUTH_CANCEL_FAILED: 414,
  SEND_PAY_AUTH_CANCELED: 415,
  SEND_PAY_EXPIRED: 416,
  SEND_PAY_AUTH_SUCCESS: 417,
  SEND_PAY_AUTH_SUCCESS_CANCELING: 418,
  SEND_PAY_IN_REVIEW: 419,
  SEND_PAY_PENDING_PROCESSING: 420,
  SEND_PAY_USER_CANCELED: 421,
  WITHDRAWAL_INIT: 601,
  WITHDRAWAL_PENDING: 602,
  WITHDRAWAL_IN_REVIEW: 603,
  WITHDRAWAL_SUCCESS: 604,
  WITHDRAWAL_FAILED: 605,
  WITHDRAWAL_USER_CANCELED: 606,
  WITHDRAWAL_EXPIRED: 607,
  WITHDRAWAL_ACTIVE: 608
});
exports.NotificationTransactionStatus = a;
const o = {
  TYPE_P2P: "p2p",
  TYPE_P2M: "p2m",
  TYPE_P2M_PAYOUT: "payout",
  TYPE_WITHDRAWAL: "withdrawal",
  TYPE_DEPOSIT: "deposit",
  TYPE_REFUND: "refund"
};
exports.PaymentTransactionTypeServerString = o;
const s = {
  PENDING_RECEIVER_SETUP: "PENDING_RECEIVER_SETUP",
  PENDING_SETUP: "PENDING_SETUP",
  PENDING: "PENDING",
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  COMPLETED: "COMPLETED",
  IN_REVIEW: "IN_REVIEW",
  FAILED: "FAILED",
  DECLINED: "DECLINED",
  FAILURE: "FAILURE",
  FAILED_RISK: "FAILED_RISK",
  FAILED_PROCESSING: "FAILED_PROCESSING",
  FAILED_RECEIVER_PROCESSING: "FAILED_RECEIVER_PROCESSING",
  REFUND_FAILED_PROCESSING: "REFUND_FAILED_PROCESSING",
  REFUNDED: "REFUNDED",
  REFUND_FAILED: "REFUND_FAILED",
  EXPIRED: "EXPIRED",
  CANCELED: "CANCELLED",
  AUTH_SUCCESS: "AUTH_SUCCESS",
  AUTH_CANCELED: "AUTH_CANCELED",
  AUTH_CANCEL_FAILED_PROCESSING: "AUTH_CANCEL_FAILED_PROCESSING",
  AUTH_CANCEL_FAILED: "AUTH_CANCEL_FAILED",
  COLLECT_SUCCESS: "COLLECT_SUCCESS",
  COLLECT_FAILED: "COLLECT_FAILED",
  COLLECT_REJECTED: "COLLECT_REJECTED",
  COLLECT_EXPIRED: "COLLECT_EXPIRED",
  COLLECT_CANCELED: "COLLECT_CANCELED",
  FAILED_DA: "FAILED_DA",
  FAILED_DA_FINAL: "FAILED_DA_FINAL",
  REFUND_FAILED_DA: "REFUND_FAILED_DA",
  COLLECT_FAILED_RISK: "COLLECT_FAILED_RISK",
  WITHDRAWAL_PROCESSING: "WITHDRAWAL_PROCESSING",
  WITHDRAWAL_FAILURE: "WITHDRAWAL_FAILURE",
  WITHDRAWAL_PERMANENT_FAILED: "WITHDRAWAL_PERMANENT_FAILED",
  WITHDRAWAL_ACTIVE: "WITHDRAWAL_ACTIVE"
};
exports.PaymentTransactionStatusServerString = s;