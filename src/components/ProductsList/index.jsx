import Product from "../Product";
import { Ul } from "./style";

const ProductsList = ({ products, handleClick }) => {
  return (
    <Ul>
      {products.map(({ id, name, category, price, img }) => (
        <Product
          key={id}
          productId={id}
          name={name}
          category={category}
          price={price}
          img={img}
          handleClick={handleClick}
        />
      ))}
    </Ul>
  );
};
export default ProductsList;
