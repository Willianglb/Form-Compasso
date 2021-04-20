import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './index.js';
import Theme from '../../Themes/index.jsx';

describe('Form', () => {
    test('Render Form e Botao', () => {
        const wrapper = render(
            <Theme>
                <Form />
            </Theme>
        );
        const InputButton = screen.getByRole('button', { name: /submit/i });

        expect(wrapper.baseElement).toBeInTheDocument();
            const input = document.getElementById("email") as HTMLImageElement;

        fireEvent.change(
            input, { target: { value: 'Seu Email' }})
            expect(input.value).toEqual('Seu Email')
    });
});