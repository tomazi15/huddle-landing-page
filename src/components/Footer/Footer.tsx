import React, { FC } from "react";
import "./Footer.scss";
import { SiInstagram } from "react-icons/si";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="Footer">
      <TiSocialFacebook
        aria-label="facebook icon"
        className="Footer__facebook"
      />
      <TiSocialTwitter aria-label="twitter icon" className="Footer__twitter" />
      <SiInstagram aria-label="instagram icon" className="Footer__instagram" />
    </footer>
  );
};

export default Footer;
