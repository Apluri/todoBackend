const express = require("express");
const app = express();
const cors = require("cors");
const api = require("./routes/api.js");

app.use(cors());
app.use("/api", api);

function main() {
  const port = process.env.PORT || 8080;
  const server = app.listen(port, async () => {
    try {
      console.log("Database connection successful");
      console.log(`Listening on port ${server.address().port}`);
    } catch (err) {
      console.log(err);
      server.close();
    }
  });
}

main();
