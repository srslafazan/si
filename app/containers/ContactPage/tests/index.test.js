import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import AboutPage from '../index';
import H1 from 'components/H1';

describe('<AboutPage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <AboutPage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
    )).toEqual(true);
  });
});
