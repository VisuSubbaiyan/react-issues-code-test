import React from 'react';
import Spinner from './Spinner';
import { createMountedComponent } from '../../helpers/testUtil';

describe('Spinner should', () => {
  it('render correctly', () => {
    const mountedSpinner = createMountedComponent({
      children: <Spinner />
    });

    expect(mountedSpinner.htmlRender()).toMatchSnapshot();
  });
});
