import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import img from '../img/UolBanner';
import Banner from './index';

const infoBanner = [
  {
      id: 1,
      title: 'Banner',
      image: {img},
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
