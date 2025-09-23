# 📌 Rättningsrapport – fed24d-case-af-jobtech-te

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-te\src\services\jobService.ts - no-console - Unexpected console statement.,no-console - Unexpected console statement.,no-console - Unexpected console statement.
- C:\Work\AssignmentCorrector\backend\repos\fed24d-case-af-jobtech-te\src\services\serviceBase.ts - no-console - Unexpected console statement.

## 🏆 **Betyg: G**
📌 **Motivering:** G-kraven uppfylls: data hämtas strukturerat via fetch genom ett tjänstelager (services), React-koncept används på ett bra sätt (routing med loaders, context + reducer, state), och designsystemet (Digi) används i UI:t. Ni har dessutom bockat av bonuspunkter som styled-components och autocomplete via /complete. Helheten är välstrukturerad och läsbar. Dock finns några tekniska brister som behöver åtgärdas för att koden ska vara körbar och mer robust.

💡 **Förbättringsförslag:**  
- React Router-importer: Byt alla importer till react-router-dom för webben (RouterProvider, createBrowserRouter, Link, NavLink, useNavigate, useLocation, useLoaderData, useRouteLoaderData). Idag importerar ni från 'react-router', vilket sannolikt bryter appen i en webbläsare.
- Filnamn/paths: Säkerställ att importer matchar filnamn. Exempel: jobService importerar './serviceBase' men filen heter 'baseService.ts'. Ni importerar dessutom typer från '../models/ApiResponse' medan filen som visas heter 'jobApiResponse.ts'. Dessa mismatch kommer att ge build/runtime-fel.
- Pagination-komponenten: Ni sätter afInitActivePage men inte en kontrollerad prop. Om Digi-komponenten stödjer en kontrollerad egenskap (t.ex. afActivePage) bör ni använda den, annars kan komponenten låsa sig på initial sida. Alternativ: forca remount med en key baserad på currentPage.
- SearchBar UX/a11y: Lägg till debounce vid fetchJobSuggestions, hantera piltangenter, aria-roller (combobox, listbox, option), aria-expanded/aria-controls samt markering av valt förslag (aria-activedescendant). Stäng listan på blur och när man gör en sökning.
- CSS-variabler: JobItem använder var(--clr-secondary-lighter) som inte verkar definierad. Lägg till variabeln eller använd befintliga design tokens.
- Rensa debug-stilar: Ta bort border: 2px solid red på länkar i MobileNavSidebarWrap.
- Konsekvent felhantering: Ni har bra felmeddelanden i services. Komplettera UI:t med tydligare error- och tomt-tillstånd på fler ställen (t.ex. JobsPage överst), samt skeleton/loading states för bättre användarupplevelse.
- Konsol-loggar: Ta bort console.log i produktionsbuild eller skydda dem bakom NODE_ENV-koll.
- DangerouslySetInnerHTML: Även om text_formatted kommer från API, överväg sanering eller whitelisting ifall källor kan variera. Alternativt rendera säkra subset av HTML.
- Navigering: Footer-länkar (/about, /contact, /privacy) saknar routes och leder till fel. Lägg till routes eller ta bort länkarna.
- Grafisk presentation (bonus): Visualisera TopOccupations som stapeldiagram/linjediagram (t.ex. Recharts/Chart.js) och visa counts – det stärker "grafisk presentation av data"-delen.
- Custom hooks (bonus): Extrahera upprepade mönster till hooks, t.ex. useJobSearch (query/offset/limit + fetch + synk med URL) och useSuggestions (debounce + fetch + list-hantering).

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| thnielseen | 62 | 63.9% | 0.25 | 0.41 |
| PotoVic | 31 | 32% | 0.25 | 0.28 |
| erm0es | 3 | 3.1% | 0.25 | 0.16 |
| PotoVic | 1 | 1% | 0.25 | 0.15 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
