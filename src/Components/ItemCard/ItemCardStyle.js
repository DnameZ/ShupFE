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

     @media screen and (${BreakPoints.desktopLarge}) {
        width:100%;
        height:100%;
     }
    `;

export const ItemCard=styled.div`
    display:flex;
    justify-content:flex-end;
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

     @media screen and (${BreakPoints.desktopLarge}) {
        width:14%;
        height:27%; 
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
     }

     @media screen and (${BreakPoints.desktopLarge}) {
        align-self:flex-end;
        width:15%;
        height:7%; 
     }
     `;

     export const Price=styled.img` 
        position:absolute;
        bottom:80%;
        left:80%;
        height:80px;

        @media screen and (${BreakPoints.tablet}) {
            bottom:70%;
            left:80%;
            height:100px;
         }

         @media screen and (${BreakPoints.desktop}) {
            bottom:70%;
            left:80%;
            height:130px;
         }
        
        @media screen and (${BreakPoints.desktopLarge}) {
            bottom:200px;
            left:190px;
            height:130px;
         }`;

    export const PriceNummber=styled.h3`
        position:absolute;
        left:91%;
        bottom:87%;
        z-index:1;
        font-size:80%;
        color:${Colors.White};

        @media screen and (${BreakPoints.tablet}) {
            font-size:18px;
            left:91%;
            bottom:78%;
          }

          @media screen and (${BreakPoints.desktop}) {
            font-size:25px;
            left:91%;
            bottom:78%;
          }

        @media screen and (${BreakPoints.desktopLarge}) {
           font-size:28px;
           left:215px;
           bottom:220px;
         }
        `;

    export const NameOfItem=styled.h2`
        position:absolute;
        right:15%;
        color:${Colors.White};
        font-size:30px;
        align-self:center;

        @media screen and (${BreakPoints.desktop}) {
            right:25%;
          }
        
        @media screen and (${BreakPoints.desktopLarge}) {
            right:20%;
          }`;
        
     