const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "url_domains"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery",
    selections: a = [{
      alias: null,
      args: [{
        fields: [{
          kind: "Variable",
          name: "url_domains",
          variableName: "url_domains"
        }],
        kind: "ObjectValue",
        name: "input"
      }],
      concreteType: "XWA2NewsletterMessageIntegrityResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_message_integrity",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        concreteType: "XWA2NewsletterMessageIntegrityPreviewURLResponse",
        kind: "LinkedField",
        name: "url_previews",
        plural: true,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "url_domain",
          storageKey: null
        }, {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_previewable",
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
    name: "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery",
    selections: a
  },
  params: {
    id: "6496540227089419",
    metadata: {},
    name: "WAWebMexFetchNewsletterIsDomainPreviewableJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var a;
t.hash = "b07c64f4d5aff18df40953f4b89fc635";
module.exports = t;