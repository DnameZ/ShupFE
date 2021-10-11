import styled from "styled-components";
import { Colors } from "../../Assets/Lib/generalStyles";


export const CheckoutCardModal=styled.div`
    display:flex;
    justify-content:center;
    margin-top:5%;
    border-radius: 20px;
    width:90%;
    height:90%;
    background-color:${Colors.Pinky};`;

export const InputInformationContainer=styled.div`
    display:grid;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(1,1fr);
    justify-items:center;
    width:100%;
    height:40%;`;

export const InputInformation=styled.input`
    align-self:center;
    text-align:center;
    outline:none;
    border:none;
    font-size:16px;
    border-radius:8px;
    height:50%;
    width:90%;`;

export const CreditCardContianer=styled.div`
    position:absolute;
    display:flex;
    align-self:flex-end;
    justify-content:center;
    width:90%;
    height:50%;`

export const CreditCardFront=styled.div`
    display:flex;
    justify-content:flex-start;
    flex-wrap:wrap;
    z-index:1;
    align-self:flex-start;
    border-radius:20px;
    background-color:${Colors.CreditCardFront};
    position:absolute;
    left:5%;
    width:80%;
    height:50%;`

export const CreditCardBack=styled.div`
    display:flex;
    justify-content:flex-end;
    z-index:0;
    align-self:flex-start;
    border-radius:20px;
    background-color:${Colors.CreditCardFront};
    position:absolute;
    right:5%;
    top:120px;
    width:80%;
    height:50%;`

export const Chip=styled.div`
    display:flex;
    align-self:flex-start;
    position:absolute;
    top:20px;
    z-index:0;
    background-color:#424242;
    width:100%;
    height:20%;`;

export const CreditCardInput=styled.input`
    margin-top:10%;
    margin-left:10%;
    text-align:center;
    border-radius:8px;
    outline:none;
    border:none;
    width:50%;
    height:20%;`;

export const CreditCardInputCvc=styled.input`
    margin-bottom:10%;
    margin-right:5%;
    align-self:flex-end;
    text-align:center;
    border-radius:8px;
    outline:none;
    border:none;
    width:30%;
    height:20%;`;

export const BuyButton= styled.button`
    position:absolute;
    box-shadow:${Colors.BoxShadow};
    font-size:25px;
    font-weight:bold;
    border:none;
    outline:none;
    border-radius:10px 10px 0 0;
    align-self:flex-end;
    color:${Colors.White};
    width:65%;
    height:6%;
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
    `;



