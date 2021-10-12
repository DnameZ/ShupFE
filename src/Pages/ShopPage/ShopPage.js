import React,{useState} from 'react'
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

import { BasketModal } from '../../Components/BasketModal/BasketModal'

import { ItemInBasket,BuyButton,FinalPrice,XButton } from '../BasketPage/BasketPageStyle'

const ShopPage = () => {

    const [isOpen,SetIsOpen]=useState(false);

    const ToggleModal=()=>
    {
        SetIsOpen((isOpen)=>!isOpen);
    }

    const PageTranstion=({
        ins:{x:0,transition:{type:"spring",delay:0,stiffness: 147,damping: 31,mass: 1}},
        outs:{x:"100vw"}
    })

    
    return (
       <Shop variants={PageTranstion} initial={PageTranstion.outs} animate={PageTranstion.ins} exit={PageTranstion.outs}>

           {isOpen ? <PromoModal/> : null}
           
           <HeaderNavigation>
                <PromoCode onClick={()=>ToggleModal()}>
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


const PromoModal = () => {
    return (
        <>
            <ModalBackGround/>
            <Modal>
                    
            </Modal>
        </>
    )
}





export default ShopPage
