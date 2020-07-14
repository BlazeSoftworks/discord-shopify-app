function makeHeader (data) {
    const header = $('header.site-header').parent();

    header.prepend(`
        <div>${data}</div>
    `)
    .css({
        'background-color': 'orange',
        'text-align': 'center'
    });
}

const body = $('body');

body.css({
    'position': 'relative'
})

const Shop = Shopify.Shop;

const makeApp = products => {
    const bestSellerContainer = $(
        `<div style="overflow-y: scroll">
            <h3>Our Best Sellers</h3>
            ${products.map(item=>{
                return `
                <a href="/products/${item.handle}" style="display: flex; align-items: center; padding: 20px 10px; border-top: 1px solid black;">
                    <img src="${item.images[0].originalSrc}" style="width: 75px;"/>
                    <div style="display: flex; justify-content: space-between; align-items: start; width: 100%;">
                        <p style="padding: 0 10px;">${item.title}</p>
                        <p>${item.variants[0].price}</p>
                    </div>
                </a>
                `
            }).join('')
        }
        </div>`
    )
    .css({
        'position': 'fixed',
        'background-color': '#ffffff',
        'padding': '10px',
        'border': '1px solid black',
        'bottom': '80px',
        'right': '25px',
        'height': '400px',
        'width': '350px',
        'display': 'none'
    })

    const bestSellerButton = $('<img />').attr('src', 'https://cdn.shopify.com/s/files/1/0325/3174/2765/files/bestseller-button-trans.png?v=1584741923')
        .css({
            'position': 'fixed',
            'width': '150px',
            'bottom': '20px',
            'right': '20px',
            'cursor': 'pointer'
        });

        body.append(bestSellerButton);
        body.append(bestSellerContainer);

        bestSellerButton.click(()=>{
            bestSellerContainer.slideToggle();
        })
}

//DISCORD STUFF

const displayDiscordServer = () => {
    const bestSellerContainer = $(
        `<iframe 
        src="https://discordapp.com/widget?id=723464730311786517&theme=dark" 
        width="100" 
        height="500" 
        allowtransparency="true"
        frameborder="0">

        </iframe>`
    ).css({
        'position': 'fixed',
        'background-color': '#AARRGGBB',
        'padding': '10px',
        'border': '0px solid black',
        'bottom': '80px',
        'right': '25px',
        'height': '400px',
        'width': '350px',
        'display': 'none'
    })    

    const bestSellerButton = $('<img />').attr('src', 'https://cdn.shopify.com/s/files/1/0325/3174/2765/files/bestseller-button-trans.png?v=1584741923')
        .css({
            'position': 'fixed',
            'width': '100px',
            'bottom': '20px',
            'right': '20px',
            'cursor': 'pointer'
        });

        body.append(bestSellerButton);
        body.append(bestSellerContainer);

        bestSellerButton.click(()=>{
            bestSellerContainer.slideToggle();
        })
}

fetch(`https://cors-anywhere.herokuapp.com/https://discord-shopify-app.herokuapp.com/api/products`)
    .then(res => res.json())
    .then(data => {
        //makeApp(data.data)
        //displayDiscordServer();              
        //makeHeader("SALUT");  
        console.log(data);
    })
    .catch(error => console.log(error));



alert("marea muie");
