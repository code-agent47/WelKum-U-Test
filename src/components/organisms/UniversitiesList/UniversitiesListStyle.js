import styled from 'styled-components';

const UniversitiesListStyle = styled.div`
    width:100%;
    .list{
        margin-top:20px;
    }
    .list__item{
        justify-content:normal;
    }
    .list__item__image{
        img{
            border-radius:4px;
        }
    }
    .list__item__content{
        margin-left:20px;
    }
    .list__item__content__name{
        background:white;
        border:1px solid rgba(157, 180, 188, 0.3);
        border-radius:4px;
        margin-bottom:17px;
        padding:13px;
        .container-full{
            justify-content:normal;
        }
    }
    .list__item__content__name__image{
        -webkit-flex: 0 0 50px;
        -ms-flex: 0 0 50px;
        flex: 0 0 50px;
        max-width: 50px;
    }
    .list__item__content__name__text{
        margin-left:17px;
        h2{
            color:#0b393c;
            font-family:Source Sans Pro;
            font-size:0.9em;
            font-weight:600;
        }
        p{
            color:#92a2b1;
            font-family:Source Sans Pro;
            font-size:0.8em;
            margin-top:4px;
        }
    }
    .list__item__content__about{
        h2{
            color:#2b4957;
            font-family:Source Sans Pro;
            font-size:0.9em;
            font-weight:600;
            width:100%;
        }
        p{
            color:#627a92;
            font-family:Source Sans Pro;
            font-size:0.8em;
            margin-top:7px;
            width:100%;
        }
    }
    .list__item__content__action{
        margin-top:35px;
        p{
            color:#627a92;
            font-family:Source Sans Pro;
            font-size:0.8em;
            margin-top:7px;
            text-decoration:underline;
            width:100%;
        }
    }

`

export default UniversitiesListStyle;   