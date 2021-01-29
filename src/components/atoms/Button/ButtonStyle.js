import styled from 'styled-components';
import Colors from '../../../helpers/Colors';

export const ButtonStyle = styled.button`
    outline: 0px;
    box-shadow: none;
    font-size: 14px;
    border: 0px solid;
    display: flex;
    align-items: center;
    justify-content: center;

    &.btn span {
        display: inline-block !important;
    }

    &.btn i {
        display: inline-block;
        margin-left: 10px;
    }

    &.btn-border-0 {
        border-radius: 0px;
    }

    &.border-radius-none {
        border-radius: 0px !important;
    }

    &:focus {
        box-shadow: none;
        outline: 0;
    }

    &:active {
        box-shadow: none;
        outline: 0;
    }

    &.btn-padding-md {
        padding: 10px 25px;
    }

    &.btn-app {
        color: ${Colors.buttonDefaultColor};
        background-color: ${Colors.buttonDefaultBackgroundColor};
    }

    &.btn-outline-default {
        color: #000;
        border: 1px solid #d5d5d5;
        box-sizing: border-box;
        border-radius: 10px;
    }

    &.btn-outline-default i {
        background: #000;
    }
`;