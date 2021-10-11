import classNames from 'classnames'
import React from 'react'
import { CheckoutCardModal,
         InputInformation,
         InputInformationContainer,
         CreditCardFront,
         CreditCardContianer,
         CreditCardBack,
         Chip,
         CreditCardInput,
         CreditCardInputCvc,
         BuyButton } from './CheckoutCardStyle'

export function CheckoutCard({classes,children,...restProps})
{
    return(
        <CheckoutCardModal className={classNames("CheckoutCard",classes)} {...restProps}>{children}</CheckoutCardModal>
    )
}

CheckoutCard.InputInformationContainer = function InputInformationContainers({classes,children,...restProps})
{
    return (
        <InputInformationContainer  className={classNames("InputInformationContainer",classes)} {...restProps}>
            {children}
        </InputInformationContainer>
    )
} 

CheckoutCard.InputInformation = function InputInformations({classes,placeholder,...restProps})
{
    return (
        <InputInformation placeholder={placeholder} className={classNames("InputInformation",classes)} {...restProps}/>
    )
}

CheckoutCard.CreditCardContianer = function CreditCardContianers({classes,placeholder,...restProps})
{
    return (
        <CreditCardContianer placeholder={placeholder} className={classNames("CreditCardContianer",classes)} {...restProps}/>
    )
} 

CheckoutCard.CreditCardFront = function CreditCardFronts({classes,children,...restProps})
{
    return (
        <CreditCardFront className={classNames("CreditCardFront",classes)} {...restProps}>{children}</CreditCardFront>
    )
} 

CheckoutCard.CreditCardBack = function CreditCardBacks({classes,children,...restProps})
{
    return (
        <CreditCardBack className={classNames("CreditCardBack",classes)} {...restProps}>{children}</CreditCardBack>
    )
} 

CheckoutCard.Chip = function Chips({classes,children,...restProps})
{
    return (
        <Chip className={classNames("Chip",classes)} {...restProps}>{children}</Chip>
    )
}

CheckoutCard.CreditCardInput = function CreditCardInputs({classes,placeholder,...restProps})
{
    return (
        <CreditCardInput placeholder={placeholder} className={classNames("CreditCardInput",classes)} {...restProps}/>
    )
}

CheckoutCard.CreditCardInputCvc = function CreditCardInputCvcs({classes,placeholder,...restProps})
{
    return (
        <CreditCardInputCvc placeholder={placeholder} className={classNames("CreditCardInputCvc",classes)} {...restProps}/>
    )
}


CheckoutCard.BuyButton = function BuyButtons({classes,children,...restProps})
{
    return (
        <BuyButton className={classNames("BuyButton",classes)} {...restProps}>{children}</BuyButton>
    )
} 


