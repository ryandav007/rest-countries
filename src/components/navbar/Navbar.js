import { Container, Wrapper } from "./navbar.styled";
import { BsMoonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { toggleState } from "../../app/themeSlice";

const Navbar = () => {
  const dispach = useDispatch();

  console.log();
  return (
    <Container>
      <Wrapper>
        <h3 className="nav-title">Where in the world?</h3>
        <button className="btn" onClick={() => dispach(toggleState())}>
          <BsMoonFill className="icon" />
          Dark Mode
        </button>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
