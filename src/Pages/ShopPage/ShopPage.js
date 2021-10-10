import React from 'react'
import { Images } from '../../Assets/Lib/generalStyles'

import { Shop,
         CardsContainer,
         ToolSection,
         InputSearch,
         HambMenu } from './ShopPageStyle'

import { CardCont } from '../../Components/ItemCard/ItemCard'

import { ModalBackGround } from '../../Assets/Lib/generalStyles'

import { SideModal } from '../../Components/SideModal/SideModal'

import { Modal } from '../../Components/Modal/Modal'

const ShopPage = () => {
    return (
       <Shop>

           <ModalBackGround/>
           <Modal>
               <Modal.ModalInput placeholder={"Unesite svoj kod ovdje"}/>

               <Modal.ButtonModal>Dodaj</Modal.ButtonModal>
           </Modal>

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
