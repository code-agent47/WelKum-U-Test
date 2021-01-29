import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FieldComponentStyle from './FieldComponentStyle';
import Input from '../../atoms/Input/Input';
import Img from '../../atoms/Img/Img';
import caretDown from '../../../assets/images/caret-lite-down.svg';
import datepicker from 'js-datepicker';
import {connect} from 'react-redux';
import { SubmitActionsGET } from '../../../redux/actions/SubmitAction';
import './datepicker.css';

class FieldComponent extends Component{    
    constructor(props){
        super(props);

        this.state = {
            value: this.props.value,
            error: false,
            clients: [],
            visitCategory: [],
            status: [],
            roles: []
        };

        this.onChange = this.onChange.bind(this);
    }

    async generateClients(){
        if(this.props.selectType === 'client'){
            await this.props.SubmitAction('clients/fetch/active/10000/1/*');
            this.setState({clients: this.props.submitState.results.data.records});
        }
        return;
    }

    async generateVisitCategory(){
        if(this.props.selectType === 'visitCategory'){
            await this.props.SubmitAction('visit_categories/fetch/all');
            this.setState({visitCategory: this.props.submitState.results.data.rows});
        }
    }

    async generateStatus(){
        if(this.props.selectType === 'status'){
            await this.props.SubmitAction('statuses/fetch/all');
            this.setState({status: this.props.submitState.results.data.rows});
        }
    }

    async generateRoles(){
        if(this.props.selectType === 'role'){
            await this.props.SubmitAction('roles/staff/fetch/all');
            this.setState({roles: this.props.submitState.results.data.rows});
            console.log(this.state.roles) 
        }
    }

    componentDidMount(){
        this.generateClients();
        this.generateVisitCategory();
        this.generateStatus();
        this.generateRoles();
    }      

    static getDerivedStateFromProps(nextProps) {
        return {value: nextProps.value}
    }

    onChange () {
        return (evt) => {
            const name = this.props.name;
            const value = evt.target.value;
            const index = this.props.index;
            const error = this.props.validate ? this.props.validate(value,index) : false;
            //console.log(error);
            this.setState({value, error});
            this.props.onChange({name, value, error});
        }
    };

    selectStartDate(){
        return (event) => {
            event.stopPropagation();
            let picker = datepicker(`.date-picker${this.props.index}`,{ maxDate: '',
                onHide: instance => {
                    const name = this.props.name;
                    const value = document.getElementsByClassName('date-picker0')[0].value;
                    const index = this.props.index;
                    const error = this.props.validate ? this.props.validate(value,index) : false;
                    //console.log(error);
                    this.setState({value, error});
                    this.props.onChange({name, value, error});
                    localStorage.setItem("startDate", instance.dateSelected)
                    instance.remove()
                }
            });
            picker.show();
        }
    }

    selectEndDate(){
    let minimumDate = null;
    if(localStorage.getItem("startDate") !== null){
        minimumDate = new Date(localStorage.getItem("startDate"));
    }
    console.log("djfjjf",minimumDate);
    return(event) => {
        event.stopPropagation();
        let secondPicker = datepicker(`.date-picker${this.props.index}`,{ maxDate: '', minDate: '',
            onHide: instance => {
                const name = this.props.name;
                const value = document.getElementsByClassName('date-picker1')[0].value;
                const index = this.props.index;
                const error = this.props.validate ? this.props.validate(value,index) : false;
                //console.log(error);
                this.setState({value, error});
                this.props.onChange({name, value, error});
                instance.remove()
            }
        });
        secondPicker.show();
    }
    }

    renderVisitCategory(){
        let visitCategory = this.state.visitCategory.map((visitCategory) => {
            return(
                <option value={visitCategory.category_uuid} key={visitCategory.category_uuid}> {visitCategory.category_name} </option>
            )
        })  
        return visitCategory;
    }

    renderStatus(){
        let status =  this.state.status.map((status) => {
            return(
                <option value={status.status_uuid} key={status.status_uuid}> {status.status} </option>
            )
        })  
        return status;
    }

    renderClient(){
        let clients = this.state.clients.map((client) => {
            return(
                <option value={client.client_uuid} key={client.client_uuid}> {client.client_name} </option>
            )
        })
        return clients;
    }

    renderDefaultRole(){
        if(this.props.roleName !== "Super Administrator" && this.props.roleName !== undefined){
            return(
                <option value={this.props.roleId}> {this.props.roleName} </option>
            )
        }
    }

    renderRole(){
        let roles = this.state.roles.map((role) => {
            if(role.role_name !== "Super Administrator"){
                return(
                    <option value={role.role_uuid} key={role.role_uuid}> {role.role_name} </option>
                )
            }
            return false;
        })
        return roles;
    }

    render(){
        return(
            <FieldComponentStyle className="container-full field-component">
                {
                    (this.props.inputType === undefined && (
                        <>
                            <Input
                                className={`input ${this.props.icon}`}
                                placeholder={this.props.placeholder}
                                value={this.state.value}
                                onChange={this.onChange()}
                            />
                            <span style={{color: 'red'}}>{this.state.error}</span>
                        </>
                    ))
                }
                {
                    (this.props.inputType === "inputSelect" && (
                        <div className={`div-sm-12 form-box-unit`}>
                            <Input
                                className={`date-picker${this.props.index} input ${this.props.icon}`}
                                placeholder={this.props.placeholder}
                                value={this.state.value}
                                onChange={this.onChange()}
                                onFocus={ this.selectStartDate() }
                            />
                            <Img image={caretDown} alt="caret" />
                            <span style={{color: 'red',marginTop: '5px'}}>{this.state.error}</span>
                        </div>
                    ))
                }
                {
                    (this.props.inputType === "inputSelect1" && (
                        <div className={`div-sm-12 form-box-unit`}>
                            <Input
                                className={`date-picker${this.props.index} input ${this.props.icon}`}
                                placeholder={this.props.placeholder}
                                value={this.state.value}
                                onChange={this.onChange()}
                                onFocus={ this.selectEndDate() }
                            />
                            <Img image={caretDown} alt="caret" />
                            <span style={{color: 'red',marginTop: '5px'}}>{this.state.error}</span>
                        </div>
                    ))
                }
                {
                    (this.props.inputType === "select" && (
                        <div className={`div-sm-12 form-box-unit`}>
                            <select onChange={this.onChange()} className={`input ${this.props.icon}`} required>
                                <option> {this.props.placeholder} </option>
                                {(this.props.selectType === 'visitCategory' && (
                                    this.renderVisitCategory()
                                ))}
                                {(this.props.selectType === 'status' && (
                                    this.renderStatus()
                                ))}
                                {(this.props.selectType === 'client' && (
                                    this.renderClient()
                                ))}
                                {(this.props.selectType === 'role' && (
                                    <>
                                    {this.renderDefaultRole()}
                                    { this.renderRole() }
                                    </>
                                ))}
                            </select>
                            <Img image={caretDown} alt="caret" />
                            <span style={{color: 'red',marginTop: '5px'}}>{this.state.error}</span>
                        </div>
                    ))
                }
            </FieldComponentStyle>
            
        )
    }

}

FieldComponent.propTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return{
        submitState: state.submitReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SubmitAction: (url) => dispatch(SubmitActionsGET(url))
    };
};


export default  connect(mapStateToProps, mapDispatchToProps) (FieldComponent);