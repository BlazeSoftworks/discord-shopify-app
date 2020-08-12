const getSubscriptionQuery = async (ctx, accessToken, shop) => {

  const query = JSON.stringify({
    query: `query {
          currentAppInstallation {
            allSubscriptions(first: 2) {
              edges {
                node {
                  lineItems {
                    plan {
                      pricingDetails {
                        __typename
                        ... on AppRecurringPricing {
                          price {
                            amount
                            currencyCode
                          }
                        }
                        ... on AppUsagePricing {
                          balanceUsed {
                            amount
                            currencyCode
                          }
                          cappedAmount {
                            amount
                            currencyCode
                          }
                        }
                      }
                    }
                  }
                  createdAt
                  id
                  name
                  status
                  test
                }
              }
            }
          }
        }`
  });

  const response = await fetch(`https://${shop}/admin/api/2020-07/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-Shopify-Access-Token": accessToken,
    },
    body: query
  })

  const responseJson = await response.json();

  return responseJson
}

module.exports = getSubscriptionQuery;