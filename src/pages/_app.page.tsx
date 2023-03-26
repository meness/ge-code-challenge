import { ApolloProvider } from '@apollo/client';
import '@assets/styles/globals.css';
import { apolloClient } from '@graphql/client';
import { App, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { NextPage } from 'next';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement } from 'react';

const AppPage = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

const AppPageWrapper = (props: AppPropsWithLayout) => {
  return (
    <ConfigProvider>
      <App>
        <ApolloProvider client={apolloClient}>
          <AppPage {...props} />
        </ApolloProvider>
      </App>
    </ConfigProvider>
  );
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default appWithTranslation(AppPageWrapper);
