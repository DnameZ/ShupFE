import styled from 'styled-components';

import { Colors } from '../../Assets/Lib/generalStyles';

export const Header=styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:flex-end;
    box-sizing: border-box;
    border-style: double;
    border-color: #CCF5FF;
    overflow: visible;
    align-self:flex-start;
    background-color:${Colors.Pinky};
    border-bottom-width: 35px;
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    width:100%;
    height:20%;`;

    export const Title=styled.h2`
    width:300px;
    text-shadow: 7px 1px 0px rgba(0, 0, 0, 0.25);
    -webkit-filter: brightness(2) contrast(1.31) blur(0px);
    filter: brightness(2) contrast(1.31) blur(0px);
    align-self:flex-end;
    color:${Colors.White};
    position:absolute;
    top:-30px;
    overflow: hidden;
    line-height: 1.2;
    text-align: center;
    font-size: 55px;
    font-weight: 400;`;

export const DecorationOpen=styled.img`
    position:relative;
    top:120px;
    width: 111px;
    height: 104px;
    &:first-child{ transform: rotate(377deg); right:10px; }
    &:last-child { transform: rotate(336deg); left:10px; }
   `;