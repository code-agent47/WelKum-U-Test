import styled from 'styled-components';

const ListingsTemplateStyle = styled.div`
    box-sizing:border-box;
    padding:10px;
    width:100%;
    .search-container{
        justify-content:flex-end;
        margin-top:30px;
        .input{
            background:#e2eaeb;
            border:none;
            border-radius:4px;
            color:#90b0be;
            font-family:Source Sans Pro;
            font-size:1.3em;
            height:45px;
            padding-left:70px;
        }
        .input::placeholder{
            color:#90b0be;
        }
        i{
            color:#90b0be;
            font-size:1.7em;
            margin-left:21px;
            margin-top:7px;
            position:absolute;
        }
    }
    .listings{
        margin-top:10px;
    }
    .listings__item{
        background:grey;
        border-radius:4px;
        box-sizing:border-box;
        padding:16px;
        &:nth-of-type(1){
            background:#f9e6c9;
        }
        &:nth-of-type(2){
            background:#caeaed;
        }
        &:nth-of-type(3){
            background:#c1e8de;
        }
    }
    .listings__item__text{
        margin-top:50px;
        margin-bottom:30px;
        h2{
            color:#1b4546;
            font-family:Source Sans Pro;
            font-size:1.3em;
            font-weight:600;
            &:nth-of-type(2){
                color:#8aa1a4;
                font-size:1.2em;
                margin-top:8px;
            }
        }
    }
`

export default ListingsTemplateStyle;