import React from 'react';
import Link from './Link';
import { createMountedComponent, sampleText } from '../../helpers/testUtil';

const href = '/test';

describe('Link should', () => {
  it('render correctly according to props', () => {
    const mountedLabel = createMountedComponent({
      children: <Link href={href}>{sampleText}</Link>
    });

    expect(mountedLabel.htmlRender()).toMatchSnapshot();
    expect(mountedLabel.find('a').contains(sampleText)).toBeTruthy();
    expect(mountedLabel.find('a').prop('href')).toEqual(href);
  });
});