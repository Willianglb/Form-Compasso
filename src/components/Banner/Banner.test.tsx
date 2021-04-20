import React from 'react';
import { render } from '@testing-library/react';
import Banner from './index';

const infoBanner = [
  {
      id: 1,
      title: 'Banner',
      alt: 'Banner',
  },
];

describe("Banner", function () {
    it("should render Banner", function () {
        render(
            <Banner/>
        );
  });
});
