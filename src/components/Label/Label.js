import styled, { css } from 'styled-components';
import { styling } from '../../helpers/util';

const Label = styled.label`
  background: ${props => props.bgColor};
  font-weight: ${props => props.fontWeight};
  ${props => props.chips && css`
    border-radius: 2px;
    box-shadow: inset 0 -1px 0 rgba(27,31,35,.5);
    margin: 2px 5px;
    padding: 3px;
    font-size: 11px;
    display: inline-block;
    vertical-align: middle;
  `}
  ${styling}
`;

Label.defaultProps = {
  bgColor: 'transparent',
  fontWeight: 'normal',
};

export default Label;
