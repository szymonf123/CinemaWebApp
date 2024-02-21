-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Lut 2024, 13:51
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `cinema`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `movies`
--

CREATE TABLE `movies` (
  `MovieID` int(15) NOT NULL,
  `Title` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Studio` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Director` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Cast` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `Description` varchar(1000) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Year` year(4) NOT NULL,
  `Age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `movies`
--

INSERT INTO `movies` (`MovieID`, `Title`, `Type`, `Studio`, `Director`, `Cast`, `Description`, `Year`, `Age`) VALUES
(1, 'Chłopi', 'Dramat', 'Polsat', 'Dorota Kobiela & Hugh Welchman', 'Kamila Urzędowska, Robert Gulaczyk, Mirosław Baka, Ewa Kasprzyk, Dorota Stalińska, Małgorzata Kożuchowska, Maciej Musiał, Sonia Bohosiewicz', 'Film jest trzecią (po wersjach z 1922 i 1973 roku) pełnometrażową adaptacją powieści Władysława Reymonta pod tym samym tytułem, ukazującej cykl życia wiejskiego pod koniec XIX wieku. Chłopi są filmem wykonanym tą samą metodą animacji, co Twój Vincent w reżyserii tego samego duetu – nagrane wcześniej przed kamerą kadry zostały powtórnie namalowane farbą olejną na płótnie.\r\n\r\nFilm Chłopi został uhonorowany czterema nagrodami na Festiwalu Polskich Filmów Fabularnych, w tym Nagrodą Specjalną Jury oraz Nagrodą Publiczności. Przeważały pozytywne recenzje, choć kontrowersje budziły kwestie zastosowanej metody animacji malarskiej oraz feministycznego przesłania filmu. Chłopi zostali zgłoszeni jako polski kandydat do rywalizacji o Oscara dla najlepszego pełnometrażowego filmu międzynarodowego. (źródło: Wikipedia)', 2023, 16),
(12, 'Wspaniała przygoda', 'Przygodowy', 'Polsat', 'Jan Kowalski', 'Anna Nowak, Piotr Kowalczyk', 'Niesamowita podróż trójki przyjaciół przez góry, lasy i tajemnicze jaskinie, odkrywając przy tym \r\n    nieznane krainy i stawiając czoła wielkim wyzwaniom. Czy zdołają pokonać wszelkie przeciwności i \r\n    odnaleźć magiczny skarb ukryty w sercu zapomnianego świata?', 2023, 12),
(13, 'Tajemniczy morderca', 'Kryminał', 'Polsat', 'Alicja Zając', 'Marcin Wiśniewski, Katarzyna Nowak', 'Trzymający w napięciu thriller kryminalny, w którym doświadczony detektyw i zdolna detektyw rozwiązują \r\n    serie tajemniczych morderstw, odkrywając przy tym mroczne sekrety miasta. Czy uda im się uchwycić \r\n    seryjnego zabójcę zanim będzie za późno?', 2021, 12),
(14, 'Miłość i marzenia', 'Romans', 'Polsat', 'Karolina Nowak', 'Michał Kowalczyk, Marta Nowak', 'Wzruszająca historia miłosna, która opowiada o losach dwójki zakochanych, walczących z przeciwnościami \r\n    losu i dążących do spełnienia swoich marzeń. Czy miłość zdoła przetrwać wszystkie trudności?', 2023, 12),
(15, 'Labirynt czasu', 'Science fiction', 'Polsat', 'Piotr Zając', 'Katarzyna Wiśniewska, Paweł Zając', 'Podróż przez czas w poszukiwaniu odpowiedzi na pytania dotyczące istnienia i losu. Bohaterowie odkrywają \r\n    tajemnice przeszłości i przyszłości, kształtując jednocześnie swoje własne przeznaczenie.', 2023, 12),
(16, 'Ostatni taniec', 'Dramat', 'Polsat', 'Marek Wiśniewski', 'Alicja Kowalska, Grzegorz Nowak', 'Emocjonalna opowieść o marzeniach, poświęceniach i trudnych wyborach, przedstawiająca życie grupy \r\n    utalentowanych tancerzy, którzy stają przed ostatnią szansą na osiągnięcie sukcesu. Czy uda im się \r\n    zdobyć wymarzone miejsce na światowej scenie tanecznej?', 2020, 12),
(17, 'Magiczny świat', 'Fantasy', 'Polsat', 'Ewa Zając', 'Jan Kowalski, Marta Wiśniewska', 'Fantastyczna podróż do krainy magii, gdzie bohaterowie napotykają na magiczne stworzenia, zdobywają \r\n    potężne zaklęcia i walczą ze złowrogimi siłami, aby przywrócić równowagę w magicznym świecie.', 2021, 12),
(18, 'Zagubiona dusza', 'Thriller', 'Polsat', 'Paweł Nowak', 'Katarzyna Kowalska, Tomasz Wiśniewski', 'Zaskakujący thriller psychologiczny, który opowiada historię mężczyzny, który budzi się bez pamięci \r\n    w tajemniczym miejscu. W miarę odkrywania swojej przeszłości zaczyna kwestionować rzeczywistość \r\n    i tożsamość. Czy odnajdzie prawdę zanim zostanie złapanym w pułapkę?', 2018, 12),
(19, 'Świt nadziei', 'Dramat', 'Filmy Nowe', 'Anna Wiśniewska', 'Michał Nowak, Ewa Kowalczyk', 'Historia walki o lepsze jutro, gdzie bohaterowie starają się pokonać przeciwności losu, \r\n    jednocześnie inspirowani nadzieją na lepsze życie. Czy odważą się zmierzyć z własnym losem?', 2017, 16),
(20, 'Przeznaczenie', 'Science fiction', 'Polsat', 'Krzysztof Kowalczyk', 'Alicja Nowak, Piotr Zając', 'Opowieść o losie i decyzjach, w której bohaterowie muszą podjąć trudne wybory, by skonfrontować się \r\n    z własnym przeznaczeniem. Czy zdołają pokonać przeciwności i stworzyć własną ścieżkę życia?', 2023, 16),
(21, 'Szept natury', 'Dokumentalny', 'BT Films', 'Jan Nowak', 'Grzegorz Kowalski, Karolina Wiśniewska', 'Odkrywanie piękna przyrody w najbardziej odległych zakątkach świata, gdzie kamery podążają za \r\n    badaczami przyrody, eksplorując egzotyczne krajobrazy i uchwycając niezwykłe zjawiska przyrodnicze.', 2022, 16),
(22, 'Kogel Mogel 5', 'Komedia', 'TVP', 'Jan Kowalski', 'Grażyna Błęcka-Kolska, Nikodem Rozbicki', 'To już piąta część kultowej serii', 2024, 12),
(24, 'Pokochaj mnie', 'Przygodowy', 'Filmy Nowe', 'Barbara Stróżniak', 'Aleksy Woźniak, Maria Piotrowska', 'Najnowsza komedia romantyczna opowiadająca o miłości, która nie powinna była się wydarzyć.', 2023, 12),
(26, 'Agnieszka', 'Komedia romantyczna', 'Studio F', 'Anna Karnowska', 'Maja Kot, Tomasz Pies, Hanna Żółw', 'bla bla bla', 2023, 12);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `seances`
--

CREATE TABLE `seances` (
  `SeanceID` int(11) NOT NULL,
  `MovieID` int(11) NOT NULL,
  `SeanceDate` date NOT NULL,
  `SeanceTime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `seances`
--

INSERT INTO `seances` (`SeanceID`, `MovieID`, `SeanceDate`, `SeanceTime`) VALUES
(1, 1, '2024-01-02', '15:30:00'),
(2, 12, '2024-01-03', '18:15:00'),
(3, 13, '2024-01-05', '20:00:00'),
(4, 14, '2024-01-07', '14:45:00'),
(5, 15, '2024-01-08', '17:30:00'),
(6, 16, '2024-01-09', '19:45:00'),
(7, 17, '2024-01-11', '21:00:00'),
(8, 18, '2024-01-12', '16:15:00'),
(9, 19, '2024-01-15', '14:00:00'),
(10, 20, '2024-01-18', '19:30:00'),
(11, 21, '2024-01-20', '22:00:00'),
(12, 20, '2024-01-18', '16:30:00'),
(13, 21, '2024-01-21', '22:00:00'),
(14, 1, '2024-01-21', '20:00:00'),
(22, 21, '2024-02-01', '20:00:00'),
(23, 21, '2024-02-02', '20:00:00'),
(24, 21, '2024-02-03', '20:00:00'),
(25, 21, '2024-02-04', '20:00:00');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`MovieID`);

--
-- Indeksy dla tabeli `seances`
--
ALTER TABLE `seances`
  ADD PRIMARY KEY (`SeanceID`),
  ADD KEY `MovieID` (`MovieID`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `movies`
--
ALTER TABLE `movies`
  MODIFY `MovieID` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT dla tabeli `seances`
--
ALTER TABLE `seances`
  MODIFY `SeanceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `seances`
--
ALTER TABLE `seances`
  ADD CONSTRAINT `seances_ibfk_1` FOREIGN KEY (`MovieID`) REFERENCES `movies` (`MovieID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
