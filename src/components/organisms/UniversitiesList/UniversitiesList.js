import React, { Component } from 'react';
import ExploreMenuStyle from './UniversitiesListStyle';  
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import { connect } from 'react-redux';
import universityImage from '../../../assets/images/universityImage.jpg';
import {FetchUniversities} from '../../../redux/actions/DashboardAction';
import FetchLoading from '../../molecules/FetchLoading/FetchLoading';

class ExploreMenu extends Component {
    constructor(props){
        super(props);
        this.state={
            _showChangeLocationModal: false,
            _showFetchLoading: true,
            universities: []
        }
    }

    async getUniversitiesData(){
        this.setState({_showFetchLoading: true});
        await this.props.FetchUniversities(`/UniversityManagement/GetAllUniversity?Province=${this.props.submitState.results.provinceData.province}&City=${this.props.submitState.results.provinceData.city}&PageSize=10&CurrentPage=1`);
        if(this.props.dashboardState.results !== null){
            this.setState({universities: this.props.dashboardState.results.items});
        }
        this.setState({_showFetchLoading: false});
    }

    renderFetchLoading(){
        if(this.state._showFetchLoading){
            return(
                <FetchLoading />
            )
        }
    }

    renderList(){
        let universities = this.state.universities.map((university) => {
            return (
                <div className={`container-full list__item`}>
                    <div className={`div-lg-3 list__item__image`}>
                        <Img image={universityImage} className={`img`} />
                    </div>
                    <div className={`div-lg-5 list__item__content`}>
                        <div className={`div-lg-9 list__item__content__name`}>
                            <div className={`container-full`}>
                                <div className={`list__item__content__name__image`}>
                                    <Img image={university.image} className={`img`} />
                                </div>
                                <div className={`list__item__content__name__text`}>
                                    <HeaderText value={`${university.name}`}/>
                                    <Text value={`Public University in ${university.name}`} />
                                </div>
                            </div>
                        </div>
                        <div className={`container-full list__item__content__about`}>
                            <HeaderText value="About" />
                            <Text value={university.about}/>
                        </div>
                        <div className={`container-full list__item__content__action`}>
                            <Text value="View More..." />
                        </div>
                    </div>
                </div>
            )
        });
        return universities;
    }   
    
    renderListContent(){
        if(this.state.universities.length > 0){
            return(
                <div className={`container-full list`}>
                    {this.renderList()}
                </div>
            )
        }
    }

    componentDidMount(){
        this.getUniversitiesData();
    }

    render(){
        return (
            <>
                {this.renderFetchLoading()}
                <ExploreMenuStyle>
                    {this.renderListContent()}
                </ExploreMenuStyle>
            </>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        authState: state.signinReducer,
        submitState: state.submitReducer,
        dashboardState: state.dashboardReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        FetchUniversities: (url) => dispatch(FetchUniversities(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ExploreMenu);
