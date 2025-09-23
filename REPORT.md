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
📌 **Motivering:** Uppgiften uppfyller G-kraven: data hämtas strukturerat via fetch i en separat tjänstelager (fetchData/jobService), /search används för listning, /ad/:id för detaljer och /complete för autocomplete. React-koncept används korrekt (routing med RouterProvider, loader-funktioner, state/useReducer, context via JobContext). Ett designsystem (Digi) används konsekvent och Styled Components används för presentation och tematisering utan AF-logotyp/färger.

💡 **Förbättringsförslag:**  
- Korrigera importerna från react-router-dom istället för react-router (createBrowserRouter, RouterProvider, Link, NavLink, useNavigate, useLoaderData, useRouteLoaderData). Fel paket ger annars körfel i webben.
- Säkerställ att filnamn och importvägar stämmer: jobService importerar './serviceBase' men filen heter 'baseService.ts', och flera ställen importerar '../models/ApiResponse' medan filen i exemplet heter 'jobApiResponse.ts'.
- Om ni vill använda useRouteLoaderData("jobs") i PageLayout, ge '/jobs'-routen ett id: 'jobs' eller hämta loader-data via context på barnsidan i stället.
- Autocomplete: lägg till debounce (t.ex. 250–400 ms), avbryt pågående requests med AbortController och stöd för tangentbordsnavigering/ARIA (role=listbox/option, aria-activedescendant, aria-expanded, aria-controls).
- Tillgänglighet: harmonisera språk (svenska överallt – menyn visar “Home/Jobs”), förbättra aria-labels i mobila menyn och lägg till aria-live/ledtexter vid förslagslistan.
- Säkerhet: vid användning av dangerouslySetInnerHTML för annonsbeskrivning – överväg att sanera HTML med t.ex. DOMPurify även om källan är betrodd.
- Grafisk presentation: för bonuskriteriet, visualisera TopOccupationsBar som ett faktiskt diagram (staplar/linje) med t.ex. Recharts/Chart.js och visa antal (count) igen.
- UX: lägg till tomt-tillstånd/feedback när inga träffar hittas i jobb-listan och visa laddningsindikatorer där det behövs.
- Kodstädning: ta bort kvarlämnade debug-stilar (t.ex. röd border på länkar i mobilsidomenyn) och console.log i produktion.
- Mindre: uppdatera <title> från “Vite + React + TS” till projektets namn, och överväg en custom hook (t.ex. useJobSearch/useTypeahead) för att ytterligare strukturera logik.

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
