import express from "express";
import { sendMessage } from "./utils/message-sender.util";
import { gptMessage } from "./utils/chat.utils";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/webhook", async (req, res) => {
  const { From, Body } = req.body;
  const response = await gptMessage(Body);
  await sendMessage(response.text, From);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
