import styled  from "styled-components";
import { Colors } from "../../Assets/Lib/generalStyles";

import { BreakPoints } from "../../Assets/Lib/generalStyles";

export const Shop=styled.div`
    display:flex;
    background-color:${Colors.White};
    justify-content:center;
    width:100vw;
    height:100vh;
    `;

export const CardsContainer=styled.div`
    display:grid;
    margin-top:150px;
    align-items:center;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(1,1fr);
    grid-gap:10px;
    justify-items:center;
    width:80%;
    height:100%;
    
    @media screen and (${BreakPoints.tablet}) {
        align-self:center;
        width:100%;
        height:72%;
        row-gap:50px;
        grid-template-rows: repeat(2,1fr);
        grid-template-columns: repeat(2,1fr);
     }`;

export const ToolSection=styled.div`
    display:flex;
    position:absolute;
    justify-content:space-evenly;
    width:100%;
    height:20%;`;

export const InputSearch=styled.input`
    display:flex;
    justify-content:flex-start;
    outline:none;
    color:${Colors.White};
    text-align:center;
    focus:none;
    border:none;
    align-self:center;
    background-color:${Colors.Pinky};
    border-radius:36px;
    width:60%;
    height:30%;
    &::-webkit-input-placeholder 
    {
        color:${Colors.White};
    }

    @media screen and (${BreakPoints.tablet}) {
        width:50%;
        height:20%;
        margin-bottom:20px;
        align-self:flex-end;
     }`;

export const HambMenu=styled.img`
    align-self:center;
    width: 30%;
    height: 70%;
    overflow: visible;
    
    @media screen and (${BreakPoints.tablet}) {
       display:none;
     }`;


export const HeaderNavigation=styled.div`
    display:none;

    @media screen and (${BreakPoints.tablet}) {
        position:absolute;
        display:flex;
        justify-content:space-between;
        width:100%;
        height:15%;
      }`;

export const PromoCode=styled.div`  
    display:none;

@media screen and (${BreakPoints.tablet}) {
    display:flex;
    margin-right:5%;
    margin-left:5%;
    justify-content:center;
    align-items:center;
    margin-top:2%;
    box-shadow:${Colors.BoxShadow};
    border-radius: 50%;
    width:20%;
    height:80%;
  }
    `;


export const CardsPromoContainer=styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(1,1fr);
    position:absolute;
    align-items:flex-end;
    bottom:30%;
    left:25%;
    width:30%;
    height:70%;`;

export const CardsPromo=styled.div`
    &:first-child{ margin: 0;};
    &:last-child {margin-left:40px;};
    display:flex;
    margin-left:20px;
    border-radius:30px;
    flex-wrap:wrap;
    width:70%;
    height:70%;
    background-color:${Colors.Pinky};`;


