import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import CountryList from "./features/Countries";
import CountryDetails from "./features/CountryDetails";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import { useSelector } from "react-redux";

function App() {
  const toggle = useSelector((state) => state.theme.toggle);
  return (
    <ThemeProvider theme={toggle ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CountryList />} />
          <Route path=":name" element={<CountryDetails />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
