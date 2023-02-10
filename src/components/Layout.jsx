import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import styled from "styled-components/macro";
import { useState } from "react";

import Input from "./input/Input";
import Dropdown from "./dropdown/Dropdown";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .search_filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }
  }
`;

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div className="search_filter">
          <Input />
          <Dropdown />
        </div>

        <Outlet />
      </Container>
    </>
  );
};
