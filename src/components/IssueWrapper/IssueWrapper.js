import styled from 'styled-components';
import { viewport } from '../../util';

const IssueWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  border: 1px solid ${props => props.theme.secondary};
  border-radius: 3px;
  padding: 5px;
  background: #fff;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  
  ${props => viewport(props.theme.breakpoints.medium)`width: 720px;`}
`;

export default IssueWrapper;
