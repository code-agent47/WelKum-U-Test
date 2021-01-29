import styled from 'styled-components';
import {maxWidth} from '../../../helpers/mixins';

const AlertStyles = styled.div`
    .alert {
        border-radius: 5px;
        display: block;
        margin-bottom: 5px;
        padding: 16px;
        padding-left: 50px;
        ${
            maxWidth.sm`
                margin-bottom:25px;
            `
        }  
    }

    .alert-danger {
        background-position: 17px;
        background-size: 22px;
        p{
            color: #C70303;
            font-family: Source Sans Pro;
            font-size: 12px;
            letter-spacing: 0.24px;
        }
    }

    .alert-success {
        background: #def7eb;
        background-position: 17px;
        background-size: 22px;
        border: 1px solid #def7eb;
        color: #258066;
        p{
            color: #C70303;
            font-family: Source Sans Pro;
            font-size: 12px;
            letter-spacing: 0.24px;
        }
    }
`

export default AlertStyles;