const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "input"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebMexFetchPlaintextLinkPreviewJobQuery",
    selections: a = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "input",
        variableName: "input"
      }],
      concreteType: "XWA2NewsletterLinkPreviewResponse",
      kind: "LinkedField",
      name: "xwa2_newsletter_link_preview",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "canonical_url",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "description",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "direct_path",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "hash",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "preview_type",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "thumb_data",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "title",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "height",
        storageKey: null
      }, {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "width",
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
    name: "WAWebMexFetchPlaintextLinkPreviewJobQuery",
    selections: a
  },
  params: {
    id: "6540415989345679",
    metadata: {},
    name: "WAWebMexFetchPlaintextLinkPreviewJobQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var a;
t.hash = "91b64626886e2ba63435067afccb3e03";
module.exports = t;