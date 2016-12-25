import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.png';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="Scale Innovations - Logo" />
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/services">
            <FormattedMessage {...messages.services} />
          </HeaderLink>
          <HeaderLink to="/portfolio">
            <FormattedMessage {...messages.portfolio} />
          </HeaderLink>
          <HeaderLink to="/contact">
            <FormattedMessage {...messages.contact} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
