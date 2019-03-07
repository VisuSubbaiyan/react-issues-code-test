import React from 'react';
import 'jest-styled-components';

import Issue from './Issue';
import { IssueWrapper, IssueContainer } from './Issue.styled';
import Label from '../Label';
import Link from '../Link';
import Comments from '../Comments';
import { StatusIcon } from '../Icons';

import { sampleIssues, createMountedComponent } from '../../helpers/testUtil';

describe('Issue component should', () => {
  it('render correctly according to props', () => {
    const mountedIssue = createMountedComponent({
      children: <Issue {...sampleIssues[0]} />
    });

    expect(mountedIssue.htmlRender()).toMatchSnapshot();
    expect(mountedIssue.find(StatusIcon)).toHaveLength(1);
    expect(mountedIssue.find(IssueWrapper)).toHaveLength(1);
    expect(mountedIssue.find(IssueContainer)).toHaveLength(2);
    expect(mountedIssue.find(Link)).toHaveLength(1);
    expect(mountedIssue.find(Label)).toHaveLength(2);
    expect(mountedIssue.find(Comments)).toHaveLength(1);
  });


});