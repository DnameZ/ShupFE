import React from 'react'
import classNames from "classnames";
import { CardContainer,BuyButton,ItemCard } from './ItemCardStyle';


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

CardCont.BuyButton= function BuyiButton({children,classes,...restProps}){
    return(
        <BuyButton className={classNames("ButtonBuy",classes)} {...restProps}>{children}</BuyButton>
    )
}
