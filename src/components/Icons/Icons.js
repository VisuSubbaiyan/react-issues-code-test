import styled from 'styled-components';

import { ReactComponent as Bubble } from './images/bubble.svg';
import { ReactComponent as IssueStatus } from './images/issueStatus.svg';
import { styling } from '../../util';

const BubbleIcon = styled(Bubble)`${styling}`;
const StatusIcon = styled(IssueStatus)`${styling}`;

export { BubbleIcon, StatusIcon };