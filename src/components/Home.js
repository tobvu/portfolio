import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return (
         <section className="powitanie">
      <div className="powitanie__content">
        <h1 className="powitanie__tytul">
          Cześć, jestem <span className="imie">Tomasz</span> 👋
        </h1>
        <h2 className="powitanie__podtytul">
          Młody programista front-endu z Warszawy
        </h2>
        <p className="powitanie__opis">
          Tworzę nowoczesne strony internetowe i aplikacje w React, dbając o
          estetykę, wydajność i doświadczenie użytkownika. Uczę się każdego dnia
          nowych technologii, żeby stawać się coraz lepszym w tym, co robię.
        </p>
        <div className="powitanie__przyciski">
          <Link to="/projekty" className='btn btn--primary'>Zobacz moje projekty</Link>
          <Link to="/kontakt" className='btn btn--primary'>Kontakt</Link>
        </div>
      </div>
    </section>
    );
}

export default Home;
