import app from "./app.js";
import { config } from "./config/config.js";
import connectToDB from "./config/db.js";

const PORT = config.PORT;

connectToDB();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
