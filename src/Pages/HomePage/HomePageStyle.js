import styled  from "styled-components";
import { Colors,BreakPoints } from "../../Assets/Lib/generalStyles";
import { motion } from "framer-motion";


export const Homepage=styled(motion.div)`
    display:flex;
    background-color:${Colors.White};
    justify-content:center;
    align-items:flex-end;
    width:100vw;
    height:100vh;
    `;

export const PageButton=styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    box-shadow:${Colors.BoxShadow};
    bottom:50px;
    border-radius: 50%;
    width:60%;
    height:30%;

    &:hover
    {
        transition: all 0.5s ease;
        width: 70%;
        height: 35%;
    }

    @media screen and (${BreakPoints.mobileLarge}) {
        width:70%;
        height:100%;
     }

     @media screen and (${BreakPoints.tablet}) {
        width:40%;
        height:30%;

        &:hover
        {
            transition: all 0.5s ease;
            width: 55%;
            height: 40%;
        }
     }

     @media screen and (${BreakPoints.desktopLarge}) {
        width: 20%;
        height: 35%;

        &:hover
        {
            transition: all 0.5s ease;
            width: 25%;
            height: 40%;
        }
     }
   `;

export const PageButtonImage=styled.img`
    overflow: visible;
    width: 90%;
    height: 90%;
    &:hover
    {
        transition: all 0.5s ease;
        width: 100%;
        height: 100%;
    }`;


