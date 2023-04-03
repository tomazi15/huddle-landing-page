import React, { FC } from "react";
import "./Introduction.scss";

const Introduction: FC = (): JSX.Element => {
  return (
    <section className="Introduction">
      <article>
        <h1 className="Introduction__title">
          Build The Community Your Fans Will Love
        </h1>

        <p className="Introduction__body">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine decisions.
        </p>
      </article>
      <button className="Introduction__cta">Register</button>
    </section>
  );
};

export default Introduction;
