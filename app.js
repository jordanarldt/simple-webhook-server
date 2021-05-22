const express = require("express");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post("/webhooks", (req, res) => {
  console.log(`RECEIVED HOOK FROM ${req.body.scope}`);
  console.log(req.body);
  res.status(200).send("Webhook received");
});

app.get("/", (req, res) => {
  res.send("Webhooks testing app. Set webhook destination URLs to the /webhook path");
});

var listener = app.listen(process.env.PORT || 8080, function() {
  console.log(`Listening on port ${listener.address().port}`);
});