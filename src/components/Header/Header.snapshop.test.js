import React from 'react';

import Header from './Header';
import { createMountedComponent } from '../../helpers/testUtil';

describe('Header should', () => {
  it('render correctly', () => {
    const mountedHeader = createMountedComponent({children: <Header />});

    expect(mountedHeader.htmlRender()).toMatchSnapshot();
    expect(mountedHeader.find('h1').contains('React Issues')).toBeTruthy();
  });
});