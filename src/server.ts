import express from "express";
import { sendMessage } from "./utils/message-sender.util";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", async (req, res) => {
  const { From } = req.body;
  console.log(req.body);

  await sendMessage("Hello from Twilio!", From);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
