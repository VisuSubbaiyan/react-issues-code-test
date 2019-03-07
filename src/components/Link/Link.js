import styled from 'styled-components';
import { styling } from '../../helpers/util';

const Link = styled.a`
  text-decoration: none;
  word-break: break-word;
  color: ${props => props.theme.primary};
  ${styling}
  &:hover {
    color: ${props => props.theme.linkColor};
    fill: ${props => props.theme.linkColor};
  }
`;

export default Link;