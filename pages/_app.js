import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import React from 'react'

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  }
});

class MyApp extends App {

  static async getInitialProps(server) {
    const shopOrigin = server.ctx.query.shop
    return { shopOrigin }
  }

  render() {
    const { Component, pageProps, shopOrigin } = this.props;
    if (Cookies.get("shopOrigin")) {
      shopOrigin = Cookies.get("shopOrigin")
    }
    const config = { apiKey: API_KEY, shopOrigin, forceRedirect: true };
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
