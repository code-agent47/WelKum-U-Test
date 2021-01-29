import styled from 'styled-components';

const DestinationsStyle = styled.div`
    width:100%;
    a{
        width:100%;
    }
    .menu__header__text{
        h2{
            color:#104450;
            font-family:Source Sans Pro;
            font-size:Source Sans Pro;
            font-size:0.95em;
            font-weight:600;
            margin-bottom:0;
        }
        p{
            color:#9db4bc;
            font-family:Source Sans Pro;
            font-size:Source Sans Pro;
            font-size:11px;
            letter-spacing:0.5px;
            text-transform:capitalise;
        }
    }
    .menu__header__button{
        .button{
            background:white;
            border:0.3px solid rgba(157, 180, 188, 0.3);
            border-radius:4px;
            color:#6a7d85;
            font-family:Source Sans Pro;
            font-size:Source Sans Pro;
            font-size:11px;
            height:30px;
            width:90px;
        }
    }
    .menu__group{
        margin-top:18px;
    }
    .menu__group__item{
        background:white;
        border:0.3px solid rgba(157, 180, 188, 0.3);
        border-radius:4px;
        box-sizing:border-box;
        justify-content:normal;
        margin-bottom:11.5px;
        padding-bottom:14px;
        padding-left:14px;
        padding-right:14px;
        padding-top:15px;
        position:relative;
        i{
            color:#496580;
            margin-right:15px;
            margin-top:8.5%;
            right:0;
            position:absolute;
            top:0;
        }
    }
    .menu__group__item__image{
        -webkit-flex: 0 0 38px;
        -ms-flex: 0 0 38px;
        flex: 0 0 38px;
        max-width: 38px;
    }
    .menu__group__item__text{
        margin-left:16px;
        h2{
            color:#474a5b;
            font-family:Source Sans Pro;
            font-size:Source Sans Pro;
            font-size:0.87em;
            font-weight:600;
        }
        p{
            color:#92a2b1;
            font-family:Source Sans Pro;
            font-size:Source Sans Pro;
            font-size:12px;
            margin-top:0.1px;
        }
    }

`

export default DestinationsStyle;   