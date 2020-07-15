import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  }
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    if (Cookies.get("shopOrigin") == undefined)
      location.replace(`https://discord-shopify-app.herokuapp.com/auth?shop=bebras-store.myshopify.com`)
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Discordify</title>
          <meta charSet="utf-8" />
        </Head>
        <Provider config={config}>
          <AppProvider i18n={translations}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;
