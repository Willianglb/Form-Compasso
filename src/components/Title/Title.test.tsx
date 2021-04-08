import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Theme from '../../Themes/index';
import Title from './index';

describe('Title', () => {
    test('Render title', () => {
        render(
                <Theme>
                    <Title/>;
                </Theme>
        );
    });
});
