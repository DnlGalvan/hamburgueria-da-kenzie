import { Aside, CartTotal, Container, DivInfo, Li, Ul } from "./style";

const Cart = ({ currentSale, setCurrentSale, totalCart }) => {
  function removeProduct(index) {
    setCurrentSale(currentSale.filter(product => product !== index))
  }
  return (
    <Aside>
      <h3 className="HeaderCart">Carrinho de compras</h3>
      {currentSale.length === 0 ? (
        <img src="./empty-cart.png" alt="Carrinho vazio" />
      ) : (
        <Container>
          <Ul>
            {currentSale.map((product, index) => (
              <Li key={index}>
                <figure>
                  <img src={product.img} alt={product.name} />
                </figure>
                <DivInfo>
                  <h4>{product.name}</h4>
                  <p>{product.category}</p>
                </DivInfo>
                <button onClick={() => removeProduct(product, index)}>Remover</button>
              </Li>
            ))}
          </Ul>
          <CartTotal>
            <div>
              <h4>Total</h4>
              <span>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalCart)}
              </span>
            </div>
            <button onClick={() => setCurrentSale([])}>Remover todos</button>
          </CartTotal>
        </Container>
      )}
    </Aside>
  );
};
export default Cart;