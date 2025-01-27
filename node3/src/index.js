import colors from "colors";
import path from "path";
import { fileURLToPath } from "url";
import { tryConnection } from "./connectDataBase.js";

tryConnectionDb();

async function tryConnectionDb() {
  const ping = await tryConnection();

  if (ping.ok) {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
        .brightGreen
    );
    console.dir(ping, { colors: true, depth: null });
  } else {
    console.log("Something went wrong. Check your connection string.".red);
    console.dir(ping, { colors: true, depth: null });
  }
}
