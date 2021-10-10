import styled  from "styled-components";
import { Colors } from "../../Assets/Lib/generalStyles";

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
    height:100%;`;

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
    }`;

export const HambMenu=styled.img`
    align-self:center;
    width: 30%;
    height: 70%;
    overflow: visible;`;