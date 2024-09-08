import Calendar from "./pages/Calendar";
import Event from "./pages/Event";
import AddEvent from "./pages/AddEvent";
import { useTranslation } from "react-i18next";
import "./i18n";
import { useEffect } from "react";
import Nav from "./components/header/Nav";
import { Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./App.css";

//import ListComponents from './components/ListComponents'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [cookies] = useCookies(["lang"]);
  const lng = cookies.lang || navigator.language.split("-")[0];

  useEffect(() => {
    i18n.changeLanguage(lng);
  });

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/add" element={<AddEvent />} />
      </Routes>
    </>
  );
}

export default App;
