import React, { Component } from 'react';
import UniversitiesTemplateStyle from './UniversitiesTemplateStyle';  
import { connect } from 'react-redux';
import Text from '../../atoms/Text/Text';
import HeaderText from '../../atoms/HeaderText/Text';
import {Link} from 'react-router-dom';
import UniversitiesList from '../../organisms/UniversitiesList/UniversitiesList';

class UniversitiesTemplate extends Component{

    render(){
        return (
            <>
                <UniversitiesTemplateStyle>
                    <div className={`container-full nav`}>
                        <Link to='/my-listings/explore-destination'>
                            <i className={`fa fa-angle-left`}></i>
                            <Text value="Back" />
                        </Link> 
                    </div>
                    <div className={`container-full content`}>
                       <div className={`container-full content__header`}>
                            <HeaderText value="Universities" />
                       </div>
                       <UniversitiesList />
                    </div>
                </UniversitiesTemplateStyle>
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

export default connect(mapStateToProps, {}) (UniversitiesTemplate)