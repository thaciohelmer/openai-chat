import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";

import { UnstructuredLoader } from "langchain/document_loaders";
import { CharacterTextSplitter } from "langchain/text_splitter";

import "dotenv/config";

const model = new ChatOpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.OPEN_API_KEY,
});

export const gptMessage = async (message: string) => {
  return await model.call([new HumanChatMessage(message)]);
};
