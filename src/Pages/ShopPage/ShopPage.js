import React,{useState,useContext,useEffect} from 'react'
import { Images } from '../../Assets/Lib/generalStyles'
import { Context } from '../../AuthContext/Context'

import { Shop,
         CardsContainer,
         ToolSection,
         InputSearch,
         HambMenu,
         HeaderNavigation,
         PromoCode,
         CardsPromoContainer,
         CardsPromo,
         CardCode } from './ShopPageStyle'

import { PromoCodeText,BasketImage, PromoCodeContainer } from '../../Components/SideModal/SideModalStyle'

import { CardCont } from '../../Components/ItemCard/ItemCard' // za shop kartice

import { ModalBackGround } from '../../Assets/Lib/generalStyles'

import { SideModal } from '../../Components/SideModal/SideModal'

import { Modal } from '../../Components/Modal/Modal'

import { BasketModal } from '../../Components/BasketModal/BasketModal'

import { ItemInBasket,BuyButton,FinalPrice,XButton,NameOfItem } from '../BasketPage/BasketPageStyle'

const ShopPage = () => {

    const {Items}=useContext(Context);
    const {BasketItems}=useContext(Context);
    const {FinalPricey,SetFinalPricey}=useContext(Context);
    const {PromosCodes,SetPromosCodes}=useContext(Context);
    const [isOpen,SetIsOpen]=useState(false);
    const [Modal,SetModal]=useState("");

    const Basket="Basket";
    const Promo="Promo";

    const ToggleModal= (modal)=>
    {
        SetIsOpen((isOpen)=>!isOpen);
        SetModal(modal);
    }

    const SwitchModal=(modal)=>
    {
        if(isOpen)
        {
            switch (modal) {
                case Promo:
                    return <PromoModal/>
                break;
            
                case Basket:
                    return <ShopModal/>
                break;
                default:
                    break;
            }
        }
    }

    const GoToBasket=(id,ime,cijena)=>
    {
        const NewItem={Id:id,Ime:ime,Cijena:cijena};

        let finalAmount = Math.round(NewItem.Cijena)+FinalPricey;

        SetFinalPricey(finalAmount);

        BasketItems.push(NewItem);
    }


    const PageTranstion=({
        ins:{x:0,transition:{type:"spring",delay:0,stiffness: 147,damping: 31,mass: 1}},
        outs:{x:"100vw"}
    })



    
    return (
       <Shop variants={PageTranstion} initial={PageTranstion.outs} animate={PageTranstion.ins} exit={PageTranstion.outs}>
           {SwitchModal(Modal)}
           <HeaderNavigation>
                <PromoCode onClick={()=>ToggleModal(Promo)}>
                    <PromoCodeText>Promo code</PromoCodeText>

                    <CardsPromoContainer>
                        {PromosCodes.map((code)=>(
                            <CardsPromo>
                                <CardCode>{code}</CardCode>
                            </CardsPromo>
                        ))}
                    </CardsPromoContainer>
                </PromoCode>

                <PromoCode onClick={()=>ToggleModal(Basket)}>
                    <BasketImage src={Images.Basket}/>
                </PromoCode>
           </HeaderNavigation>

           <ToolSection>     
                <InputSearch  type="text" placeholder="Unesite traženi pojam"/>
                <HambMenu src={Images.HambMenu}/>
            </ToolSection>

           <CardsContainer>
                {Items.map((item,index)=>(
                    <CardCont key={index}>
                        <CardCont.ItemCard>
                            <CardCont.Price src={Images.Price}/>
                            <CardCont.PriceNummber>{item.item_price}</CardCont.PriceNummber>
                            <CardCont.NameOfItem>{item.item_name}</CardCont.NameOfItem>
                        </CardCont.ItemCard>
                        <CardCont.BuyButton func={()=>GoToBasket(item.item_id,item.item_name,item.item_price)}>Kupi</CardCont.BuyButton>
                    </CardCont>
                )
                )}
           </CardsContainer>

       </Shop>
    )
}


const PromoModal = () => {
    const [Value,SetValue]=useState("");
    const {PromosCodes}=useContext(Context);

    const InsertPromo=(text)=>
    {
        const filterData=()=>
        {
          let newCode={Code:text};
            if(PromosCodes.includes(newCode.Code))
            {
                alert("Code is already activated");
            }
            else
            {
                PromosCodes.push(newCode.Code);
            }
        }

       switch (text) {
           case "20%OFF":
            filterData();
           break;

           case "5%OFF":
            filterData();
           break;

           case "20EUROFF":
            filterData();
           break;
       
           default:
            alert("Wrong code");
           break;
       }
    }

    return (
        <>
            <ModalBackGround/>
            <Modal>
                <Modal.ModalInput  func={event=>SetValue(event.target.value)} placeholder={"Unesi svoj promo kod"}/>
                <Modal.ButtonModal onClick={()=>InsertPromo(Value)}>Unesi</Modal.ButtonModal>
            </Modal>
        </>
    )
}

const ShopModal=()=>
{
    const {PromosCodes}=useContext(Context);
    const {SetBasketItems,BasketItems}=useContext(Context);
    const {SetFinalPricey,FinalPricey}=useContext(Context);

    const RemoveItemFromBasket=(id,priceOfItem)=>
    {
        let ItemsFromBasket=BasketItems.filter(item =>item.Id!==id);

        let finalAmount = FinalPricey-Math.round(priceOfItem);

        SetFinalPricey(finalAmount);

        SetBasketItems(ItemsFromBasket);        
    }

    const UpdatePrice=()=>
    {
        if(PromosCodes.includes("20%OFF"))
        {
            SetFinalPricey(FinalPricey+1);
        }
    }

    return(
        <>
            {UpdatePrice()}
            <ModalBackGround/>
            <BasketModal>
                <BasketModal.BasketCardsContainer>
                    {BasketItems.map((item,index)=>(
                        <ItemInBasket key={index}>               
                            <XButton onClick={()=>RemoveItemFromBasket(item.Id,item.Cijena)} src={Images.XButton}/>
                            <NameOfItem>{item.Ime}</NameOfItem>
                        </ItemInBasket>
                    ))}
                </BasketModal.BasketCardsContainer>

                <FinalPrice>{FinalPricey}</FinalPrice>

                <BuyButton>Kupi</BuyButton>
            </BasketModal>
        </>
    )
}





export default ShopPage
