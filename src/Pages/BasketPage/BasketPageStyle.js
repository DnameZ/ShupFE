import styled from "styled-components";
import { Colors } from "../../Assets/Lib/generalStyles";
import { BreakPoints } from "../../Assets/Lib/generalStyles";

export const BasketPage=styled.div`
    display:flex;
    justify-content:center;
    background-color:${Colors.Pinky};
    width: 100vw;
    height: 100vh;`;

export const FinalPrice=styled.h2`
    color:${Colors.White};
    font-size:24px;
    font-weight:bold;
    text-align:center;
    
    @media screen and (${BreakPoints.tablet}) {
       font-size:30px;
       align-self:flex-end;
       position:absolute;
       bottom:15%;
     }
     @media screen and (${BreakPoints.desktopLarge}) {
        font-size:30px;
        align-self:flex-start;
        position:absolute;
        bottom:15%;
     }`;

export const BasketContainer=styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(1,1fr);
    align-self:center;
    position:absolute;
    justify-items:center;
    align-items:flex-end;
    width:80%;
    height:80%;`;

export const ItemInBasket=styled.div`
    display:flex;
    justify-content:center;
    border-radius:10px;
    box-shadow:${Colors.ItemCardShadow};
    background-color:${Colors.White};
    width:50%;
    height:90%;

    @media screen and (${BreakPoints.tablet}) {
        width:65%;
        height:70%;
     }`;

export const BuyButton=styled.button`
    position:absolute;
    border:none;
    outline:none;
    align-self:flex-end;
    font-size:16px;
    font-weight:bold;
    border-radius:6px 6px 0 0;
    color:black;
    background-color:${Colors.White};
    width:40%;
    height:8%;

    @media screen and (${BreakPoints.tablet}) {
        width:60%;
        height:15%;
        font-size:22px;
     }

     @media screen and (${BreakPoints.desktopLarge}) {
        width:30%;
        font-size:23px;
     }
    
    &:hover{
        box-shadow:${Colors.BoxShadow};
        color:${Colors.White};
        transition: all 0.3s ease;
        transform:scale(1.2);
        background-color:${Colors.Pinky};
    }
    &:active
    {
        box-shadow:${Colors.BoxShadow};
        color:${Colors.White};
        transition: all 0.3s ease;
        transform:scale(0.7);
        background-color:${Colors.Pressed};
    }
    
    `;

    export const XButton=styled.img`
    cursor:pointer;
    align-self:flex-start;
    width:30%;
    height:20%;`;

    export const NameOfItem=styled.h3`
    position:absolute;
    align-self:center;
    color:${Colors.Pinky};
    font-size:15px;`