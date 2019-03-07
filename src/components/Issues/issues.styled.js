import styled from 'styled-components';
import { viewport } from '../../helpers/util';

export const IssuesMainWrapper = styled.div`
  padding-top: 60px;
  width: 90%;
  margin: 0 auto;
  ${props => viewport(props.theme.breakpoints.medium)`width: 720px;`}
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  min-height: 40px;
  justify-content: center;
`;
