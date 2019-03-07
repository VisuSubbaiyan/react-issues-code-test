import React from 'react';
import 'jest-styled-components';

import Comments from './Comments';
import { BubbleIcon } from '../Icons';
import Link from '../Link';
import { createMountedComponent } from '../../helpers/testUtil';

describe('Comments should', () => {
  it('render correctly according to props', () => {
    const props = { comments: 4, href: 'https://github.com/facebook/react/issues/14953' };
    const mountedComments = createMountedComponent({ children: <Comments {...props} /> });

    expect(mountedComments.htmlRender()).toMatchSnapshot();
    expect(mountedComments.find(BubbleIcon)).toHaveLength(1);
    expect(mountedComments.find(Link)).toHaveLength(1);
    expect(mountedComments.find('span').contains(4)).toBeTruthy();
  });
});
