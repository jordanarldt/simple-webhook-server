const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/webhooks", (req, res) => {
  res.status(200).send("Webhook received");
  console.log(`RECEIVED HOOK FROM ${req.body.scope}`);
  console.log(req.body);
  console.log(req.headers);
});

app.get("/", (req, res) => {
  res.send("Webhooks testing app. Set webhook destination URLs to the /webhooks path");
});

var listener = app.listen(process.env.PORT || 8080, function() {
  console.log(`Listening on port ${listener.address().port}`);
});
