import React, { Component } from 'react';
import ExploreDestinationStyle from './ExploreDestinationTemplateStyle';  
import { connect } from 'react-redux';
import Text from '../../atoms/Text/Text';
import {Link} from 'react-router-dom';
import ExploreGallery from '../../organisms/ExploreGallery/ExploreGallery';
import Destinations from '../../organisms/Destinations/Destinations';
import ExploreMenu from '../../organisms/ExploreMenu/ExploreMenu';

class ExploreDestination extends Component{

    render(){
        return (
            <>
                <ExploreDestinationStyle>
                    <div className={`container-full nav`}>
                        <Link to='/my-listings'>
                            <i className={`fa fa-angle-left`}></i>
                            <Text value="Back" />
                        </Link> 
                    </div>
                    <div className={`container-full content`}>
                        <ExploreGallery />
                        <div className={`container-full content__bottom`}>
                            <div className={`div-lg-3 content__bottom__item`}>
                                <Destinations />
                            </div>
                            <div className={`div-lg-3 content__bottom__item`}>
                                <ExploreMenu />
                            </div>
                        </div>
                    </div>
                </ExploreDestinationStyle>
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

export default connect(mapStateToProps, {}) (ExploreDestination)