const getSubscriptionUrl = async (ctx, accessToken, shop, partnerDevelopment) => {
  //SCHIMBA TEST TRUE   
  const query = JSON.stringify({
    query: `mutation {
        appSubscriptionCreate(
            name: "Discordify Plan"
            trialDays: 7
            returnUrl: "${process.env.HOST}"
            test: ${partnerDevelopment}
            lineItems: [
            {
              plan: {
                appUsagePricingDetails: {
                    cappedAmount: { amount: 10, currencyCode: USD }
                    terms: "$1 for every 1000 website impressions"
                }
              }
            }            
            {
              plan: {
                appRecurringPricingDetails: {
                    price: { amount: 2.49, currencyCode: USD }
                }
              }
            }            
            ]
          ) {
              userErrors {
                field
                message
              }
              confirmationUrl
              appSubscription {
                id
                lineItems {
                  id
                  plan {
                    pricingDetails {
                      __typename
                    }
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

  //console.log(JSON.stringify(responseJson))
  //console.log(responseJson.data.appSubscriptionCreate.appSubscription)
  //console.log(JSON.parse(JSON.stringify(responseJson)))

  const confirmationUrl = responseJson.data.appSubscriptionCreate.confirmationUrl

  var appSubscription
  if (responseJson.data.appSubscriptionCreate.appSubscription.lineItems[0].plan.pricingDetails == "AppUsagePricing")
    appSubscription = responseJson.data.appSubscriptionCreate.appSubscription.lineItems[0]
  else
    appSubscription = responseJson.data.appSubscriptionCreate.appSubscription.lineItems[1]

  console.log(responseJson.data.appSubscriptionCreate.appSubscription.lineItems)

  console.log(responseJson.data.appSubscriptionCreate.appSubscription.lineItems[0].plan.pricingDetails)
  console.log(responseJson.data.appSubscriptionCreate.appSubscription.lineItems[1].plan.pricingDetails)

  return { confirmationUrl: confirmationUrl, appSubscription: appSubscription }
}

module.exports = getSubscriptionUrl;