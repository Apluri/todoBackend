const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors);
const db = [{ name: "duumi" }, { name: "pappa" }];
app.get("/names", (req, res) => {
  res.send(db);
});
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
