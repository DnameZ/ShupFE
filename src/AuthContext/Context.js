import React,{createContext,useState} from 'react';


const Context=createContext();


const ContextProvider = ({children}) => {

    const [Items,SetItems]=useState([]);
    const [BasketItems,SetBasketItems]=useState([]);
    const [FinalPricey,SetFinalPricey]=useState(0);
    const [PromosCodes,SetPromosCodes]=useState([]);
    
    return ( 
        <Context.Provider
          value={{Items,SetItems,
                  BasketItems,
                  SetBasketItems,
                  FinalPricey,
                  SetFinalPricey,
                  PromosCodes,
                  SetPromosCodes}}
        >
            {children}
        </Context.Provider>
     );
}
 
export  {Context,ContextProvider};