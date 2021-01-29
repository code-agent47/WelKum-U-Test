import React, { Component } from 'react';
import SigninTemplateStyle from './SigninTemplateStyle';   
import { connect } from 'react-redux';
import AuthLeftPane from '../../organisms/AuthLeftPane/AuthLeftPane';
import SigninForm from '../../molecules/SigninForm/SigninForm';

class SigninTemplate extends Component{
    render(){
        return (
            <>
                <SigninTemplateStyle>
                    <div className={`container-full`}>
                        <AuthLeftPane />
                        <div className={`form-section`}>
                            <div className={`div-xl-9 form-section__box`}>
                                <SigninForm />
                            </div>
                        </div>
                    </div>
                </SigninTemplateStyle>
            </>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        alertState: state.alertReducer,
        authState: state.signinReducer,
        submitState: state.submitReducer
    }
}

export default connect(mapStateToProps, {}) (SigninTemplate)
