/*
 * AboutPage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';

export default class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Feature Page"
          meta={[
            { name: 'description', content: 'Feature page of React.js Boilerplate application' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
      </div>
    );
  }
}
