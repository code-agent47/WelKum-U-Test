import styled from "styled-components";
import Colors from '../../../helpers/Colors';

const ChangeLocationModalStyle = styled.div`
    animation: show-bg 0.5s linear forwards;
    display:flex;
    height: 100%;
    left: 0;
    position:absolute;
    position:fixed;
    top: 0;
    width:100%;
    z-index:5000;
    @keyframes show-bg{
        0%{
            background:rgba(112, 112, 112, 0)
        }
        100%{
            background:rgba(112, 112, 112, 0.3)
        }
    }
    .modal-container{
        box-sizing:border-box;
        min-height:100vh;
    }
    .modal-container__box{
        background:#FFFFFF;
        box-shadow:0px 16px 40px rgba(3, 47, 51, 0.03);
        border-radius:8px;
        box-sizing:border-box;
        overflow:hidden;
        padding:30px;
        padding-left:34px;
        padding-right:50px;
    }
    .add-location-modal-container__box{
        -ms-flex: 0 0 501px;
        -webkit-flex: 0 0 501px;
        flex: 0 0 501px;
        max-width: 501px;
        margin-left:12%;
    }
    .modal-border-bottom{
        border-bottom:5px solid;
        border-radius:16px 16px 0px 0px;
        bottom:0;
        height:5px;
        left:0;
        position:absolute;
        width:100%;
    }
    .modal-border-bottom--orange{
        border-color:${Colors.gold};
    }
    .modal-container__box__header{
        margin-bottom:0;
        h2{
            color:#000000;
            font-family:Source Sans Pro;
            font-size:1.48em;
            font-weight:600;
            text-transform:uppercase;
            word-spacing:1.3px;
            span{
                font-family:Source Sans Pro;
                margin-right:5px; 
            }
        }
    }
    .location-modal-container__box__content{
        margin-top:55px;
    } 
    .disabled{
        opacity:0.5;
        pointer-events:none;
    }
    .form-box-unit{
        position:relative;
        margin-bottom:20px;
        span{
            font-family:Source Sans Pro;   
        }
        select{
            appearance:none;
            background:transparent;
            option{
                font-family:Source Sans Pro;
            }
        }
        .input{
            border:1px solid #EEEEEE;
            box-sizing: border-box;
            border-radius: 4px;
            color:#707070;
            font-family:Source Sans Pro;
            font-weight:700;
            font-size:14.5px;
            height:60px;
            padding-left:46.5px;
            padding-right:20px;
            position: relative;
            width:100%;
        } 
        img{
            margin-right:20px;
            margin-top:27px;
            right:0;
            position:absolute;
        }      
    }   
    .locations-modal-container__box__action{
        margin-top:38px;
        margin-bottom:33px;
        .button{
            background:${Colors.gold};
            border-radius:30px;
            color:white;
            font-family:Source Sans Pro;
            font-size:0.865em;
            font-weight:600;
            height:58px;
            letter-spacing:0.7px;
            margin-bottom:0;
            width:190px;
            text-transform:uppercase;
        }
        .button--cancel{
            background:transparent;
            color:#707070;
        }
    }
`
export default ChangeLocationModalStyle