/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  ${''/* max-width: calc(768px + 16px * 2);*/}
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  ${''/* padding: 0 16px;*/}
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  ${''/* max-width: calc(768px + 16px * 2);*/}
  ${''/* margin: 0 auto;*/}
  ${''/* display: flex;*/}
  ${''/* min-height: 100%;*/}
  padding: 0 32px;
  ${''/* flex-direction: column;*/}
`;

function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Scale Innovations - %s"
        defaultTitle="Scale Innovations"
        meta={[
          { name: 'description', content: 'Tailor-made technology and digital content solutions' },
        ]}
      />
      <Header />
      <ContentWrapper>
        {React.Children.toArray(props.children)}
      </ContentWrapper>
      <Footer />
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
