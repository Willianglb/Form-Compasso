import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './index.js';

describe('Form', () => {
    test('Render Form e Botao', () => {
        render(
            <>
            <Form />
            </>
        );
        const InputButton = screen.getByRole('button', { name: /submit/i })
    });
});