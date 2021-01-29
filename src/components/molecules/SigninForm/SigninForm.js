import React, {Component} from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import { connect } from 'react-redux';
import {signIn} from '../../../redux/actions/AuthAction';
import {saveInfo} from '../../../redux/actions/SubmitAction';
import SigninFormStyle from './SigninFormStyle';
import Cookies from 'js-cookie';
import {history} from '../../../helpers/History';

class SigninForm extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    componentDidMount(){
        let sessionKey = sessionStorage.getItem("userEmail");
        let cookie = Cookies.get("userEmail");
        if( sessionKey || cookie ){
            history.replace('/my-listings');
        }
    }

    signInUser(){
        console.log(this.state);
        if(this.state.email !== "" && this.state.password !== ""){
            this.props.signIn({
                email: this.state.email,
                password: this.state.password,
            })
            this.props.saveInfo({
                email: this.state.email,
                password: this.state.password,
            })
        }
    }

    onEmailChange(value){
        this.setState({email:value});
    }

    onPasswordChange(value){
        this.setState({password:value});     
    }

    render(){
        return(
            <SigninFormStyle>
                <div className={`container-full form-elements`}>
                    <div className="div-sm-12 form-box-unit">
                        <Input type="text" 
                            className="input"
                            onChange={(event) => this.onEmailChange(event.target.value)}
                            value={this.state.email}
                            required
                        />
						<label> Email Address </label>
                        <fieldset>
                            <legend> <p> Email Address </p> </legend>
                        </fieldset>
                    </div>
                    <div className="div-sm-12 form-box-unit">
                        <Input type="password"
                            className="input" 
                            onChange={(event) => this.onPasswordChange(event.target.value)}
                            value={this.state.password}
                            required
                        />
						<label> Password </label>
                        <fieldset>
                            <legend> <p> Password </p> </legend>
                        </fieldset>
                    </div>
                    <div className={`div-sm-12 forgot-password`}>
                        <a href="/"> Forgot password? </a>
                    </div>
                    <Button className={`button`} onClick={() => this.signInUser() } isLoading={this.props.authState.fetching} 
                        value={
                            <div className={`container-full`}>
                                <p> Sign In </p>
                                <i className="fa fa-angle-right"></i>
                            </div>
                        }
                    />
                    <div className={`div-sm-12 more-action`}>
                        <h2> Don't have an account? </h2>
                        <a href="/"> Sign up now</a>
                    </div>
                </div>
            </SigninFormStyle>
        )
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
        signIn: (creds) => dispatch(signIn(creds)),
        saveInfo: (data) => dispatch(saveInfo(data))
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (SigninForm)

