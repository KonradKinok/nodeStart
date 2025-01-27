import { MongoClient, ServerApiVersion } from "mongodb";
import { db_password, db_user, db_cluster } from "../env/env.js";
const username = encodeURIComponent(db_user);
const password = encodeURIComponent(db_password);
const cluster = encodeURIComponent(db_cluster);
// Connection URI for the Atlas cluster
const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=MongoDbKonrad`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function tryConnection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const ping = await client.db("admin").command({ ping: 1 });

    return ping;
  } catch (e) {
    // if (e.message.includes("ENOTFOUND")) {
    if (e.code) {
      return { ok: 0, message: e.message };
    } else {
      const errorResponse = e.errorResponse;
      return errorResponse;
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// const connectionStatus = await client
//   .db("admin")
//   .command({ connectionStatus: 1, showPrivileges: false });
// const whatsmyuri = await client.db("admin").command({ whatsmyuri: 1 });
// console.dir(connectionStatus, { colors: true, depth: null });
