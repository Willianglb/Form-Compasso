import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import img from '../img/UolBanner.jpg';
import Logo from './index';

export default {
    title: 'global/Logo',
    decorators: [withKnobs],
};

const infoLogo = [
    {
        id: 3,
        title: 'Logo',
        image: {img},
        alt: 'Logo',
    },
];

export const Product = () => (
    <Logo infoLogo={object('infoLogo', infoLogo)} />
);