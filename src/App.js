import './App.scss';
import ShopPage from './Pages/ShopPage/ShopPage';
import HomePage from "./Pages/HomePage/HomePage";
import BasketPage from './Pages/BasketPage/BasketPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

import {Route,Switch, useLocation} from "react-router";
 


function App() {

  const location=useLocation();

  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
          <Route exact path={"/homepage-shup"} component={HomePage}/>
          <Route path={"/shop"} component={ShopPage}/>
          <Route path={"/basket-page"} component={BasketPage}/>
          <Route path={"/checkout-page"} component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

export default App;
