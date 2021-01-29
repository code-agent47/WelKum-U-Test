import React, {Component} from 'react';
import { connect } from 'react-redux';
import ChangeLocationModalStyle from './ChangeLocationModalStyle';
import HeaderText from '../../atoms/HeaderText/Text';
import Button from '../../atoms/Button/Button';
import Img from '../../atoms/Img/Img';
import caretDown from '../../../assets/images/caret-lite-down.svg';
import {DashboardActionsGET} from '../../../redux/actions/DashboardAction';
import {saveProvince} from '../../../redux/actions/SubmitAction';


class ChangeLocationModal extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: false,
            citySelectDefaultValue: 'Select City',
            status: 'disabled',
            provinces: [],
            cities: [],
            province: '',
            city: ''
        }
    }

    async getProvinceData(){
        await this.props.DashboardActionsGET(`/CityProvince/GetAllProvinces`);
        if(this.props.dashboardState.results !== null){
            this.setState({provinces: this.props.dashboardState.results.provinces});
        }
    }

    componentDidMount(){
        this.getProvinceData();
    }

    renderProvinceOption(){
        let provinces = this.state.provinces.map( (province,key) => {
            return (<option value={province.name} key={key}> {province.name} </option>)
        })
        return provinces;
    }

    async onProvinceChange(value){
        this.setState({status: 'disabled'});
        this.setState({citySelectDefaultValue: 'Loading...'});
        await this.setState({province: value});
        await this.props.DashboardActionsGET(`/CityProvince/GetAllCities?ProvinceName=${this.state.province}`);
        if(this.props.dashboardState.results !== null){
            this.setState({cities: this.props.dashboardState.results.cities});
        }
        this.setState({status: ''});
        this.setState({citySelectDefaultValue: 'Select City'})
    }

    renderCitiesOption(){
        let cities = this.state.cities.map( (city,key) => {
            return (<option value={city.name} key={key}> {city.name} </option>)
        })
        return cities;
    }

    onCityChange(value){
        this.setState({city: value});
    }

    onFormSubmit(){
        return async (evt) => {
            evt.preventDefault();
            let data = {
                province: this.state.province,
                city: this.state.city
            }
            this.setState({loading: true});
            await this.props.saveProvince(data);
            this.setState({loading: false});
            this.props.handleClose();
        }
    }

    render(){
        return (
            <ChangeLocationModalStyle className={`container-full`}>
              <div className={`container-full center modal-container`}>
                 <div className={`div-lg-5 modal-container__box add-location-modal-container__box`}>
                     <div className={`container-full modal-container__box__header`}>
                         <HeaderText value="Change Location" />
                     </div>
                     <form onSubmit={this.onFormSubmit()}>
                        <div className={`container-full location-modal-container__box__content`}>
                            <div className={`div-sm-12 form-box-unit`}>
                                <select onChange={(evt) => this.onProvinceChange(evt.target.value)} className={`input`} required>
                                    <option> Select Province </option>
                                    {this.renderProvinceOption()}
                                </select>
                                <Img image={caretDown} alt="caret" />
                            </div>
                            <div className={`div-sm-12 form-box-unit ${this.state.status}`}>
                                <select onChange={(evt) => this.onCityChange(evt.target.value)} className={`input`} required>
                                    <option> {this.state.citySelectDefaultValue} </option>
                                    {this.renderCitiesOption()}
                                </select>
                                <Img image={caretDown} alt="caret" />
                            </div>
                        </div>
                        <div className={`container-full locations-modal-container__box__action`}>
                            <Button id="button" type="submit" value="Change Location" className={`button`} isLoading={this.state.loading} /> 
                            <Button id="button1" className={`button button--cancel`} onClick={ this.props.handleClose } value="Cancel" />
                        </div>
                     </form>
                 </div>  
              </div>
            </ChangeLocationModalStyle>
          );
    }
}
 
function mapStateToProps(state){
    return{
        submitState: state.submitReducer,
        dashboardState: state.dashboardReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        DashboardActionsGET: (url) => dispatch(DashboardActionsGET(url)),
        saveProvince: (data) => dispatch(saveProvince(data))
    };
};


export default  connect(mapStateToProps, mapDispatchToProps) (ChangeLocationModal);