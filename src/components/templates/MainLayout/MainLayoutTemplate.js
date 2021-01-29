import React, { Component } from 'react';
import MainLayoutTemplateStyle from './MainLayoutTemplateStyle';  
import DashboardMenu from '../../organisms/DashboardMenu/DashboardMenu';
import routes from '../../../routes';
import { connect } from 'react-redux';

class MainLayoutTemplate extends Component{

    render(){
        return (
            <>
                <MainLayoutTemplateStyle>
                    <section>
                        <div className={`container-full dashboard-body`}>
                            <DashboardMenu />
                            <div className={`div-lg-10 dashboard-body__content`}>
                                {routes()}
                            </div>                            
                        </div>
                        
                    </section> 
                </MainLayoutTemplateStyle>
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

export default connect(mapStateToProps, {}) (MainLayoutTemplate)