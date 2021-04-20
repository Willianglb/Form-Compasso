import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormCadastro from './index.js';
import Theme from '../../Themes/index.jsx';

describe('Form', () => {
    test('Render Form e Botao', () => {
        render(
            <Theme>
                <FormCadastro />
            </Theme>
        );
        const InputButton = screen.getByRole('button', { name: /submit/i })
    });
});