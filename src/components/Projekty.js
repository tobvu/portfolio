import React from 'react'

function Projekty() {
  return (
    <section id="projekty" className="sekcja">
                    <h2>Projekty</h2>
                    <article className="projekt">
    <h3>Portfolio</h3>
    <p>
      Moje aktualne portfolio to strona zbudowana w React, w której prezentuję umiejętności, projekty i informacje o sobie.
      W projekcie zastosowałem nowoczesne techniki stylizacji z wykorzystaniem SCSS i Flexboxa. Strona została zaprojektowana z myślą o estetyce i czytelności,
      a jej kod jest modularny i łatwy do rozbudowy. Pracując nad portfolio, nauczyłem się lepiej zarządzać komponentami Reacta i
      organizować strukturę projektu.
    </p>
  </article>

  <article className="projekt">
    <h3>Gra zgadywanie flag</h3>
    <p>
      Interaktywna gra przeglądarkowa napisana w JavaScript, w której użytkownik ma za zadanie odgadnąć kraj na podstawie wyświetlonej flagi.
      Projekt zawiera licznik punktów, losowe wybieranie flag i dynamiczne komunikaty o wyniku. Dzięki niemu utrwaliłem znajomość pracy z DOM-em,
      zdarzeniami i tablicami w JS. Dodałem też proste animacje CSS i efekty dźwiękowe.
    </p>
  </article>

  <article className="projekt">
    <h3>Aplikacja okienkowa w Pythonie</h3>
    <p>
      Aplikacja desktopowa stworzona w Pythonie przy użyciu biblioteki Tkinter. Projekt prezentuje prosty interfejs graficzny,
      który umożliwia wykonywanie podstawowych operacji, np. zapisywanie danych do pliku i ich odczyt. Dzięki temu projektowi nauczyłem się
      łączyć logikę programu z interfejsem użytkownika oraz zrozumiałem, jak działa pętla główna aplikacji desktopowej.
    </p>
  </article>
                </section>
  )
}

export default Projekty