import styled from 'styled-components';

const MainLayoutStyle = styled.div`
    background:#F9FAFF;
    .dashboard-body{
        background:white;
        min-height:100vh;
        position:relative;
    }
    .dashboard-body__content{
        -ms-flex: 0 0 77%;
        -webkit-flex: 0 0 77%;
        flex: 0 0 77%;
        max-width: 77%;
    }
`

export default MainLayoutStyle;