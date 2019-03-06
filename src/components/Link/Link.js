import styled, { css } from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  word-break: break-word;
  color: ${props => props.theme.primary};
  ${props => props.css && css`${props.css}`}
  &:hover {
    color: ${props => props.theme.linkColor};
    fill: ${props => props.theme.linkColor};
  }
`;

export default Link;