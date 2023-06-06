import twilio from "twilio";
import "dotenv/config";

const ACCOUNT_SID = process.env.ACCOUNT_SID;
const ACCOUNT_TOKEN = process.env.ACCOUNT_TOKEN;

console.log(ACCOUNT_SID);
console.log(ACCOUNT_TOKEN);

const client = twilio(ACCOUNT_SID, ACCOUNT_TOKEN);

export const sendMessage = async (message: string, senderId: string) => {
  try {
    await client.messages.create({
      body: message,
      from: "whatsapp:+14155238886",
      to: senderId,
    });
  } catch (error) {
    console.log(error);
  }
};
