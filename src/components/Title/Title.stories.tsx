import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Title from './index';

export default {
    title: 'global/Title',
    decorators: [withKnobs],
};

const infoTitle = [
    {
        id: 3,
        title: 'Title',
        alt: 'Title',
    },
];

export const Product = () => (
    <Title infoTitle={object('infoTitle', infoTitle)} />
);