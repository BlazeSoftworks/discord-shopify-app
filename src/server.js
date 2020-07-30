require('isomorphic-fetch')
require('./db/mongoose')
const dotenv = require('dotenv')
const Koa = require('koa')
const KoaRouter = require('koa-router')
var cors = require('koa2-cors')
const next = require('next')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const session = require('koa-session')
const koaBody = require('koa-body')

dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy')
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env

const server = new Koa()
const router = new KoaRouter()

const DiscordID = require('./models/discordID')
const Widget = require('./models/widget')

//ROUTER MIDDLEWARE
server.use(cors({ origin: '*' }));
server.use(router.allowedMethods());
server.use(router.routes());

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
        'write_script_tags'
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        ctx.redirect('/');
      },
    }),
  );

  server.use(graphQLProxy({ version: ApiVersion.July20 }))
  server.use(verifyRequest());

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);

    var shopID = String(ctx.cookies.get("shopOrigin")).substr(0, String(ctx.cookies.get("shopOrigin")).length - 14);

    //shopID routes    

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
          console.log(obj)
        }
        else {
          ctx.status = 404
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
            console.log(item)
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
          console.log(error);
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
          console.log(obj)
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
        console.log(ctx.request.body)
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
            console.log(item)
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
          console.log(error);
          ctx.status = 500
          ctx.body = error
        }
      } else {
        ctx.status = 401
        ctx.body = "Not authenticated"
      }
    })

    //------

    ctx.respond = false;
    ctx.res.statusCode = 200;

    return
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});


