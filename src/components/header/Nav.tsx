import React from "react";
import HeaderButton from "./HeaderButton";
//import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { useState } from "react";
import LangSelect from "./LangSelect";
import { useTranslation } from "react-i18next";

function Nav() {
  // const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background shadow-sm transition-all duration-300 dark:bg-background-dark">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <NavLink to="" className="flex items-center gap-2">
            <span className="text-lg font-bold">Acme Inc</span>
          </NavLink>
          <nav className="hidden items-center gap-6 lg:flex">
            <HeaderButton to="/" text={t("calendar")} />
            <HeaderButton to="/add" text={t("addEvent")} />
            <HeaderButton to="/find" text={t("findEvent")} />
            <LangSelect />
          </nav>
          <div className="flex items-center justify-center lg:hidden">
            <button
              type="button"
              className="rounded-md p-2 text-foreground transition-colors hover:bg-muted dark:text-foreground-dark dark:hover:bg-muted-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <div>scsc</div> : <div>aaaaaaaa</div>}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-background py-4 shadow-sm dark:bg-background-dark lg:hidden">
            <nav className="flex flex-col items-start gap-4 px-4 md:px-6">
              <HeaderButton to="/" text={t("calendar")} />
              <HeaderButton to="/add" text={t("addEvent")} />
              <HeaderButton to="/find" text={t("findEvent")} />
              <LangSelect />
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
