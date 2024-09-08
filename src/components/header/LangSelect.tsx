import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

function LangSelect() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["lang"]);
  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    setCookie("lang", event.target.value);
  };
  i18n.language;
  return (
    <div className="relative">
      <Select
        onChange={handleChange}
        className="w-40 text-sm"
        value={i18n.language}
      >
        <MenuItem value="en">
          <ReactCountryFlag countryCode="US" svg aria-selected /> {t("english")}
        </MenuItem>
        <MenuItem value="pl">
          <ReactCountryFlag countryCode="PL" svg /> {t("polish")}
        </MenuItem>
      </Select>
    </div>
  );
}

export default LangSelect;
