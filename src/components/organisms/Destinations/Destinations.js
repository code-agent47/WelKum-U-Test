import React, { Component } from 'react';
import DestinationsStyle from './DestinationsStyle';  
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import canada from '../../../assets/images/canada.png';
import australia from '../../../assets/images/australia.jpg';
import cyprus from '../../../assets/images/cyprus.jpg';
import unitedstates from '../../../assets/images/united states.svg';
import { connect } from 'react-redux';
import {saveProvince} from '../../../redux/actions/SubmitAction';

class Destinations extends Component {
    
    componentDidMount(){
        this.props.saveProvince({
            province: 'New Brunswick',
            city: 'Fredericton'
        })
    }

    render(){
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
                                 <HeaderText value={`${this.props.submitState.results.provinceData.province} ${this.props.submitState.results.provinceData.city}`} />
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
    
}

function mapStateToProps(state){
    console.log(state);
    return{
        authState: state.signinReducer,
        submitState: state.submitReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveProvince: (data) => dispatch(saveProvince(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Destinations);

