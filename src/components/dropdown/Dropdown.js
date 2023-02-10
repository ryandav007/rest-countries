import { motion } from "framer-motion";
import styled from "styled-components/macro";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import useOutsideClick from "../../hooks/useOutsideClick";

const Container = styled(motion.div)`
  max-width: 250px;
  position: relative;
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) => props.theme.color.primary};
`;

const Content = styled(motion.div)`
  position: absolute;
  top: 80px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.primary};

  ul {
  }

  li {
    list-style: none;
    padding: 10px 20px;

    &:hover {
      background-color: ${(props) => props.theme.color.background};
    }
  }
`;

const Wrapper = styled(motion.div)`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  padding: 8px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .filter {
    padding: 10px 10px;
    font-weight: 400;
  }
`;

const Dropdown = () => {
  const { Openref, isOpen, setIsOpen } = useOutsideClick(false);
  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Wrapper>
        <p className="filter">Filter by Region</p>
        {isOpen ? <BsChevronDown /> : <BsChevronUp />}
      </Wrapper>
      {isOpen && (
        <Content ref={Openref}>
          <ul>
            <li>All</li>
            <li>Africa</li>
            <li>America</li>
            <li>Asia</li>
            <li>Europe</li>
            <li>Oceania</li>
          </ul>
        </Content>
      )}
    </Container>
  );
};
export default Dropdown;
