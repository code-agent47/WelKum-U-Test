import styled from 'styled-components';

const ExploreGalleryStyle = styled.div`
    width:100%;
    .gallery-header{
        h2{
            color:#0b393c;
            font-family:Source Sans Pro;
            font-size:1.5em;
            font-weight:600;
        }
    }
    .gallery-slider{
        margin-top:20px;
        position:relative;
    }
    .gallery-slider__box{
        flex-wrap:nowrap;
        justify-content:normal;
        overflow:hidden;
        position:relative;
        scroll-behavior:smooth;
        z-index:1000;
    }
    .gallery-slider__box__item{
        margin-right:72px;
        -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .gallery__slider__controls{
        left:0;
        height:100%;
        justify-content:space-between;
        position:absolute;
        top:0;
        z-index:2000;
    }
    .gallery__slider__controls__item{
        background:white;
        box-sizing:border-box;
        border-radius:50%;
        cursor:pointer;
        height:20px;
        width:20px;
        &:nth-of-type(1){
            padding-left:7px;
        }
        &:nth-of-type(2){
            padding-left:8px;
        }
        i{
            color:#9ca4a5;
            font-size:14px;
        }
    }
`

export default ExploreGalleryStyle;   