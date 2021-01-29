import styled from 'styled-components';
import colors from '../../../helpers/Colors';

const ProfileTemplateStyle = styled.div`
    box-sizing:border-box;
    padding:40px;
    width:100%;
    .header{
        margin-top:30px;
        h2{
            color:#547578;
            font-family:Source Sans Pro;
            font-size:2em;
            font-weight:600;
        }
    }
    .profile-info{
        margin-top:30px;
        h2{
            color:#547578;
            font-family:Source Sans Pro;
            font-size:1.5em;
            font-weight:600;
            &:nth-of-type(2){
                color:${colors.gold};
            }
        }
    }
`

export default ProfileTemplateStyle;