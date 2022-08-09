Forma

Zadání je spíše volné, dáváme volnost tvé kreativitě a znalostem. Můžeš si tak vše udělat podle sebe, máme jen pár požadavků:

- Dodržet zadání jednotlivých úkolů
- Použít nějaký framework na frontendu (ideálně React)
- Backend napsat v NodeJs (klidně Express nebo jiný framework, u nás používáme Koa)
- Jako databázi použít MongoDB

Z úkolů stačí udělat to, co zvládneš. Pokud by ses na něčem zasekl, nevadí, pošli nám co vyrobíš a klidně k tomu napiš, co si nezvládl nebo co tomu chybí, aby se to mohlo spustit produkčně.

Úkoly

API

*Z formuláře na frontendu potřebujeme uložit data do databáze (Mongo DB), abychom s nimi mohli dále pracovat. Sbíráme tam totiž informace o nemovitosti a kontakt na prodávajícího, abychom se s ním mohli spojit.*

Tvým úkolem je tedy připravit API endpoint, který přijme data v podobě JSONu podle následující **specifikace**:

**Metoda**: PUT či POST

**Url**: /lead

**Parametry:**

- Estate type - string, required - jedná se o typ nemovitosti
- Fullname - string, required
- Phone - string, required
- Email - string, required
- Region - string, required - jedná se o kraj
- District - string, required - jedná se o okres

**Bonus:** validace parametrů - stačí jen základní (české telefonní číslo, email v podobě někdo@něco.tam - není potřeba používat šílený regex na planý email)

Formulář

*Je potřeba připravit frontendový formulář, do kterého uživatel zadá údaje. Forma formuláře je volná, v ideálním případě by se mělo jednat o dvoukrokový formulář, kde v prvním kroku uživatel zadá typ nemovitosti (byt, dům, pozemek), kraj a následně okres. V druhém kroku pak zadá kontaktní informace a formulář odešle na API.*

Na tobě je tedy vytvořit jednoduchou stránku, kde bude jen samotný formulář, ve kterém by uživatel údaje vyplňoval.

**Specifikace**:

**Url**: /chci-nabidku

**Zadávané informace**:

- Typ nemovitosti (byt, dům nebo pozemek)
- Kraj ve kterém se nemovitost nachází
- Okres ve kterém se nemovitost nachází
- Celé jméno klienta
- Telefoní číslo klienta
- Email klienta

**Bonus:** validace kontaktních informací (telefon, email) - stačí jen základní (české telefonní číslo, email v podobě někdo@něco.tam - není potřeba používat šílený regex na planý email)

Je důležité myslet na to, aby pro uživatele byl formulář dobře použitelný, proto se musí výběr kraje a okresu navrhnout tak, aby byl snadno použitelný. Jedním příkladem může být našeptávač nebo select s vyhledáváním.

Na našem webu dříve fungovala tato mapka:

Pokud si na to nevěříš, klidně to udělej po svém, podle chuti.![](Aspose.Words.14b0f65e-d67b-48b7-88c0-ebc8ef78827b.001.jpeg)

