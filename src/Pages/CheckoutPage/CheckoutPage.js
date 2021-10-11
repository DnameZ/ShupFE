import React from 'react'

import { Checkout } from './CheckoutPageStyle'

import { CheckoutCard } from '../../Components/CheckoutCard/CheckoutCard'

import { Images } from '../../Assets/Lib/generalStyles'




const CheckoutPage = () => {
    return (
        <Checkout>
            <CheckoutCard>
               <CheckoutCard.InputInformationContainer>
                   <CheckoutCard.InputInformation placeholder={"E-mail"}/>
                   <CheckoutCard.InputInformation placeholder={"Adress"}/>
               </CheckoutCard.InputInformationContainer>

             <CheckoutCard.CreditCardContianer>

                 <CheckoutCard.CreditCardFront>
                    <CheckoutCard.CreditCardInput placeholder="Holder of card"/>
                    <CheckoutCard.CreditCardInput placeholder="Number of card"/>
                 </CheckoutCard.CreditCardFront>

                 <CheckoutCard.CreditCardBack>
                     <CheckoutCard.Chip>
                     </CheckoutCard.Chip>

                     <CheckoutCard.CreditCardInputCvc placeholder="CVC"/>
                 </CheckoutCard.CreditCardBack>

             </CheckoutCard.CreditCardContianer>

             <CheckoutCard.BuyButton>Exit</CheckoutCard.BuyButton>

            </CheckoutCard>

            <CheckoutCard.BuyButton>Kupi</CheckoutCard.BuyButton>


        </Checkout>
    )
}

export default CheckoutPage
