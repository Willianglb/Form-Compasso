import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from './Banner.styles.js';

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'slides',
            autoplay: true,
            autoplaySpeed: 2000,
        };
       const photos = [
            {
                name: 'photo 1',
                url: 'https://placeimg.com/1000/1000/any'
            }, {
                name: 'photo 2',
                url: 'https://placeimg.com/1000/1001/any'
            }, {
                name: 'photo 3',
                url: 'https://placeimg.com/1000/1002/any'
            }, {
                name: 'photo 4',
                url: 'https://placeimg.com/1000/1003/any'
            }, {
                name: 'photo 5',
                url: 'https://placeimg.com/1000/1004/any'
            }, {
                name: 'photo 6',
                url: 'https://placeimg.com/1000/1005/any'
            },
        ]
        return (
            <S.Contener >
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                                <S.Img key={photo.name} src={photo.url} data-testid='google' />
                        )
                    })}
                </Slider>
            </S.Contener>
        );
    }
};