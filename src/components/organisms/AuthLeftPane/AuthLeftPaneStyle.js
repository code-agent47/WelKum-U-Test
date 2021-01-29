import styled from 'styled-components';
import colors from '../../../helpers/Colors'

const SigninTemplateStyle = styled.div`
    background: ${colors.gold};
    -ms-flex: 0 0 33%;
    -webkit-flex: 0 0 33%;
    flex: 0 0 33%;
    max-width: 33%; 
    .description-box__container-full{
        align-content:flex-start;
        min-height:100vh;
    }
    .description-box__container{
        -ms-flex: 0 0 64%;
        -webkit-flex: 0 0 64%;
        flex: 0 0 64%;
        margin-left:50px;
        max-width: 64%; 
    }
    .description-box__container__logo{
        -ms-flex: 0 0 37%;
        -webkit-flex: 0 0 37%;
        flex: 0 0 37%;
        max-width: 37%; 
        margin-top:22px;
    }
    .desription-box__text-container{
        margin-top:70px;
        h2{
            color:rgb(254, 234, 200);
            font-size:2.625em;
            font-family: Source Sans Pro;
            font-style:normal;
            font-weight:700;
            line-height:1.2;
            margin-bottom:20px;
        }
    }
`

export default SigninTemplateStyle;   