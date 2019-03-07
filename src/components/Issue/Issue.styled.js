import styled from 'styled-components';
import { viewport, styling } from '../../helpers/util';

export const IssueWrapper = styled.div`
  margin: 10px 0;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 3px;
  padding: 5px;
  background: #fff;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  
  ${styling}
`;

export const IssueContainer = styled.div`
  flex: 12 0 0;
  ${props => viewport(props.theme.breakpoints.small)`flex: 18 0 0;`}
`;
