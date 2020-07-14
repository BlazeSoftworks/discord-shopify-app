require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const KoaRouter = require('koa-router');
var cors = require('koa2-cors');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');
const koaBody = require('koa-body');
const Cookies = require('js-cookie');
const axios = require('axios');

dotenv.config();
const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const { Connected } = require('@shopify/polaris');
const { default: Axios } = require('axios');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

const server = new Koa();
const router = new KoaRouter();

var discordID = {};
var widget = {};
var ok = true;

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

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
        'write_script_tags',
        'read_discounts',
        'write_discounts',
        'read_price_rules',
        'write_price_rules'
      ],
      afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;

        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        //graphql routes

        // router.get("/shop-info", (ctx => {
        //   fetch(`https://${shopID}.myshopify.com/admin/api/graphql.json`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "X-Shopify-Access-Token": accessToken
        //     },
        //     body: JSON.stringify({
        //       query: `{
        //         shop {
        //           name
        //           url
        //           email
        //           myshopifyDomain
        //         }
        //       }`
        //     })
        //   })
        //     .then(res => res.json())
        //     .then(data => {
        //       console.log("Data Returned: \n", data);
        //     })
        //   ctx.body = "Done";
        // }))

        // router.get(`/api/graphql/:id`, (ctx => {
        //   fetch(`https://${ctx.params.id}.myshopify.com/admin/api/2020-07/graphql.json`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //       "X-Shopify-Access-Token": accessToken
        //     },
        //     body: JSON.stringify({
        //       query:
        //         `mutation discountCodeBasicCreate($basicCodeDiscount: DiscountCodeBasicInput!) {
        //           discountCodeBasicCreate(basicCodeDiscount: $basicCodeDiscount) {
        //             codeDiscountNode {
        //               id
        //             }
        //             userErrors {
        //               code
        //               extraInfo
        //               field
        //               message
        //             }
        //           }
        //         }
        //         `,

        //       variables: {
        //         basicCodeDiscount: {
        //           appliesOncePerCustomer: true,
        //           code: "DISFASF",
        //           customerSelection: {
        //             all: true
        //           },
        //           customerGets: {
        //             items: {
        //               all: true
        //             },
        //             value: {
        //               percentage: 0.1
        //             }
        //           },
        //           title: "Discord Discount",
        //           usageLimit: 1,
        //           startsAt: "2019-07-03T20:47:55Z"
        //         }
        //       },
        //     })
        //   })
        //     .then(res => res.json())
        //     .then(data => {
        //       console.log("Data Returned: \n", data);
        //     })
        //   ctx.body = "Done";
        // }))

        // ctx.redirect('/annotated-layout');

      },
    }),
  );

  server.use(graphQLProxy({ version: ApiVersion.July20 }))
  server.use(verifyRequest());

  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res);
    // console.log(Cookies.get("shopOrigin"));    

    //routes
    var shopID = String(ctx.cookies.get("shopOrigin")).substr(0, String(ctx.cookies.get("shopOrigin")).length - 14);

    if (ok) {
      //discordID[shopID] = [];
      discordID[shopID] = {};
      ok = false;
    }

    //shopID routes    

    router.get(`/api/discordID/${shopID}`, async (ctx) => {
      try {
        ctx.body = {
          status: 'success',
          data: discordID[shopID]
        };
      } catch (error) {
        console.log(error);
      }
    });

    router.post(`/api/discordID/${shopID}`, koaBody(), async (ctx) => {
      try {
        const body = ctx.request.body;

        console.log(ctx.href);
        console.log(body);
        console.log(shopID);

        discordID[shopID] = body

        ctx.body = "Item Added";

      } catch (error) {
        console.log(error);
      }
    })

    router.delete(`/api/discordID/${shopID}`, koaBody(), async (ctx) => {
      try {
        discordID[shopID] = {};
        ctx.body = 'All items deleted';
      } catch (error) {
        console.log(error);
      }
    })

    //----------------------------------------

    router.get(`/api/widget/${shopID}`, async (ctx) => {
      try {
        ctx.body = {
          status: 'success',
          //data: discordID[String(ctx.cookies.get("shopOrigin")).substr(0, String(ctx.cookies.get("shopOrigin")).length - 14)]
          //data: discordID
          data: widget[shopID]
        };
      } catch (error) {
        console.log(error);
      }
    });

    router.post(`/api/widget/${shopID}`, koaBody(), async (ctx) => {
      try {
        const body = ctx.request.body;

        console.log(ctx.href);
        console.log(body);
        console.log(shopID);
        //discordID[shopID].push(body);
        widget[shopID] = body
        //console.log(discordID[String(ctx.cookies.get("shopOrigin")).substr(0, String(ctx.cookies.get("shopOrigin")).length - 14)]);

        ctx.body = "Item Added";

      } catch (error) {
        console.log(error);
      }
    })

    router.delete(`/api/widget/${shopID}`, koaBody(), async (ctx) => {
      try {
        //discordID = [];
        //discordID[shopID] = [];
        widget[shopID] = {};
        ctx.body = 'All items deleted';
      } catch (error) {
        console.log(error);
      }
    })
    //------

    ctx.respond = false;
    ctx.res.statusCode = 200;
    return
  });

  server.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});


