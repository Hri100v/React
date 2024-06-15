import "./App.css";
import { Header } from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Pages } from "./pages/Pages";
import { Data } from "./components/Data";
import { /*useDebugValue,*/ useState } from "react";
import { Card } from "./common/card/Card";

function App() {
  const { productItems } = Data;
  const [cardItem, setCardItem] = useState([]);
  // useDebugValue("Hi");
  // useDebugValue([productItems, 8118]);
  
  const addToCard = (product) => {
    // console.log("-click-");
    // console.log(product);

    const productExit = cardItem.find((item) => item.id === product.id);
    // console.log("productExit", productExit);
    
    if (productExit) {
      setCardItem(
        cardItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cardItem, { ...product, qty: 1 }]);
    }
  };

  // console.log("addToCard");

  const decreaseQty = (product) => {
    const productExit = cardItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cardItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(cardItem.map((item) => item.id === product.id ? {...productExit, qty: productExit.qty - 1} : item));
    }
  }

  return (
    <>
      <Router>
        <Header cardItem={cardItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCard={addToCard} />
          </Route>
          <Route path="/card" exact>
            <Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
