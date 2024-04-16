var express = require("express"),
  handlebars = require("express-handlebars").create({ defaultLayout: "main" }),
  cookieParser = require("cookie-parser"),
  credentials = require("./credentials");

  var app = express();
app.use(cookieParser(credentials.cookieSecret));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

app.get("/", function (req, res) {
  res.cookie("MySignedCookie", "3147996SignedCookie", {
    signed: true,
    maxAge: 1204800500,
  });
  res.render("home");
});

app.get("/cookieShow", function (req, res) {
    var contextObj = { fcookie: req.signedCookies.MySignedCookie };
    res.render("cookieShow", contextObj);
  });

  app.listen(app.get("port"), function () {
    console.log(
      "Express started on http://localhost:" +
        app.get("port") +
        "; press Ctrl-C to terminate"
    );
  });