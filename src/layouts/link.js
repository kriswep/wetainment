import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const StyledLink = ({ to, children }) =>
  (<Link
    to={to}
    style={{
      textDecoration: 'none',
    }}
  >
    {children}
  </Link>);

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default StyledLink;
