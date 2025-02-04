import { Message, MessageHandler } from "../lib/Message";

export class Chatbot {
  reiciveMessageHandler(_message: Message) {
    const message = _message.body.trim().toLowerCase();
    const from = _message.from;

    MessageHandler.save({
      from: _message.from,
      body: _message.body,
      timestamp: _message.timestamp,
    });
    MessageHandler.isNewFrom(from);
  }
}
