import Global from "./styles/global.js";
import { useEffect, useState } from "react";
import Header from "./components/Header/index.jsx";
import Main from "./components/Main/index.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then(response => response.json())
    .then(response => setProducts(response))
    .catch(err => console.log(err))
  }, [])

  function showProducts(input) {
    setFilteredProducts(products.filter(product => product.category.toLowerCase().includes(input.toLowerCase())))
  }

  function handleClick(productId) {
    const findedProduct = products.find(product => product.id === productId)
    setCurrentSale([...currentSale, findedProduct])
  }

  const totalCart = currentSale.reduce((total, valorAtual) => total + valorAtual.price, 0);

  
  return (
    <>
      <Global />
      <Header showProducts={showProducts} input={input} setInput={setInput}/>
      <Main products={products} filteredProducts={filteredProducts} input={input} currentSale={currentSale} setCurrentSale={setCurrentSale} handleClick={handleClick} totalCart={totalCart}/> 
    </>
  );
}

export default App;