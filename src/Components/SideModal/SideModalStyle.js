import styled from "styled-components";
import { Colors,BreakPoints } from "../../Assets/Lib/generalStyles";






export const SideModalCont=styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    left:40%;
    z-index:1;
    overflow: hidden;
    border-radius:30px 0 0 30px;
    width:60%;
    height:100%;
    background-color:${Colors.White};`;

export const PromoCode=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:10%;
    box-shadow:${Colors.BoxShadow};
    border-radius: 50%;
    width:70%;
    height:20%;`;

export const PromoCodeText=styled.h3`
    color:${Colors.Pinky};
    font-weight:bold;
    text-align:center;
    font-size:16px;
    
    @media screen and (${BreakPoints.tablet}) {
        font-size:20px;
     }`;


export const Basket=styled.div`
    display:flex;
    position:absolute;
    align-self:flex-end;
    justify-content:center;
    align-items:center;
    margin-bottom:10%;
    box-shadow:${Colors.BoxShadow};
    border-radius: 50%;
    width:70%;
    height:20%;`;

export const BasketImage=styled.img`
    overflow: visible;
    width: 70%;
    height: 70%;
    @media screen and (${BreakPoints.tablet}) {
        width: 80%;
        height: 80%;
     }`;

export const PromoCodeContainer=styled.div`
    display:grid;
    justify-items:center;
    position:absolute;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(1,1fr);
    align-self:center;
    width:100%;
    height:50%;`;

export const PromoCodeCard=styled.div`
    display:flex;
    justify-content:flex-end;
    align-self:center;
    border-radius:30px;
    width:80%;
    height:30%;
    background-color:${Colors.Pinky};`;

