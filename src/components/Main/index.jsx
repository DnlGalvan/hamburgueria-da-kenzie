import { MainPage, Span } from './style'
import Cart from "../Cart";
import ProductsList from "../ProductsList";

const Main = ({  products,  filteredProducts, input, currentSale,  setCurrentSale,  handleClick, totalCart }) => {
  return (
    <MainPage>
      {filteredProducts.length > 0 ? (
        <div>
          <h1>Resultados para: <Span>{input}</Span></h1>
          <ProductsList products={filteredProducts} handleClick={handleClick} />
        </div>
      ) : (
        <ProductsList products={products} handleClick={handleClick} />
      )}

      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} totalCart={totalCart}/>
    </MainPage>
  );
};
export default Main;