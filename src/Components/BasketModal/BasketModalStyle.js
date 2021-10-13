import { motion } from "framer-motion";
import styled from "styled-components";

import { Colors,BreakPoints } from "../../Assets/Lib/generalStyles";

export const ModalContainerBasket=styled(motion.div)`
    display:flex;
    align-self:flex-end;
    justify-content:center;
    position:absolute;
    z-index:1;
    background-color:${Colors.Pinky};
    border-radius:0 0 30px 30px;
    width:100%;
    height:40%;`

export const BasketCardsContainer=styled.div`
    display:grid;
    justify-items: center;
    align-items:center;
    grid-template-rows: repeat(1,1fr);
    grid-template-columns: repeat(3,1fr);
    width:100%;
    height:65%;
    
    @media screen and (${BreakPoints.desktopLarge}) {
        grid-template-rows: repeat(1,1fr);
        grid-template-columns: repeat(7,1fr);
     }`;