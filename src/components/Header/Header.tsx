import React, { FC } from "react";
import "./Header.scss";
import HuddleLogo from "../../images/logo.svg";
import IllustrationMockup from "../../images/illustration-mockups.svg";

const Header: FC = (): JSX.Element => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <img aria-label="huddle logo" src={HuddleLogo} alt="Huddle Logo" />
      </div>

      <img
        aria-label="illustration mockup"
        className="Header__illustration"
        src={IllustrationMockup}
        alt="Illustration mockup"
      />
    </header>
  );
};

export default Header;
