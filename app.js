const express = require ('express');
const db = require ('./pkg/db/index.js');
const akademijaHandler = require ('./handlers/akademijaHandler');
const kursHandler = require ('./handlers/kursHandler.js')
const viewHandler = require ('./handlers/viewHandler.js');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

db.init();

app.route("/kurs")
.get(kursHandler.getAll)
.post(kursHandler.create);

app.route("/kurs/:id")
.get(kursHandler.getOne)
.patch(kursHandler.update)
.delete(kursHandler.delete);

app.route("/akademija")
.get(akademijaHandler.getAll)
.post(akademijaHandler.create);

app.route("/akademija/:id")
.get(akademijaHandler.getOne)
.patch(akademijaHandler.update)
.delete(akademijaHandler.delete);

app.get("/test", viewHandler.getTest);

app.listen (process.env.PORT, (err) => {
  if (err) {
      return console.log("Coldnt start the service");
  }
  console.log("Service succesfully started on port 10000");
});
