const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterSubscribersJobQuery",
    selections: a = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "input",
        variableName: "input"
      }],
      concreteType: "XWA2NewsletterSubscribersResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_subscribers",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterSubscriberConnection",
        kind: "LinkedField",
        name: "subscribers",
        plural: false,
        selections: [{
          alias: null,
          args: null,
          concreteType: "XWA2NewsletterSubscriberEdge",
          kind: "LinkedField",
          name: "edges",
          plural: true,
          selections: [{
            alias: null,
            args: null,
            concreteType: "XWA2User",
            kind: "LinkedField",
            name: "node",
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
              kind: "ScalarField",
              name: "display_name",
              storageKey: null
            }, {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "pn",
              storageKey: null
            }],
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "subscribe_time",
            storageKey: null
          }, {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "role",
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
    name: "WAWebMexFetchNewsletterSubscribersJobQuery",
    selections: a
  },
  params: {
    id: "6813250488751160",
    metadata: {},
    name: "WAWebMexFetchNewsletterSubscribersJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var a;
t.hash = "b6cabd1d4f30a0caf8549e590ad78083";
module.exports = t;