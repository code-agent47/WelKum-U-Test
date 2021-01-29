import React, { Component } from 'react';
import ListingsTemplateStyle from './ListingsTemplateStyle';  
import { connect } from 'react-redux';
import Input from '../../atoms/Input/Input';
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import coins from '../../../assets/images/coins.png';
import globe from '../../../assets/images/globe.png'
import house from '../../../assets/images/house.png'
import {Link} from 'react-router-dom';

class ListingsTemplate extends Component{

    render(){
        return (
            <>
                <ListingsTemplateStyle>
                    <div className={`container-full search-container`}>
                        <div className={`div-lg-3`}>
                            <i className={`fa fa-search`}></i>
                            <Input type="text" className={`input`} placeholder="Search" />
                        </div>
                    </div>
                    <div className={`container-full listings`}>
                        <div className={`div-lg-4 listings__item`}>
                            <div className={`container-full`}>
                                <div className={`div-lg-8 listings__item__text`}>
                                    <HeaderText value="Exchange Currency" />
                                    <HeaderText value="Exchange money from one local currency to another" />
                                </div>
                                <div className={`div-lg-4 listings__item__image`}>
                                    <Img image={coins} className={`img`} alt="coins" />
                                </div>
                            </div>
                        </div>
                        <div className={`div-lg-4 listings__item`}>
                            <div className={`container-full`}>
                                <div className={`div-lg-8 listings__item__text`}>
                                    <HeaderText value="Get an Accomodation" />
                                    <HeaderText value="Find the best accomodation at an affordable price" />
                                </div>
                                <div className={`div-lg-4 listings__item__image`}>
                                    <Img image={house} className={`img`} alt="coins" />
                                </div>
                            </div>
                        </div>
                        <div className={`div-lg-4 listings__item`}>
                            <Link to='/my-listings/explore-destination'>
                                <div className={`container-full`}>
                                    <div className={`div-lg-8 listings__item__text`}>
                                        <HeaderText value="Explore your destination" />
                                        <HeaderText value="Get relevant information about any country and community" />
                                    </div>
                                    <div className={`div-lg-4 listings__item__image`}>
                                        <Img image={globe} className={`img`} alt="coins" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </ListingsTemplateStyle>
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

export default connect(mapStateToProps, {}) (ListingsTemplate)