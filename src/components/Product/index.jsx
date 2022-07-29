import { Li } from "./style";

const Product = ({ productId, name, category, price, img, handleClick }) => {
  return (
    <Li>
      <figure>
        <img src={img} alt={name} />
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{category}</p>
        <span>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
        <button onClick={() => handleClick(productId)}>Adicionar</button>
      </div>
    </Li>
  );
};
export default Product;
