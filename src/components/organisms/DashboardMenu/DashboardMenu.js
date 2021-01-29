import React, { Component } from 'react';
import DashboardMenuStyle from './DashboardMenuStyle';  
import { connect } from 'react-redux';
import HeaderText from '../../atoms/HeaderText/Text';
import {NavLink} from 'react-router-dom';
import {history} from '../../../helpers/History';
import Cookies from 'js-cookie';

class DashboardMenu extends Component{

    logout() {
        sessionStorage.removeItem("userEmail");
        Cookies.remove("userEmail");
        let sessionKey = sessionStorage.getItem("userEmail");
        let cookie = Cookies.get("userEmail");
        if( !sessionKey && !cookie ){
            history.replace('/');
        }
    }

    render(){
        return (
            <>
                <DashboardMenuStyle>
                    <div className={`container-full dashboard_menu__top`}>
                        <div className={`dashboard-menu__top__logo`}>

                        </div>
                        <div className={`dashboard-menu__top__info`}>
                            <HeaderText value="Hey Segun" />
                        </div>
                    </div>
                    <div className={`container-full dashboard-menu__bottom`}>
                        <NavLink to={`/my-listings`} activeClassName={'active'}
                         isActive={(match,location) => location.pathname.includes("/my-listings")}>
                            <div className={`container-full dashboard-menu__item`}>
                                <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                   <i className={`fa fa-home`}></i>
                                </div>
                                <div className={`div-sm-9 dashboard-menu__item__text`}>
                                    <HeaderText value={`My Listings`} />
                                </div>
                            </div>
                        </NavLink>    
                        <NavLink to={`/accomodation-interests`} activeClassName={'active'}>
                            <div className={`container-full dashboard-menu__item`}>
                                <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                   <i className={`fa fa-heart-o`}></i>
                                </div>
                                <div className={`div-sm-9 dashboard-menu__item__text`}>
                                    <HeaderText value={`Accomodation Interests`} />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={`/transactions`} activeClassName={'active'}>
                            <div className={`container-full dashboard-menu__item`}>
                                <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                   <i className={`fa fa-briefcase`}></i>
                                </div>
                                <div className={`div-sm-9 dashboard-menu__item__text`}>
                                    <HeaderText value={`Transactions`} />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={`/profile`} activeClassName={'active'}>
                            <div className={`container-full dashboard-menu__item`}>
                                <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                   <i className={`fa fa-user`}></i>
                                </div>
                                <div className={`div-sm-9 dashboard-menu__item__text`}>
                                    <HeaderText value={`Profile`} />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={`/settings`} activeClassName={'active'}>
                            <div className={`container-full dashboard-menu__item`}>
                                <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                   <i className={`fa fa-cog`}></i>
                                </div>
                                <div className={`div-sm-9 dashboard-menu__item__text`}>
                                    <HeaderText value={`Settings`} />
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to={`/notifications`} activeClassName={'active'}>
                            <div className={`container-full dashboard-menu__item`}>
                                <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                   <i className={`fa fa-bell`}></i>
                                </div>
                                <div className={`div-sm-9 dashboard-menu__item__text`}>
                                    <HeaderText value={`Notifications`} />
                                </div>
                            </div>
                        </NavLink>
                        <div className={`container-full dashboard-menu__item`} onClick={() => this.logout() }>
                            <div className={`div-sm-2 dashboard-menu__item__icon`}>
                                <i className={`fa fa-power-off`}></i>
                            </div>
                            <div className={`div-sm-9 dashboard-menu__item__text`}>
                                <HeaderText value={`Logout`} />
                            </div>
                        </div>
                    </div>
                </DashboardMenuStyle>
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

export default connect(mapStateToProps, {}) (DashboardMenu)