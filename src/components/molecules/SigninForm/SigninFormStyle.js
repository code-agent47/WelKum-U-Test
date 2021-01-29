import styled from 'styled-components';

const signinFormStyle = styled.div`
.form-box-unit{
    margin-bottom:38px;
    &:nth-of-type(2){
        margin-bottom:25px;
    }
}
.form-box-unit .input {
    position: relative;
    width: 100%;
    height: 67px;
    margin-top: 8px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 2px solid #b0c3d1;
    border-radius: 6px;
    background: transparent;
    padding-left: 28px;
    font-family: Source Sans Pro;
    font-weight: bold;
    font-size: 1.1em;
    color: #9eb2c1; 
}
.form-box-unit .input:valid {
    border: none;
    border-left: 2px solid #b0c3d1;
    border-right: 2px solid #b0c3d1;
    border-bottom: 2px solid #b0c3d1; 
}
.form-box-unit .input:-webkit-autofill {
    border: none;
    border-left: 2px solid #b0c3d1;
    border-right: 2px solid #b0c3d1;
    border-bottom: 2px solid #b0c3d1; 
}
.form-box-unit .input:valid ~ label {
    -ms-transform: translateY(-27px);
    transform: translateY(-27px);
    -webkit-transform: translateY(-27px);
    font-size: 0.8em;
    color: #cecece;
    visibility: hidden; 
}
.form-box-unit .input:-webkit-autofill ~ label {
    -ms-transform: translateY(-27px);
    transform: translateY(-27px);
    -webkit-transform: translateY(-27px);
    font-size: 0.8em;
    color: #cecece;
    visibility: hidden; 
}
.form-box-unit .input:valid ~ fieldset {
    border: 2px solid #b0c3d1;
}
.form-box-unit .input:focus ~ fieldset {
    border: 2px solid #b0c3d1;
}
.form-box-unit .input:-webkit-autofill ~ fieldset {
    border: 2px solid #b0c3d1;
}
.form-box-unit .input:valid ~ fieldset > legend {
    -webkit-animation: legend 0.1s 0.2s forwards;
    animation: legend 0.1s 0.2s forwards; 
}
.form-box-unit .input:-webkit-autofill ~ fieldset > legend {
    -webkit-animation: legend 0.1s 0.2s forwards;
    animation: legend 0.1s 0.2s forwards; 
}
.form-box-unit .input:focus {
    border-color: #b0c3d1;
    border-top: none; 
}
.form-box-unit .input:focus ~ label {
    -ms-transform: translateY(-27px);
    transform: translateY(-27px);
    -webkit-transform: translateY(-27px);
    font-size: 0.8em;
    color: #bcccd5;
    visibility: hidden; 
}
.form-box-unit .input:focus ~ fieldset > legend {
    -webkit-animation: legend 0.1s 0.2s forwards;
    animation: legend 0.1s 0.2s forwards; 
}
.form-box-unit label {
    display: block;
    position: absolute;
    margin-left: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: Source Sans Pro;
    font-size: 1em;
    color: #9eb2c1;
    font-weight: bold;
    margin-top: -45px;
    pointer-events: none;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear; 
}
.form-box-unit fieldset {
    border: 2px solid #b0c3d1;
    border-radius: 6px;
    height: 73px;
    margin-top: -74px;
    padding-top: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box; 
}
.form-box-unit legend {
    margin-left: 18px;
    padding-left: 10px;
    padding-right: 10px;
    visibility: hidden; 
}
.form-box-unit legend p {
    font-family: Source Sans Pro;
    font-size: 0.8em;
    color: #bcccd5;
    font-weight: bold;
    margin-top: 0; 
}
@-webkit-keyframes legend {
    0% {
        visibility: hidden; 
    }
    100% {
        width: inherit;
        padding-left: 10px;
        padding-right: 10px;
        visibility: visible; 
    } 
}
@keyframes legend {
    0% {
        visibility: hidden; 
    }
    100% {
        width: inherit;
        padding-left: 10px;
        padding-right: 10px;
        visibility: visible; 
    } 
}
.forgot-password{
    a{
        color:#f3b353;
        font-family:Source Sans Pro;
        font-size:1.25em;
        font-weight:600;
        letter-spacing:0.5px;
    }
}
.button{
    background:#f4a42d;
    border-radius:4px;
    color:rgb(254, 234, 200);
    font-family:Source Sans Pro;
    font-size:1.25em;
    font-weight:bold;
    height:75px;
    margin-top:22px;
    padding-left:27px;
    padding-right:38px;
    width:100%;
    i{
        color:white;
        font-size:1.2em;
        font-weight:bold;
    }
}
.more-action{
    margin-top:24px;
    h2{
        color:#718993;
        display:inline-block;
        font-family:Source Sans Pro;
        font-size:1.3em;
        font-weight:600;
        letter-spacing:0.5px;
    }
    a{
        color:#f3b556;
        display:inline-block;
        font-family:Source Sans Pro;
        font-size:1.3em;
        font-weight:600;
        letter-spacing:0.5px;
        margin-left:6px;
    }
}

`

export default signinFormStyle;