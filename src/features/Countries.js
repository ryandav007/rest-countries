import Country from "../components/country/Country";
import styled from "styled-components/macro";
import { useGetAllCountriesQuery } from "../app/api";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  /* place-content: center; */
`;

const CountryList = () => {
  const { data, isLoading } = useGetAllCountriesQuery();
  if (isLoading) return <div>Loading...</div>;
  return (
    <Wrapper>
      {data.map((item, index) => {
        return <Country item={item} key={index} />;
      })}
    </Wrapper>
  );
};
export default CountryList;
