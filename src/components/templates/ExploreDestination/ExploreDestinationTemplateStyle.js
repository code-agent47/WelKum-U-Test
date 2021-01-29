import styled from 'styled-components';

const ExploreDestinationTemplateStyle = styled.div`
    box-sizing:border-box;
    padding:10px;
    padding-top:4px;
    width:100%;
    .nav{
        justify-content:normal;
        a{
            display:flex;
        }
        p{
            color:#547578;
            font-family:Source Sans Pro;
            font-size:13px;
            margin-left:12px;
            margin-top:1.2px;
        }
    }
    .content{
        padding:110px;
        padding-top:25px;
    }
    .content__bottom{
        margin-top:60px;
    }
    .content__bottom__item{
        -webkit-flex: 0 0 25%;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: 25%;
    }
`

export default ExploreDestinationTemplateStyle;