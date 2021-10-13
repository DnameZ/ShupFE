import classNames from 'classnames'
import React from 'react'

import { ModalContainerBasket,BasketCardsContainer } from './BasketModalStyle'


const BasketModalTransiton=({
    ins:{y:0,transition:{type:"spring",delay:0,stiffness: 500,damping: 60,mass: 1}},
    outs:{y:"100vw"}
})

export function BasketModal({classes,children,...restProps})
{
    return(
        <ModalContainerBasket variants={BasketModalTransiton} initial={BasketModalTransiton.outs} animate={BasketModalTransiton.ins}
        exit={BasketModalTransiton.outs}
        className={classNames("BasketModal",classes)} {...restProps}>{children}</ModalContainerBasket>
    )
}

BasketModal.BasketCardsContainer=function BasketCardsContainers({classes,children,...restProps}){
    return(
        <BasketCardsContainer className={"BasketCardCont",classes} {...restProps}>{children}</BasketCardsContainer>
    )
}