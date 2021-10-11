import classNames from 'classnames'
import React from 'react'

import { ModalContainerBasket,BasketCardsContainer } from './BasketModalStyle'

export function BasketModal({classes,children,...restProps})
{
    return(
        <ModalContainerBasket className={classNames("BasketModal",classes)} {...restProps}>{children}</ModalContainerBasket>
    )
}

BasketModal.BasketCardsContainer=function BasketCardsContainers({classes,children,...restProps}){
    return(
        <BasketCardsContainer className={"BasketCardCont",classes} {...restProps}>{children}</BasketCardsContainer>
    )
}