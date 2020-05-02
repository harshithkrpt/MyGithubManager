import "dotenv/config";
import express from "express";
import getQuery from "./routes/getQuery";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// Adding Cors
app.use(cors({ origin: true }));

app.use(bodyParser.json());
// ROUTE
app.use("/", getQuery);

app.listen(4000, () => {
  console.log(`Server Running at Port 4000`);
});
