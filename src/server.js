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

        //const { confirmationUrl, appSubscription } = await getSubscriptionUrl(ctx, accessToken, shop, (await getStorePlan(ctx, accessToken, shop)).partnerDevelopment);

        const shopID = shop.substr(0, shop.length - 14);

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

          const id = new Billing({
            first_install_date: today,
            shopID
          })

          await id.save()
        }

        //#endregion

        var confirmationUrl;

        if ((await getSubQuery(ctx, accessToken, shop)).data.currentAppInstallation.allSubscriptions.edges.length == 0) {
          confirmationUrl = await getSubscriptionUrl(ctx, accessToken, shop, (await getStorePlan(ctx, accessToken, shop)).partnerDevelopment, trial);
          console.log("FACEM BANI ", await getSubQuery(ctx, accessToken, shop))
        }
        else {
          console.log("AM FACUT DE LA ASTA")
          confirmationUrl = '/'
        }

        //ROUTE CREATION
        update[shopID] = false

        ctx.redirect(confirmationUrl);
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

      const cap = 1000

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


