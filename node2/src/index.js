import express from "express";
import colors from "colors";
import { Router } from "express";
import * as Contacts from "./contacts.js";

const app = express();
const apiRouter = Router();
app.use((req, res, next) => {
  console.log("Nasze oprogramowanie pośredniczące");
  next();
});

app.use("/api/v1", apiRouter);
apiRouter.get("/users", async (req, res) => {
  // res.json(contacts); // Zwracamy dane z pliku JSON
  const list = await Contacts.listContacts();
  const directory = Contacts.temp();
  res.send(`
    <h1> Contact page</h1>
    <p>Directory: </p>
    <pre>Wynik: ${JSON.stringify(list, null, 2)}</pre>
    `);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/api/contact/:id", (req, res) => {
  const { id } = req.params;
  const name = JSON.stringify(req.query.name);

  const name1 = JSON.stringify(req.query.name, null, 2);

  res.send(`<h1>Contact</h1> Prametr: ${id} ${name} ${name1}`);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(colors.cyan(`[server] Server running on port ${PORT}`));
});
