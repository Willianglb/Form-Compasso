import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Button from './index';

export default {
    title: 'global/Button',
    decorators: [withKnobs],
};

const infoButton = [
    {
        id: 2,
        title: 'Button',
        alt: 'Button',
    },
];

export const Product = () => (
    <Button infoButton={object('infoButton', infoButton)} />
);
