import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Styled = styled(Link)`
  text-decoration: none;
  color: ${(props) => {
    if (props['data-head']) return 'white';
    else if (props['data-nav']) return '#5d93ff';
    return 'black';
  }};
`;

const StyledLink = ({ to, children, className, ...rest }) =>
  (<Styled className={className} to={to} {...rest}>
    {children}
  </Styled>);

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

StyledLink.defaultProps = {
  className: PropTypes.string,
};

export default StyledLink;
