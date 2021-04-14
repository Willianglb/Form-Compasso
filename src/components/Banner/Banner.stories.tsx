import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Banner from './index';
import img from '../img/UolBanner.jpg';

export default {
    title: 'global/Banner',
    decorators: [withKnobs],
};

const infoBanner = [
    {
        id: 1,
        title: 'Banner',
        image: {img},
        alt: 'Banner',
    },
];

export const Product = () => (
        <Banner infoBanner={object('infoBanner', infoBanner)} />
);
