import styled from "styled-components";
import { Colors } from "../../Assets/Lib/generalStyles";


export const ModalContainer=styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    z-index:1;
    background-color:${Colors.Pinky};
    border-radius:30px 30px 0 0;
    width:100%;
    height:40%;`;

export const ModalInput=styled.input`
    position:absolute;
    top:20%;
    border:none;
    outline:none;
    align-self:center;
    border-radius:20px;
    text-align:center;
    width:60%;
    height:30%;`;

export const ButtonModal=styled.button`
    position:absolute;
    bottom:10%;
    border-radius:8px;
    align-self:flex-end;
    width:90%;
    height:20%;
    outline:none;
    border:none;
    font-size:25px;
    background-color:${Colors.White};
    
    &:hover
    {
        transition: all 0.5s ease;
        box-shadow:${Colors.BoxShadow};
        transform:scale(1.09);
        color:${Colors.White};
        background-color:${Colors.Pinky};
    }
    &:active
    {
        transition: all 0.5s ease;
        transform:scale(0.8);
        color:${Colors.White};
        background-color:${Colors.Pressed};
    }`;