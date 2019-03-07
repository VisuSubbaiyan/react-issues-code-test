import React from 'react';
import Label from './Label';
import { createMountedComponent, sampleText } from '../../helpers/testUtil';

describe('Label should', () => {
  it('render correctly according to props', () => {
    const mountedLabel = createMountedComponent({
      children: <Label>{sampleText}</Label>
    });

    expect(mountedLabel.htmlRender()).toMatchSnapshot();
    expect(mountedLabel.find('label').contains(sampleText)).toBeTruthy();
  });
});