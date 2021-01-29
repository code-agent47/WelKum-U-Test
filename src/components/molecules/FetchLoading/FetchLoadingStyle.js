import styled from "styled-components";
import Colors from '../../../helpers/Colors';

const FetchLoadingStyle = styled.div`
    position:relative;
    //width:100%;
    .fetch__progress{
        background:rgba(244, 233, 244,0.21);
        height:100%;
        left:0;
        overflow:hidden;
        position:absolute;
        position:fixed;
        right:0;
        top:0;
        z-index:7000;
    }
    .fetch__progress__bar{
        animation:slide-progress-bar 1.1s linear infinite;
        background:${Colors.gold};
        height:4px;
        width:30%;
        position:absolute;
        z-index:3000;
    }
    @keyframes slide-progress-bar{
        0%{
            margin-left:0%;
            width:30%;
        }
        40%{
            width:60%;
        }
        100%{
            margin-left:100%;
            width:30%;
        }
    }
`

export default FetchLoadingStyle;