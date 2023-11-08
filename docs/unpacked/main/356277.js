const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "newsletter_id"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexDeleteNewsletterJobMutation",
    selections: a = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "newsletter_id",
        variableName: "newsletter_id"
      }],
      concreteType: "XWA2NewsletterMutationResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_delete_v2",
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
    name: "WAWebMexDeleteNewsletterJobMutation",
    selections: a
  },
  params: {
    id: "6432288716838852",
    metadata: {},
    name: "WAWebMexDeleteNewsletterJobMutation",
    operationKind: "mutation",
    text: null
  }
};
var n;
var a;
t.hash = "d0c725b0c21278dcbd474d99f86ba472";
module.exports = t;