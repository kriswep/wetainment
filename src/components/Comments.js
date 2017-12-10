/* globals window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import styled from 'styled-components';
import LoadingIcon from 'react-icons/lib/fa/spinner';
import Gitcomment from 'gitcomment';
import Button from './Button';

const gkServer =
  process.env.NODE_ENV === 'production'
    ? 'https://gk-wetainment.now.sh/'
    : 'https://gatekeeper-peeozbyjee.now.sh/';

const redirect = () =>
  window.location.replace(`https://github.com/login/oauth/authorize?client_id=70d2271271780a415da8&scope=repo%20user&redirect_uri=${
    window.location.href
  }`);

const CommentsContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

const Comment = styled.li`
  list-style: none;
  padding: 0.15rem 0rem;
`;

const Divider = styled.hr`
  border: solid 0px ${props => props.theme.lightestAccent};
  border-bottom: solid 1px ${props => props.theme.lightestAccent};
`;

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
          const commentList = comments.map((comment, idx) => (
            <Comment key={comment.id}>
              {idx === 0 && <Divider />}
              {`${comment.author ? comment.author.login : ''} (${new Date(comment.created).toLocaleDateString()}): `}
              {comment.body}
              <Divider />
            </Comment>
          ));
          const handler = () => {
            postComment('test');
          };
          return (
            <div>
              <h2>Comments, anyone?</h2>
              {!loaded && <LoadingIcon />}
              {!!loaded && (
                <div>
                  <CommentsContainer>{commentList}</CommentsContainer>
                </div>
              )}
              {!!loaded &&
                ((!!user.login && <Button onClick={handler}>Add Comment</Button>) ||
                  (!user.login && <Button onClick={redirect}>Login</Button>))}
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
