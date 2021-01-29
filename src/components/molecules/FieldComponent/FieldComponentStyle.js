import styled from "styled-components";
import name from '../../../assets/images/client-name.svg';
import email from '../../../assets/images/client-email.svg';
import call from '../../../assets/images/client-call.svg';
import home from '../../../assets/images/client-home.svg';
import profile from '../../../assets/images/clients-profile.svg';
import calendar from '../../../assets/images/calendar.svg';
import visit from '../../../assets/images/visits-icon.svg';
import status from '../../../assets/images/status-icon.svg';

const FieldComponentStyle = styled.div`
    margin-bottom:17px;
    position:relative;
    .input{
        background: #FFFFFF;
        border:1px solid #EEEEEE;
        border-radius:4px;
        box-sizing:border-box;
        color:#707070;
        font-family:Source Sans Pro;
        font-size:14.5px; 
        font-weight:700;
        height:60px;
        position: relative;        
        padding-left:45px;
        padding-right:25px;        
        width:100%;
    }
    .name{
        background:url(${name})no-repeat 0px;
        background-position:17px;
        background-size:9px;
    }
    .email{
        background:url(${email})no-repeat 0px;
        background-position:17px;
        background-size:13px;
    }
    .phone{
        background:url(${call})no-repeat 0px;
        background-position:17px;
        background-size:13px;
    }
    .address{
        background:url(${home})no-repeat 0px;
        background-position:17px;
        background-size:13px;
    }
    .profile{
        background:url(${profile})no-repeat 0px;
        background-position:17px;
        background-size:10px;
    }
    .calendar{
        background:url(${calendar})no-repeat 0px;
        background-position:17px;
        background-size:11.52px;
    }
   
    span{
        color:red;
        font-family:Source Sans Pro;
    }
    .form-box-unit{
        position:relative;
        margin-bottom:0;
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
        .visit{
            background:url(${visit})no-repeat 0px;
            background-position:17px;
            background-size:11.52px;
        }
        .status{
            background:url(${status})no-repeat 0px;
            background-position:17px;
            background-size:11.52px;
        } 
        .name{
            background:url(${name})no-repeat 0px;
            background-position:17px;
            background-size:9px;
        }     
    }
    
`

export default FieldComponentStyle;