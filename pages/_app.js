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
    var f = window.location.origin.toString();
  }

  render() {
    const { Component, pageProps } = this.props;
    if (Cookies.get("shopOrigin") == undefined) {
      const shopId = f.substring(8, f.length - 14);
      this.props.push(`https://discord-shopify-app.herokuapp.com/auth?shop=${shopId}.myshopify.com`);
    }
    console.log("shopOrigin: ", Cookies.get("shopOrigin"))
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
