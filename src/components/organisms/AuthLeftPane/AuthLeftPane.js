import React from 'react';
import AuthLeftPaneStyle from './AuthLeftPaneStyle';  
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import logo from '../../../assets/images/logo.png'

const AuthLeftPane = () => {
    return (
        <>
            <AuthLeftPaneStyle>
                <div className={`container center description-box__container-full`}>
                    <div className={`div-sm-10 description-box__container`}>
                        <div className={`container-full description-box__container__logo`}>
                            <Img image={logo} className={`img`} alt="logo" />
                        </div>
                        <div className={`container-full desription-box__text-container`}>
                            <HeaderText value="Start the life, career you desire with ease." />
                        </div>
                    </div>
                </div>
            </AuthLeftPaneStyle>
        </>
    );
}

export default AuthLeftPane;
