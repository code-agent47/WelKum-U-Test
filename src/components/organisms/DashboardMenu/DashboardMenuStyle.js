import styled from 'styled-components';

const DashboardMenuStyle = styled.div`
    background:#e2eaeb;
    box-sizing:border-box;
    min-height:100vh;
    -ms-flex: 0 0 23%;
    -webkit-flex: 0 0 23%;
    flex: 0 0 23%;
    max-width: 23%;
    padding-left:25px;
    padding-right:25px;
    .dashboard_menu__top{
        justify-content:normal;
        margin-top:90px;
    }
    .dashboard-menu__top__logo{
        background:#90a2a2;
        border-radius:50%;
        height:60px;
        width:60px;
    }
    .dashboard-menu__top__info{
        margin-left:20px;
        h2{
            color:#0d3b3e;
            font-family:Source Sans Pro;
            font-size:1.7em;
            font-weight:600;
            margin-top:10px;
        }
    }
    .dashboard-menu__bottom{
        margin-top:30px;
    }
    a{
        width:100%;
    }
    .dashboard-menu__item{
        border-radius:6px;
        box-sizing:border-box;
        cursor:pointer;
        justify-content:normal;
        margin-bottom:6px;
        padding:15px;
        position:relative;
        transition:background 0.5s linear;
        width:100%;
    }
    .active > .dashboard-menu__item{
        background:#fcdb9c;
    }
    .dashboard-menu__item__icon{
        align-self:center;
        margin-bottom:0;
        margin-right:8px;
        -ms-flex: 0 0 30px;
        -webkit-flex: 0 0 30px;
        flex: 0 0 30px;
        max-width: 30px;  
        i{
            color:#496580;
            font-size:1.7em;
        }
    }
    .active > .dashboard-menu__item .dashboard-menu__item__icon{
        i{
            color:#d79023;
        }
    }
    .dashboard-menu__item__text{
        margin-bottom:0;
        -ms-flex: 0 0 80%;
        -webkit-flex: 0 0 80%;
        flex: 0 0 80%;
        max-width: 80%;
        margin-left:12px;
        h2{
            color:#496580;
            font-family:Source Sans Pro;
            font-size:1.4em;
            font-weight:600;
            letter-spacing:0.5px;
            line-height:22px;
            margin-top:3px;
            word-spacing:0;
        }
    }
    .active > .dashboard-menu__item .dashboard-menu__item__text{
        h2{
            color:#d79023;
        }
    }
`

export default DashboardMenuStyle;