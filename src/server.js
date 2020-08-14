require('isomorphic-fetch')
const dotenv = require('dotenv')
const Koa = require('koa')
const KoaRouter = require('koa-router')
var cors = require('koa2-cors')
const next = require('next')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const { receiveWebhook, registerWebhook } = require('@shopify/koa-shopify-webhooks');
const session = require('koa-session')
const koaBody = require('koa-body')
dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy')
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy')

const getSubscriptionUrl = require('./requests/getSubcriptionUrl');
const getStorePlan = require('./requests/getStorePlan');
const getSubQuery = require('./requests/getSubQuery');
//const createUsageRecord = require('./requests/createUsageRecord');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

require('./db/mongoose')

const {
  SHOPIFY_API_SECRET_KEY,
  SHOPIFY_API_KEY,
  HOST
} = process.env

const server = new Koa()
const router = new KoaRouter()

const DiscordID = require('./models/discordID')
const Widget = require('./models/widget')
//const Usage = require('./models/usage')
const ShopRedact = require('./models/shopRedact')
const Billing = require('./models/billing')

var update = {}

//ROUTER MIDDLEWARE

// init middleware with resolver
server.use(cors({ origin: '*' }));
server.use(router.allowedMethods());
server.use(router.routes());

// server.use(async (ctx) => {
//   if (parseInt(ctx.status) === 404) {
//     ctx.status = 404
//     ctx.body = { msg: 'emmmmmmm, seems 404' };

//     ctx.redirect(`https://www.discordify.com/auth?shop=${ctx.cookies.get("shopOrigin")}`)
//   }
// })

const webhook = receiveWebhook({ secret: SHOPIFY_API_SECRET_KEY });

router.get('/privacy', (ctx) => {
  ctx.body = `
  <html>
  <head>
  <title>
      Privacy Policy
  </title>
  </head>
  <body style="padding: 40px 25px;font-family: sans-serif;">
  <h1 class="entry-title" itemprop="headline">Privacy Policy</h1>
  <div class="entry-content clear" itemprop="text">
      <div class="elementor-text-editor elementor-clearfix"><p><!-- wp:heading --><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>Garoo Apps provide applications "the Service" to merchants who use Shopify to power their stores. This Privacy Policy describes how personal information is collected, used, and shared when you install or use the App in connection with your Shopify-supported store.</p>
          <div>
              <h3 style="font-size: 2.14286rem; font-style: normal;">What personal data we collect</h3>
          </div>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>When you install the App, we are automatically able to access certain types of information from your Shopify account:&nbsp;<a href="https://help.shopify.com/api/getting-started/authentication/oauth/scopes">The full list available through Shopify can be seen here</a>.</p>
          <p><!-- /wp:paragraph --><!-- wp:paragraph --></p>
          <p>To explicity view permissions each app has - please click the "View Details" link from the Shopify apps page within your Shopify admin</p>
          <p>We collect data such as how and when you access your account (access logs), including information about the device and browser you use, your network connection and your IP address, the configuration you choose to make to our Apps, history of payments and logs of install/uninstall or any other actions or activity while using our Apps.</p>
          <p>In certain cases, in order to solve technical issues, we might request access to some sections of your Shopify Admin. It is your responsibility to allow us access only to the sections we requested and once the technical problem is solved you agree to delete our access from your Shopify Admin.</p>
          <p>As you visit or browse our websites, we collect information about the device and browser you use, your network connection, your IP address, and information about the cookies installed on your device. We also collect this information when you engage with us either by email or web form. We also collect any additional information that you might provide to us. We use this information, to provide and enhance our Services, including supporting or servicing your account, if applicable.</p>
          <p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
          <h3>How Do We Use Your Personal Information?</h3>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>We use the personal information we collect from you and your customers in order to provide the Service and to operate the App. Additionally, we use this personal information to: Communicate with you; Optimize or improve the App; and Provide you with information or advertising relating to our products or services.</p>
          <p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
          <h3>Sharing Your Personal Information</h3>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>Your information is never shared for the use of advertising. Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
          <p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
          <h3>Your Rights</h3>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through&nbsp;jorge.menzel@garooinc.com.</p>
          <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>
          <p><!-- /wp:paragraph --><!-- wp:heading {"level":3} --></p>
          <h3>Data Retention</h3>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>When you install the app, we will maintain your Information for our records unless and until you ask us to delete this information.</p>
          <p><!-- /wp:paragraph --><!-- wp:heading --></p>
          <h3>Changes</h3>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
          <p><!-- /wp:paragraph --><!-- wp:heading --></p>
          <h3>Contact Us</h3>
          <p><!-- /wp:heading --><!-- wp:paragraph --></p>
          <p>For more information about our privacy practices or if you have questions, please contact us by e-mail at jorge.menzel@garooinc.com</p>
          <p><!-- /wp:paragraph --><!-- wp:heading --></p>
          <p><!-- /wp:heading --></p></div>
  </div>
</body></html>
  `
})

router.post('/webhooks/customers/redact', webhook, (ctx) => {
  console.log('received webhook customers/redact: ', ctx.state.webhook);
});

router.post('/webhooks/shop/redact', webhook, async (ctx) => {
  console.log('received webhook shop/redact: ', ctx.state.webhook);
  const sr = new ShopRedact({
    shop_id: ctx.state.webhook.payload.shop_id,
    shop_domain: ctx.state.webhook.payload.shop_domain,
  })
  await sr.save()
});

router.post('/webhooks/customers/data_request', webhook, (ctx) => {
  console.log('received webhook customers/data_request: ', ctx.state.webhook);
});

app.prepare().then(() => {
  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];
  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: [
        'read_products',
        'write_products',
        'read_script_tags',
        'write_script_tags',
      ],
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        const shopID = shop.substr(0, shop.length - 14);

        //ROUTE CREATION
        update[shopID] = false

        //#region TRIAL LOGIC

        const billing = (await Billing.findOne({ shopID }))

        var date_ob = new Date()

        let date = date_ob.getDate()
        let month = date_ob.getMonth() + 1
        let year = date_ob.getFullYear();

        let today = { year, month, date }

        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        var trial;

        if (billing != undefined && billing.first_install_date.year == today.year) {

          var dif = 0

          if (billing.first_install_date.month == today.month) {
            dif = today.date - billing.first_install_date.date
          }
          else if (today.month - billing.first_install_date.month == 1) {
            if (billing.first_install_date.month - 1 == 1 && billing.first_install_date.year % 4 == 0)
              dif = 29 - billing.first_install_date.date + today.date
            else
              dif = days[billing.first_install_date.month - 1] - billing.first_install_date.date + today.date
          }
          else {
            dif = 7
          }

          trial = 7 - dif

          if (trial < 0)
            trial = 0
        }
        else {
          trial = 7
        }

        //#endregion        

        const bill = await Billing.findOne({ shopID })

        // if (bill) {
        //   console.log()
        //   console.log((await getSubQuery(ctx, accessToken, shop, bill.gid)))
        //   console.log()
        // }

        if (!bill) {
          const { confirmationUrl, gid } = await getSubscriptionUrl(ctx, accessToken, shop, (await getStorePlan(ctx, accessToken, shop)).partnerDevelopment, trial);

          const id = new Billing({
            first_install_date: today,
            gid,
            shopID
          })

          await id.save()

          //console.log("1 ", id)

          ctx.redirect(confirmationUrl);
        }
        else if ((await getSubQuery(ctx, accessToken, shop, bill.gid)).data.node.status != "ACTIVE") {
          const { confirmationUrl, gid } = await getSubscriptionUrl(ctx, accessToken, shop, (await getStorePlan(ctx, accessToken, shop)).partnerDevelopment, trial);

          bill.gid = gid
          await bill.save()

          console.log("2 ", bill)
          //console.log((await getSubQuery(ctx, accessToken, shop, bill.gid)))

          ctx.redirect(confirmationUrl);
        }
        else {
          //console.log("3")

          ctx.redirect("/");
        }
      },
    }),
  );

  server.use(graphQLProxy({ version: ApiVersion.July20 }))

  server.use(verifyRequest());
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);

    const shopID = String(ctx.cookies.get("shopOrigin")).substr(0, String(ctx.cookies.get("shopOrigin")).length - 14);

    //#region MONGODB ROUTES    

    if (update[shopID] == false || update[shopID] == undefined) {

      //const cap = 1000

      //console.log("MARELE VIERME")

      // router.get(`/api/usageCreate/${shopID}`, async (ctx) => {
      //   const item = (await Usage.find({ shopID }))[0]
      //   const arr = await Usage.find({ shopID })
      //   if (arr.length > 0 && item.counter == cap) {
      //     const ur = await createUsageRecord(ctx, accessToken, shop, appSubscription.id)
      //     console.log(ur.data.appUsageRecordCreate.userErrors)
      //     ctx.status = 200
      //     ctx.body = { status: 'success' }
      //   }
      //   else {
      //     ctx.status = 200
      //     ctx.body = { status: 'success' }
      //   }
      // })

      // router.get(`/api/usageRecord/${shopID}`, async (ctx) => {
      //   try {
      //     const item = (await Usage.find({ shopID }))[0]
      //     const arr = await Usage.find({ shopID })
      //     //console.log(item)
      //     if (arr.length > 0 && item.counter < cap) {
      //       item.counter += 1;
      //       await item.save()

      //       ctx.status = 200
      //       ctx.body = item;
      //       console.log(item)
      //     }
      //     else if (arr.length > 0 && item.counter >= cap) {
      //       item.counter = 1;
      //       await item.save()

      //       ctx.status = 200
      //       ctx.body = item;
      //       console.log(item)
      //     }
      //     else {
      //       const id = new Usage({
      //         counter: 1,
      //         shopID
      //       })
      //       await id.save()
      //       ctx.status = 200
      //       ctx.body = id
      //       console.log(id)
      //     }
      //   } catch (error) {
      //     console.log(error);
      //     ctx.status = 500
      //     ctx.body = error
      //   }
      // })

      router.get(`/api/discordID/${shopID}`, async (ctx) => {
        try {
          const obj = await DiscordID.findOne({ shopID })
          if (obj) {
            ctx.status = 200
            ctx.body = {
              status: 'success',
              data: {
                serverID: obj.serverID,
                channelID: obj.channelID,
              }
            }
            //console.log(obj)
          }
          else {
            ctx.status = 400
            ctx.body = "Not found"
          }
        } catch (error) {
          ctx.status = 500
          ctx.body = error
        }
      });

      router.post(`/api/discordID/${shopID}`, koaBody(), async (ctx) => {
        if (ctx.cookies.get("shopOrigin")) {
          try {
            if ((await DiscordID.find({ shopID })).length > 0) {
              const item = await DiscordID.findOneAndUpdate(shopID, {
                serverID: ctx.request.body.serverID,
                channelID: ctx.request.body.channelID,
                shopID
              }, { new: true, runValidators: true })
              ctx.status = 200
              ctx.body = "Item Updated";
              //console.log(item)
            }
            else {
              const id = new DiscordID({
                serverID: ctx.request.body.serverID,
                channelID: ctx.request.body.channelID,
                shopID
              })
              await id.save()
              ctx.status = 200
              ctx.body = id
            }
          } catch (error) {
            //console.log(error);
            ctx.status = 500
            ctx.body = error
          }
        } else {
          ctx.status = 401
          ctx.body = "Not authenticated"
        }
      })

      router.get(`/api/widget/${shopID}`, async (ctx) => {
        try {
          const obj = await Widget.findOne({ shopID })
          if (obj) {
            ctx.body = {
              status: 'success',
              data: {
                desktopPosition: obj.desktopPosition,
                mobilePosition: obj.mobilePosition,
                notificationText: obj.notificationText,
                notificationTimeout: obj.notificationTimeout,
                notificationAvatar: obj.notificationAvatar,
                mobile: obj.mobile,
                desktop: obj.desktop,
                color: obj.color,
                widgetEnabled: obj.widgetEnabled,
                shopID
              }
            }
            //console.log(obj)
          }
          else {
            ctx.body = "Not found"
          }
        } catch (error) {
          ctx.body = error
        }
      });

      router.post(`/api/widget/${shopID}`, koaBody(), async (ctx) => {
        if (ctx.cookies.get("shopOrigin")) {
          //console.log(ctx.request.body)
          try {
            if ((await Widget.find({ shopID })).length > 0) {
              const item = await Widget.findOneAndUpdate(shopID, {
                desktopPosition: ctx.request.body.desktopPosition,
                mobilePosition: ctx.request.body.mobilePosition,
                notificationText: ctx.request.body.notificationText,
                notificationTimeout: ctx.request.body.notificationTimeout,
                notificationAvatar: ctx.request.body.notificationAvatar,
                mobile: ctx.request.body.mobile,
                desktop: ctx.request.body.desktop,
                color: ctx.request.body.color,
                widgetEnabled: ctx.request.body.widgetEnabled,
                shopID
              }, { new: true, runValidators: true })
              ctx.status = 200
              ctx.body = "Item Updated";
              //console.log(item)
            }
            else {
              const id = new Widget({
                desktopPosition: ctx.request.body.desktopPosition,
                mobilePosition: ctx.request.body.mobilePosition,
                notificationText: ctx.request.body.notificationText,
                notificationTimeout: ctx.request.body.notificationTimeout,
                notificationAvatar: ctx.request.body.notificationAvatar,
                mobile: ctx.request.body.mobile,
                desktop: ctx.request.body.desktop,
                color: ctx.request.body.color,
                widgetEnabled: ctx.request.body.widgetEnabled,
                shopID
              })
              await id.save()
              ctx.status = 200
              ctx.body = id
            }
          } catch (error) {
            //console.log(error);
            ctx.status = 500
            ctx.body = error
          }
        } else {
          ctx.status = 401
          ctx.body = "Not authenticated"
        }
      })

      update[shopID] = true
    }

    //#endregion

    ctx.respond = false;
    ctx.res.statusCode = 200;

    return
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});


