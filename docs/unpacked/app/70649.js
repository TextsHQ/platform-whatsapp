const t = {
  fragment: {
    argumentDefinitions: n = [{
      defaultValue: null,
      kind: "LocalArgument",
      name: "request"
    }],
    kind: "Fragment",
    metadata: null,
    name: "WAWebQueryCatalogHasCategoriesQuery",
    selections: r = [{
      alias: null,
      args: [{
        kind: "Variable",
        name: "request",
        variableName: "request"
      }],
      concreteType: "XWAProductCatalogGetCategoriesResponseSuccess",
      kind: "LinkedField",
      name: "xwa_product_catalog_get_categories",
      plural: false,
      selections: [{
        alias: null,
        args: null,
        concreteType: "XWAProductCatalogGetCategoriesResponseSuccessCategoryWithSubCategories",
        kind: "LinkedField",
        name: "categories",
        plural: true,
        selections: [{
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
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
    name: "WAWebQueryCatalogHasCategoriesQuery",
    selections: r
  },
  params: {
    id: "WAWebQueryCatalogHasCategoriesQuery",
    metadata: {},
    name: "WAWebQueryCatalogHasCategoriesQuery",
    operationKind: "query",
    text: null
  }
};
var n;
var r;
t.hash = "05cf640c4ace8fe9368dfe9c9768bcd9";
module.exports = t;