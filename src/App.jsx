import { useState } from 'react';
import './App.css';
import Btn from './components/btn/btn_add_cart/btn_add_cart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      app
      <Btn />
    </>
  );
}

export default App;
