import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  max-width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) => props.theme.color.primary};

  .icon {
    font-size: 20px;
  }
`;

const InputFrame = styled(motion.input)`
  padding: 10px 20px;
  border: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  color: ${(props) => props.theme.text.primary};
`;

const Input = () => {
  const [country, setCountry] = useState("");
  return (
    <Wrapper>
      <BiSearchAlt2 className="icon" />
      <InputFrame
        onChange={(e) => setCountry(e.target.value)}
        value={country}
        placeholder="Search for a country..."
      />
    </Wrapper>
  );
};
export default Input;
