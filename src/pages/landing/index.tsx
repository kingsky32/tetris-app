import React from 'react';
import WebView from 'react-native-webview';
import Layout from '#components/templates/Layout';

const Landing = (): React.ReactElement => {
  return (
    <Layout>
      <WebView source={{ uri: 'https://jstris.jezevec10.com/' }} />
    </Layout>
  );
};

export default Landing;
