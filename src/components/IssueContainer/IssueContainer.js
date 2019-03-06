import styled from 'styled-components';
import { viewport } from '../../util';

const IssueContainer = styled.div`
  flex: 12 0 0;
  ${props => viewport(props.theme.breakpoints.small)`flex: 18 0 0;`}
`;

export default IssueContainer;
