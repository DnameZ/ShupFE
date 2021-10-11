import styled  from "styled-components";
import { Colors } from "../../Assets/Lib/generalStyles";

import { BreakPoints } from "../../Assets/Lib/generalStyles";

export const CardContainer=styled.div`
    display:flex;
    align-items:flex-start;
    justify-content:center;
    width:80%;
    overflow: visible;
    height:95%;

    @media screen and (${BreakPoints.tablet}) {
        align-items:flex-start;
        width:100%;
        height:100%;
     }
    `;

export const ItemCard=styled.div`
    display:flex;
    position:absolute;
    width:60%;
    height:35%;
    opacity: 0.67;
    border-radius: 10px;
    background-color:${Colors.Pinky};
    box-shadow:${Colors.ItemCardShadow};

    @media screen and (${BreakPoints.tablet}) {
        width:30%;
        height:25%; 
     }
    `;

export const BuyButton=styled.button`
    position:absolute;
    font-size:25px;
    font-weight:bold;
    border:none;
    outline:none;
    border-radius:10px;
    align-self:flex-end;
    color:${Colors.White};
    width:65%;
    height:9%;
    background-color:${Colors.Pinky};
    &:hover
    {
        transition: all 0.5s ease;
        transform:scale(1.1);
        background-color:${Colors.Hovered};
    }
    &:active
    {
        transition: all 0.1s ease;
        transform:scale(0.7);
        background-color:${Colors.Pressed};
    }
    
    @media screen and (${BreakPoints.tablet}) {
        align-self:flex-end;
        width:30%;
        height:7%; 
     }`;