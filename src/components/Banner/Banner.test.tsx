import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from './index';


describe("Banner", function () {
    it("should render Banner", function () {
        render(
                <Banner />;
        );
  });
});
