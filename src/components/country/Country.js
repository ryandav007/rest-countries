import styled from "styled-components/macro";
import { motion } from "framer-motion";
import { useSearchCountryByNameQuery } from "../../app/api";
import { Link } from "react-router-dom";

const Wrapper = styled(motion.div)`
  color: ${(props) => props.theme.text.primary};
  background-color: ${(props) => props.theme.color.primary};
  max-width: 250px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const Card = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text.primary};
  box-sizing: border-box;
  width: 100%;

  .logo {
    /* height: 200px; */

    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
  }

  .content {
    padding: 20px 20px 30px;
  }
`;

const Country = ({ item: { capital, name, flags, population, region } }) => {
  return (
    <Wrapper>
      <Card to="/">
        <div className="logo">
          <img src={flags.svg} alt="/" />
        </div>
        <div className="content">
          <h3>{name.common}</h3>
          <p>
            Population: <span>{population}</span>
          </p>
          <p>
            Region: <span>{region}</span>
          </p>
          <p>
            Capital: <span>{capital}</span>
          </p>
        </div>
      </Card>
    </Wrapper>
  );
};
export default Country;
