import React from 'react';
import 'jest-styled-components';

import Issues from './Issues';
import Issue from '../Issue';
import { createMountedComponent, sampleIssues } from '../../helpers/testUtil';

describe('Issues should', () => {
  it('render correctly', () => {
    const mountedIssues = createMountedComponent({
      children: <Issues issues={sampleIssues} />,
    });

    expect(mountedIssues.htmlRender()).toMatchSnapshot();
    expect(mountedIssues.find(Issue)).toHaveLength(2);
  });
});