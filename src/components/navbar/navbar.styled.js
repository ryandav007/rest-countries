import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  height: 70px;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.text.primary};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 20px;
  height: 100%;

  .nav-title {
    font-size: 18px;
    font-weight: 800;
  }

  .btn {
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primary};
  }
`;
