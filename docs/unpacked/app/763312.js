const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterDehydratedJobQuery",
    selections: r = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "input",
        variableName: "input"
      }],
      concreteType: "XWA2Newsletter",
      kind: "LinkedField",
      name: "xwa2_newsletter",
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
        concreteType: "XWA2NewsletterThreadMetadata",
        kind: "LinkedField",
        name: "thread_metadata",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscribers_count",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "verification",
          storageKey: null
        }, {
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterThreadSettings",
          kind: "LinkedField",
          name: "settings",
          plural: false,
          selections: [{
            alias: null,
            args: null,
            concreteType: "XWA2NewsletterReactionCodesSetting",
            kind: "LinkedField",
            name: "reaction_codes",
            plural: false,
            selections: [{
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "value",
              storageKey: null
            }],
            storageKey: null
          }],
          storageKey: null
        }],
        storageKey: null
      }],
      storageKey: null
    }],
    type: "Query",
    abstractKey: null
  },
  kind: "Request",
  operation: {
    argumentDefinitions: n,
    kind: "Operation",
    name: "WAWebMexFetchNewsletterDehydratedJobQuery",
    selections: r
  },
  params: {
    id: "7272540469429201",
    metadata: {},
    name: "WAWebMexFetchNewsletterDehydratedJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
t.hash = "5305f0bb66d8979edf02785f4d26d8eb";
module.exports = t;