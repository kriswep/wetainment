import styled from 'styled-components';

const Button = styled.button`
  border: solid 1px ${props => props.theme.lightestAccent};
  background: ${props => props.theme.lightShades};
  margin: 0;
  padding: 0.85rem 0.25rem;
  color: ${props => props.theme.darkShades};
  &:hover {
    background: ${props => props.theme.lightestAccent};
  }
  &:focus {
    outline-color: ${props => props.theme.darkAccent};
  }
`;

export default Button;
