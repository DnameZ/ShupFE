import React from 'react'
import { Images } from '../../Assets/Lib/generalStyles'

import { Shop,
         CardsContainer,
         ToolSection,
         InputSearch,
         HambMenu,
         HeaderNavigation,
         PromoCode,
         CardsPromoContainer,
         CardsPromo } from './ShopPageStyle'

import { PromoCodeText,BasketImage, PromoCodeContainer } from '../../Components/SideModal/SideModalStyle'

import { CardCont } from '../../Components/ItemCard/ItemCard'

import { ModalBackGround } from '../../Assets/Lib/generalStyles'

import { SideModal } from '../../Components/SideModal/SideModal'

import { Modal } from '../../Components/Modal/Modal'

const ShopPage = () => {
    return (
       <Shop>
           
           <HeaderNavigation>
                <PromoCode>
                    <PromoCodeText>Promo code</PromoCodeText>

                    <CardsPromoContainer>
                        <CardsPromo></CardsPromo>

                        <CardsPromo></CardsPromo>

                        <CardsPromo></CardsPromo>
                    </CardsPromoContainer>
                </PromoCode>

                <PromoCode>
                    <BasketImage src={Images.Basket}/>
                </PromoCode>
           </HeaderNavigation>

           <ToolSection>     
                <InputSearch  type="text" placeholder="Unesite traženi pojam"/>
                <HambMenu src={Images.HambMenu}/>
            </ToolSection>

           <CardsContainer>
                <CardCont>
                    <CardCont.ItemCard>

                    </CardCont.ItemCard>
                    <CardCont.BuyButton>Kupi</CardCont.BuyButton>
                </CardCont>

                <CardCont>
                    <CardCont.ItemCard>
                        
                    </CardCont.ItemCard>
                    <CardCont.BuyButton>Kupi</CardCont.BuyButton>
                </CardCont>

                
           </CardsContainer>
       </Shop>
    )
}

export default ShopPage
