const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({
    technology: "we are working in express for MERN",
  })
);

// Define Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`hi server port is ${PORT}`));
