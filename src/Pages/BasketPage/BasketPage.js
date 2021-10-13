
import React from 'react'

import { BasketPage as BasketPageComp,
         FinalPrice,
         BasketContainer,
         ItemInBasket,
         BuyButton,
         XButton,
         NameOfItem  } from './BasketPageStyle'

import { Images  } from '../../Assets/Lib/generalStyles'

const BasketPage = () => {
    return (
        <BasketPageComp>
            <FinalPrice>Ukupna cijena</FinalPrice>

            <BasketContainer>
                <ItemInBasket>
                    <XButton src={Images.XButton}/>
                </ItemInBasket>

                <ItemInBasket>
                    <XButton src={Images.XButton}/>
                </ItemInBasket>
                
                <ItemInBasket>
                    <XButton src={Images.XButton}/>
                </ItemInBasket>

            </BasketContainer>

            <BuyButton>Kupi</BuyButton>
        </BasketPageComp>
    )
}

export default BasketPage
