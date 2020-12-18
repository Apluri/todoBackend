const express = require("express");
const app = express();
const cors = require("cors");
const api = require("./routes/api.js");
const database = require("./database/crud.js");

app.use(cors());

app.use(express.static("public"));

app.use("/api", api);

// prevents software from crashing when refreshing page somewhere else than /
app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/index.html", function (err) {
    if (err) {
      console.log(err);
    }
  });
});
function main() {
  const port = process.env.PORT || 8080;
  const server = app.listen(port, async () => {
    try {
      await database.connect();
      console.log("Database connection successful");
      console.log(`Listening on port ${server.address().port}`);
    } catch (err) {
      console.log(err);
      server.close();
    }
  });
}

main();
