# Övningar med Express

## Instruktioner

1. Skapa en fil som heter server.js och en mapp som heter public. I din public-mapp skapa två mapper css och js. Efter det skapa en HTML, CSS och JS-fil.
Tips! Använd dina filer från repetionsövningen av JS (förs lektionen på denna kurs) om du gjorde den.

2. Skapa en package.json med **npm init**.

3. Installera **express** med npm install express (--save om du vill spara i din package.json).

4. Skapa en webbserver och använd **app.use(express.static('public'));** för att skicka tillbaka statiska filer till klienten.

5. Nu ska du skapa ett API för att hämta och visa böcker som du i JavaScript på klienten kan anropa med t.ex. **fetch**. Nedan följer de url:er du ska använda dig av. I ditt API ska du sedan anropa ett annat API som du hittar [här](http://forverkliga.se/JavaScript/api/api-db.php).

### URL:er
/api/getKey - ska anropa https://www.forverkliga.se/JavaScript/api/api-db.php?requestGroup

/api/setBook - ska anropa **Set data** i det andra API:et

/api/getBook/:book - ska anropa **Get data** i det andra API:et

/api/getAllBooks - ska anropa **Get all data** i det andra API:et

/api/deleteBook/:book ska anropa **Remove data** i det andra API:et

### API - specifikation för ditt API

**/api/getKey** - ska vara en GET

**/api/setBook** - ska vara en POST där du ska skicka med ett objekt i body där key är **title** och value är **bokens namn** 

**/api/getBook/:book** - ska vara en GET och använda dig av request.query.

**/api/getAllBooks** - ska vara en GET

**/api/deleteBook/:book** - ska vara en DELETE och använd dig av request.query.
