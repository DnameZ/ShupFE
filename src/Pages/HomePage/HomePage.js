import React from 'react'
import { Homepage as HomePagy,PageButton,PageButtonImage } from './HomePageStyle'
import { HeaderComp } from '../../Components/Header/Header';
import { Images } from '../../Assets/Lib/generalStyles'

import { useHistory } from 'react-router';

const HomePage = () => {

    const history=useHistory();
    const shopPage="/shop"

    const PageTranstion=({
        ins:{x:0,transition:{type:"spring",delay:0,stiffness: 147,damping: 31,mass: 1}},
        outs:{x:"100vw"}
    })

    return (
        <HomePagy variants={PageTranstion} initial={PageTranstion.outs} animate={PageTranstion.ins} exit={PageTranstion.outs}>
            <HeaderComp>
                <HeaderComp.DecorationOpen src={Images.Decoration}/>
                <HeaderComp.Title>Shup</HeaderComp.Title>
                <HeaderComp.DecorationOpen src={Images.Decoration}/>
            </HeaderComp>

            <PageButton onClick={()=>history.push(shopPage)}>
                <PageButtonImage src={Images.Basket}/>
            </PageButton>
        </HomePagy>
    )
}

export default HomePage;
