const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/routes");
const bodyParser = require("body-parser");

dotenv.config();
app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`server is listening at port ${port}`);
});
