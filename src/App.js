import React from 'react';
import Header from './components/Header/Header';
import PlayersCards from './components/PlayersCards/PlayersCards';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (player) => {
      const newCart = [...cart , player];
      setCart(newCart)
  }

  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="row">
            <PlayersCards addToCartHandler={addToCartHandler} />
            <Sidebar cart={cart} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;