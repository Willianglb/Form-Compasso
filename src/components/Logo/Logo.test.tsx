import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from './index.js';

describe('Logo', () => {
    test('Render Logo', () => {
        render(
            <Logo/>
        );
    });
});
