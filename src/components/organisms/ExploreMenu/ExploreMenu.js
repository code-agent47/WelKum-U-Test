import React, { Component } from 'react';
import ExploreMenuStyle from './ExploreMenuStyle';  
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import universityIcon from '../../../assets/images/University.jpg';
import college from '../../../assets/images/College.jpg';
import firstfriend from '../../../assets/images/First Friend.jpg';
import airport from '../../../assets/images/Airport Pickup.jpg';
import food from '../../../assets/images/Food.jpg';
import top from '../../../assets/images/Top Activities.jpg';
import { connect } from 'react-redux';
import ChangeLocationModal from '../ChangeLocationModal/ChangeLocationModal';
import {Link} from 'react-router-dom';

class ExploreMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            _showChangeLocationModal: false,
        }
    }

    showChangeLocationModal(){
        this.setState({_showChangeLocationModal: true});
    }

    hideChangeLocationModal = () => {
        this.setState({_showChangeLocationModal: false});
    }

    renderChangeLocationModal(){
        if(this.state._showChangeLocationModal){
            return(
                <ChangeLocationModal handleClose={this.hideChangeLocationModal}/>
            )
        }
    }

    render(){
        return (
            <>
                {this.renderChangeLocationModal()}
                <ExploreMenuStyle>
                    <div className={`container-full menu`}>
                        <div className={`container-full menu__header`}>
                            <div className={`menu__header__text`}>
                                <HeaderText value="Canada" />
                                <Text value={`province: ${this.props.submitState.results.provinceData.province}`} />
                                <Text value={`city: ${this.props.submitState.results.provinceData.city}`} />
                            </div>
                            <div className={`menu__header__button`}>
                                <Button value="Change Location" className={`button`} onClick={() => this.showChangeLocationModal()}/>
                            </div>
                        </div>
                        <div className={`container-full menu__group`}>
                            <Link to='/my-listings/explore-destination/universities'>
                                <div className={`container-full menu__group__item`}>
                                    <i className={`fa fa-angle-right`}></i>
                                    <div className={`menu__group__item__image`}>
                                        <Img image={universityIcon} className={`img`} alt="icon" />
                                    </div>
                                    <div className={`menu__group__item__text`}>
                                        <HeaderText value="Universities" />
                                        <Text value="Explore your Universities" />
                                    </div>
                                </div>
                            </Link>
                            <div className={`container-full menu__group__item`}>
                                <i className={`fa fa-angle-right`}></i>
                                <div className={`menu__group__item__image`}>
                                    <Img image={college} className={`img`} alt="icon" />
                                </div>
                                <div className={`menu__group__item__text`}>
                                    <HeaderText value="Colleges" />
                                    <Text value="Find top colleges" />
                                </div>
                            </div>
                            <div className={`container-full menu__group__item`}>
                                <i className={`fa fa-angle-right`}></i>
                                <div className={`menu__group__item__image`}>
                                    <Img image={firstfriend} className={`img`} alt="icon" />
                                </div>
                                <div className={`menu__group__item__text`}>
                                    <HeaderText value="First Friend" />
                                    <Text value="Help on arrival" />
                                </div>
                            </div>
                            <div className={`container-full menu__group__item`}>
                                <i className={`fa fa-angle-right`}></i>
                                <div className={`menu__group__item__image`}>
                                    <Img image={airport} className={`img`} alt="icon" />
                                </div>
                                <div className={`menu__group__item__text`}>
                                    <HeaderText value="Airport Pickup" />
                                    <Text value="Book a ride" />
                                </div>
                            </div>
                            <div className={`container-full menu__group__item`}>
                                <i className={`fa fa-angle-right`}></i>
                                <div className={`menu__group__item__image`}>
                                    <Img image={food} className={`img`} alt="icon" />
                                </div>
                                <div className={`menu__group__item__text`}>
                                    <HeaderText value="Food" />
                                    <Text value="Satisfy your taste buds" />
                                </div>
                            </div>
                            <div className={`container-full menu__group__item`}>
                                <i className={`fa fa-angle-right`}></i>
                                <div className={`menu__group__item__image`}>
                                    <Img image={top} className={`img`} alt="icon" />
                                </div>
                                <div className={`menu__group__item__text`}>
                                    <HeaderText value="Top Activities" />
                                    <Text value="Must do" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ExploreMenuStyle>
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

export default connect(mapStateToProps, {}) (ExploreMenu);
