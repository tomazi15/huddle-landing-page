import React, { FC } from "react";
import "./App.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Introduction from "./Introduction/Introduction";

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <section className="App__container">
        <main className="App__introduction">
          <Introduction />
        </main>
        <section className="App__footer">
          <Footer />
        </section>
      </section>
    </div>
  );
};

export default App;
