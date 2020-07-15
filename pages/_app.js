import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import ApolloClient, { InMemoryCache, from } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';
import React from 'react'
import { Redirect } from 'react-router'

const ProtectedComponent = () => {
  if (authFails)
    return <Redirect to='/login' />

  return <div> My Protected Component </div>
}

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include',
  }
});

class MyApp extends App {

  componentDidMount() {

  }

  render() {
    if (Cookies.get("shopOrigin") == undefined) {
      var f = window.location.origin.toString();
      var shopId = f.substring(8, f.length - 14);
      var url = `https://discord-shopify-app.herokuapp.com/auth?shop=${shopId}.myshopify.com`;

      return (
        <Redirect to={url} />
      )
    }

    else {
      const { Component, pageProps } = this.props;
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
}

export default MyApp;
