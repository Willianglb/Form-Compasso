import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index.js';

describe('Button', () => {
    test('Render Button', () => {
        render(
            <Button/>
        );
        const ButtonTest = screen.getByRole('button', { name: /Clique/i })
    });
});
