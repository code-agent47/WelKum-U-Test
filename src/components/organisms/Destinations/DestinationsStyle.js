import styled from 'styled-components';

const DestinationsStyle = styled.div`
    width:100%;
    .destinations{
        margin-bottom:13px;
    }
    .destinations__header{
        justify-content:normal;
        h2{
            color:#809298;
            font-family:Source Sans Pro;
            font-size:0.7em;
            font-weight:600;
        }
        i{
            color:#547f92;
            font-size:0.65em;
            margin-left:5px;
        }
    }
    .destinations__item{
        background:#fcf8f8;
        border-radius:6px;
        box-sizing:border-box;
        height:69px;
        justify-content:normal;
        margin-top:8px;
        padding-bottom:12px;
        padding-left:16px;
        padding-right:16px;
        padding-top:13px;
    }
    .active{
        background:#3f64e8;
        .destinations__item__text{
            h2{
                color:white;
                &:nth-of-type(2){
                    color:#aacfeb;
                }
            }
        }
    }
    .destinations__item__logo{
        -webkit-flex: 0 0 20px;
        -ms-flex: 0 0 20px;
        flex: 0 0 20px;
        max-width: 20px;
    }
    .destinations__item__text{
        margin-left:7px;
        margin-top:-3px;
        h2{
            color:#8a9aa1;
            font-family:Source Sans Pro;
            font-size:0.85em;
            font-weight:600;
            &:nth-of-type(2){
                font-size:0.75em;
                margin-top:5px;
                text-transform:uppercase;
            }
        }
    }

`

export default DestinationsStyle;   