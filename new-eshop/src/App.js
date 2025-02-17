import "./App.css";
import { Header } from "./common/header/Header";
import { BrowserRouter as Router, /*Swi1tch,*/ Route, Routes } from "react-router-dom";
import { Pages } from "./pages/Pages";
import { Data } from "./components/Data";
import { /*useDebugValue,*/ useState } from "react";
import { Card } from "./common/card/Card";
import Sdata from "./components/shop/Sdata";
import { Footer } from "./common/footer/Footer";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cardItem, setCardItem] = useState([]);

  const addToCard = (product) => {
    const productExit = cardItem.find((item) => item.id === product.id);
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

  const decreaseQty = (product) => {
    const productExit = cardItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCardItem(cardItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cardItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cardItem={cardItem} />
        <Routes>
          <Route
            path="/"
            element={<Pages productItems={productItems} addToCard={addToCard} shopItems={shopItems} />}
          />
          <Route
            path="/card"
            element={<Card cardItem={cardItem} addToCard={addToCard} decreaseQty={decreaseQty} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

// // work:
// <>
//   <Router>
//     <Header cardItem={cardItem} />
//     <Routes>
//       <Route path="/" element={<Pages />} />
//     </Routes>
//     <Footer />
//   </Router>
// </>
