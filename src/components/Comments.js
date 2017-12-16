/* globals window */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import styled from 'styled-components';
import LoadingIcon from 'react-icons/lib/fa/spinner';
import Gitcomment from 'gitcomment';
import Button from './Button';

const repo = 'kriswep/wetainment';
const gkServer = process.env.GATEKEEPER_URL || 'https://gk-wetainment.now.sh/';
const ghClientId = process.env.GITHUB_CLIENTID || 'ccfe868780485a0221b3';
const redirect = () =>
  window.location.replace(`https://github.com/login/oauth/authorize?client_id=${ghClientId}&scope=repo%20user&redirect_uri=${
    window.location.href
  }`);

const CommentHeader = styled.h2`
  padding: 0;
  margin: 2rem 0 0.3rem;
`;

const CommentsContainer = styled.ul`
  padding: 0;
  margin: 0;
`;

const Comment = styled.li`
  list-style: none;
  padding: 0.15rem 0rem;
`;
const CommentEditor = styled.textarea`
  padding: 0.2rem;
  margin: 0;
  width: 100%;
  height: 5rem;
  border: 1px solid ${props => props.theme.darkShades};
  color: ${props => props.theme.darkShades};
  background: ${props => props.theme.lightShades};
  &:hover {
    background: ${props => props.theme.lightestAccent};
  }
  &:focus {
    outline-color: ${props => props.theme.darkAccent};
  }
`;

const Divider = styled.hr`
  border: solid 0px ${props => props.theme.lightestAccent};
  border-bottom: solid 1px ${props => props.theme.lightestAccent};
`;

const Small = styled.span`
  font-size: 0.8rem;
  margin: 0 0 0 0.2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      newComment: '',
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

  changeNewComment(e) {
    return this.setState({ newComment: e.target.value });
  }

  render() {
    return (
      <Gitcomment
        repo={repo}
        issueNumber={this.props.issueNumber}
        token={this.state.token || process.env.REACT_APP_GH_TOKEN}
        render={(loaded, comments, user, postComment) => {
          const commentList = comments.map((comment, idx) => (
            <Comment key={comment.id}>
              {idx === 0 && <Divider />}
              {comment.author &&
                comment.author.login && (
                  <a href={`https://github.com/${comment.author.login}`}>{comment.author.login}</a>
                )}
              <Small>{new Date(comment.created).toLocaleDateString()}</Small>: {comment.body}
              <Divider />
            </Comment>
          ));
          const handler = () => {
            postComment(this.state.newComment);
            this.setState({ newComment: '' });
          };
          return (
            <div>
              <CommentHeader>Comments, anyone?</CommentHeader>
              {!loaded && <LoadingIcon />}
              {!!loaded && (
                <div>
                  <CommentsContainer>{commentList}</CommentsContainer>
                </div>
              )}
              {!!loaded &&
                ((!!user.login && (
                  <div>
                    <CommentEditor
                      value={this.state.newComment}
                      onChange={this.changeNewComment.bind(this)} // eslint-disable-line
                    />
                    <FlexContainer>
                      <Button onClick={handler}>Add Comment</Button>
                      <Small>
                        The comment will be posted with your GitHub handle on{' '}
                        <a href={`https://github.com/${repo}/issues/${this.props.issueNumber}`}>
                          GitHub.
                        </a>
                      </Small>
                    </FlexContainer>
                  </div>
                )) ||
                  (!user.login && (
                    <FlexContainer>
                      <Button onClick={redirect}>Login</Button>
                      <Small>Please authenticate with GitHub in order to add a comment.</Small>
                    </FlexContainer>
                  )))}
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
