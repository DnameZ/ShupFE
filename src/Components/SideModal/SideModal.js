import classNames from 'classnames'
import React from 'react'

import { SideModalCont,
         PromoCode,
         PromoCodeText,
         Basket,
         BasketImage,
         PromoCodeContainer,
         PromoCodeCard} from './SideModalStyle'

import { XButton } from '../../Assets/Lib/generalStyles'


export function SideModal({classes,children,...restProps}){
    return(
        <SideModalCont className={classNames("SideModal",classes)} {...restProps}>
            {children}
        </SideModalCont>
    )
}

SideModal.PromoCode= function PromosCode({classes,children,...restProps}){
    return(
        <PromoCode className={classNames("PromoCode",classes)} {...restProps}>{children}</PromoCode>
    )
}

SideModal.PromoCodeText= function PromosCodeText({classes,children,...restProps}){
    return(
        <PromoCodeText className={classNames("PromoCodeText",classes)} {...restProps}>{children}</PromoCodeText>
    )
}

SideModal.Basket= function Baskets({classes,children,...restProps}){
    return(
        <Basket className={classNames("Basket",classes)} {...restProps}>{children}</Basket>
    )
}

SideModal.BasketImage= function BasketImages({src,...restProps}){
    return(
        <BasketImage src={src} {...restProps}/>
    )
}


SideModal.PromoCodeContainer= function PromoCodeContainers({classes,children,...restProps}){
    return(
        <PromoCodeContainer className={classNames("PromoCodeContainer",classes)} {...restProps}>{children}</PromoCodeContainer>
    )
}

SideModal.PromoCodeCard= function PromoCodeCards({classes,children,...restProps}){
    return(
        <PromoCodeCard className={classNames("PromoCodeCard",classes)} {...restProps}>{children}</PromoCodeCard>
    )
}

SideModal.XButton= function XButtons({src,...restProps}){
    return(
        <XButton src={src} {...restProps}/>
    )
}



