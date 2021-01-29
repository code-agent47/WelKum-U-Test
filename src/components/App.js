import React, { Component, Fragment } from 'react';
import { Route,Switch } from 'react-router-dom';
import PrivateRoute from '../config/PrivateRoute';
import { connect } from 'react-redux';
import Signin from './pages/Signin';
import MainLayout from './pages/MainLayout';

class App extends Component{

   render(){
      return(  
        <Fragment>
            <Switch>                   
                <Route exact path='/' component={Signin} />
                <Route path='/login' component={Signin} />
                <PrivateRoute component={MainLayout}/>
            </Switch>
        </Fragment>
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

export default connect(mapStateToProps,
  {}) (App);
