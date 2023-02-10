import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const param = useParams();

  return <div>{param.name}</div>;
};
export default CountryDetails;
