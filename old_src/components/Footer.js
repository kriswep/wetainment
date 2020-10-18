import styled from 'styled-components';

import media from '../styles/media';

const Footer = styled.footer`
  clip-path: polygon(0 0, 100% 1.45rem, 100% 100%, 0 100%);
  background-color: ${props => props.theme.main};
  grid-area: footer;
  font-size: 0.75rem;
  padding: 0.25rem;
  ${media.m`
  padding: 0.5rem;
`} color: ${props => props.theme.darkShades};
  & a {
    color: ${props => props.theme.darkShades};
  }
`;

export default Footer;
