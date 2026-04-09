import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  // estado do carrinho - comecei vazio
  const [cart, setCart] = useState([]);

  // função que adiciona produto no carrinho
  // se já tem o mesmo produto, só aumenta a quantidade
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Products onAddToCart={addToCart} />
      <Cart cart={cart} />
    </>
  );
}

export default App;