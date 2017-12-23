import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Styled = styled(Link)`
  text-decoration: none;
  color: ${(props) => {
    if (props['data-head']) return props.theme.lightShades;
    else if (props['data-nav']) return props.theme.darkAccent;
    return props.theme.darkShades;
  }};
`;
/* eslint-disable react/prop-types */
const StyledLink = ({
  to, children, className, ...rest
}) => (
  <Styled className={className} to={to} {...rest}>
    {children}
  </Styled>
);
/* eslint-enable react/prop-types */

export default StyledLink;
