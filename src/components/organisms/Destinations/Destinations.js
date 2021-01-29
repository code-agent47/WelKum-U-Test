import React from 'react';
import DestinationsStyle from './DestinationsStyle';  
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import canada from '../../../assets/images/canada.png';
import australia from '../../../assets/images/australia.jpg';
import cyprus from '../../../assets/images/cyprus.jpg';
import unitedstates from '../../../assets/images/united states.svg';

const Destinations = () => {

    return (
        <>
            <DestinationsStyle>
                <div className={`container-full destinations`}>
                     <div className={`container-full destinations__header`}>
                        <HeaderText value="MAIN DESTINATION" />
                        <i className={`fa fa-info-circle`}></i>
                     </div>
                     <div className={`container-full destinations__item active`}>
                         <div className={`destinations__item__logo`}>
                             <Img image={canada} className={`img`} />
                         </div>
                         <div className={`destinations__item__text`}>
                             <HeaderText value="Canada" />
                             <HeaderText value="New Brunswick, Fredericton" />
                         </div>
                     </div>
                </div>
                <div className={`container-full destinations`}>
                     <div className={`container-full destinations__header`}>
                        <HeaderText value="OTHER DESTINATIONS" />
                        <i className={`fa fa-info-circle`}></i>
                     </div>
                     <div className={`container-full destinations__item`}>
                         <div className={`destinations__item__logo`}>
                             <Img image={australia} className={`img`} />
                         </div>
                         <div className={`destinations__item__text`}>
                             <HeaderText value="Australia" />
                         </div>
                     </div>
                     <div className={`container-full destinations__item`}>
                         <div className={`destinations__item__logo`}>
                             <Img image={cyprus} className={`img`} />
                         </div>
                         <div className={`destinations__item__text`}>
                             <HeaderText value="Cyprus" />
                         </div>
                     </div>
                     <div className={`container-full destinations__item`}>
                         <div className={`destinations__item__logo`}>
                             <Img image={unitedstates} className={`img`} />
                         </div>
                         <div className={`destinations__item__text`}>
                             <HeaderText value="United States" />
                         </div>
                     </div>
                </div>
            </DestinationsStyle>
        </>
    );
}

export default Destinations;
