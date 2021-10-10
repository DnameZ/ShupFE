import React from 'react'
import { Homepage as HomePagy,PageButton,PageButtonImage } from './HomePageStyle'
import { HeaderComp } from '../../Components/Header/Header';
import { Images } from '../../Assets/Lib/generalStyles'

const HomePage = () => {
    return (
        <HomePagy>
            <HeaderComp>
                <HeaderComp.DecorationOpen src={Images.Decoration}/>
                <HeaderComp.Title>Shup</HeaderComp.Title>
                <HeaderComp.DecorationOpen src={Images.Decoration}/>
            </HeaderComp>

            <PageButton>
                <PageButtonImage src={Images.Basket}/>
            </PageButton>
        </HomePagy>
    )
}

export default HomePage;
