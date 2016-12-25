/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CenteredSection from './CenteredSection';
import H2 from 'components/H2';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { selectUsername } from './selectors';
import { selectRepos, selectLoading, selectError } from 'containers/App/selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    // let mainContent = null;

    // // Show a loading indicator when we're loading
    // if (this.props.loading) {
    //   mainContent = (<List component={LoadingIndicator} />);
    //
    // // Show an error if there is one
    // } else if (this.props.error !== false) {
    //   const ErrorComponent = () => (
    //     <ListItem item={'Something went wrong, please try again!'} />
    //   );
    //   mainContent = (<List component={ErrorComponent} />);
    //
    // // If we're not loading, don't have an error and there are repos, show the repos
    // } else if (this.props.repos !== false) {
    //   mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    // }

    return (
      <article>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>

          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: selectRepos(),
  username: selectUsername(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
