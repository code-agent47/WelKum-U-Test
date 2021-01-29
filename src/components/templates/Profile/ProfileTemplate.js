import React, { Component } from 'react';
import ProfileTemplatetyle from './ProfileTemplateStyle';  
import { connect } from 'react-redux';
import HeaderText from '../../atoms/HeaderText/Text';

class ProfileTemplate extends Component{

    render(){
        return (
            <>
                <ProfileTemplatetyle>
                    <div className={`container-full header`}>
                        <HeaderText value="Profile" />
                    </div>
                    <div className={`container-full profile-info`}>
                        <div className={`div-lg-2`}>
                            <div className={`container-full`}>
                                <HeaderText value="Email:" />
                                <HeaderText value={this.props.submitState.results.info.email} />
                            </div>
                        </div>
                      
                    </div>
                </ProfileTemplatetyle>
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

export default connect(mapStateToProps, {}) (ProfileTemplate)