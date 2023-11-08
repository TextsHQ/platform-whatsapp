const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexLeaveNewsletterJobMutation",
    selections: a = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "newsletter_id",
        variableName: "newsletter_id"
      }],
      concreteType: "XWA2NewsletterMutationResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_leave_v2",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null
      }, {
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterState",
        kind: "LinkedField",
        name: "newsletter_state",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null
        }],
        storageKey: null
      }],
      storageKey: null
    }],
    type: "Mutation",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: n,
    kind: "Operation",
    name: "WAWebMexLeaveNewsletterJobMutation",
    selections: a
  },
  params: {
    id: "6392786840836363",
    metadata: {},
    name: "WAWebMexLeaveNewsletterJobMutation",
    operationKind: "mutation",
    text: null
  }
};
var n;
var a;
t.hash = "22d1cec3f245e58e95953d6c3a00f488";
module.exports = t;