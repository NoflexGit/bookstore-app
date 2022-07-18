import { render } from '@testing-library/react';

import GallerySlider from './GallerySlider';

describe('GallerySlider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GallerySlider />);
    expect(baseElement).toBeTruthy();
  });
});
