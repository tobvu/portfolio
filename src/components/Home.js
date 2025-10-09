import React from 'react';

function Home() {
    return (
        <div className="strona">
            <header className="naglowek">
                <h1 className="tytul">Tomasz — Portfolio</h1>
                <nav className="nawigacja">
                    <a href="#o-mnie">O mnie</a>
                    <a href="#umiejetnosci-techniczne">Umiejętności</a>
                    <a href="#projekty">Projekty</a>
                    <a href="#umiejetnosci-miekkie">Umiejętności miękkie</a>
                    <a href="#hobby">Hobby</a>
                    <a href="#kontakt">Kontakt</a>
                </nav>
            </header>

            <main className="glowna-sekcja">
                <section id="o-mnie" className="sekcja">
                    <h2>O mnie</h2>
                    <p>
                        Nazywam się Tomasz, mam 17 lat i jestem uczniem XLVII Liceum Ogólnokształcącego im. Stanisława Wyspiańskiego w Warszawie,
                        w klasie o profilu matematyczno-fizyczno-informatycznym. Interesuję się programowaniem i planuję w przyszłości studiować
                        kierunek programistyczny na Politechnice. Uczę się HTML, CSS (SCSS), JavaScriptu i Pythona. Lubię rozwijać swoje
                        umiejętności, tworząc małe projekty webowe.
                    </p>
                </section>

                <section id="umiejetnosci-techniczne" className="sekcja">
                    <h2>Umiejętności techniczne</h2>
                    <ul>
                        <li>HTML — bardzo dobra znajomość</li>
                        <li>SCSS / CSS — dobra znajomość</li>
                        <li>JavaScript — poziom średnio-zaawansowany</li>
                        <li>Python — poziom podstawowy</li>
                        <li>Git / GitHub — podstawy kontroli wersji</li>
                    </ul>
                </section>

                <section id="projekty" className="sekcja">
                    <h2>Projekty</h2>
                    <article className="projekt">
                        <h3>Portfolio</h3>
                        <p>
                            Proste portfolio w React, prezentujące moje umiejętności i plany zawodowe. Stworzone samodzielnie jako ćwiczenie.
                        </p>
                    </article>
                    <article className="projekt">
                        <h3>Gra zgadywanie flag</h3>
                        <p>
                            Interaktywna gra stworzona w JavaScript, w której użytkownik ma za zadanie odgadnąć kraj na podstawie wyświetlonej
                            flagi.
                        </p>
                    </article>
                    <article className="projekt">
                        <h3>Aplikacja okienkowa w Pythonie</h3>
                        <p>
                            Aplikacja desktopowa napisana w Pythonie z użyciem biblioteki Tkinter. Umożliwia wykonywanie prostych operacji,
                            prezentuje interfejs graficzny oraz pokazuje, jak łączyć logikę programu z elementami GUI.
                        </p>
                    </article>
                </section>

                <section id="umiejetnosci-miekkie" className="sekcja">
                    <h2>Umiejętności miękkie</h2>
                    <ul>
                        <li>Praca w zespole i komunikacja</li>
                        <li>Chęć nauki i samorozwoju</li>
                        <li>Systematyczność i odpowiedzialność</li>
                        <li>Kreatywność w rozwiązywaniu problemów</li>
                    </ul>
                </section>

                <section id="hobby" className="sekcja">
                    <h2>Hobby</h2>
                    <p>
                        Poza programowaniem interesuję się technologią, grami komputerowymi, muzyką elektroniczną i sportem. Lubię poznawać nowe
                        języki programowania oraz uczestniczyć w wydarzeniach IT i hackathonach.
                    </p>
                </section>

                <section id="kontakt" className="sekcja kontakt">
                    <h2>Kontakt</h2>
                    <p>
                        Jeśli chcesz się ze mną skontaktować, napisz na g-mail:
                        <strong> tomaszbujanowicz@gmail.com</strong>
                    </p>
                    <p>
                        GitHub: <a href="https://github.com/tobvu">github.com/tobvu</a><br />
                        LinkedIn:{' '}
                        <a href="https://www.linkedin.com/in/tomek-bujanowicz-aba80b389/">linkedin.com</a>
                    </p>
                </section>
            </main>

            <footer className="stopka">
                <p>© {new Date().getFullYear()} Tomasz — XLVII LO Warszawa</p>
            </footer>
        </div>
    );
}

export default Home;
