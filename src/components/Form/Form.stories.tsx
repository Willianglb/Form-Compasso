import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Form from './index';

export default {
    title: 'global/Form',
    decorators: [withKnobs],
};

const infoForm = [
    {
        id: 3,
        title: 'Form',
        alt: 'Form',
    },
];

export const Product = () => (
    <Form infoForm={object('infoForm', infoForm)} />
);