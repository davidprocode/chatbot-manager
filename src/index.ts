import { Chatbot } from "./lib/Chatbot";

const chatbot = new Chatbot();

chatbot.reiciveMessageHandler({
  from: "75991458752",
  body: "Hello World!",
  timestamp: Date.now(),
});

chatbot.reiciveMessageHandler({
  from: "75991458752",
  body: "Tudo bom?",
  timestamp: Date.now(),
});

chatbot.reiciveMessageHandler({
  from: "75991458753",
  body: "Oi",
  timestamp: Date.now(),
});

chatbot.reiciveMessageHandler({
  from: "75991458752",
  body: "Tudo?",
  timestamp: Date.now(),
});
