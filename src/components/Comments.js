/* globals window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Gitcomment from 'gitcomment';

const gkServer =
  process.env.NODE_ENV === 'production'
    ? 'https://gk-wetainment.now.sh/'
    : 'https://gatekeeper-peeozbyjee.now.sh/';

const redirect = () =>
  window.location.replace(`https://github.com/login/oauth/authorize?client_id=70d2271271780a415da8&scope=repo%20user&redirect_uri=${
    window.location.href
  }`);

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    const { code } = queryString.parse(window.location.search);
    if (code) {
      // lets pretend we have a gatekeepr instance on gkServer
      window
        .fetch(`${gkServer}authenticate/${code}`, {
          method: 'GET',
        })
        .then(res => res.json())
        .then(({ token }) => this.setState({ token }));
    }
  }

  render() {
    return (
      <Gitcomment
        repo="kriswep/wetainment"
        issueNumber={this.props.issueNumber}
        token={this.state.token || process.env.REACT_APP_GH_TOKEN}
        render={(loaded, comments, user, postComment) => {
          const commentList = comments.map(comment => (
            <li key={comment.id}>body: {comment.body}</li>
          ));
          const handler = () => {
            postComment('test');
          };
          return (
            <div>
              <p>loaded: {String(loaded)}</p>
              <p>user: {user.login}</p>
              <ul>{commentList}</ul>
              <button onClick={handler}>Post sthg</button>
              <button onClick={redirect}>Login</button>
            </div>
          );
        }}
      />
    );
  }
}

Comments.propTypes = {
  issueNumber: PropTypes.number.isRequired,
};

export default Comments;
