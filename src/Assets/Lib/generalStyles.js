import DecorationPhoto from "../Images/Open.png";
import BasketPhoto from "../Images/ShopingBasket.png";
import HambMenuPhoto from "../Images/hambmenu.png";
import XbuttonPhoto from "../Images/xPinkButton.png";

import styled from "styled-components";



export const Images={
    XButton:`${XbuttonPhoto}`,
    HambMenu:`${HambMenuPhoto}`,
    Basket:`${BasketPhoto}`,
    Decoration:`${DecorationPhoto}`
}


export const Colors={
    CreditCardFront:"#E0E0E0",
    Pressed:"#FF6BB3",
    Hovered:"#FF1486",
    ItemCardShadow:"-1px 0px 0px 6px rgba(0, 0, 0, 0.25);",
    BoxShadow:"-1px 0px 6px 3px rgba(0, 0, 0, 0.25)",
    White:"#ffff",
    Pinky:"#FF248E"
};

export const BreakPoints = {
    mobileLarge: 'min-width: 576px',
    tablet: 'min-width: 768px',
    desktop: 'min-width: 1024px',
    desktopLarge: 'min-width: 1300px',
  };


  export const ModalBackGround=styled.div`
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow: auto;`;


  export const XButton=styled.img`
    margin-right:2%;
    align-self:center;
    width:20%;
    height:70%;`;

  export const SomeTitle=styled.h3`
    position:absolute;
    font-size: 16px;
    font-weight: 700;`;  