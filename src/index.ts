import { Chatbot } from "./lib/Chatbot";
import { MessageHandler } from "./lib/Message";

const chatbot = new Chatbot();

Promise.all([
  chatbot.reiciveMessageHandler({
    from: "75991458752",
    body: "Hello World!",
  }),

  chatbot.reiciveMessageHandler({
    from: "75991458752",
    body: "Tudo bom?",
  }),

  chatbot.reiciveMessageHandler({
    from: "75991458753",
    body: "Oi",
  }),
  chatbot.reiciveMessageHandler({
    from: "75991458752",
    body: "Tudo?",
  }),
]);

console.log(MessageHandler.getLastMessageFrom("75991458752"));
