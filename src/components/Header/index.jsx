import { HeaderPage, Container } from "./style.js";

const Header = ({ showProducts, input, setInput }) => {

  return (
    <HeaderPage>
      <Container>
        <img
          className="Logo"
          src="./logo-burguer-kenzie.png"
          alt="Logo Burguer Kenzie"
        />
        <div>
          <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Digitar Pesquisa"/>
          <button onClick={() => showProducts(input)}>Pesquisar</button>
        </div>
      </Container>
    </HeaderPage>
  );
};
export default Header;