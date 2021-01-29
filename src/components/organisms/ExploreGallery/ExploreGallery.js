import React from 'react';
import ExploreGalleryStyle from './ExploreGalleryStyle';  
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import bikeCanada from '../../../assets/images/bikecanada.jpeg'
import city from '../../../assets/images/city.jpeg'

const ExploreGallery = () => {
    
    let scrollLeft = () => {
        document.getElementById('container').scrollLeft -= 100;
    }

    let scrollRight = () => {
        document.getElementById('container').scrollLeft += 100;
    }

    return (
        <>
            <ExploreGalleryStyle>
                <div className={`container-full gallery`}>
                    <div className={`container-full gallery-header`}>
                        <HeaderText value="Explore Destinations" />
                    </div>
                    <div className={`container-full gallery-slider`}>
                        <div className={`container-full center gallery__slider__controls`}>
                            <div className={`gallery__slider__controls__item`} onClick={scrollLeft}>
                                <i className={`fa fa-angle-left`}></i>
                            </div>
                            <div className={`gallery__slider__controls__item`} onClick={scrollRight}>
                                <i className={`fa fa-angle-right`}></i>
                            </div>
                        </div>
                        <div className={`container-full gallery-slider__box`} id="container">
                            <div className={`div-lg-3 gallery-slider__box__item`}>
                                <Img image={city} className={`img`} />
                            </div>
                            <div className={`div-lg-3 gallery-slider__box__item`}>
                                <Img image={bikeCanada} className={`img`} />
                            </div>
                            <div className={`div-lg-3 gallery-slider__box__item`}>
                                <Img image={city} className={`img`} />
                            </div>
                            <div className={`div-lg-3 gallery-slider__box__item`}>
                                <Img image={bikeCanada} className={`img`} />
                            </div>
                        </div>
                    </div>
                </div>
            </ExploreGalleryStyle>
        </>
    );
}

export default ExploreGallery;
