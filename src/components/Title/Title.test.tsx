import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from './index';

describe('Title', () => {
    test('Render title', () => {
        render(
            <>
                    <Title/>;
            </>
        );
        expect(screen.getByText(/Cresça com a Compasso UOL/i)).toBeInTheDocument();
    });
});
