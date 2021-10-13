import React from 'react'
import classNames from "classnames";
import { CardContainer,BuyButton,ItemCard,Price,PriceNummber,NameOfItem } from './ItemCardStyle';


export function CardCont({classes,children,...restProps}){
    return(
        <CardContainer className={classNames("CardCont",classes)} {...restProps}>
            {children}
        </CardContainer>
    )
}

CardCont.ItemCard= function ItemCardy({classes,children,...restProps}){
    return(
        <ItemCard className={classNames("ItemCard"),classes}>{children}</ItemCard>
    )
}

CardCont.BuyButton= function BuyiButton({children,func,classes,...restProps}){
    return(
        <BuyButton onClick={()=>func()} className={classNames("ButtonBuy",classes)} {...restProps}>{children}</BuyButton>
    )
}

CardCont.Price= function Prices({src,...restProps}){
    return(
        <Price src={src} {...restProps}/>
    )
}

CardCont.PriceNummber= function PriceNum({children,classes,...restProps}){
    return(
        <PriceNummber className={classNames("PriceNum",classes)} {...restProps}>{children}</PriceNummber>
    )
}

CardCont.NameOfItem= function Names({children,classes,...restProps}){
    return(
        <NameOfItem className={classNames("Names",classes)} {...restProps}>{children}</NameOfItem>
    )
}


